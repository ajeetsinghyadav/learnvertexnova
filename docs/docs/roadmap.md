---
id: roadmap
title: Roadmap
sidebar_label: Roadmap
sidebar_position: 3
---

## VertexNova Roadmap

VertexNova is a multi-backend C++ graphics engine for 6 platforms and 4 graphics APIs. Built to be clean, modular, and educational.

[Connect on GitHub →](https://github.com/vertexnova)

---

## At a Glance

| Phase | Focus | Status |
| ----- | ----- | ------ |
| **Today** | 6 platforms, 4 APIs, core renderer, demos | ✅ Complete |
| **Phase 1** | Stabilise, test, document, new demos | 🔄 In Progress |
| **Phase 2** | ECS, scene system, material system, editor | 🔜 Planned |
| **Future** | Animation, XR, scripting, GPU-driven rendering | 🔭 Exploring |

---

## What Works Today

The engine runs on **Metal, Vulkan, OpenGL, and OpenGL ES**. Current features:

- **Rendering:** Meshes, Phong & PBR lighting, texturing, deferred shading
- **Quality:** MSAA, lights, camera control, shadow maps
- **Compute:** Compute shaders (e.g. bitonic sort)
- **Platforms:** macOS, iOS, Linux, Windows, Web, visionOS

Shaders are written once in GLSL and auto-compiled to MSL, GLSL, HLSL, and WGSL.

---

## Phase 1 — Stabilise · Test · Demo · Document

Status: In Progress

Hardening the foundation and adding demos.

- Modular libraries — each buildable and testable on its own
- Shared CMake build and CI/CD
- Unit tests and GPU debugging tools
- Docs and README per module
- New demos: OIT, object picking, text rendering, line/volume rendering, multi-viewport, multi-window


---

## Phase 2 — Scene System · Visualization · Editor

Status: Planned

Higher-level systems above the rendering backend.

- ECS runtime
- Material system (PBR, Phong, custom)
- Scene graph with meshes, lights, shadows
- Multi-pass rendering
- Visual editor: scene tree, viewport, asset browser
- Reference demo using the full stack

[Watch the repo →](https://github.com/vertexnova)

---

## Future Horizons

Explored but no fixed timelines:

| Area | Topics |
| ---- | ------ |
| **Animation** | Skeletal meshes, blend trees, morph targets, GPU skinning |
| **XR & Spatial** | OpenXR, visionOS, stereo/foveated rendering, AR passthrough |
| **Performance** | GPU-driven rendering, LOD, frustum culling, cascaded shadows, ray-traced shadows |
| **Scripting & Assets** | C# bridge with hot-reload, GLTF importer, texture compression, asset streaming |

---

## Get Involved

Personal project, built on weekends. Star the repo, try a demo, or open a discussion.

- [GitHub](https://github.com/vertexnova) — Source, issues, discussions
- [Demos](/docs/docs/demos) — Runnable examples
- [Documentation](/docs/docs/learn) — Learning path

---

Last updated: February 2026
