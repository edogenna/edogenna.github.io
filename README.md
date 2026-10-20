# edogenna.me

Personal website of Edoardo Gennaretti, built with [Astro](https://astro.build) and deployed to GitHub Pages at [edogenna.me](https://edogenna.me).

## Develop

Requires Node 22.22+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Update the CV

All page content lives in [`src/data/cv.ts`](src/data/cv.ts) — edit the entries there.
To update the downloadable PDF, replace [`public/cv_Edoardo_Gennaretti.pdf`](public/cv_Edoardo_Gennaretti.pdf).

## Deploy

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
The repository's Pages source must be set to **GitHub Actions** (Settings → Pages). `public/CNAME` keeps the custom domain.
