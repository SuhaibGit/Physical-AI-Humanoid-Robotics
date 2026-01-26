import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Physical-AI-Humanoid-Robotics/blog',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog', '889'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/archive',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/archive', '2b1'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/authors',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/authors', 'aed'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/authors/all-sebastien-lorber-articles', 'c53'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/authors/yangshun',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/authors/yangshun', '6a0'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/first-blog-post',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/first-blog-post', '4b2'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/long-blog-post',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/long-blog-post', 'a20'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/mdx-blog-post',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/mdx-blog-post', 'd69'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/tags',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/tags', '200'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/tags/docusaurus',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/tags/docusaurus', '37e'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/tags/facebook',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/tags/facebook', 'f87'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/tags/hello',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/tags/hello', 'e54'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/tags/hola',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/tags/hola', 'f1c'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/blog/welcome',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/blog/welcome', '894'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/markdown-page',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/markdown-page', 'aa8'),
    exact: true
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/docs',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs', '4b2'),
    routes: [
      {
        path: '/Physical-AI-Humanoid-Robotics/docs',
        component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs', 'c93'),
        routes: [
          {
            path: '/Physical-AI-Humanoid-Robotics/docs',
            component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs', '473'),
            routes: [
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/', 'f3d'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/gazebo-unity/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/gazebo-unity/', '405'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/intro',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/intro', '49e'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/creating-worlds',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/creating-worlds', 'bdd'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/digital-twins',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/digital-twins', '84b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/gazebo-intro',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/gazebo-intro', '396'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/gazebo-ros2-integration',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/gazebo-ros2-integration', '427'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/industry-usecases',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/industry-usecases', '41b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/simulation-example',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/simulation-example', 'f6c'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/spawning-robots',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/spawning-robots', 'b92'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/unity-frontend',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/unity-frontend', 'da6'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module2/unity-robotics-overview',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module2/unity-robotics-overview', 'f20'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/example-navigation-or-perception',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/example-navigation-or-perception', '108'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/fm-for-robotics',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/fm-for-robotics', '59b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/gpu-robotics',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/gpu-robotics', '457'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-humanoid-robotics',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-humanoid-robotics', '6a6'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-overview',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-overview', '05f'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-ros',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-ros', '7c1'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-sim-basics',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/isaac-sim-basics', 'a0b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/perception-pipelines',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/perception-pipelines', '8e1'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module3/rl-workflows',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module3/rl-workflows', '8c9'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/action-generation',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/action-generation', 'c82'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/dataset-design',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/dataset-design', 'ffa'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/evolution-of-vlm-to-vla',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/evolution-of-vlm-to-vla', 'e4c'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/humanoid-vla-example',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/humanoid-vla-example', '299'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/intro-to-vla',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/intro-to-vla', '3f6'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/perception-pipelines',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/perception-pipelines', '741'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/safety-and-failures',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/safety-and-failures', 'a7d'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/training-pipelines',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/training-pipelines', '8e6'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/vla-models',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/vla-models', '72b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/modules/module4/world-models-and-actions',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/modules/module4/world-models-and-actions', 'd39'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/nvidia-isaac/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/nvidia-isaac/', '852'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/', 'f1a'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/architecture',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/architecture', '01f'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/launch-parameters',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/launch-parameters', '7ab'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/nodes-topics-services-actions',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/nodes-topics-services-actions', '60b'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/packages-workspace',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/packages-workspace', 'c79'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/pub-sub-examples',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/pub-sub-examples', '281'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/rclpy-basics',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/rclpy-basics', '364'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/simple-ros2-node',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/simple-ros2-node', '3e6'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/ros2/urdf-overview',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/ros2/urdf-overview', '157'),
                exact: true,
                sidebar: "modulesSidebar"
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/congratulations', '0f4'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/create-a-blog-post', '346'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/create-a-document', '0d0'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/create-a-page', '993'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/deploy-your-site', 'ade'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-basics/markdown-features', '815'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-extras/manage-docs-versions', '9a3'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/tutorial-extras/translate-your-site', '5b8'),
                exact: true
              },
              {
                path: '/Physical-AI-Humanoid-Robotics/docs/vla/',
                component: ComponentCreator('/Physical-AI-Humanoid-Robotics/docs/vla/', '77d'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Physical-AI-Humanoid-Robotics/',
    component: ComponentCreator('/Physical-AI-Humanoid-Robotics/', '63e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
