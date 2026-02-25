---
sidebar_position: 4
title: Overview
---

# VertexNova Engine — Overview

VertexNova is a **modern, multi-backend C++20 rendering engine** built from the ground up to run on every major graphics API and platform from a single codebase.

It targets **6 platforms** and **4 graphics APIs** simultaneously — and is designed to be readable, modular, and educational at every layer.

## The Problem It Solves

Most graphics projects pick one API and one platform. VertexNova's premise: **write it once, run it everywhere.** One unified API surface over Vulkan, Metal, OpenGL, and OpenGL ES. One shader source compiled automatically to MSL, GLSL, HLSL, and WGSL.

## Platform & API Coverage

| Platform | Backends |
|----------|----------|
| macOS | Metal, OpenGL 4.x |
| iOS | Metal, OpenGL ES |
| visionOS | Metal *(future)* |
| Windows | Vulkan, OpenGL 4.x |
| Linux | Vulkan, OpenGL 4.x |
| Web | WebGL / WebGPU via Emscripten |

## What Works Today

Confirmed features across Metal, Vulkan, OpenGL, and OpenGL ES: mesh rendering, Phong and PBR lighting, texturing, deferred shading, MSAA, shadows, compute shaders. See [Demos](/docs/docs/demos) for the full list.

## Shader Strategy

Shaders are written **once** in Vulkanized GLSL 4.5. The `vnecrossshader` library compiles to SPIR-V, then SPIRV-Cross generates MSL, GLSL, HLSL, and WGSL. Zero manual porting.

## Graphics Layer (Private)

The core graphics stack — `vnecrossgl`, `vnecrosswin`, `vnecrossviz`, and `vnecrossshader` — is developed as private libraries. They provide a unified rendering API, cross-platform windowing, ECS-based visualization, and the single-source shader pipeline that powers VertexNova. The public [vnetestbed](https://github.com/vertexnova/vnetestbed) repository lets you build and run demos that exercise this stack.

## Project Context

VertexNova is a **personal project** — built on weekends and evenings. Every library is independently buildable, testable, and documented.

## Where to Go Next

| Page | Description |
|------|-------------|
| [Architecture](/docs/docs/overview-architecture) | How the libraries fit together |
| [Design](/docs/docs/overview-design) | Engineering decisions behind the engine |
| [Roadmap](/docs/docs/roadmap) | What's done, in progress, and next |
| [Getting Started](/docs/intro) | Build and run your first demo |
| [Demos](/docs/docs/demos) | What the engine can render today |

## Resources

- [GitHub Organization](https://github.com/vertexnova) — Source code, issues, and discussions
