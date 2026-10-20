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
In the repository's Settings → Pages, the source must be **GitHub Actions** and the custom domain `edogenna.me`, with Enforce HTTPS on.
With Actions deploys the custom domain comes only from that setting: GitHub ignores `public/CNAME`, so if the domain ever disappears, re-enter it there.
