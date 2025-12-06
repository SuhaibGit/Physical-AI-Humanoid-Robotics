# Gazebo-ROS 2 Integration (ros_gz)

Integrating Gazebo with ROS 2 is crucial for developing and testing robot applications that leverage ROS 2's powerful communication and ecosystem. The `ros_gz` package provides the necessary bridges to enable seamless data exchange between Gazebo (Ignition) and ROS 2.

## Understanding `ros_gz`

`ros_gz` is a collection of ROS 2 packages that provide interfaces between ROS 2 and Ignition Gazebo. It allows ROS 2 nodes to publish commands to Gazebo-simulated robots and subscribe to sensor data published by Gazebo.

## Key Components

*   **`ros_gz_sim`**: Contains the core bridge for basic communication, including clock synchronization and parameter handling.
*   **`ros_gz_bridge`**: Provides a generic bridge for converting messages between ROS 2 and Gazebo topics.
*   **`ros_gz_image`**: Specifically designed for bridging image data from Gazebo cameras to ROS 2 image topics.

## Installation

First, ensure you have ROS 2 and Ignition Gazebo installed. Then, you can install `ros_gz` from source or via binaries (if available for your ROS 2 distribution).

```bash
sudo apt install ros-<ros2-distro>-ros-gz # For binary install
```

For source installation, clone the repository into your ROS 2 workspace:

```bash
cd ~/ros2_ws/src
git clone https://github.com/ros-ign/ros_gz.git -b <ros2-distro>
cd ..
rosdep install --from-paths src --ignore-src -r -y
colcon build --packages-up-to ros_gz
```

## Bridging Topics

The `ros_gz_bridge` package allows you to create custom bridges for specific topics. You can define these in a YAML file or directly in a launch file.

### Example: Bridging a Command Velocity Topic

To control a robot in Gazebo using ROS 2 `cmd_vel` messages, you would typically bridge the ROS 2 `/cmd_vel` topic to Gazebo's `/model/vehicle_blue/cmd_vel` topic (assuming a model named `vehicle_blue`).

```yaml
- ros_topic_name: /cmd_vel
  gz_topic_name: /model/vehicle_blue/cmd_vel
  ros_type_name: geometry_msgs/msg/Twist
  gz_type_name: ignition.msgs.Twist
  direction: ROS2_TO_GZ
```

This YAML configuration can be loaded by a `ros_gz_bridge` node in a ROS 2 launch file.

### Example: Bridging Sensor Data

To receive camera image data from Gazebo in ROS 2, you might bridge an Ignition camera topic to a ROS 2 `Image` topic.

```yaml
- ros_topic_name: /camera/image_raw
  gz_topic_name: /camera
  ros_type_name: sensor_msgs/msg/Image
  gz_type_name: ignition.msgs.Image
  direction: GZ_TO_ROS2
```

## Launching `ros_gz_bridge`

You can launch the bridge node within a ROS 2 launch file, specifying the YAML configuration or individual bridge arguments.

```python
import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():
    # Get the launch directory
    ros_gz_path = get_package_share_directory('ros_gz_sim')

    # Gazebo launch
    gazebo = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(os.path.join(ros_gz_path, 'launch', 'gazebo.launch.py')),
        launch_arguments={'gazebo_args': '-s -r -v 4 empty.sdf'}.items()
    )

    # Bridge
    bridge = Node(
        package='ros_gz_bridge',
        executable='parameter_bridge',
        arguments=[
            '/cmd_vel@geometry_msgs/msg/Twist[ignition.msgs.Twist',
            '/scan@sensor_msgs/msg/LaserScan[ignition.msgs.LaserScan',
            # Add more topics as needed
        ],
        output='screen'
    )

    return LaunchDescription([
        gazebo,
        bridge
    ])
```

This example shows how to launch Gazebo and the `ros_gz_bridge` to connect a `cmd_vel` topic and a `LaserScan` topic.