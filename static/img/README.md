# Image Assets

This directory contains images used throughout the VertexNova website.

## Directory Structure

### `/img/demos/`
Screenshots and GIFs of VertexNova demos.

**Recommended images:**
- `cube_lighting.png` - Hero screenshot of best-looking demo (textured cube or lighting demo)
- `triangle.png` - Basic triangle demo screenshot
- `textured_cube.png` - Textured cube demo
- `msaa.png` - MSAA demo screenshot
- `render_target.png` - Render target demo

**Usage:**
```md
![VertexNova demo screenshot](/img/demos/cube_lighting.png)
```

### `/img/diagrams/`
Architecture diagrams and visual explanations.

**Recommended images:**
- `vertexnova_layers.png` - Architecture layer diagram showing xwin → xgl → backends
- `backend_comparison.png` - Comparison of different backends
- `pipeline_flow.png` - Rendering pipeline flow diagram

**Usage:**
```md
<figure>
  <img src="/img/diagrams/vertexnova_layers.png" alt="VertexNova architecture layers" />
  <figcaption>VertexNova layers: platform (xwin) + unified graphics API (xgl) + backend implementations.</figcaption>
</figure>
```

### `/img/icons/`
SVG icons for features and sections.

**Recommended sources:**
- [Lucide Icons](https://lucide.dev/) - Clean tech style
- [Simple Icons](https://simpleicons.org/) - Brand icons
- [Heroicons](https://heroicons.com/) - Minimal style

**Usage:**
```md
![Icon](/img/icons/backend.svg)
```

## Image Guidelines

- **Screenshots**: Use PNG format, aim for 1920x1080 or similar aspect ratio
- **Diagrams**: PNG or SVG, keep them simple and clear
- **Icons**: SVG format preferred for scalability
- **File naming**: Use lowercase with underscores (e.g., `cube_lighting.png`)

## Creating Diagrams

You can create simple architecture diagrams using:
- [draw.io](https://app.diagrams.net/) - Free, web-based
- [Figma](https://www.figma.com/) - Professional design tool
- PowerPoint/Keynote - Export as PNG

Even simple diagrams add significant value and make the documentation feel more professional.
