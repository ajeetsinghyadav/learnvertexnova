---
sidebar_position: 2
---

# About VertexNova

VertexNova Engine (VNE) is a modern, multi-platform rendering and visualization project focused on clarity, portability, and steady evolution.

## What and Why

VertexNova provides a clean C++ backbone with strict ownership and predictable lifetimes, a multi-backend rendering layer (`xgl`) for OpenGL Desktop, OpenGL ES/Web, Metal, and Vulkan (WIP), along with platform utilities (`xwin`) and visualization helpers (`xviz`).

## Key Features

### Multi-Backend Rendering

VertexNova's `xgl` layer provides a unified API across multiple graphics backends:

- **OpenGL Desktop** - Full OpenGL support for desktop platforms
- **OpenGL ES / WebGL** - Mobile and web rendering
- **Metal** - Native macOS and iOS rendering
- **Vulkan** - Modern low-level API (Work in Progress)

### Cross-Platform Support

- **macOS** - Native Metal and OpenGL support
- **iOS** - Metal and OpenGL ES
- **Windows** - OpenGL and Vulkan (WIP)
- **Linux** - OpenGL and Vulkan (WIP)
- **Web** - WebGL via Emscripten

### Modern C++ Design

- C++17+ with modern best practices
- Strict ownership semantics
- Predictable lifetimes
- Thin abstractions over platform APIs

## Design Principles

- **Modern C++** with clarity over cleverness
- **Thin abstractions** and clear layering
- **Multi-backend design** via unified API
- **Build to learn** first; scale responsibly later

## Current Status

- Simple demos run on macOS, iOS, OpenGL desktop, and Web (Emscripten/WebGL)
- Vulkan backend is in progress
- More demos and tests are being added to cover concepts thoroughly

## Roadmap

### Short-term
- Strengthen `xgl` multi-backend: OpenGL ES/Web, Metal; first Vulkan demo
- Expand demo coverage and automated tests
- Keep tightening platform build pipelines (macOS, iOS, Web)

### Mid-term
- Add more sample scenes (materials, textures, shadows, post-processing)
- Improve resource management, validation layers, and debug tooling
- Simple content pipeline and live-reload where possible

### Long-term
- Animation system, basic physics playground, scene graph/editor
- Deeper Vulkan feature set, cross-platform parity
- Performance profiling and scalability work

## Motivation

This project was started as a learning journey in computer graphics and engine architecture. The goal is to build a clean, modern codebase that can be maintained long-term while learning from excellent references like The Cherno's engine series, libigl, and LLGL.

## Quality and Testing

- Small demos to prove each concept in isolation
- Tests added as features land to avoid regressions
- CI runs across platforms where possible

## References

- [The Cherno's Game Engine Series](https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT)
- [LearnOpenGL](https://learnopengl.com/)
- [libigl (facebook/igl)](https://github.com/facebook/igl)
- [LLGL](https://github.com/LukasBanana/LLGL)
