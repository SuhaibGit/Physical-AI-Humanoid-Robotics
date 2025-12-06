# Hands-On Example: Isaac Sim Navigation or Perception Pipeline

This hands-on example demonstrates how to set up a basic navigation or perception pipeline using Isaac Sim and ROS 2. We'll focus on a navigation scenario where a robot uses Isaac Sim for simulation and the navigation2 stack for path planning and execution.

## Prerequisites

*   ROS 2 Humble or later
*   Isaac Sim (Omniverse)
*   Navigation2 packages (`navigation2`, `nav2_bringup`)
*   isaac_sim ROS 2 bridge packages (`isaac_ros_gxf`, `isaac_ros_apriltag`)

## Setting Up the Simulation Environment

1.  **Launch Isaac Sim**:
    Start Isaac Sim and create a new stage or open an existing scene with a robot model (e.g., a differential drive robot) and a static map.

2.  **Configure the Robot**:
    Ensure your robot has appropriate sensors (e.g., a 2D LiDAR for navigation) and that it's properly configured for ROS 2 communication within Isaac Sim.

3.  **Set up the ROS 2 Bridge**:
    Configure the necessary bridges in Isaac Sim to connect Isaac Sim topics (like `/scan` for LiDAR, `/odom` for odometry, `/cmd_vel` for velocity commands) to ROS 2 topics.

## Launching the Navigation Stack

Create a ROS 2 launch file to bring up the navigation stack:

```python
# navigation_launch.py
import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():
    # Launch Arguments
    use_sim_time = LaunchConfiguration('use_sim_time', default='True')
    slam = LaunchConfiguration('slam', default='False')
    map_yaml_file = LaunchConfiguration('map', default=os.path.join(
        get_package_share_directory('nav2_bringup'), 'maps', 'turtlebot3_world.yaml'))
    nav2_params_file = LaunchConfiguration('params_file', default=os.path.join(
        get_package_share_directory('nav2_bringup'), 'params', 'nav2_params.yaml'))
    rviz_config_file = LaunchConfiguration('rviz_config', default=os.path.join(
        get_package_share_directory('nav2_bringup'), 'rviz', 'nav2_default_view.rviz'))

    # Launch navigation2
    navigation_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(os.path.join(
            get_package_share_directory('nav2_bringup'), 'launch', 'navigation_launch.py')),
        launch_arguments={
            'use_sim_time': use_sim_time,
            'params_file': nav2_params_file}.items())

    # Launch SLAM (optional, for mapping)
    slam_toolbox_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(os.path.join(
            get_package_share_directory('slam_toolbox'), 'launch', 'online_async_launch.py')),
        condition=IfCondition(slam),
        launch_arguments={
            'use_sim_time': use_sim_time,
            'params_file': os.path.join(
                get_package_share_directory('slam_toolbox'), 'config', 'mapper_params_online_async.yaml')}.items())

    # Launch RViz
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        arguments=['-d', rviz_config_file],
        parameters=[{'use_sim_time': use_sim_time}],
        output='screen')

    return LaunchDescription([
        DeclareLaunchArgument(
            'use_sim_time',
            default_value='True',
            description='Use simulation (Gazebo) clock if true'),

        DeclareLaunchArgument(
            'slam',
            default_value='False',
            description='Whether to run SLAM'),

        DeclareLaunchArgument(
            'map',
            default_value=os.path.join(get_package_share_directory('turtlebot3_slam'), 'maps', 'map.yaml'),
            description='Full path to map file to load'),

        DeclareLaunchArgument(
            'params_file',
            default_value=nav2_params_file,
            description='Full path to the ROS2 parameters file to use for all launched nodes'),

        DeclareLaunchArgument(
            'rviz_config',
            default_value=rviz_config_file,
            description='Full path to the RVIZ config file to use'),

        navigation_launch,
        slam_toolbox_launch,
        rviz_node,
    ])
```

## Running the Example

1.  **Start Isaac Sim**: Load your scene with the robot and environment.
2.  **Launch the Bridge**: Start the ROS 2 bridge within Isaac Sim to connect robot topics.
3.  **Launch Navigation**: Run the ROS 2 launch file:
    ```bash
    ros2 launch my_robot_navigation navigation_launch.py
    ```
4.  **Send Navigation Goals**: Use RViz to set a 2D Pose Estimate (initial localization) and then send a 2D Navigation Goal.

## Understanding the Pipeline

1.  **Sensing**: The robot's LiDAR in Isaac Sim publishes scan data to the `/scan` topic.
2.  **Localization**: The navigation stack uses the map and sensor data to determine the robot's position (AMCL node).
3.  **Path Planning**: The global planner computes a path from the robot's current position to the goal.
4.  **Path Following**: The local planner (e.g., DWA or Trajectory Rollout) generates velocity commands (`/cmd_vel`) to follow the path while avoiding obstacles.
5.  **Control**: Isaac Sim receives the velocity commands and updates the robot's simulation accordingly.

## Alternative: Perception Pipeline Example

For a perception-focused example, you could:

1.  Use Isaac Sim to simulate a robot with a camera.
2.  Bridge the camera image and camera info topics to ROS 2.
3.  Use Isaac ROS packages (e.g., `isaac_ros_detectnet` for object detection, `isaac_ros_segmentation` for semantic segmentation) to process the camera feed.
4.  Visualize the results in RViz or use them for further robot actions.

This example demonstrates the integration between Isaac Sim's high-fidelity simulation and ROS 2's rich ecosystem of navigation and perception tools.