
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/next',
    component: ComponentCreator('/next','eaf'),
    routes: [
      {
        path: '/next/',
        component: ComponentCreator('/next/','f7b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-basics/congratulations',
        component: ComponentCreator('/next/tutorial-basics/congratulations','6ff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/next/tutorial-basics/create-a-blog-post','fea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-basics/create-a-document',
        component: ComponentCreator('/next/tutorial-basics/create-a-document','e5b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-basics/create-a-page',
        component: ComponentCreator('/next/tutorial-basics/create-a-page','a84'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/next/tutorial-basics/deploy-your-site','f89'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-basics/markdown-features',
        component: ComponentCreator('/next/tutorial-basics/markdown-features','20b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/next/tutorial-extras/manage-docs-versions','b5c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/next/tutorial-extras/translate-your-site',
        component: ComponentCreator('/next/tutorial-extras/translate-your-site','189'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','275'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','69e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/congratulations',
        component: ComponentCreator('/tutorial-basics/congratulations','513'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/tutorial-basics/create-a-blog-post','f3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-document',
        component: ComponentCreator('/tutorial-basics/create-a-document','4a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/create-a-page',
        component: ComponentCreator('/tutorial-basics/create-a-page','7d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/tutorial-basics/deploy-your-site','08b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-basics/markdown-features',
        component: ComponentCreator('/tutorial-basics/markdown-features','ed1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/tutorial-extras/manage-docs-versions','83e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/tutorial-extras/translate-your-site',
        component: ComponentCreator('/tutorial-extras/translate-your-site','1b4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
