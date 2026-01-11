---
sidebar_position: 2
title: Demos
---

# Demos

This page is the **proof** section of VertexNova: small, runnable examples that validate a feature and act as copy‑paste templates.

## How to run demos (example)

> Update these commands to match your repo’s actual demo runner.

```bash
./build/bin/vertexnova_demo --list
./build/bin/vertexnova_demo --run textured_cube --backend vulkan
```

## Recommended “portfolio set”

| Demo | What it demonstrates | Why it matters |
|---|---|---|
| Textured Cube | textures + samplers + UVs | baseline graphics correctness |
| Lighting | normals + material/shading | common engine feature |
| MSAA | multisample + resolve | cross-backend edge cases |
| Offscreen RenderTarget | render passes + compositing | real engine workflow |
| Instancing | per-instance data + performance | modern rendering |
| ImGui Overlay | UI/debug integration | practical tooling |

## Add screenshots/GIFs

Put media under `static/img/demos/` and embed like this:

```md
![Textured Cube](/img/demos/textured-cube.png)
```
