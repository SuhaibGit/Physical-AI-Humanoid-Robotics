# Isaac Sim Basics

Isaac Sim is a powerful, physically accurate simulation environment for robotics built on NVIDIA's Omniverse platform. It provides a rich set of tools and features for simulating robots, sensors, and environments. This section covers the fundamental concepts and usage patterns for getting started with Isaac Sim.

## Key Concepts

### USD (Universal Scene Description)

Isaac Sim uses USD as its core scene description format. USD is a powerful, layered, and extensible format for 3D scenes, allowing for complex asset descriptions, animations, and scene compositions.

### Physics Simulation

Isaac Sim leverages NVIDIA's PhysX engine for high-fidelity physics simulation. This includes accurate rigid body dynamics, collision detection, and material properties, crucial for realistic robot behavior and interaction.

### Sensors

Isaac Sim provides a wide range of virtual sensors that mimic real-world counterparts:

*   **Cameras**: RGB, depth, stereo, fisheye, and segmentation cameras.
*   **LiDAR**: 2D and 3D LiDAR sensors for spatial mapping and navigation.
*   **IMU**: Inertial measurement units for orientation and acceleration data.
*   **Force/Torque Sensors**: For contact detection and manipulation tasks.
*   **GPS**: For outdoor navigation scenarios.

### Robot Simulation

Robots in Isaac Sim are typically defined using URDF (Unified Robot Description Format) or directly in USD. The simulation engine handles forward and inverse kinematics, dynamics, and joint control.

## Basic Usage

### Launching Isaac Sim

Isaac Sim can be launched in several ways:

*   **Standalone Application**: Run the Isaac Sim executable directly.
*   **Python API**: Use the `omni.isaac.sim` Python bindings to create and control simulations programmatically.
*   **ROS 2 Integration**: Launch Isaac Sim with ROS 2 launch files for integrated workflows.

### Creating a Simple World

A basic Isaac Sim world can be created using the Omniverse UI or programmatically in Python. It typically includes:

1.  A ground plane or environment.
2.  Lighting (e.g., dome light).
3.  A robot model (e.g., imported from URDF).
4.  Sensors attached to the robot.

### Controlling a Robot

Robots can be controlled in Isaac Sim using various methods:

*   **Joint Position/Torque Commands**: Direct control of joint states.
*   **Velocity Commands**: Send velocity commands (e.g., for differential drive robots).
*   **ROS 2 Topics**: When integrated with ROS 2, control via standard ROS 2 topics like `/cmd_vel` or `/joint_states`.

## Example: Loading a Robot

Here's a simple Python snippet to load a robot in Isaac Sim:

```python
import omni
from omni.isaac.core import World
from omni.isaac.core.utils.nucleus import get_assets_root_path
from omni.isaac.core.utils.stage import add_reference_to_stage

# Initialize the world
world = World(stage_units_in_meters=1.0)

# Add a robot from the nucleus asset library
assets_root_path = get_assets_root_path()
if assets_root_path is None:
    print("Could not find Isaac Sim assets. Please check your installation.")
else:
    # Example: Loading a simple robot (replace with your robot's path)
    add_reference_to_stage(
        usd_path=assets_root_path + "/Isaac/Robots/Franka/franka_instanceable.usd",
        prim_path="/World/Robot"
    )

# Reset the world to load the robot
world.reset()
```

This example demonstrates how to initialize a world, load a robot asset, and reset the simulation.