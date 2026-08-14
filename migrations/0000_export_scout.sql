CREATE TABLE IF NOT EXISTS candidates (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_url TEXT NOT NULL UNIQUE,
  source_name TEXT NOT NULL,
  source_price_jpy INTEGER NOT NULL,
  source_image_urls TEXT NOT NULL DEFAULT '[]',
  source_captured_at TEXT NOT NULL,
  title_ja TEXT NOT NULL,
  category TEXT NOT NULL,
  comparable_query TEXT NOT NULL,
  sold_count INTEGER NOT NULL DEFAULT 0,
  median_sold_usd REAL NOT NULL DEFAULT 0,
  estimated_profit_jpy INTEGER NOT NULL DEFAULT 0,
  roi_percent REAL NOT NULL DEFAULT 0,
  confidence REAL NOT NULL DEFAULT 0,
  rank TEXT NOT NULL DEFAULT 'C',
  status TEXT NOT NULL DEFAULT 'discovered',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS drafts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  candidate_id INTEGER NOT NULL UNIQUE,
  title_en TEXT NOT NULL,
  description_en TEXT NOT NULL,
  listing_price_usd REAL NOT NULL,
  source_acknowledged INTEGER NOT NULL DEFAULT 0,
  approval_state TEXT NOT NULL DEFAULT 'draft',
  external_draft_id TEXT,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS appraisal_settings (
  id INTEGER PRIMARY KEY,
  fx_jpy_per_usd REAL NOT NULL DEFAULT 152,
  marketplace_fee_percent REAL NOT NULL DEFAULT 15,
  international_shipping_jpy INTEGER NOT NULL DEFAULT 2180,
  domestic_shipping_jpy INTEGER NOT NULL DEFAULT 550,
  ddp_reserve_jpy INTEGER NOT NULL DEFAULT 450,
  return_reserve_percent REAL NOT NULL DEFAULT 3,
  minimum_profit_jpy INTEGER NOT NULL DEFAULT 2000,
  minimum_roi_percent REAL NOT NULL DEFAULT 60,
  minimum_sold_count INTEGER NOT NULL DEFAULT 3,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS scan_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  source_url TEXT NOT NULL,
  observation_state TEXT NOT NULL,
  http_status INTEGER,
  discovered_count INTEGER NOT NULL DEFAULT 0,
  detail TEXT,
  observed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
INSERT INTO appraisal_settings (id) VALUES (1) ON CONFLICT(id) DO NOTHING;
