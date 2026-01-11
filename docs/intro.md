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

### Running Examples

```bash
# After building, run examples
./bin/example_name
```

## Architecture Overview

VertexNova is organized into several key components:

- **xgl** - Multi-backend rendering layer
- **xwin** - Platform and window/input utilities
- **xviz** - Visualization helpers and utilities

## Next Steps

- [Installation Guide](/docs/installation) - Detailed setup instructions
- [API Documentation](/docs/api) - Explore the API reference
- [Examples](/docs/examples) - Learn from sample code
- [Backend Support](/docs/backends) - Understand backend capabilities

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
