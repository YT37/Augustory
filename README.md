# Augustory Venture Studio

Marketing site for Augustory, built with **React + Vite + React Router**.

Premium dark theme with the brand spectrum gradient. Display type is **Mostica**
(your custom font, self-hosted), body type is **Figtree**.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Node 18+ recommended.

## Project structure

```
augustory/
├── index.html
├── vite.config.js
├── vercel.json                 # SPA rewrites for deploy
├── public/
│   ├── favicon.svg             # gradient icon mark
│   ├── logo-mark.svg           # icon mark
│   ├── logo-wordmark.svg       # gradient wordmark
│   ├── logo-wordmark-white.svg # white wordmark (for colored backgrounds)
│   └── fonts/                  # Mostica .woff2 + .ttf
└── src/
    ├── main.jsx                # entry
    ├── App.jsx                 # routes
    ├── index.css               # design tokens, @font-face, base styles
    ├── styles/
    │   ├── components.css       # navbar, footer
    │   └── pages.css            # all page styles
    ├── data/content.js         # ALL copy lives here — edit text in one place
    ├── hooks/useReveal.js      # scroll-reveal animation
    ├── components/             # Navbar, Footer, Shared (CTA + Arrow), ScrollToTop
    └── pages/                  # Home, Audience (x5), About, Ventures, Blog, Contact, NotFound
```

## Editing content

Almost all text (audiences, stats, testimonials, ventures, blog posts) lives in
`src/data/content.js`. The five audience pages (`/corporates`, `/universities`,
`/entrepreneurs`, `/investors`, `/professionals`) are all rendered by a single
template, `src/pages/Audience.jsx`, driven by that data.

## Design tokens

All colors, the signature `--spectrum` gradient, spacing and type are CSS
variables at the top of `src/index.css`. Change the brand there and it cascades
everywhere.

## Continuing in Claude Code

Open this folder in Claude Code and ask for things like:

- "Wire the contact form to Formspree / Resend / my backend."
- "Add a real blog with MDX posts and individual post pages."
- "Add Framer Motion page transitions."
- "Make a detailed venture page at /ventures/:slug."
- "Add a light theme toggle using the existing CSS variables."

## Deploy

Works out of the box on Vercel or Netlify. `vercel.json` already handles
client-side routing so deep links and refreshes don't 404. On Netlify add a
`public/_redirects` file with: `/*  /index.html  200`.

## Notes

- The contact form is client-side only right now (shows a success state). Hook it
  up to a form service or API in `src/pages/Contact.jsx`.
- LinkedIn / Twitter links in the footer are placeholders.
