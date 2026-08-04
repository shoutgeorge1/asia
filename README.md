# Asia / The Wagyu Shop — Growth Vision

Concept prototype for Asia International / [The Wagyu Shop](https://wagyushop.com/).  
Shopify remains the commerce engine. Sample data only. Not an official company site.

## Live review

**Production:** https://asia-wagyu-growth.vercel.app/

| Page | URL |
|------|-----|
| Overview | https://asia-wagyu-growth.vercel.app/ |
| Executive Dashboard | https://asia-wagyu-growth.vercel.app/dashboard |
| Tech Audit | https://asia-wagyu-growth.vercel.app/tech-audit |
| Bypass Strategy | https://asia-wagyu-growth.vercel.app/bypass |
| System Map | https://asia-wagyu-growth.vercel.app/system-map |
| Lifecycle | https://asia-wagyu-growth.vercel.app/lifecycle |
| Landing Gallery | https://asia-wagyu-growth.vercel.app/landing |
| TWS Reserve | https://asia-wagyu-growth.vercel.app/landing/vip |
| Gifting | https://asia-wagyu-growth.vercel.app/landing/gifting |

One-click launcher (local/dev): `/open-all`  
Desktop helper: `./scripts/open-all-pages.sh`

## Docs

- `docs/BRIEF.md` — interview brief (Jul 31)
- `docs/ARCHITECTURE.md` — discover.wagyushop.com hybrid architecture (Aug 1)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Note on cloud agents

Cursor **cloud** agents can open Chrome only inside the remote VM (or via screenshots / remote desktop). They cannot control Chrome on your laptop. On **desktop** Cursor, `./scripts/open-all-pages.sh` or `open <url>` opens your system browser.
