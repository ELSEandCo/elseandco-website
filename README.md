# ELSE & CO. website

A static, responsive website prepared for GitHub and Cloudflare Pages.

## Pages

- `/` — ELSE & CO. home
- `/escape/` — The Escape: curated travel and private journeys
- `/gathering/` — The Gathering: destination events and group experiences
- `/edit/` — The Edit: travel and hospitality consulting
- `/inquiry/` — shared inquiry form for all three verticals

## Repository structure

- `index.html` — homepage
- `escape/index.html` — The Escape landing page
- `gathering/index.html` — The Gathering landing page
- `edit/index.html` — The Edit landing page
- `inquiry/index.html` — inquiry form and visible email option
- `assets/logos/` — approved brand and vertical logos
- `styles.css` — design system and responsive layout
- `script.js` — navigation, reveal effects and review form behavior
- `favicon.svg` — browser icon
- `_headers` — security and caching headers for Cloudflare Pages

## Upload to GitHub

1. Unzip the package.
2. In the repository, choose **Add file → Upload files**.
3. Upload all files and folders inside this package so `index.html` is at the repository root.
4. Commit directly to the `main` branch.

## Deploy with Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages. This project has no build step:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`

The site is plain HTML, CSS and JavaScript, so every commit to `main` can deploy automatically.

## Before the final launch

- Connect the inquiry form to Formspree so submissions are delivered directly to `hello@elseand.co` without opening the visitor's email application.
- Replace the gallery treatments with approved photographs.
- Add verified testimonials and the Google review link after the Google Business Profile is ready.
- Remove any previous Worker route assigned to `elseand.co/*` before connecting the custom domain to this Pages project.
