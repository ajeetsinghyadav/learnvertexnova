---
sidebar_position: 3
title: Roadmap
---

# Roadmap

This roadmap reflects the current status and planned development for VertexNova Engine. It's intentionally honest about what works today, what's in progress, and what's planned.

## Feature Support Matrix

| Feature | OpenGL | Vulkan | Metal | Web (WebGL) |
|---|:---:|:---:|:---:|:---:|
| Basic triangle/cube | ✅ | ✅ | ✅ | ✅ |
| Textures | ✅ | ✅ | ✅ | ✅ |
| Shaders | ✅ | ✅ | ✅ | ✅ |
| Depth/Blending | ✅ | ✅ | ✅ | ✅ |
| MSAA | ✅ | ⚠️ WIP | ✅ | ⚠️ Partial |
| Render Targets | ✅ | ⚠️ WIP | ✅ | ⚠️ Partial |
| ImGui Integration | ✅ | ⚠️ WIP | ✅ | ⚠️ Partial |
| Instancing | ⚠️ Planned | ⚠️ Planned | ⚠️ Planned | ❌ |
| Picking | ⚠️ Planned | ⚠️ Planned | ⚠️ Planned | ❌ |

**Legend:**
- ✅ Stable and working
- ⚠️ In progress or partial support
- ❌ Not yet implemented

## Platform Support

| Platform | OpenGL | Metal | Vulkan | WebGL |
|---|---|---|---|---|
| macOS | ✅ | ✅ | ⚠️ WIP | N/A |
| iOS | N/A | ✅ | ⚠️ WIP | ✅ |
| Windows | ✅ | N/A | ⚠️ WIP | N/A |
| Linux | ✅ | N/A | ⚠️ WIP | N/A |
| Web (Emscripten) | N/A | N/A | N/A | ✅ |

## Short-term Goals

- **Vulkan Backend**: Complete first Vulkan demo and stabilize basic pipeline
- **Demo Coverage**: Expand demo suite to cover all core features
- **Documentation**: Complete learning materials and API documentation
- **Build System**: Improve cross-platform build pipelines and CI/CD

## Mid-term Goals

- **Backend Parity**: Achieve feature parity across all backends where possible
- **Performance**: Add profiling tools and optimization guides
- **Debugging**: Improve validation layers and debugging tooling
- **Content Pipeline**: Basic asset loading and content management

## Long-term Vision

- **Animation System**: Basic skeletal animation support
- **Scene Graph**: Hierarchical scene representation
- **Physics Integration**: Basic physics playground
- **Editor Tools**: Simple scene editor and tooling
- **Advanced Rendering**: Shadows, post-processing, advanced lighting

## Contributing

If you're interested in contributing to any of these goals, check out the [GitHub repository](https://github.com/ajeetsinghyadav/vertexnova) for contribution guidelines.
