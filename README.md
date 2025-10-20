# Intelli-Homepage (Nuxt Minimal Starter)

This is my implementation of the **Intelli-Homepage** project using Nuxt 3. The project has been developed following the Figma design and optimized for both desktop and mobile screens.

## Pixelay Comparison

Pixelay was used to compare this page with the Figma design. Overlays and notes are included in the `/pixelay` folder:

- `pixelay-desktop.png`
- `pixelay-mobile.png`
- `notes.md`

## Tradeoffs / Shortcuts

- Used default Tailwind spacing instead of exact Figma spacing.
- Some assets/icons were optimized for web performance and may differ slightly from Figma.
- Font sizes are mostly consistent, but minor adjustments were made for responsive readability.
- Navbar looks fine in web, differs in figma.

## Installation

Clone the repository and install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
