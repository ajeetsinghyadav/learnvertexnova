---
sidebar_position: 6
title: Design
---

# Design Principles

VertexNova is built around a small set of deliberate engineering decisions that shape how every library is written.

## C++20

The engine is written in **C++20** throughout — concepts, ranges, designated initializers, `std::span` where appropriate. The philosophy: **clarity over cleverness**. If a simpler solution exists, it wins.

## Thin Abstractions

`vnecrossgl` doesn't hide the GPU — it unifies access to it. You still reason about pipelines, render passes, and resource binding. The abstraction removes backend-specific syntax, not the mental model. Heavy abstractions hide GPU details; VertexNova prioritizes learning how GPUs work.

## Single Shader Source

Shaders are written **once** in Vulkanized GLSL 4.5. `vnecrossshader` compiles to SPIR-V, then SPIRV-Cross generates MSL, GLSL, HLSL, and WGSL. No per-backend shader files — single-source eliminates divergence bugs.

## Strict Ownership

Every resource has a clear, explicit owner. RAII wrappers everywhere, move semantics for ownership transfer, predictable lifetimes. Graphics APIs are unforgiving about resource lifetime; strict ownership makes bugs rare and easy to find.

## Independent Libraries

Every `vne*` library is independently buildable, testable, and documented. You can clone `vnemath`, build it, and run tests without touching `vnecrossgl`. This keeps each library focused and makes the codebase approachable.

## Incremental Progress

"Solid" means: working demos, unit tests, documentation, CI/CD. Nothing moves to the next phase until the current one is solid. A working demo with good docs is worth more than three half-finished features.

## What This Isn't

- **Not a game engine** — no physics, audio, scripting runtime (yet). A rendering engine with a scene graph.
- **Not max-throughput optimized** — readable code and clarity over squeezing the last few percent of GPU utilization.
- **Not API-complete** — the abstraction covers what's needed for the current demo set; it grows with the project.

## See Also

- [Architecture](/docs/docs/overview-architecture) — Library structure and dependency rules
- [Status](/docs/docs/overview-status) — What's built and what's next
- [Overview](/docs/docs/overview) — What the engine is and why it exists
