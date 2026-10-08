<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Define all TheDevFlo visual colors and gradients as semantic Tailwind v4 tokens in `src/styles.css`; this keeps the full site palette consistent and themeable.
- Use the shared content-panel utility for individual content boxes and the content-panel surface token for existing frames; this keeps page surfaces consistent without changing layouts.
- Use the shared `TextEffect` component for prominent word-by-word heading reveals; it preserves reduced-motion accessibility and mobile performance.
- Implement the project carousel as a CSS transform loop with duplicate presentation cards, hover/focus pause and a reduced-motion static layout; this keeps motion lightweight and project links keyboard-accessible.

- Keep project enquiries client-only and prepare a mailto brief instead of claiming submission; static Hostinger hosting cannot receive forms or securely run AI.
- Share agency FAQ data and basic page metadata through agency-content; reuse factual copy across the homepage and content pages.
- Use dedicated TanStack content routes for company, contact, services and legal information; static hosting needs a corresponding HTML shell for each path.
- Keep the TanStack packages on the last verified compatible versions until serialization compatibility is resolved; the existing seroval override lacks isStream required by newer server packages.
- Keep the homepage TDF intro as CSS transform/opacity keyframes started after hydration (data-play) and shown once per session; this keeps it light on phones and avoids it finishing before the page is interactive.
