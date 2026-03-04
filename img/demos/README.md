# Demo Screenshots

Screenshots and GIFs for VertexNova demos. Add images here to display them on the [Demos page](/docs/docs/demos).

## Naming Convention

Use the **exact demo binary name** + extension:

| Demo Binary | Screenshot File |
| ---------- | --------------- |
| `00_DemoWindow` | `00_DemoWindow.png` |
| `02_DemoTriangle` | `02_DemoTriangle.png` |
| `04_DemoCube` | `04_DemoCube.png` |
| `08_DemoTexturing` | `08_DemoTexturing.png` |
| `12_DemoLighting` | `12_DemoLighting.png` |
| etc. | etc. |

**Optional:** Add backend suffix for platform-specific shots: `04_DemoCube_metal.png`, `04_DemoCube_vulkan.png`

## Do You Need Screenshots for All Demos?

**No.** Start with 8–12 visually interesting demos:

| Priority | Demos to capture first |
| -------- | ---------------------- |
| **High** | `04_DemoCube`, `08_DemoTexturing`, `12_DemoLighting`, `14_DemoShadows`, `15_DemoDeferred`, `18_DemoPBRDirect`, `19_DemoPBRTextured` |
| **Medium** | `05_DemoTwoCubes`, `06_DemoInstancing`, `20_DemoWireframe`, `17_BitonicSort` |
| **Low** | `00_DemoWindow`, `01_DemoGui`, `02_DemoTriangle`, `03_DemoQuad` (simple; optional) |

One screenshot per demo from **one platform** (e.g. Metal on macOS) is enough. Per-backend screenshots are optional.

## How to Capture

1. Run the demo: `./04_DemoCube` (from your build bin directory)
2. Screenshot: `Cmd+Shift+4` (macOS) or `Win+Shift+S` (Windows)
3. Save as: `static/img/demos/04_DemoCube.png`
4. Optional: Record a short GIF for animated demos (e.g. `12_DemoLighting.gif`)

## Supported Platforms

- **Metal** — macOS, iOS Sim, visionOS
- **Vulkan** — Windows, Linux, macOS (MoltenVK)
- **OpenGL** — Windows, Linux, macOS
- **Web** — WebGL (browser)

Capture from whichever platform you have. Metal on macOS is a good default.
