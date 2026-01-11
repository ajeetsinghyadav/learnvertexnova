# VertexNova Website

This is the official website for [VertexNova Engine](https://github.com/ajeetsinghyadav/vertexnova), built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## About VertexNova

VertexNova Engine (VNE) is a modern, multi-platform rendering and visualization engine. It provides a unified API across multiple graphics backends (OpenGL, Metal, Vulkan, WebGL) and supports macOS, iOS, Windows, Linux, and Web platforms.

## Website Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) version 20.0 or above
- npm or yarn package manager

### Installation

```bash
npm install
# or
yarn install
```

### Local Development

```bash
npm start
# or
yarn start
```

This command starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
# or
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Preview Production Build

```bash
npm run serve
# or
yarn serve
```

This command serves the production build locally for testing.

## Deployment

### GitHub Pages

Using SSH:

```bash
USE_SSH=true npm run deploy
# or
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
# or
GIT_USER=<Your GitHub username> yarn deploy
```

This command builds the website and pushes to the `gh-pages` branch.

### Other Hosting Options

After building (`npm run build`), you can deploy the `build` directory to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any web server

## Project Structure

```
.
├── blog/                 # Blog posts
├── docs/                 # Documentation pages
├── src/
│   ├── components/       # React components
│   ├── css/             # Global styles
│   └── pages/           # Custom pages
├── static/              # Static assets (images, etc.)
├── docusaurus.config.js # Docusaurus configuration
└── sidebars.js          # Sidebar configuration
```

## Contributing

Contributions to the website are welcome! Please see the main [VertexNova repository](https://github.com/ajeetsinghyadav/vertexnova) for contribution guidelines.

## License

See the main VertexNova project for license information.
