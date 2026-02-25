---
sidebar_position: 7
title: Status
---

# Current Status

An honest snapshot of where VertexNova stands today. For the high-level trajectory, see the [Roadmap](/docs/docs/roadmap).

## Done — Core Renderer

Confirmed working on Metal, Vulkan, OpenGL 4.x, and OpenGL ES:

- Mesh rendering, Phong shading, PBR lighting, texturing
- Deferred shading pipeline, MSAA, shadow maps
- Lights & camera, compute shaders (bitonic sort)

See [Demos](/docs/docs/demos) for the full list.

## In Progress — Phase 1

Hardening the foundation before higher-level systems:

- **Infrastructure**: Modular library split, vnecmake, vnecrossshader, vnetestbed, CI/CD
- **New demos**: OIT, object picking, text rendering, line/volume rendering, multi-viewport, multi-window
- **Docs**: This site and per-library READMEs

## Next — Phase 2

Once Phase 1 is stable:

- **vnecrossviz**: ECS core, material system, scene graph, multi-pass pipeline
- **VNE Editor**: Scene tree, inspector, live multi-backend viewport, asset browser
- **InVisual demo**: Full-stack reference — every backend, every path, one scene

## On the Horizon

No committed timelines: Animation (skeletal mesh, GPU skinning), XR & spatial (OpenXR, visionOS), performance (indirect rendering, LOD, cascaded shadows), scripting (C#/.NET), asset pipeline (GLTF, texture compression).

## Project Cadence

Developed on **weekends and evenings**. Priority: working, tested, documented — in that order. Watch progress at [GitHub](https://github.com/vertexnova).

## See Also

- [Demos](/docs/docs/demos) — What's running today
- [Roadmap](/docs/docs/roadmap) — High-level trajectory
- [Architecture](/docs/docs/overview-architecture) — How the libraries fit together
- [Overview](/docs/docs/overview) — What the engine is
