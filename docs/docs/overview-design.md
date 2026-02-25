---
sidebar_position: 6
title: Design
---

# Design Principles

VertexNova is built around a small set of deliberate engineering decisions that shape how every library is written.

## C++ Standard

The engine requires **C++17** as a minimum and uses **C++20** where it adds clarity (e.g. concepts, ranges, designated initializers, `std::span`). The philosophy: **clarity over cleverness**. If a simpler solution exists, it wins.

## Thin Abstractions (vnecrossgl)

`vnecrossgl` doesn't hide the GPU — it unifies access to it with a common abstraction and backend-specific implementations. You still reason about devices, queues, buffers, and pipelines.

**Unified API concepts:**
- **Graphics factory** — entry point to create backend-specific objects
- **Physical device** — GPU/adapter selection and capabilities
- **Device** — logical device, resource creation
- **Queue** — command submission (graphics, compute, transfer)
- **Buffer** — common buffer abstraction (vertex, index, uniform, storage)
- **Encoder** — command encoding (draw, dispatch, copy)
- **Shader programs & pipeline** — compiled shaders and pipeline state

**Backends:** Metal, Vulkan, OpenGL, and OpenGL ES each implement this abstraction. The same application code can run on any backend by swapping the implementation. Heavy abstractions hide GPU details; VertexNova keeps the mental model visible so you learn how GPUs work.

## Single Shader Source

Shaders are written **once** in Vulkanized GLSL 4.5. `vnecrossshader` compiles to SPIR-V, then SPIRV-Cross generates MSL, GLSL, HLSL, and WGSL. No per-backend shader files — single-source eliminates divergence bugs.

## Strict Ownership

Every resource has a clear, explicit owner. RAII wrappers everywhere, move semantics for ownership transfer, predictable lifetimes. Graphics APIs are unforgiving about resource lifetime; strict ownership makes bugs rare and easy to find.

## Independent Libraries

Every `vne*` library is independently buildable, testable, and documented. You can clone `vnemath`, build it, and run tests without touching `vnecrossgl`. This keeps each library focused and makes the codebase approachable.

## Incremental Progress

"Solid" means: working demos, unit tests, documentation, CI/CD. Nothing moves to the next phase until the current one is solid. A working demo with good docs is worth more than three half-finished features.

## What This Isn't

- **Not a game engine (yet)** — no physics, audio, or scripting runtime. A rendering engine with a scene graph; game-engine features may come later.
- **Not max-throughput optimized** — readable code and clarity over squeezing the last few percent of GPU utilization.
- **Not API-complete** — the abstraction covers what's needed for the current demo set; it grows with the project.

## Current Focus

The codebase is in a phase of **almost-complete refactoring** with an emphasis on **more testing**. APIs and structure are stabilizing; demos and documentation are being brought in line with the design. Solid tests and consistent patterns take priority over new features right now.

## See Also

- [Architecture](/docs/docs/overview-architecture) — Library structure and dependency rules
- [Roadmap](/docs/docs/roadmap) — What's built and what's next
- [Overview](/docs/docs/overview) — What the engine is and why it exists
