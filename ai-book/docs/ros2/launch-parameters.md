---
next:
  title: "rclpy Basics"
  description: "Learn the basics of the Python client library for ROS 2"
---

# ROS 2 Launch Files and Parameters

As robotic applications grow, manually starting each node becomes slow and error-prone. Launch files let you start multiple nodes, configure them, and manage their relationships from a single entry point. When combined with parameters, they provide a flexible way to adjust behavior without rewriting code.

---

## 1. ROS 2 Launch Files

A **launch file** is an XML or Python script that automates the startup of nodes and related processes. It acts as an orchestration tool that helps you bring up a full robotic system with one command.

### Key Features

- **Node execution** – Start specific nodes with names, namespaces, arguments, and output settings.  
- **Parameter assignment** – Load initial parameter values automatically.  
- **Topic/service remapping** – Change communication interfaces without editing code.  
- **Conditional execution** – Start nodes only when certain conditions are met.  
- **Reusability** – Include other launch files to build modular systems.  
- **Logging options** – Choose where to send log output.

### Python Launch Files (Recommended)

Python launch files are preferred because they’re expressive, reusable, and easier to maintain.

**Example: `my_robot_launch.launch.py`**

```python
import os
from ament_index_python.packages import get_package_share_directory
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    my_package_dir = get_package_share_directory('my_robot_description')

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        name='robot_state_publisher',
        output='screen',
        parameters=[
            os.path.join(my_package_dir, 'config', 'robot.urdf.xacro'),
            {'use_sim_time': True}
        ]
    )

    talker_node = Node(
        package='demo_nodes_py',
        executable='talker',
        name='my_talker',
        output='screen',
        remappings=[('/chatter', '/robot/speech')]
    )

    listener_node = Node(
        package='demo_nodes_py',
        executable='listener',
        name='my_listener',
        output='screen'
    )

    return LaunchDescription([
        robot_state_publisher_node,
        talker_node,
        listener_node
    ])
