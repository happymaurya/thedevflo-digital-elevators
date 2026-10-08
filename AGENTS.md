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
- Use the shared `TextEffect` component for prominent word-by-word heading reveals; it preserves reduced-motion accessibility and mobile performance.

- Keep project enquiries client-only and prepare a mailto brief instead of claiming submission; static Hostinger hosting cannot receive forms or securely run AI.
- Share agency FAQ data and basic page metadata through agency-content; reuse factual copy across the homepage and content pages.
- Use dedicated TanStack content routes for company, contact, services and legal information; static hosting needs a corresponding HTML shell for each path.
