// @ts-check

/**
 * Sidebar configuration for VertexNova documentation
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mainSidebar: [
    'intro',
    'about',
    {
      type: 'doc',
      id: 'docs/learn/index',
      label: 'Learn',
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
  ],
};

export default sidebars;
