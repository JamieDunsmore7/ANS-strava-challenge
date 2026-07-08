# MIT ANS Summer Strava Challenge 🏁

A leaderboard site for our summer multi-sport challenge — run, swim, cycle, row.

## Files

- **`index.html`** — the website. You rarely touch this.
- **`data.js`** — the weekly numbers. **This is the only file you edit each week.**
- **`README.md`** — this file.

## Updating each week (the whole routine)

1. Open **`data.js`** (on GitHub: click the file, then the pencil ✏️ icon to edit).
2. Copy an existing `{ ... }` week block.
3. Paste it in, change the `label` to the new week (e.g. `"Week 2"`), and make sure it does **not** have `example: true`.
4. Replace the numbers with the new week's data.
5. **Commit** (GitHub: "Commit changes"). The site rebuilds and goes live on its own in ~1 minute.

That's it. No file uploads, no redeploying by hand.

### Field guide (per athlete)

| field | meaning | unit |
|-------|---------|------|
| `name` | Strava name, identical each week | text |
| `run_mi` | running distance | miles |
| `swim_mi` | swimming distance | miles |
| `cycle_mi` | cycling distance | miles |
| `row_mi` | rowing distance | miles |
| `time_sec` | total time across all four sports | seconds |

Conversions: **miles = km ÷ 1.60934**, **seconds = h×3600 + m×60 + s**.

> Tip: you don't have to work the numbers out yourself — send the four Strava
> screenshots (running, swimming, cycling, rowing) and get back a ready-made
> week block to paste in.

## The prize categories

Auto-tracked by the site:
- Most distance run — total
- Most distance run — single week (all-athlete record)
- Most time (run/swim/cycle/row) — total
- Most time — single week (all-athlete record)

Judged separately, off-site:
- Best Strava GPS art
- Activities in the most different locations

## Hosting (one-time setup)

This is a plain static site, hosted free on **Netlify** (or Cloudflare Pages),
connected to this GitHub repo so it auto-deploys on every commit. See the chat
walkthrough for the click-by-click.

- Week 0 is example data and is excluded from all totals and records.
- Running & cycling times are derived from pace / speed.
