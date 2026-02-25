---
sidebar_position: 5
title: Architecture
---

# Architecture

VertexNova is organized as a **modular C++20 stack** — each library is independently buildable, testable, and documented. Dependencies only flow upward.

## Layer Overview

```
┌──────────────────────────────────────────────────────────────┐
│  APPLICATION LAYER                                           │
│  vneeditor · vnesamples · vnetestbed · vneviewer             │
├──────────────────────────────────────────────────────────────┤
│  GRAPHICS ABSTRACTION                                        │
│  vnecrossgl · vnecrosswin · vnecrossviz · vnecrossshader     │
├──────────────────────────────────────────────────────────────┤
│  CORE SYSTEMS                                                │
│  vnemath · vnelogging · vneevents · vneio                    │
│  vnecommon · vneutils · vnescene · vneinteraction            │
├──────────────────────────────────────────────────────────────┤
│  SHARED INFRASTRUCTURE                                       │
│  vnecmake · vneresource · vnetestbed · vnetemplate           │
├──────────────────────────────────────────────────────────────┤
│  EXTERNAL DEPENDENCIES                                       │
│  Vulkan · Metal · OpenGL/GLES · SPIRV-Cross · GLM · GLFW · ImGui · CMake
├──────────────────────────────────────────────────────────────┤
│  HARDWARE PLATFORMS                                          │
│  macOS · iOS · visionOS · Windows · Linux · Web              │
└──────────────────────────────────────────────────────────────┘
```

## Graphics Abstraction Layer

| Library | Role |
|---------|------|
| `vnecrossgl` | Unified rendering API — translates draw calls to Metal, Vulkan, OpenGL, or GLES |
| `vnecrosswin` | Cross-platform window and surface management (GLFW, iOS, Emscripten) |
| `vnecrossshader` | Shader pipeline: GLSL 4.5 → SPIR-V → MSL/GLSL/HLSL/WGSL |
| `vnecrossviz` | ECS visualization layer — entities, materials, multi-pass renders *(in development)* |

## Core Systems Layer

| Library | Responsibility |
|---------|----------------|
| `vnemath` | Vectors, matrices, quaternions, transforms |
| `vnelogging` | Structured logging, log levels |
| `vneevents` | Typed event bus, cross-module messaging |
| `vneio` | File system, asset loading, path resolution |
| `vnecommon` | Shared types, constants, error codes |
| `vneutils` | String helpers, timing, hashing |
| `vnescene` | Scene graph, node hierarchy, transforms |
| `vneinteraction` | Keyboard, mouse, touch, camera controllers |

No graphics API dependency. Each compiles and tests independently.

## Shared Infrastructure

| Module | Responsibility |
|--------|----------------|
| `vnecmake` | Shared CMake modules, compiler flags, platform detection |
| `vneresource` | Resource handles, ref counting, lifetime tracking |
| `vnetestbed` | GoogleTest framework for all libraries |
| `vnetemplate` | Starter template for new `vne*` libraries |

## Dependency Rule

- **Core systems** depend only on externals and each other
- **Graphics abstraction** depends on core systems and graphics APIs
- **Application layer** depends on graphics and core
- **Nothing in a lower layer may include a header from a higher layer**

`vnemath` does not know that `vnecrossgl` exists. This keeps every library independently buildable.

## See Also

- [Overview](/docs/docs/overview) — What the engine is and why it exists
- [Design](/docs/docs/overview-design) — Engineering decisions behind the architecture
- [Status](/docs/docs/overview-status) — What's built and what's next
- [Demos](/docs/docs/demos) — Runnable examples
