# 海外販売スカウト

しまむら・アベイルの公開商品ページを低頻度で確認し、取得できた商品のみを候補として表示するCloudflare Workerです。固定の商品データや架空の利益は表示しません。eBay相場は未接続のため、海外相場・利益・ROIは「未観測」として扱います。外部サイトへの出品や注文は行いません。

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/sh-sh-code/shimamura-export-scout)

## Cloudflare Git連携

Cloudflare Dashboardの **Workers & Pages → Create application → Import a repository** から、このリポジトリを選択します。

- Worker名: `shimamura-export-scout`
- Production branch: `main`
- Build command: なし
- Deploy command: `npx wrangler deploy`

上のDeployボタンを使う場合、CloudflareがD1を自動作成・接続し、マイグレーションを適用します。公式仕様により、元リポジトリはデプロイ時にPublicである必要があります。

D1未接続でもWorkerと手動スキャンは動作します。その場合、取得商品は画面に一時表示され、再読み込みすると消えます。

## D1を接続して保存を有効にする

1. Cloudflare DashboardでD1データベース `shimamura-export-scout-db` を作成します。
2. 作成したデータベースのIDを確認します。
3. `wrangler.jsonc` に次の設定を追加してGitHubへ反映します。

```jsonc
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "shimamura-export-scout-db",
    "database_id": "ここにD1のID",
    "migrations_dir": "migrations"
  }
]
```

4. Cloudflareのターミナルまたは認証済みのローカル環境で次を一度実行します。

```bash
npx wrangler d1 migrations apply shimamura-export-scout-db --remote
```

D1接続後は候補・スキャン履歴・査定設定・下書きが保存されます。

## 現在の制限

- しまむら側の応答形式やアクセス制限により、商品を取得できない場合があります。
- 取得失敗は在庫0件として扱わず、失敗理由を別に表示します。
- eBay Product Research / Sell APIは未接続です。
- 自動出品、自動購入、自動注文は実装していません。
