---
sidebar_position: 1
title: Learn
---

# Learn VertexNova

This section provides a structured learning path for VertexNova Engine, similar to LearnOpenGL but with **multi-backend considerations** throughout.

Every chapter maps to working code. Every concept ends with something you can run.

## Start Here

| Chapter | What You'll Build |
|---------|-------------------|
| [00: Hello VertexNova](./hello-vertexnova) | Minimal CMake project — your engine skeleton |
| [01: Adding Logging](./adding-logging) | Replace std::cout with vnelogging — colors, timestamps, file output |

## Coming Soon

### Fundamentals

1. **Window & Platform Setup** (`02_window`, `03_gui`)
   - Window creation and management
   - Platform abstraction (`xwin`)
   - ImGui integration for debugging

2. **Basic Rendering** (`04_triangle`, `05_quad`, `06_cube`)
   - Vertex buffers and layouts
   - Shader compilation and usage
   - Basic pipeline setup
   - 3D transforms and depth testing

3. **Textures & Materials** (`07_texturing`)
   - Texture loading and management
   - Samplers and UV mapping
   - Material systems

### Intermediate Topics

4. **Advanced Rendering** (`05_two_cubes`, `06_instancing`)
   - Multiple objects and draw calls
   - Instanced rendering
   - Performance optimization

5. **Render Targets** (`09_render_targets`)
   - Offscreen rendering
   - Framebuffers and attachments
   - Render passes

6. **Anti-aliasing** (`07_msaa`)
   - Multisample anti-aliasing
   - Cross-backend MSAA differences
   - Resolve operations

### Advanced Features

7. **Camera & Input** (`10_camera_controller`)
   - Camera mathematics
   - Input handling
   - View/projection matrices

8. **Lighting** (`12_lighting`)
   - Lighting models
   - Normal mapping
   - Material properties

9. **Asset Loading** (`14_mesh`)
   - Mesh loading and processing
   - Complex geometry handling

10. **Extended Reality** (`58_hello_xr`)
    - XR/VR integration
    - Platform-specific XR APIs

## Multi-Backend Considerations

Throughout the learning path, you'll encounter notes about:

- **Backend Differences**: How features vary across Vulkan, Metal, and OpenGL
- **API Mapping**: How VertexNova's unified API maps to backend-specific calls
- **Best Practices**: Cross-platform rendering techniques
- **Debugging**: Backend-specific debugging strategies

## Next Steps

- Explore the [Demos](/docs/docs/demos) page to see working examples
- Check the [Roadmap](/docs/docs/roadmap) for current feature status
- Review the [Project Overview](/docs/docs/overview) for architecture insights
