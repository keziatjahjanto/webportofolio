# Adding Freight Display Pro

This site is styled to use **Freight Display Pro** for headings, but it's a
licensed commercial font and isn't bundled in this repo.

To enable it:

1. Purchase/download the font files you're licensed to use (woff2 + woff are
   enough for the web).
2. Rename and drop them here as:
   - `FreightDisplayPro-Book.woff2` / `.woff` (regular weight)
   - `FreightDisplayPro-Bold.woff2` / `.woff` (bold weight)
3. Rebuild — `@font-face` rules in `src/app/globals.css` already point here.

Until the files are added, headings automatically fall back to **Playfair
Display** (loaded via Google Fonts), so the site still looks intentional.
