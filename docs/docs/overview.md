---
sidebar_position: 4
title: Overview
---

# Project Overview

VertexNova Engine is a personal learning project focused on building a clean, maintainable **multi-backend rendering engine** from the ground up.

## Quick Overview

- **What:** Multi-backend renderer/visualization engine supporting Vulkan, Metal, OpenGL, and WebGL
- **Why:** Learn engine architecture while building consistent abstractions, real demos, and practical learning material
- **Approach:** Small, incremental steps with working demos and thorough testing

## Project Goals

1. **Learn by Building**: Understand graphics engine architecture through hands-on implementation
2. **Multi-Backend Design**: Create clean abstractions that work across different graphics APIs
3. **Practical Examples**: Provide runnable demos that serve as both proof and learning resources
4. **Long-term Maintainability**: Build a codebase that can evolve and be maintained over time

## Architecture Highlights

### Core Components

- **xgl**: Multi-backend rendering layer providing unified API
- **xwin**: Platform and window/input utilities
- **xviz**: Visualization helpers and utilities

### Design Principles

- **Modern C++**: C++17+ with clarity over cleverness
- **Thin Abstractions**: Minimal overhead, explicit control
- **Strict Ownership**: Predictable lifetimes and resource management
- **Incremental Progress**: Build to learn, scale responsibly

## Engineering Focus Areas

### Cross-Backend Challenges

- **Resource Binding**: Unified resource binding strategy across Vulkan/Metal/OpenGL
- **Shader Reflection**: Consistent shader compilation and reflection
- **Render Targets**: Offscreen rendering and MSAA resolve differences
- **State Management**: Pipeline state caching and validation

### Debugging & Performance

- **Validation Layers**: Backend-specific validation and error reporting
- **Debug Markers**: API-agnostic debugging markers and tools
- **Performance Profiling**: Pipeline caching, batching, and optimization
- **Capture Tools**: Integration with graphics debugging tools

## Best Starting Points

- **[Getting Started](/docs/intro)**: Begin here for setup and quick start
- **[Learn VertexNova](/docs/docs/learn)**: Structured learning path
- **[Demos](/docs/docs/demos)**: Runnable examples and proof of concepts
- **[Roadmap](/docs/docs/roadmap)**: Current status and future plans

## Project Status

This is an active learning project. Progress is continuous but deliberate. The codebase aims to be readable, well-documented, and maintainable. For the latest status, see the [Roadmap](/docs/docs/roadmap) page.

## Resources

- [GitHub Repository](https://github.com/ajeetsinghyadav/vertexnova)
- [Development Setup](https://github.com/ajeetsinghyadav/vertexnova-devsetup)
- [Issues & Discussions](https://github.com/ajeetsinghyadav/vertexnova/issues)
