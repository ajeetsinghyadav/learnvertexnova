---
sidebar_position: 1
---

# Getting Started with VertexNova

Welcome to **VertexNova Engine (VNE)** - a modern, multi-platform rendering and visualization engine.

## What is VertexNova?

VertexNova Engine is a 3D rendering engine designed for clarity, portability, and steady evolution. It provides:

- **Multi-backend rendering** - Unified API across OpenGL Desktop, OpenGL ES/WebGL, Metal, and Vulkan (WIP)
- **Cross-platform support** - macOS, iOS, Windows, Linux, and Web (Emscripten)
- **Modern C++ design** - Clean architecture with strict ownership and predictable lifetimes
- **Thin abstractions** - Clear layering with explicit control

## Quick Start

### Prerequisites

- **C++17** or later compiler
- **CMake** 3.15 or later
- Platform-specific dependencies (see [Installation Guide](/docs/installation))

### Building VertexNova

```bash
# Clone the repository
git clone https://github.com/ajeetsinghyadav/vertexnova.git
cd vertexnova

# Initialize submodules
git submodule update --init --recursive

# Configure and build
mkdir build && cd build
cmake ..
cmake --build .
```

### Running Samples

```bash
# After building, navigate to build directory
cd build

# Run a sample (exact path depends on your build configuration)
./bin/sample_02_triangle
# or
./bin/sample_04_cube
```

See the [Demos](/docs/docs/demos) page for a complete list of available samples.

## Architecture Overview

VertexNova is organized into several key components:

- **xgl** - Multi-backend rendering layer
- **xwin** - Platform and window/input utilities
- **xviz** - Visualization helpers and utilities

## Next Steps

- [Learn VertexNova](/docs/docs/learn) - Structured learning path
- [View Demos](/docs/docs/demos) - Runnable examples and proof of concepts
- [Roadmap](/docs/docs/roadmap) - Current status and future plans
- [Project Overview](/docs/docs/overview) - Engineering highlights and architecture

## Resources

- [GitHub Repository](https://github.com/ajeetsinghyadav/vertexnova)
- [Development Setup](https://github.com/ajeetsinghyadav/vertexnova-devsetup)
- [Issues & Bug Reports](https://github.com/ajeetsinghyadav/vertexnova/issues)

## Design Philosophy

VertexNova follows these core principles:

- **Modern C++** with clarity over cleverness
- **Thin abstractions** and clear layering
- **Multi-backend design** via unified API
- **Build to learn** first; scale responsibly later
