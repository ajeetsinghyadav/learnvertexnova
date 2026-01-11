// @ts-check

/**
 * Sidebar configuration for VertexNova documentation
 * LearnOpenGL-style structure with nested sections
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Learn',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'docs/learn/index',
          label: 'Learning Path',
        },
        {
          type: 'category',
          label: 'Fundamentals',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Window & Platform Setup',
            },
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Basic Rendering',
            },
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Textures & Materials',
            },
          ],
        },
        {
          type: 'category',
          label: 'Intermediate',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Advanced Rendering',
            },
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Render Targets',
            },
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Anti-aliasing',
            },
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Camera & Input',
            },
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Lighting',
            },
            {
              type: 'doc',
              id: 'docs/learn/index',
              label: 'Asset Loading',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'docs/demos/index',
      label: 'Demos',
    },
    {
      type: 'doc',
      id: 'docs/roadmap',
      label: 'Roadmap',
    },
    {
      type: 'doc',
      id: 'docs/overview',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'about',
      label: 'About',
    },
  ],
};

export default sidebars;
