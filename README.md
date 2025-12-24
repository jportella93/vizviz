# vizviz

Make trippy visualisations! Share the screen to a projector and let the party begin.

## Demo

- **Video**: `https://dai.ly/x7tsmpi`
- **Screenshot**: `https://imgur.com/dRcLIRj.png`

## Local development

```bash
yarn install
yarn start
```

## Tests

```bash
yarn test --watchAll=false
```

## Production build

```bash
yarn build
```

## Deploy (Cloudflare Pages)

This is a static client-side app (Create React App), so it can be deployed to **Cloudflare Pages**.

- **Framework preset**: Create React App
- **Build command**: `yarn build`
- **Build output directory**: `build`
- **Node version**: set to **20** (recommended)
  - Add a Pages env var `NODE_VERSION=20` (or rely on `.nvmrc` if supported in your setup)
- **SPA routing**: handled via `public/_redirects`

If you deploy under a sub-path (not `/`), set the `homepage` field in `package.json` accordingly.
