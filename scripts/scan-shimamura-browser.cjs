const fs = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require("playwright");

const OUTPUT_PATH = path.resolve("data/shimamura-products.json");
const SOURCES = [
  { name: "しまむら サンリオ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=shimamura&popular_tag=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%BA" },
  { name: "しまむら キティ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=shimamura&q=%E3%82%AD%E3%83%86%E3%82%A3" },
  { name: "アベイル サンリオ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=avail&popular_tag=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%BA" },
  { name: "しまむら ちいかわ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=shimamura&q=%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F" },
];

async function readPrevious() {
  try {
    return JSON.parse(await fs.readFile(OUTPUT_PATH, "utf8"));
  } catch {
    return { schemaVersion: 1, observedAt: null, sources: [], products: [] };
  }
}

function normalizeProduct(product, source, observedAt) {
  try {
    const productUrl = new URL(product.url, source.url);
    if (productUrl.hostname !== "www.shop-shimamura.com") return null;
    const priceJpy = Number(product.priceJpy);
    const title = String(product.title || "").replace(/\s+/g, " ").trim().slice(0, 220);
    if (!title || !Number.isInteger(priceJpy) || priceJpy <= 0 || priceJpy > 1_000_000) return null;
    const imageUrls = (product.imageUrls || []).flatMap((value) => {
      try {
        const url = new URL(value, source.url);
        return url.protocol === "https:" ? [url.toString()] : [];
      } catch {
        return [];
      }
    }).filter((value, index, values) => values.indexOf(value) === index).slice(0, 8);
    return {
      url: productUrl.toString(),
      title,
      priceJpy,
      imageUrls,
      sourceName: source.name,
      sourceUrl: source.url,
      observedAt,
    };
  } catch {
    return null;
  }
}

async function scanSource(page, source) {
  const observedAt = new Date().toISOString();
  let response = null;
  try {
    response = await page.goto(source.url, { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForTimeout(5_000);
    const currentUrl = page.url();
    const bodyText = (await page.locator("body").innerText({ timeout: 5_000 })).slice(0, 20_000);
    if (/waitroom|queueittoken|queue-it/i.test(currentUrl) || /順番|待合室|アクセスが集中|queue/i.test(bodyText)) {
      return { name: source.name, url: source.url, state: "waitroom", httpStatus: response?.status() ?? null, discovered: 0, observedAt, detail: "official wait room active", products: [] };
    }
    if (!response?.ok()) {
      return { name: source.name, url: source.url, state: response?.status() === 403 || response?.status() === 429 ? "blocked" : "http_error", httpStatus: response?.status() ?? null, discovered: 0, observedAt, detail: `HTTP ${response?.status() ?? "unknown"}`, products: [] };
    }
    const extracted = await page.locator('a[href*="itemdetail"], a[href*="/item/"]').evaluateAll((anchors) => anchors.slice(0, 120).map((anchor) => {
      const text = (anchor.innerText || anchor.textContent || "").replace(/\s+/g, " ").trim();
      const priceMatch = text.match(/([0-9]{1,3}(?:,[0-9]{3})*)\s*円/);
      const images = [...anchor.querySelectorAll("img")].map((image) => image.currentSrc || image.src || image.dataset.src).filter(Boolean);
      return {
        url: anchor.href,
        title: text,
        priceJpy: priceMatch ? Number(priceMatch[1].replaceAll(",", "")) : 0,
        imageUrls: images,
      };
    }));
    const products = extracted.map((product) => normalizeProduct(product, source, observedAt)).filter(Boolean);
    const uniqueProducts = [...new Map(products.map((product) => [product.url, product])).values()].slice(0, 40);
    return {
      name: source.name,
      url: source.url,
      state: uniqueProducts.length ? "observed" : "parse_unobserved",
      httpStatus: response.status(),
      discovered: uniqueProducts.length,
      observedAt,
      detail: uniqueProducts.length ? null : "page loaded but product cards were not extractable",
      products: uniqueProducts,
    };
  } catch (error) {
    return { name: source.name, url: source.url, state: "request_error", httpStatus: response?.status() ?? null, discovered: 0, observedAt, detail: String(error?.message || error).slice(0, 240), products: [] };
  }
}

async function main() {
  const previous = await readPrevious();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    locale: "ja-JP",
    timezoneId: "Asia/Tokyo",
    viewport: { width: 1365, height: 900 },
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  const sources = [];
  for (const source of SOURCES) {
    sources.push(await scanSource(page, source));
    await page.waitForTimeout(2_000);
  }
  await browser.close();

  const previousBySource = new Map((previous.products || []).map((product) => [product.sourceUrl, []]));
  for (const product of previous.products || []) previousBySource.get(product.sourceUrl)?.push(product);
  const products = [];
  for (const source of sources) {
    if (source.state === "observed") products.push(...source.products);
    else products.push(...(previousBySource.get(source.url) || []));
  }
  const snapshot = {
    schemaVersion: 1,
    observedAt: new Date().toISOString(),
    sources: sources.map(({ products: ignored, ...source }) => source),
    products: [...new Map(products.map((product) => [product.url, product])).values()].slice(0, 160),
  };
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ observedAt: snapshot.observedAt, discovered: snapshot.products.length, states: snapshot.sources.map(({ name, state, discovered }) => ({ name, state, discovered })) }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
