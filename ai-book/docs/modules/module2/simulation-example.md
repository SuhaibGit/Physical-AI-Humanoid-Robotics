# Simple Hands-On Simulation Example: Gazebo + ROS 2

This example demonstrates how to create a simple simulation environment with a robot in Gazebo and control it using ROS 2. We'll use the TurtleBot3 as an example robot, which is a common choice for educational and research purposes.

## Prerequisites

*   ROS 2 (Humble Hawksbill or later recommended)
*   Gazebo Garden or Ignition Fortress
*   `ros_gz` packages
*   TurtleBot3 simulation packages (e.g., `turtlebot3_gazebo`)

Install the necessary packages:

```bash
sudo apt update
sudo apt install ros-<ros2-distro>-turtlebot3 ros-<ros2-distro>-turtlebot3-gazebo ros-<ros2-distro>-ros-gz
```

Set the required environment variables for TurtleBot3:

```bash
export TURTLEBOT3_MODEL=burger
```

## Launching the Simulation

1.  **Start Gazebo with a world and the robot**:
    ```bash
    ros2 launch turtlebot3_gazebo empty_world.launch.py
    ```
    This command launches Gazebo with an empty world and a TurtleBot3 Burger model spawned at the origin.

2.  **In a new terminal, send velocity commands**:
    ```bash
    ros2 topic pub /cmd_vel geometry_msgs/msg/Twist '{linear: {x: 0.5}, angular: {z: 0.2}}'
    ```
    This command publishes a `Twist` message to the `/cmd_vel` topic, commanding the robot to move forward at 0.5 m/s and rotate counter-clockwise at 0.2 rad/s. The robot in Gazebo should start moving according to these commands.

## Understanding the Flow

1.  The `turtlebot3_gazebo` launch file sets up the Gazebo simulation environment and includes the TurtleBot3 URDF model.
2.  It also starts the necessary ROS 2 nodes and bridges (using `ros_gz_bridge`) to connect Gazebo's internal topics (like `/model/turtlebot3/cmd_vel`) with ROS 2 topics (like `/cmd_vel`).
3.  When you publish to `/cmd_vel`, the bridge forwards this command to Gazebo.
4.  Gazebo processes the command and updates the robot's state (position, velocity).
5.  The updated robot state is visualized in the Gazebo GUI.

## Extending the Example

You can extend this basic example by:
*   Adding obstacles or a more complex map using a different world file (e.g., `turtlebot3_world.launch.py`).
*   Implementing a ROS 2 node in Python or C++ to autonomously control the robot based on sensor data (e.g., using LiDAR data from `/scan` topic).
*   Using navigation2 stack for path planning and autonomous navigation within the Gazebo world.