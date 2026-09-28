# Unified palette and text motion

## What will change
- Preserve the existing TheDevFlo black, mint, and violet visual identity and current page layouts.
- Consolidate all palette roles in `src/styles.css`, including background, surfaces, primary, gradient accent, text, muted text, button, button hover, borders, and glow effects.
- Map those variables into Tailwind v4 theme tokens so pages use semantic classes rather than one-off colors.
- Replace hardcoded white, black, zinc, inline color, gradient, and shadow values in authored site pages with semantic palette tokens.
- Add a reusable word-by-word reveal component and apply it to prominent page headings, while respecting reduced-motion preferences and avoiding blur-heavy mobile effects.
- Keep the existing cursor, floating logo, aurora, and project presentation behavior intact.

## Validation
- Check desktop and phone layouts for readable text, button contrast, animation smoothness, and no overlaps.
- Confirm all content pages retain unique SEO metadata.
- Confirm the latest preview build succeeds, then regenerate `public_html/` so Hostinger receives the same update.

## Technical note
- This project uses Tailwind CSS v4, so theme configuration belongs in `src/styles.css`; a legacy `tailwind.config` file would not be read.
