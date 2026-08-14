const candidates = [];

const data = JSON.stringify(candidates).replaceAll("<", "\\u003c");

const html = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>海外販売スカウト</title>
<meta name="description" content="しまむら商品の発見・査定・海外販売下書きをひとつに">
<meta name="robots" content="noindex,nofollow">
<style>
:root{--ink:#111714;--muted:#707b76;--line:#dfe6e2;--soft:#f5f8f6;--green:#174c3b;--green2:#24674f;--mint:#e7f3ec;--lime:#c9ee5b;--orange:#a95726;--white:#fff}*{box-sizing:border-box}body{margin:0;background:#f5f7f6;color:var(--ink);font-family:Inter,"Noto Sans JP",system-ui,sans-serif}button,input,textarea{font:inherit}button{cursor:pointer;color:inherit}.shell{min-height:100vh;display:flex}.side{position:fixed;inset:0 auto 0 0;width:214px;padding:25px 15px 17px;display:flex;flex-direction:column;background:#123e31;color:white}.logo{display:flex;align-items:center;gap:10px;padding:0 8px 29px}.logoMark{width:34px;height:34px;border-radius:9px;display:grid;place-items:center;background:var(--lime);color:var(--green);font-weight:900;font-size:19px;transform:rotate(-3deg)}.logoText{display:flex;flex-direction:column}.logoText b{font-size:17px;letter-spacing:.14em}.logoText small{color:#a9c4b9;font-size:8px;letter-spacing:.2em}.navLabel{margin:0 10px 9px;color:#89aa9d;font-size:9px;letter-spacing:.17em}.nav{flex:1}.nav button{width:100%;height:44px;padding:0 12px;border:0;border-radius:8px;background:transparent;color:#bfd4cb;display:flex;align-items:center;gap:10px;text-align:left;font-size:12px}.nav button:hover,.nav button.active{background:rgba(255,255,255,.1);color:white}.nav button.active{box-shadow:inset 3px 0 var(--lime)}.nav .icon{width:17px;color:#9fbaaf;font-size:16px}.nav b{margin-left:auto;padding:3px 6px;border-radius:20px;background:rgba(255,255,255,.11);font-size:9px}.nav button.active b{background:var(--lime);color:var(--green)}.watch{padding:13px;border:1px solid rgba(255,255,255,.12);border-radius:10px;background:rgba(0,0,0,.08)}.watch strong{display:flex;gap:7px;align-items:center;font-size:11px}.dot{width:7px;height:7px;border-radius:50%;background:var(--lime);box-shadow:0 0 0 4px rgba(201,238,91,.13)}.watch p{margin:8px 0 2px;color:#bdd1c9;font-size:10px}.watch small{color:#82a598;font-size:9px}.owner{display:flex;align-items:center;gap:9px;margin-top:14px;padding:13px 3px 0;border-top:1px solid rgba(255,255,255,.1)}.avatar{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#e8dbce;color:#563d2e;font-size:10px;font-weight:800}.owner div:last-child{display:flex;flex-direction:column}.owner b{font-size:10px}.owner small{color:#87a89b;font-size:8px}.main{min-width:0;flex:1;margin-left:214px}.top{height:86px;padding:0 26px;position:sticky;top:0;z-index:10;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);background:rgba(255,255,255,.94);backdrop-filter:blur(10px)}.eyebrow{color:var(--green2);font-size:8px;font-weight:800;letter-spacing:.17em}.top h1{margin:6px 0 0;font-size:23px;letter-spacing:-.04em}.actions{display:flex;align-items:center;gap:8px}.note{padding:7px 9px;border-radius:7px;background:var(--mint);color:var(--green);font-size:9px}.ghost,.primary,.secondary,.approve{height:36px;padding:0 13px;border-radius:8px;font-size:10px;font-weight:700}.ghost,.secondary{border:1px solid var(--line);background:white;color:#68736f}.primary,.approve{border:1px solid var(--green);background:var(--green);color:white}.primary:hover,.approve:hover{background:#1c5a46}.primary span,.approve span{color:var(--lime)}.primary:disabled{opacity:.7}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:11px;padding:18px 22px 0}.stat{min-height:104px;padding:15px;border:1px solid var(--line);border-radius:10px;background:white}.statHead{display:flex;justify-content:space-between;color:var(--muted);font-size:9px}.pill{padding:3px 6px;border-radius:20px;background:var(--mint);color:var(--green2);font-size:8px;font-weight:800}.warn{background:#fff0e5;color:var(--orange)}.stat strong{display:block;margin-top:9px;font-size:23px;letter-spacing:-.04em}.stat small{color:#929a97;font-size:8px}.grid{display:grid;grid-template-columns:minmax(570px,1.16fr) minmax(390px,.84fr);gap:13px;padding:13px 22px 22px;align-items:start}.panel{overflow:hidden;border:1px solid var(--line);border-radius:11px;background:white}.tools{padding:13px 14px;display:flex;gap:9px;align-items:center;justify-content:space-between;border-bottom:1px solid #edf1ef}.search{height:34px;min-width:230px;padding:0 10px;display:flex;align-items:center;gap:7px;border:1px solid var(--line);border-radius:7px;background:#fafbfa}.search input{width:100%;border:0;outline:0;background:transparent;font-size:9px}.filters{display:flex;gap:4px}.filters button{height:29px;padding:0 8px;border:1px solid transparent;border-radius:6px;background:transparent;color:#717c77;font-size:8px}.filters button.active{border-color:#bfd3ca;background:var(--mint);color:var(--green);font-weight:800}.listHead{height:33px;padding:0 14px 0 99px;display:grid;grid-template-columns:minmax(205px,1fr) 75px 82px 78px;gap:8px;align-items:center;border-bottom:1px solid #edf1ef;background:#f8faf9;color:#8a9490;font-size:7px}.row{width:100%;min-height:96px;padding:10px 13px;position:relative;display:grid;grid-template-columns:70px minmax(205px,1fr) 75px 82px 78px;gap:9px;align-items:center;border:0;border-bottom:1px solid #edf1ef;background:white;text-align:left}.row:hover,.row.active{background:#f2f8f4}.row.active:before{content:"";position:absolute;inset:0 auto 0 0;width:3px;background:var(--green)}.thumb,.photo{position:relative;overflow:hidden;color:rgba(25,38,32,.66)}.thumb{width:65px;height:72px;border-radius:7px;display:grid;place-items:center}.thumb:before,.photo:before,.bigThumb:before{content:"";position:absolute;width:70%;height:140%;border:1px solid rgba(255,255,255,.55);transform:rotate(31deg)}.coral{background:linear-gradient(145deg,#e6a9a2,#f2d3c0 55%,#b45a58)}.violet{background:linear-gradient(145deg,#b5a4c8,#e8d9e9 55%,#655271)}.sky{background:linear-gradient(145deg,#b4d7df,#e7f2ed 55%,#76aab6)}.sand{background:linear-gradient(145deg,#c89971,#e7c3a1 55%,#765037)}.rank{position:absolute;top:5px;left:5px;padding:2px 5px;border-radius:4px;background:rgba(255,255,255,.83);color:var(--green);font-size:7px;font-weight:900}.glyph{position:relative;font-size:24px;font-weight:900}.copy{min-width:0}.badges{display:flex;gap:4px;margin-bottom:5px}.badges span{color:#87918d;font-size:7px}.badges i{padding:2px 4px;border-radius:4px;background:#edf1ef;color:#607069;font-size:7px;font-style:normal}.badges i.good{background:#e5f2e8;color:#357147}.badges i.check{background:#fff0e6;color:#a45828}.copy b,.copy small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.copy b{font-size:10px}.copy small{margin-top:4px;color:#8d9793;font-size:7px}.money,.profit{display:flex;flex-direction:column;gap:3px}.money b,.profit b{font-size:10px}.money small,.profit small{color:#939c98;font-size:7px}.profit b{color:#18714d}.profit small{color:#4c7e6a}.listFoot{height:42px;padding:0 15px;display:flex;align-items:center;justify-content:space-between;color:#8b9591;font-size:8px}.listFoot button{border:0;background:transparent;color:var(--green);font-size:8px}.detail{position:sticky;top:99px;max-height:calc(100vh - 118px);display:flex;flex-direction:column}.detailScroll{padding:16px 17px 0;overflow:auto}.detailTop{display:flex;align-items:center;justify-content:space-between}.detailTop div{display:flex;gap:7px;align-items:center}.rankTag{padding:4px 6px;border-radius:4px;background:var(--green);color:white;font-size:7px;font-weight:900}.detailTop small{color:#72807b;font-size:7px}.detail h2{margin:11px 0 3px;font-size:15px}.sourceLink{color:var(--green2);font-size:8px;text-decoration:none}.photos{height:103px;margin-top:11px;display:grid;grid-template-columns:1.3fr repeat(3,1fr);gap:5px}.photo{min-width:0;padding:7px;border-radius:7px;display:flex;flex-direction:column;justify-content:space-between}.photo span,.photo b{position:relative}.photo span{font-size:6px;letter-spacing:.1em}.photo b{font-size:7px}.sourceMeta{margin:6px 1px 0;display:flex;justify-content:space-between;color:#7c8782;font-size:7px}.card{margin-top:11px;padding:12px;border:1px solid var(--line);border-radius:8px;background:#fcfdfd}.cardHead{display:flex;justify-content:space-between;align-items:flex-start}.cardHead div{display:flex;flex-direction:column;gap:2px}.cardHead span{font-size:9px;font-weight:800}.cardHead small{color:#8e9793;font-size:7px}.cardHead b{color:#18714d;font-size:10px}.rail{margin-top:10px;padding:8px;display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:5px;align-items:center;border-radius:7px;background:#f1f6f3}.rail div{display:flex;flex-direction:column;gap:2px}.rail span{color:#84908b;font-size:6px}.rail b{font-size:9px}.rail i{color:#a4b0ab;font-size:8px;font-style:normal}.rail .positive b{color:#18714d}.costs{display:grid;grid-template-columns:1fr 1fr;gap:3px 11px;margin-top:8px}.costs span{padding-bottom:3px;display:flex;justify-content:space-between;border-bottom:1px dashed #e1e7e4;color:#7c8682;font-size:7px}.costs b{color:#45504c}.evidence{display:flex;gap:7px;align-items:center;margin-top:8px;color:#5d6964;font-size:7px}.evidence span:first-child{color:#4e8160}.evidence a{margin-left:auto;color:var(--green);text-decoration:none}.signals{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px}.signals span{padding:4px 6px;border-radius:5px;background:#e7f2ec;color:#28694f;font-size:7px}.signals .muted{background:#fff0e6;color:#9e562a}.draft{margin-bottom:12px}.ready{padding:4px 6px;border:0;border-radius:4px;background:#e4f2e8;color:#2b7149;font-size:7px}.draft label{margin-top:9px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:4px;color:#606b67;font-size:7px}.draft input,.draft textarea{width:100%;border:1px solid var(--line);border-radius:6px;background:#fbfcfb;outline:0}.draft input{height:31px;padding:0 8px;font-size:8px}.draft textarea{padding:7px 8px;resize:vertical;font:7px/1.55 ui-monospace,monospace}.draftGrid{display:grid;grid-template-columns:1fr .42fr;gap:7px}.checkLabel{flex-wrap:nowrap!important;align-items:center;justify-content:flex-start!important;gap:6px!important;color:#3e4b46!important}.checkLabel input{width:13px;height:13px;accent-color:var(--green)}.detailActions{padding:11px 14px;display:grid;grid-template-columns:.8fr 1.2fr;gap:6px;border-top:1px solid var(--line);background:white}.approve:disabled{border-color:#d6dcda;background:#dfe3e1;color:#969f9b;cursor:not-allowed}.detailActions small{grid-column:1/-1;text-align:center;color:#98a19d;font-size:6px}.page{display:none;padding:23px}.page.active{display:block}.pageHead{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:20px}.pageHead h2{margin:6px 0 0;font-size:24px}.draftCards,.settings{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}.draftCard,.setting,.connection{overflow:hidden;border:1px solid var(--line);border-radius:11px;background:white}.bigThumb{height:180px;position:relative;display:grid;place-items:center;overflow:hidden}.bigThumb span{position:absolute;top:11px;left:11px;padding:4px 6px;border-radius:4px;background:rgba(255,255,255,.84);color:var(--green);font-size:7px;font-weight:900}.bigThumb b{position:relative;font-size:48px}.draftBody{padding:15px}.draftBody>span{color:var(--green2);font-size:7px;font-weight:800}.draftBody h3{margin:7px 0 3px;font-size:12px}.draftBody p{margin:0;color:#7e8884;font-size:8px}.draftBody div{display:flex;align-items:baseline;gap:6px;margin-top:14px}.draftBody strong{color:#18714d;font-size:16px}.draftBody small{color:#8c9692;font-size:7px}.draftBody button{width:100%;height:34px;margin-top:11px;border:1px solid var(--line);border-radius:7px;background:white;color:var(--green);font-size:8px}.setting{padding:17px}.settingIcon{width:31px;height:31px;border-radius:7px;display:grid;place-items:center;background:var(--mint);color:var(--green);font-weight:900}.setting h3{margin:11px 0 15px;font-size:12px}.setting label{display:block;margin-top:10px;color:#606b67;font-size:8px}.field{height:34px;margin-top:4px;display:flex;align-items:center;border:1px solid var(--line);border-radius:6px;background:#fbfcfb;overflow:hidden}.field input{min-width:0;flex:1;height:100%;padding:0 8px;border:0;outline:0;background:transparent}.field span{padding:0 8px;color:#86908c;font-size:7px}.connection{margin-top:13px;padding:17px}.connection h3{margin:0;font-size:12px}.connection p{margin:4px 0 13px;color:#7c8682;font-size:8px}.connections{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.connections span{padding:10px;display:grid;grid-template-columns:1fr auto;border:1px solid #edf1ef;border-radius:7px}.connections b{font-size:8px}.connections small{grid-column:1;color:#8e9793;font-size:7px}.connections i{grid-column:2;grid-row:1/3;align-self:center;padding:4px 6px;border-radius:4px;background:#f0f2f1;color:#76807b;font-size:7px;font-style:normal}.connections i.ok{background:var(--mint);color:var(--green2)}.modalBg{position:fixed;inset:0;z-index:50;display:none;place-items:center;padding:20px;background:rgba(10,25,20,.55);backdrop-filter:blur(3px)}.modalBg.open{display:grid}.modal{width:min(420px,100%);padding:25px;border-radius:13px;background:white;text-align:center;box-shadow:0 15px 45px rgba(0,0,0,.2)}.modalIcon{width:40px;height:40px;margin:0 auto 12px;border-radius:50%;display:grid;place-items:center;background:var(--green);color:var(--lime)}.modal h2{margin:7px 0;font-size:19px}.modal p{margin:0;color:#66716c;font-size:9px;line-height:1.6}.modalSummary{margin:15px 0;padding:11px;display:flex;gap:9px;justify-content:space-between;border-radius:7px;background:#f2f6f4;text-align:left;font-size:8px}.modalSummary b{white-space:nowrap;color:var(--green);font-size:12px}.modalActions{display:grid;grid-template-columns:1fr 1fr;gap:7px}.modal>small{display:block;margin-top:10px;color:#949d99;font-size:7px}@media(max-width:1120px){.grid{grid-template-columns:1fr}.detail{position:static;max-height:none}.detailScroll{overflow:visible}.draftCards,.settings{grid-template-columns:repeat(2,1fr)}}@media(max-width:790px){.side{width:62px;padding-inline:8px}.logo{padding-inline:6px}.logoText,.navLabel,.nav button span:nth-child(2),.nav button b,.watch,.owner div:last-child{display:none}.nav button{justify-content:center;padding:0}.nav .icon{width:auto}.owner{justify-content:center}.main{margin-left:62px}.top{padding-inline:14px}.ghost,.note{display:none}.stats{grid-template-columns:repeat(2,1fr);padding-inline:13px}.grid{padding-inline:13px}.listHead{display:none}.row{grid-template-columns:60px 1fr 70px}.row .money{display:none}.draftCards,.settings,.connections{grid-template-columns:1fr}}@media(max-width:540px){.top h1{font-size:18px}.stats{gap:7px}.stat{min-height:92px;padding:12px}.stat strong{font-size:19px}.tools{align-items:stretch;flex-direction:column}.filters{overflow:auto}.row{grid-template-columns:55px 1fr}.row .profit{grid-column:2}.photos{grid-template-columns:repeat(2,1fr);height:210px}.detailActions{grid-template-columns:1fr}.detailActions small{grid-column:1}}
</style>
</head>
<body>
<div class="shell">
 <aside class="side"><div class="logo"><div class="logoMark">S</div><div class="logoText"><b>SCOUT</b><small>JP → GLOBAL</small></div></div><nav class="nav"><p class="navLabel">WORKSPACE</p><button class="active" data-tab="candidates"><span class="icon">⌁</span><span>候補</span><b id="navCandidateCount">0</b></button><button data-tab="drafts"><span class="icon">▤</span><span>下書き</span><b id="navDraftCount">0</b></button><button data-tab="settings"><span class="icon">⌘</span><span>査定設定</span></button></nav><div class="watch"><strong><i class="dot"></i>試験運用</strong><p>しまむら・アベイル</p><small>結果はDBへ保存</small></div><div class="owner"><div class="avatar">自</div><div><b>Owner</b><small>承認者</small></div></div></aside>
 <main class="main">
  <header class="top"><div><div class="eyebrow" id="eyebrow">DISCOVERY QUEUE</div><h1 id="pageTitle">販売候補</h1></div><div class="actions"><span class="note" id="note" hidden></span><button class="ghost" id="lastUpdated">最終更新 未実行</button><button class="primary" id="scan"><span>✦</span> 今すぐスキャン</button></div></header>
  <section id="candidatesPage">
   <div class="stats"><article class="stat"><div class="statHead"><span>実取得候補</span><b class="pill">LIVE</b></div><strong>—</strong><small>ダミーを除外</small></article><article class="stat"><div class="statHead"><span>推定粗利 合計</span><b class="pill">査定済みのみ</b></div><strong>—</strong><small>eBay未接続</small></article><article class="stat"><div class="statHead"><span>平均ROI</span><b class="pill">査定済みのみ</b></div><strong>—</strong><small>未観測は計算しない</small></article><article class="stat"><div class="statHead"><span>未査定</span><b class="pill warn">確認</b></div><strong>—</strong><small>売却相場が未観測</small></article></div>
   <div class="grid"><section class="panel"><div class="tools"><label class="search">⌕<input id="search" placeholder="商品名・キャラクターで検索"></label><div class="filters"><button class="active" data-filter="すべて">すべて</button><button data-filter="A">Aランク</button><button data-filter="査定済み">査定済み</button><button data-filter="未査定">未査定</button></div></div><div class="listHead"><span>候補商品</span><span>国内価格</span><span>海外相場</span><span>推定利益</span></div><div id="rows"></div><div class="listFoot"><span id="count">0 / 0件を表示</span><button>すべて見る →</button></div></section><aside class="panel detail" id="detail"></aside></div>
  </section>
  <section class="page" id="draftsPage"><div class="pageHead"><div><div class="eyebrow">READY FOR REVIEW</div><h2>確認待ちの下書き</h2></div><button class="primary">＋ 手動で追加</button></div><div class="draftCards" id="draftCards"></div></section>
  <section class="page" id="settingsPage"><div class="pageHead"><div><div class="eyebrow">PROFIT MODEL</div><h2>査定条件</h2></div><button class="primary" id="saveSettings">設定を保存</button></div><div class="settings"><article class="setting"><div class="settingIcon">¥</div><h3>売上・手数料</h3><label>想定為替レート<div class="field"><input id="fx" value="152"><span>円 / USD</span></div></label><label>eBay手数料<div class="field"><input id="fee" value="15"><span>%</span></div></label><label>DDP予備費<div class="field"><input id="ddp" value="450"><span>円</span></div></label></article><article class="setting"><div class="settingIcon">↗</div><h3>配送・返品</h3><label>国際送料（500g以内）<div class="field"><input id="intlShipping" value="2180"><span>円</span></div></label><label>国内送料<div class="field"><input id="domesticShipping" value="550"><span>円</span></div></label><label>返品引当率<div class="field"><input id="returnReserve" value="3"><span>%</span></div></label></article><article class="setting"><div class="settingIcon">◎</div><h3>候補の合格条件</h3><label>最低ROI<div class="field"><input id="minRoi" value="60"><span>%</span></div></label><label>最低推定利益<div class="field"><input id="minProfit" value="2000"><span>円</span></div></label><label>最低 sold 件数<div class="field"><input id="minSold" value="3"><span>件</span></div></label></article></div><article class="connection"><h3>データ接続</h3><p>しまむらの商品取得とeBay相場・下書き接続を分けて管理します。</p><div class="connections"><span><b>しまむらパーク</b><small>監視URL 4件</small><i>試験中</i></span><span><b>eBay 相場データ</b><small>未接続・未観測</small><i>要設定</i></span><span><b>eBay 出品API</b><small>自動公開なし</small><i>未接続</i></span></div></article></section>
 </main>
</div>
<div class="modalBg" id="modal"><div class="modal"><div class="modalIcon">↗</div><div class="eyebrow">MANUAL APPROVAL</div><h2>出品前の最終確認</h2><p>この操作は自動では実行されません。eBay接続後も、公開処理は確認ボタンを押した時だけ開始します。</p><div class="modalSummary"><span id="modalTitle"></span><b id="modalPrice"></b></div><div class="modalActions"><button class="secondary" id="back">戻って編集</button><button class="primary" id="connect">接続設定を開く</button></div><small>現在はeBay未接続のため、外部送信は行われません。</small></div></div>
<script type="application/json" id="legacy-script">const items=${data};let active=1,filter="すべて";const yen=n=>new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY",maximumFractionDigits:0}).format(n);const esc=s=>String(s).replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\\\"":"&quot;","'":"&#39;"}[c]));
function renderRows(){const q=document.querySelector("#search").value.toLowerCase();const visible=items.filter(x=>(x.title+" "+x.en).toLowerCase().includes(q)&&(filter==="すべて"||filter==="A"&&x.rank==="A"||x.status===filter));document.querySelector("#rows").innerHTML=visible.map(x=>'<button class="row '+(x.id===active?'active':'')+'" data-id="'+x.id+'"><div class="thumb '+x.color+'"><span class="rank">'+x.rank+'</span><span class="glyph">'+x.glyph+'</span></div><div class="copy"><div class="badges"><span>'+x.brand+'</span><i class="'+(x.status==='下書き済み'?'good':x.status==='要確認'?'check':'')+'">'+x.status+'</i></div><b>'+x.title+'</b><small>'+x.en+'</small></div><div class="money"><b>'+yen(x.cost)+'</b><small>税込</small></div><div class="money"><b>$'+x.usd.toFixed(2)+'</b><small>'+x.sold+'件 sold</small></div><div class="profit"><b>+'+yen(x.profit)+'</b><small>ROI '+x.roi+'%</small></div></button>').join('');document.querySelector("#count").textContent=visible.length+' / 12件を表示';document.querySelectorAll('.row').forEach(el=>el.onclick=()=>{active=Number(el.dataset.id);renderRows();renderDetail()})}
function renderDetail(){const x=items.find(i=>i.id===active);document.querySelector("#detail").innerHTML='<div class="detailScroll"><div class="detailTop"><div><span class="rankTag">RANK '+x.rank+'</span><small>一致精度 '+x.confidence+'%</small></div></div><h2>'+x.title+'</h2><a class="sourceLink" href="'+x.source+'" target="_blank" rel="noreferrer">しまむら商品ページ ↗</a><div class="photos">'+['正面','背面','柄','タグ'].map((v,i)=>'<div class="photo '+x.color+'"><span>'+(i?'0'+(i+1):'SOURCE')+'</span><b>'+v+'</b></div>').join('')+'</div><div class="sourceMeta"><span>写真4枚・商品説明を取得</span><small>取得: 12分前</small></div><section class="card"><div class="cardHead"><div><span>自動査定</span><small>売却済みデータを優先</small></div><b>利益 +'+yen(x.profit)+'</b></div><div class="rail"><div><span>仕入れ</span><b>'+yen(x.cost)+'</b></div><i>→</i><div><span>販売想定</span><b>$'+x.usd.toFixed(2)+'</b></div><i>→</i><div class="positive"><span>ROI</span><b>'+x.roi+'%</b></div></div><div class="costs"><span>海外送料<b>¥2,180</b></span><span>eBay手数料<b>¥1,710</b></span><span>DDP予備費<b>¥450</b></span><span>返品引当<b>¥280</b></span></div><div class="evidence"><span>● sold '+x.sold+'件</span><span>中央値 $72.40</span><a href="https://www.ebay.com/sch/i.html?_nkw=hello+kitty+jinbei&LH_Sold=1&LH_Complete=1" target="_blank" rel="noreferrer">比較を見る ↗</a></div></section><section class="card"><div class="cardHead"><span>選定シグナル</span><small>4 / 5 合格</small></div><div class="signals"><span>✓ 人気IP</span><span>✓ 日本らしさ</span><span>✓ 軽量</span><span>✓ 売却実績</span><span class="muted">△ サイズ確認</span></div></section><section class="card draft"><div class="cardHead"><div><span>eBay 下書き</span><small>写真・英語説明・価格</small></div><button class="ready">✓ 生成済み</button></div><label>英語タイトル <span id="chars">68/80</span><input maxlength="80" id="draftTitle" value="Hello Kitty Retro Jinbei Set Adult Japanese Festival Wear Japan New"></label><div class="draftGrid"><label>販売価格 (USD)<input id="draftPrice" value="'+x.usd.toFixed(2)+'"></label><label>数量<input value="1" readonly></label></div><label>商品説明<textarea id="draftDescription" rows="7">Authentic '+x.en+' purchased from a Japanese retailer.\n\n• Japanese exclusive design\n• New with retail tags\n• Ships from Japan\n\nPlease review all source photos for measurements and details.</textarea></label><label class="checkLabel"><input type="checkbox" id="confirm"><span>商品・在庫・画像利用条件を自分で確認しました</span></label></section></div><div class="detailActions"><button class="secondary" id="saveDraft">下書きを保存</button><button class="approve" id="approve" disabled>出品を承認 <span>↗</span></button><small>ボタン操作なしに公開されることはありません</small></div>';const check=document.querySelector('#confirm'),approve=document.querySelector('#approve'),title=document.querySelector('#draftTitle');check.onchange=()=>approve.disabled=!check.checked;title.oninput=()=>document.querySelector('#chars').textContent=title.value.length+'/80';document.querySelector('#saveDraft').onclick=async()=>{const response=await fetch('/api/drafts',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({candidateId:x.id,titleEn:title.value,descriptionEn:document.querySelector('#draftDescription').value,listingPriceUsd:Number(document.querySelector('#draftPrice').value),sourceAcknowledged:check.checked})});toast(response.ok?'下書きをDBへ保存しました':'下書きの保存に失敗しました')};approve.onclick=()=>{document.querySelector('#modalTitle').textContent=title.value;document.querySelector('#modalPrice').textContent='$'+document.querySelector('#draftPrice').value;document.querySelector('#modal').classList.add('open')}}
function toast(message){const n=document.querySelector('#note');n.hidden=false;n.textContent='✓ '+message;setTimeout(()=>n.hidden=true,2600)}function switchTab(tab){document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));document.querySelector('#candidatesPage').style.display=tab==='candidates'?'block':'none';document.querySelector('#draftsPage').classList.toggle('active',tab==='drafts');document.querySelector('#settingsPage').classList.toggle('active',tab==='settings');const titles={candidates:['DISCOVERY QUEUE','販売候補'],drafts:['READY FOR REVIEW','出品下書き'],settings:['PROFIT MODEL','査定設定']};document.querySelector('#eyebrow').textContent=titles[tab][0];document.querySelector('#pageTitle').textContent=titles[tab][1]}
document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('active',x===b));renderRows()});document.querySelector('#search').oninput=renderRows;document.querySelector('#scan').onclick=async e=>{const b=e.currentTarget;b.disabled=true;b.innerHTML='<span>✦</span> スキャン中…';try{const response=await fetch('/api/scan',{method:'POST'}),result=await response.json();if(!response.ok)throw new Error(result.error||'scan failed');const observed=result.sources.filter(x=>x.state==='observed').length,unobserved=result.sources.length-observed;toast(result.discovered+'件を発見・観測成功 '+observed+'件・未観測 '+unobserved+'件')}catch(error){toast('スキャンに失敗しました。前回値は保持します')}finally{b.disabled=false;b.innerHTML='<span>✦</span> 今すぐスキャン'}};document.querySelector('#saveSettings').onclick=async()=>{const ids=['fx','fee','intlShipping','domesticShipping','ddp','returnReserve','minProfit','minRoi','minSold'],values=ids.map(id=>Number(document.querySelector('#'+id).value));const response=await fetch('/api/settings',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({fxJpyPerUsd:values[0],marketplaceFeePercent:values[1],internationalShippingJpy:values[2],domesticShippingJpy:values[3],ddpReserveJpy:values[4],returnReservePercent:values[5],minimumProfitJpy:values[6],minimumRoiPercent:values[7],minimumSoldCount:values[8]})});toast(response.ok?'査定条件をDBへ保存しました':'査定条件の保存に失敗しました')};document.querySelector('#back').onclick=()=>document.querySelector('#modal').classList.remove('open');document.querySelector('#connect').onclick=()=>{document.querySelector('#modal').classList.remove('open');switchTab('settings')};document.querySelector('#modal').onclick=e=>{if(e.target.id==='modal')e.currentTarget.classList.remove('open')};document.querySelector('#draftCards').innerHTML=items.slice(0,3).map((x,i)=>'<article class="draftCard"><div class="bigThumb '+x.color+'"><span>RANK '+x.rank+'</span><b>'+x.glyph+'</b></div><div class="draftBody"><span>'+(i?'編集が必要':'公開準備完了')+'</span><h3>'+x.title+'</h3><p>'+x.en+'</p><div><strong>+'+yen(x.profit)+'</strong><small>推定利益</small></div><button data-open="'+x.id+'">下書きを確認 →</button></div></article>').join('');document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{active=Number(b.dataset.open);switchTab('candidates');renderRows();renderDetail()});fetch('/api/state').catch(()=>{});renderRows();renderDetail();</script>
<script>
let liveItems=[];
let liveDrafts=[];
let liveActive=null;
let liveFilter="すべて";
let livePersistence=false;
const liveYen=function(value){return new Intl.NumberFormat("ja-JP",{style:"currency",currency:"JPY",maximumFractionDigits:0}).format(Number(value)||0)};
const liveEsc=function(value){const entities={38:"&amp;",60:"&lt;",62:"&gt;",34:"&quot;",39:"&#39;"};return String(value==null?"":value).replace(/[&<>"']/g,function(char){return entities[char.charCodeAt(0)]})};
function mapCandidate(row,index){let images=[];try{images=JSON.parse(row.source_image_urls||"[]")}catch(error){images=[]}const sold=Number(row.sold_count)||0;const median=Number(row.median_sold_usd)||0;const appraised=sold>0&&median>0;return{id:Number(row.id),rank:appraised?String(row.rank||"C"):"C",status:appraised?"査定済み":"未査定",brand:row.source_name||"しまむら",title:row.title_ja||"商品名未取得",en:appraised?(row.comparable_query||""):"eBay相場 未観測",cost:Number(row.source_price_jpy)||0,usd:median,sold:sold,profit:Number(row.estimated_profit_jpy)||0,roi:Number(row.roi_percent)||0,confidence:Number(row.confidence)||0,color:["coral","violet","sky","sand"][index%4],glyph:String(row.title_ja||"品").slice(0,1),source:row.source_url,images:images,capturedAt:row.source_captured_at,appraised:appraised}}
function ensureScanStatus(){let node=document.querySelector("#scanStatus");if(node)return node;node=document.createElement("div");node.id="scanStatus";node.style.cssText="margin:13px 22px 0;padding:12px 14px;border:1px solid #dfe6e2;border-radius:9px;background:#fff;color:#5f6c66;font-size:10px;line-height:1.6";document.querySelector("#candidatesPage .grid").before(node);return node}
function renderScanStatus(rows,message){const node=ensureScanStatus();if(message){node.innerHTML="<b>"+liveEsc(message)+"</b>";return}if(!rows||!rows.length){node.innerHTML="<b>まだ本番スキャンを実行していません。</b> 「今すぐスキャン」を押すと4つの監視URLを確認し、成功・ブロック・解析不能を区別して保存します。";return}const labels={observed:"取得成功",blocked:"アクセス制限",http_error:"HTTPエラー",invalid_response:"想定外の応答",parse_unobserved:"ページ取得・商品解析不能",request_error:"通信失敗",unobserved:"未観測"};const last=rows[0].observed_at?new Date(String(rows[0].observed_at).replace(" ","T")+"Z"):null;document.querySelector("#lastUpdated").textContent=last&&!Number.isNaN(last.getTime())?"最終更新 "+last.toLocaleString("ja-JP",{timeZone:"Asia/Tokyo",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}):"最終更新 記録あり";node.innerHTML="<b>直近スキャン</b>　"+rows.slice(0,4).map(function(row){return liveEsc(labels[row.observation_state]||row.observation_state)+" "+Number(row.discovered_count||0)+"件"}).join(" ／ ")}
function updateSummary(){const appraised=liveItems.filter(function(item){return item.appraised});const profit=appraised.reduce(function(sum,item){return sum+item.profit},0);const avg=appraised.length?Math.round(appraised.reduce(function(sum,item){return sum+item.roi},0)/appraised.length):null;const strong=document.querySelectorAll(".stats .stat strong");strong[0].textContent=String(liveItems.length);strong[1].textContent=appraised.length?liveYen(profit):"—";strong[2].textContent=avg==null?"—":avg+"%";strong[3].textContent=String(liveItems.length-appraised.length);document.querySelector("#navCandidateCount").textContent=String(liveItems.length);document.querySelector("#navDraftCount").textContent=String(liveDrafts.length)}
function renderLiveRows(){const q=document.querySelector("#search").value.toLowerCase();const visible=liveItems.filter(function(item){const text=(item.title+" "+item.en+" "+item.brand).toLowerCase();return text.includes(q)&&(liveFilter==="すべて"||liveFilter==="A"&&item.rank==="A"||item.status===liveFilter)});if(!visible.length){document.querySelector("#rows").innerHTML='<div style="padding:34px 18px;text-align:center;color:#77827d;font-size:10px"><b style="display:block;color:#33423c;margin-bottom:7px">実取得の商品候補はまだありません</b>スキャン結果が0件でも、取得失敗を在庫0とは扱いません。</div>'}else{document.querySelector("#rows").innerHTML=visible.map(function(item){const market=item.appraised?"$"+item.usd.toFixed(2):"—";const profit=item.appraised?"+"+liveYen(item.profit):"未査定";return '<button class="row '+(item.id===liveActive?'active':'')+'" data-live-id="'+item.id+'"><div class="thumb '+item.color+'"><span class="rank">'+liveEsc(item.rank)+'</span><span class="glyph">'+liveEsc(item.glyph)+'</span></div><div class="copy"><div class="badges"><span>'+liveEsc(item.brand)+'</span><i class="'+(item.appraised?'good':'check')+'">'+liveEsc(item.status)+'</i></div><b>'+liveEsc(item.title)+'</b><small>'+liveEsc(item.en)+'</small></div><div class="money"><b>'+liveYen(item.cost)+'</b><small>取得価格</small></div><div class="money"><b>'+market+'</b><small>'+(item.appraised?item.sold+"件 sold":"未観測")+'</small></div><div class="profit"><b>'+profit+'</b><small>'+(item.appraised?"ROI "+item.roi+"%":"eBay未接続")+'</small></div></button>'}).join("")}document.querySelector("#count").textContent=visible.length+" / "+liveItems.length+"件を表示";document.querySelectorAll("[data-live-id]").forEach(function(node){node.onclick=function(){liveActive=Number(node.dataset.liveId);renderLiveRows();renderLiveDetail()}})}
function renderLiveDetail(){const item=liveItems.find(function(row){return row.id===liveActive});if(!item){document.querySelector("#detail").innerHTML='<div style="padding:34px 22px;color:#6f7b76;font-size:10px;line-height:1.7"><b style="display:block;color:#26362f;font-size:14px;margin-bottom:8px">候補がまだありません</b>まずスキャンを実行してください。取得できなかった場合は、上の直近スキャン欄に理由を表示します。</div>';return}const photos=item.images.length?item.images.slice(0,4).map(function(url,index){return '<div class="photo"><img src="'+liveEsc(url)+'" alt="商品画像 '+(index+1)+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover"></div>'}).join(""):'<div class="photo '+item.color+'"><b>画像未取得</b></div>';const market=item.appraised?"$"+item.usd.toFixed(2):"未観測";const profit=item.appraised?"利益 +"+liveYen(item.profit):"利益は未計算";const draftTitle="Japan exclusive "+item.title;const draftDescription=["Authentic item sourced from a Japanese retailer.","","Item: "+item.title,"Source: Japan","","Please verify stock, measurements, image usage, and condition before publishing."].join("\\n");document.querySelector("#detail").innerHTML='<div class="detailScroll"><div class="detailTop"><div><span class="rankTag">'+(item.appraised?"RANK "+liveEsc(item.rank):"未査定")+'</span><small>'+(item.appraised?"一致精度 "+item.confidence+"%":"eBay売却相場 未観測")+'</small></div></div><h2>'+liveEsc(item.title)+'</h2><a class="sourceLink" href="'+liveEsc(item.source)+'" target="_blank" rel="noreferrer">元の商品ページ ↗</a><div class="photos">'+photos+'</div><div class="sourceMeta"><span>取得画像 '+item.images.length+'枚</span><small>'+liveEsc(item.capturedAt||"")+'</small></div><section class="card"><div class="cardHead"><div><span>自動査定</span><small>未観測値を0として扱いません</small></div><b>'+profit+'</b></div><div class="rail"><div><span>仕入れ</span><b>'+liveYen(item.cost)+'</b></div><i>→</i><div><span>販売相場</span><b>'+market+'</b></div><i>→</i><div class="positive"><span>ROI</span><b>'+(item.appraised?item.roi+"%":"—")+'</b></div></div><div class="evidence"><span>sold '+(item.appraised?item.sold+"件":"未観測")+'</span><span>eBay Product Research '+(item.appraised?"取得済み":"未接続")+'</span></div></section><section class="card draft"><div class="cardHead"><div><span>出品下書き</span><small>公開処理はありません</small></div><button class="ready">自動生成</button></div><label>英語タイトル <span id="chars">'+draftTitle.length+'/80</span><input maxlength="80" id="draftTitle" value="'+liveEsc(draftTitle)+'"></label><div class="draftGrid"><label>販売価格 (USD)<input id="draftPrice" value="'+(item.appraised?item.usd.toFixed(2):"")+'" placeholder="相場接続後に自動入力"></label><label>数量<input value="1" readonly></label></div><label>商品説明<textarea id="draftDescription" rows="7">'+liveEsc(draftDescription)+'</textarea></label><label class="checkLabel"><input type="checkbox" id="confirm"><span>商品・在庫・画像利用条件を自分で確認しました</span></label></section></div><div class="detailActions"><button class="secondary" id="saveDraft">下書きを保存</button><button class="approve" id="approve" disabled>出品を承認 <span>↗</span></button><small>eBay未接続のため、外部公開は実行されません</small></div>';const confirm=document.querySelector("#confirm");const approve=document.querySelector("#approve");const title=document.querySelector("#draftTitle");confirm.onchange=function(){approve.disabled=!confirm.checked};title.oninput=function(){document.querySelector("#chars").textContent=title.value.length+"/80"};document.querySelector("#saveDraft").onclick=async function(){if(!livePersistence){liveToast("D1接続後に下書きを保存できます");return}const price=Number(document.querySelector("#draftPrice").value);if(!price){liveToast("販売価格を入力してください");return}const response=await fetch("/api/drafts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({candidateId:item.id,titleEn:title.value,descriptionEn:document.querySelector("#draftDescription").value,listingPriceUsd:price,sourceAcknowledged:confirm.checked})});liveToast(response.ok?"下書きをDBへ保存しました":"下書きの保存に失敗しました");if(response.ok)await loadLiveState()};approve.onclick=function(){document.querySelector("#modalTitle").textContent=title.value;document.querySelector("#modalPrice").textContent="$"+document.querySelector("#draftPrice").value;document.querySelector("#modal").classList.add("open")}}
function renderLiveDrafts(){const root=document.querySelector("#draftCards");if(!liveDrafts.length){root.innerHTML='<article class="connection"><h3>保存済み下書きはありません</h3><p>実取得した候補を選び、販売価格を確認して保存するとここに表示されます。</p></article>';return}root.innerHTML=liveDrafts.map(function(draft){const item=liveItems.find(function(row){return row.id===Number(draft.candidate_id)});return '<article class="draftCard"><div class="bigThumb '+(item?item.color:"sky")+'"><span>DRAFT</span><b>'+(item?liveEsc(item.glyph):"下")+'</b></div><div class="draftBody"><span>公開されていません</span><h3>'+liveEsc(draft.title_en)+'</h3><p>'+liveEsc(item?item.title:"候補商品")+'</p><div><strong>$'+Number(draft.listing_price_usd).toFixed(2)+'</strong><small>設定価格</small></div></div></article>'}).join("")}
function applySettings(settings){if(!settings)return;const values={fx:settings.fx_jpy_per_usd,fee:settings.marketplace_fee_percent,intlShipping:settings.international_shipping_jpy,domesticShipping:settings.domestic_shipping_jpy,ddp:settings.ddp_reserve_jpy,returnReserve:settings.return_reserve_percent,minProfit:settings.minimum_profit_jpy,minRoi:settings.minimum_roi_percent,minSold:settings.minimum_sold_count};Object.keys(values).forEach(function(id){const node=document.querySelector("#"+id);if(node)node.value=values[id]})}
async function loadLiveState(){const response=await fetch("/api/state",{cache:"no-store"});if(!response.ok)throw new Error("state failed");const state=await response.json();livePersistence=state.persistence===true;liveItems=(state.candidates||[]).filter(function(row){return row.status!=="demo"&&!String(row.source_url||"").includes("#demo-")}).map(mapCandidate);liveDrafts=state.drafts||[];liveActive=liveItems.some(function(item){return item.id===liveActive})?liveActive:(liveItems[0]?liveItems[0].id:null);applySettings(state.settings);updateSummary();renderScanStatus(state.scanRuns||[]);renderLiveRows();renderLiveDetail();renderLiveDrafts()}
function temporaryRowsFromScan(result){let temporaryId=-1;const rows=[];(result.sources||[]).forEach(function(source){(source.products||[]).forEach(function(product){rows.push({id:temporaryId--,source_url:product.url,source_name:source.name,source_price_jpy:product.priceJpy,source_image_urls:JSON.stringify(product.imageUrls||[]),source_captured_at:new Date().toISOString(),title_ja:product.title,comparable_query:product.title,sold_count:0,median_sold_usd:0,estimated_profit_jpy:0,roi_percent:0,confidence:0,rank:"C",status:"discovered"})})});return rows}
function liveToast(message){const node=document.querySelector("#note");node.hidden=false;node.textContent=message;setTimeout(function(){node.hidden=true},4000)}
document.querySelectorAll(".nav button").forEach(function(button){button.onclick=function(){document.querySelectorAll(".nav button").forEach(function(other){other.classList.toggle("active",other===button)});const tab=button.dataset.tab;document.querySelector("#candidatesPage").style.display=tab==="candidates"?"block":"none";document.querySelector("#draftsPage").classList.toggle("active",tab==="drafts");document.querySelector("#settingsPage").classList.toggle("active",tab==="settings");const labels={candidates:["DISCOVERY QUEUE","販売候補"],drafts:["READY FOR REVIEW","出品下書き"],settings:["PROFIT MODEL","査定設定"]};document.querySelector("#eyebrow").textContent=labels[tab][0];document.querySelector("#pageTitle").textContent=labels[tab][1]}});
document.querySelectorAll(".filters button").forEach(function(button){button.onclick=function(){liveFilter=button.dataset.filter;document.querySelectorAll(".filters button").forEach(function(other){other.classList.toggle("active",other===button)});renderLiveRows()}});
document.querySelector("#search").oninput=renderLiveRows;
document.querySelector("#scan").onclick=async function(event){const button=event.currentTarget;button.disabled=true;button.innerHTML="<span>✦</span> スキャン中…";renderScanStatus([],"4つの監視URLを確認しています。最大15秒ほどかかります。");try{const response=await fetch("/api/scan",{method:"POST"});const result=await response.json();if(!response.ok)throw new Error(result.error||"scan failed");await loadLiveState();if(!liveItems.length&&!result.persistence){liveItems=temporaryRowsFromScan(result).map(mapCandidate);liveActive=liveItems[0]?liveItems[0].id:null;updateSummary();renderLiveRows();renderLiveDetail()}const observed=result.sources.filter(function(row){return row.state==="observed"}).length;const storage=result.persistence?"DB保存済み":"一時表示（D1未接続）";const summary=result.discovered+"件発見／取得成功 "+observed+"URL／未観測 "+(result.sources.length-observed)+"URL／"+storage;renderScanStatus([],summary);liveToast(summary)}catch(error){renderScanStatus([],"スキャンに失敗しました。既存データは消していません。");liveToast("スキャンに失敗しました")}finally{button.disabled=false;button.innerHTML="<span>✦</span> 今すぐスキャン"}};
document.querySelector("#saveSettings").onclick=async function(){const ids=["fx","fee","intlShipping","domesticShipping","ddp","returnReserve","minProfit","minRoi","minSold"];const values=ids.map(function(id){return Number(document.querySelector("#"+id).value)});const response=await fetch("/api/settings",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({fxJpyPerUsd:values[0],marketplaceFeePercent:values[1],internationalShippingJpy:values[2],domesticShippingJpy:values[3],ddpReserveJpy:values[4],returnReservePercent:values[5],minimumProfitJpy:values[6],minimumRoiPercent:values[7],minimumSoldCount:values[8]})});liveToast(response.ok?"査定条件を保存しました":"設定の保存に失敗しました")};
document.querySelector("#back").onclick=function(){document.querySelector("#modal").classList.remove("open")};document.querySelector("#connect").onclick=function(){document.querySelector("#modal").classList.remove("open");document.querySelector('[data-tab="settings"]').click()};document.querySelector("#modal").onclick=function(event){if(event.target.id==="modal")event.currentTarget.classList.remove("open")};
loadLiveState().catch(function(){renderScanStatus([],"DBの読み込みに失敗しました。再読み込みしてください。");renderLiveRows();renderLiveDetail()});
</script>
</body></html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/state") {
      if (request.method !== "GET") return Response.json({ error: "method not allowed" }, { status: 405 });
      if (!env?.DB) return Response.json({ candidates: [], drafts: [], settings: DEFAULT_SETTINGS, scanRuns: [], persistence: false });
      await ensureDatabase(env.DB);
      const [candidateResult, draftResult, settingsResult, scanResult] = await Promise.all([
        env.DB.prepare("SELECT * FROM candidates WHERE status <> 'demo' AND source_url NOT LIKE '%#demo-%' ORDER BY estimated_profit_jpy DESC, id DESC LIMIT 100").all(),
        env.DB.prepare("SELECT * FROM drafts ORDER BY updated_at DESC LIMIT 100").all(),
        env.DB.prepare("SELECT * FROM appraisal_settings WHERE id = 1").first(),
        env.DB.prepare("SELECT * FROM scan_runs ORDER BY observed_at DESC, id DESC LIMIT 20").all(),
      ]);
      return Response.json({ candidates: candidateResult.results, drafts: draftResult.results, settings: settingsResult, scanRuns: scanResult.results, persistence: true });
    }
    if (url.pathname === "/api/drafts" && request.method === "POST") {
      if (!env?.DB) return Response.json({ error: "database unavailable" }, { status: 503 });
      await ensureDatabase(env.DB);
      const body = await request.json();
      const candidateId = Number(body.candidateId);
      const titleEn = cleanText(body.titleEn, 80);
      const descriptionEn = cleanText(body.descriptionEn, 10000);
      const listingPriceUsd = Number(body.listingPriceUsd);
      if (!candidateId || !titleEn || !descriptionEn || !Number.isFinite(listingPriceUsd) || listingPriceUsd <= 0) {
        return Response.json({ error: "invalid draft" }, { status: 400 });
      }
      const acknowledged = body.sourceAcknowledged === true ? 1 : 0;
      await env.DB.prepare(`INSERT INTO drafts (candidate_id, title_en, description_en, listing_price_usd, source_acknowledged, approval_state, updated_at)
        VALUES (?, ?, ?, ?, ?, 'draft', CURRENT_TIMESTAMP)
        ON CONFLICT(candidate_id) DO UPDATE SET title_en = excluded.title_en, description_en = excluded.description_en,
        listing_price_usd = excluded.listing_price_usd, source_acknowledged = excluded.source_acknowledged, updated_at = CURRENT_TIMESTAMP`)
        .bind(candidateId, titleEn, descriptionEn, listingPriceUsd, acknowledged).run();
      return Response.json({ ok: true, published: false });
    }
    if (url.pathname === "/api/settings" && request.method === "POST") {
      if (!env?.DB) return Response.json({ error: "database unavailable" }, { status: 503 });
      await ensureDatabase(env.DB);
      const body = await request.json();
      const values = [body.fxJpyPerUsd, body.marketplaceFeePercent, body.internationalShippingJpy, body.domesticShippingJpy, body.ddpReserveJpy, body.returnReservePercent, body.minimumProfitJpy, body.minimumRoiPercent, body.minimumSoldCount].map(Number);
      if (values.some((value) => !Number.isFinite(value) || value < 0)) return Response.json({ error: "invalid settings" }, { status: 400 });
      await env.DB.prepare(`UPDATE appraisal_settings SET fx_jpy_per_usd=?, marketplace_fee_percent=?, international_shipping_jpy=?, domestic_shipping_jpy=?, ddp_reserve_jpy=?, return_reserve_percent=?, minimum_profit_jpy=?, minimum_roi_percent=?, minimum_sold_count=?, updated_at=CURRENT_TIMESTAMP WHERE id=1`).bind(...values).run();
      return Response.json({ ok: true });
    }
    if (url.pathname === "/api/scan" && request.method === "POST") {
      const database = env?.DB ?? null;
      if (database) await ensureDatabase(database);
      const scanResults = await Promise.all(SHIMAMURA_SOURCES.map((source) => scanShimamuraSource(database, source)));
      const discovered = scanResults.reduce((sum, result) => sum + result.discovered, 0);
      return Response.json({ ok: true, discovered, sources: scanResults, persistence: Boolean(database) });
    }
    if (url.pathname === "/api/approve" && request.method === "POST") {
      return Response.json({
        ok: false,
        published: false,
        reason: "eBay connector is not configured. Approval never publishes without a separate authenticated connector call.",
      }, { status: 409 });
    }
    if (url.pathname === "/api/health") {
      return Response.json({
        ok: true,
        mode: "live-source-scanner",
        automaticPublishing: false,
        shimamuraScanner: "trial",
        ebayConnector: false,
        persistence: Boolean(env?.DB),
      });
    }
    if (url.pathname !== "/") return new Response("Not found", { status: 404 });
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "content-security-policy": "default-src 'self'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self'",
        "x-content-type-options": "nosniff",
        "x-robots-tag": "noindex, nofollow",
        "referrer-policy": "strict-origin-when-cross-origin",
      },
    });
  },
  async scheduled(controller, env) {
    if (!env?.DB) {
      console.log(JSON.stringify({ event: "scheduled_scan_skipped", cron: controller.cron, reason: "database unavailable" }));
      return;
    }
    await ensureDatabase(env.DB);
    const scanResults = await Promise.all(SHIMAMURA_SOURCES.map((source) => scanShimamuraSource(env.DB, source)));
    console.log(JSON.stringify({
      event: "scheduled_scan",
      cron: controller.cron,
      discovered: scanResults.reduce((sum, result) => sum + result.discovered, 0),
      states: scanResults.map((result) => ({ name: result.name, state: result.state, discovered: result.discovered })),
    }));
  },
};

function cleanText(value, maxLength) {
  return String(value ?? "").trim().slice(0, maxLength);
}

const DEFAULT_SETTINGS = {
  fx_jpy_per_usd: 152,
  marketplace_fee_percent: 15,
  international_shipping_jpy: 2180,
  domestic_shipping_jpy: 550,
  ddp_reserve_jpy: 450,
  return_reserve_percent: 3,
  minimum_profit_jpy: 2000,
  minimum_roi_percent: 60,
  minimum_sold_count: 3,
};

async function ensureDatabase(db) {
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS candidates (
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
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS drafts (
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
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS appraisal_settings (
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
    )`),
    db.prepare(`INSERT INTO appraisal_settings (id) VALUES (1) ON CONFLICT(id) DO NOTHING`),
    db.prepare(`CREATE TABLE IF NOT EXISTS scan_runs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_url TEXT NOT NULL,
      observation_state TEXT NOT NULL,
      http_status INTEGER,
      discovered_count INTEGER NOT NULL DEFAULT 0,
      detail TEXT,
      observed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`),
  ]);
}

const SHIMAMURA_SOURCES = [
  { name: "しまむら サンリオ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=shimamura&popular_tag=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%BA" },
  { name: "しまむら キティ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=shimamura&q=%E3%82%AD%E3%83%86%E3%82%A3" },
  { name: "アベイル サンリオ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=avail&popular_tag=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%BA" },
  { name: "しまむら ちいかわ", url: "https://www.shop-shimamura.com/disp/itemlist/?b=shimamura&q=%E3%81%A1%E3%81%84%E3%81%8B%E3%82%8F" },
];

const MAX_SOURCE_BYTES = 1_500_000;

async function scanShimamuraSource(db, source) {
  let state = "unobserved";
  let httpStatus = null;
  let detail = null;
  let products = [];
  try {
    const response = await fetch(source.url, {
      headers: {
        accept: "text/html,application/xhtml+xml",
        "accept-language": "ja-JP,ja;q=0.9",
        "user-agent": "Mozilla/5.0 (compatible; ExportScout/0.1; low-frequency product monitor)",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    httpStatus = response.status;
    const contentLength = Number(response.headers.get("content-length") || 0);
    const sourceBody = contentLength > MAX_SOURCE_BYTES
      ? { text: "", exceeded: true }
      : await readTextLimited(response, MAX_SOURCE_BYTES);
    const body = sourceBody.text;
    if (sourceBody.exceeded) {
      state = "invalid_response";
      detail = "source response exceeded size limit";
    } else if (!response.ok) {
      state = response.status === 403 || response.status === 429 ? "blocked" : "http_error";
      detail = `HTTP ${response.status}`;
    } else if (/verify you are human|checking your browser|access denied|captcha/i.test(body)) {
      state = "blocked";
      detail = "security challenge observed";
    } else if (!/しまむら|SHIMAMURA|shop-shimamura/i.test(body) || body.length < 5000) {
      state = "invalid_response";
      detail = "expected store markers missing";
    } else {
      products = parseShimamuraProducts(body, source.url);
      state = products.length ? "observed" : "parse_unobserved";
      detail = products.length ? null : "store page observed but product records were not extractable";
    }
  } catch (error) {
    state = "request_error";
    detail = error instanceof Error ? error.message.slice(0, 240) : "unknown fetch error";
  }

  if (db && products.length) {
    await db.batch(products.slice(0, 40).map((product) => db.prepare(`INSERT INTO candidates (
      source_url, source_name, source_price_jpy, source_image_urls, source_captured_at, title_ja,
      category, comparable_query, sold_count, median_sold_usd, estimated_profit_jpy, roi_percent,
      confidence, rank, status, updated_at
    ) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, ?, 'unclassified', ?, 0, 0, 0, 0, 35, 'C', 'discovered', CURRENT_TIMESTAMP)
    ON CONFLICT(source_url) DO UPDATE SET source_price_jpy=excluded.source_price_jpy,
      source_image_urls=excluded.source_image_urls, source_captured_at=CURRENT_TIMESTAMP,
      title_ja=excluded.title_ja, updated_at=CURRENT_TIMESTAMP`).bind(
      product.url, source.name, product.priceJpy, JSON.stringify(product.imageUrls), product.title, product.title,
    )));
  }
  if (db) {
    await db.prepare(`INSERT INTO scan_runs (source_url, observation_state, http_status, discovered_count, detail)
      VALUES (?, ?, ?, ?, ?)`).bind(source.url, state, httpStatus, products.length, detail).run();
  }
  return { name: source.name, state, httpStatus, discovered: products.length, detail, products: products.slice(0, 40) };
}

async function readTextLimited(response, maxBytes) {
  if (!response.body) return { text: "", exceeded: false };
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let text = "";
  let bytes = 0;
  let exceeded = false;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > maxBytes) {
        exceeded = true;
        await reader.cancel();
        break;
      }
      text += decoder.decode(value, { stream: true });
    }
    if (!exceeded) text += decoder.decode();
  } finally {
    reader.releaseLock();
  }
  return { text, exceeded };
}

function parseShimamuraProducts(htmlText, sourceUrl) {
  const results = new Map();
  const anchorPattern = /<a\b[^>]*href=["']([^"']*(?:itemdetail|item\/)[^"']*)["'][^>]*>([\s\S]{0,3000}?)<\/a>/gi;
  for (const match of htmlText.matchAll(anchorPattern)) {
    const block = match[2];
    const title = decodeEntities(stripTags(block)).replace(/\s+/g, " ").trim().slice(0, 220);
    const priceMatch = block.match(/([0-9]{1,3}(?:,[0-9]{3})*)\s*円/);
    if (!title || !priceMatch) continue;
    const url = new URL(decodeEntities(match[1]), sourceUrl).toString();
    const imageUrls = [...block.matchAll(/(?:src|data-src)=["']([^"']+)["']/gi)]
      .map((imageMatch) => new URL(decodeEntities(imageMatch[1]), sourceUrl).toString())
      .filter((value, index, array) => array.indexOf(value) === index)
      .slice(0, 8);
    results.set(url, { url, title, priceJpy: Number(priceMatch[1].replaceAll(",", "")), imageUrls });
  }
  return [...results.values()];
}

function stripTags(value) {
  return value.replace(/<script\b[\s\S]*?<\/script>/gi, " ").replace(/<style\b[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ");
}

function decodeEntities(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#39;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}
