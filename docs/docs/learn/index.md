---
sidebar_position: 0
title: Learn by Building
pagination_next: docs/learn/dev-environment-setup
---

# Learn by Building

This section provides a structured learning path for VertexNova Engine, with **multi-backend considerations** throughout.

Every chapter maps to working code. Every concept ends with something you can run.

## Start Here

| Chapter | What You'll Do |
|---------|----------------|
| [00: Dev Environment Setup](./dev-environment-setup) | Set up Linux, Windows, or macOS — compilers, Vulkan SDK, MoltenVK, IDEs, tools |
| [01: Hello VertexNova](./01-hello-vertexnova) | Clone vnetemplate, build, run your first program |
| [02: Adding Logging](./02-adding-logging) | Use logging (and optional rename) in the template project |
| [03: Events and vneevents](./03-events-and-vneevents) | Why events matter, the vneevents API, and trying it with vnetestbed (GLFW + OpenGL) |

## Coming Soon

More chapters (windowing, rendering, and beyond) will be added as the engine and docs evolve. See the [Roadmap](/docs/docs/roadmap) for current plans.

## Multi-Backend Considerations

Throughout the learning path, you'll encounter notes about:

- **Backend Differences**: How features vary across Vulkan, Metal, and OpenGL
- **API Mapping**: How VertexNova's unified API maps to backend-specific calls
- **Best Practices**: Cross-platform rendering techniques
- **Debugging**: Backend-specific debugging strategies

## References

- [Git, GitHub & GitLab](/docs/docs/misc/git-reference) — Version control commands, rebase, cherry-pick, stash
- [CMake Build System](/docs/docs/misc/cmake-reference) — Build configuration, targets, find_package, generators
- [CMake Guidelines](/docs/cmake-coding-guidelines) — Coding standards for CMake (naming, structure, best practices)

## Next Steps

- Explore the [Demos](/docs/docs/demos) page to see working examples
- Check the [Roadmap](/docs/docs/roadmap) for current feature status
- Review the [Project Overview](/docs/docs/overview) for architecture insights
