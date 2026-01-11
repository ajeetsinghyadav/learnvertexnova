---
sidebar_position: 2
title: Demos
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Demos

This page showcases the **runnable examples** in VertexNova Engine. Each demo validates specific engine features and serves as both proof of concept and learning reference.

## Building and Running Demos

After building VertexNova, you can run examples from the build directory:

<Tabs>
<TabItem value="all" label="All Platforms" default>

```bash
# Navigate to build directory
cd build

# Run examples (exact path depends on your build configuration)
./bin/sample_02_triangle
./bin/sample_04_cube
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
cd build\Release
.\bin\sample_02_triangle.exe
.\bin\sample_04_cube.exe
```

</TabItem>
<TabItem value="macos" label="macOS">

```bash
cd build
./bin/sample_02_triangle
./bin/sample_04_cube
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
cd build
./bin/sample_02_triangle
./bin/sample_04_cube
```

</TabItem>
</Tabs>

For platform-specific build instructions, see the [Getting Started guide](/docs/intro) or check the [VertexNova repository](https://github.com/ajeetsinghyadav/vertexnova).

## Available Samples

VertexNova includes a growing suite of samples demonstrating various features:

### Basic Rendering

| Sample | Description | Features Demonstrated |
|---|---|---|
| `00_window` | Basic window creation | Window management, platform setup |
| `01_gui` | ImGui integration | UI overlay, debug tooling |
| `02_triangle` | Basic triangle rendering | Vertex buffers, shaders, pipeline |
| `03_quad` | Quad rendering | Index buffers, basic geometry |
| `04_cube` | 3D cube rendering | 3D transforms, depth testing |
| `05_two_cubes` | Multiple objects | Multiple draw calls, transforms |

### Advanced Features

| Sample | Description | Features Demonstrated |
|---|---|---|
| `06_instancing` | Instanced rendering | Per-instance data, performance |
| `07_msaa` | Multisample anti-aliasing | MSAA setup and resolve |
| `08_texturing` | Texture mapping | Texture loading, sampling, UVs |
| `09_render_targets` | Offscreen rendering | Render targets, framebuffers |
| `10_camera_controller` | Camera controls | Input handling, camera math |
| `12_lighting` | Lighting and shading | Normals, materials, lighting models |
| `14_mesh` | Mesh loading | Asset loading, complex geometry |
| `58_hello_xr` | XR/VR support | Extended reality integration |

### Examples

The `examples/` directory contains focused examples for specific features:

- **xgl examples**: Backend comparison, command buffers, device info, error handling
- **xviz examples**: Camera, lighting utilities
- **Backend-specific**: Metal, OpenGL, Vulkan examples

## Platform Support

Current demo availability across platforms:

- **macOS**: Metal and OpenGL demos working
- **iOS**: Metal and OpenGL ES demos working  
- **Windows**: OpenGL demos working, Vulkan WIP
- **Linux**: OpenGL demos working, Vulkan WIP
- **Web**: WebGL demos via Emscripten

## Contributing Demos

If you'd like to contribute a demo or example, please see the [GitHub repository](https://github.com/ajeetsinghyadav/vertexnova) for contribution guidelines.

## Screenshots and Media

Demo screenshots and videos can be added to `static/img/demos/` and embedded in documentation:

```md
![Demo Screenshot](/img/demos/demo-name.png)
```
