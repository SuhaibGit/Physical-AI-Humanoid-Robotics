# Spawning Robots (URDF/SDF)

To simulate robots in Gazebo, you need to describe their physical properties, joints, and sensors. This is typically done using URDF (Unified Robot Description Format) or SDF (Simulation Description Format) files. URDF is primarily for describing a single robot, while SDF can describe robots as well as environments.

## URDF (Unified Robot Description Format)

URDF is an XML format for describing all aspects of a robot, including its kinematic and dynamic properties, visual appearance, and collision geometry. It is widely used in ROS and ROS 2.

### Basic URDF Structure

```xml
<?xml version="1.0" ?>
<robot name="my_simple_robot">
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.3 0.1"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 0.8 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.5 0.3 0.1"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1.0"/>
      <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
    </inertial>
  </link>
</robot>
```

## SDF (Simulation Description Format)

SDF is a more comprehensive XML format designed for Gazebo simulations. It can describe not only robots but also environments, lights, and sensors. SDF is a superset of URDF, meaning most URDF files can be converted to SDF.

### Basic SDF Structure (Robot)

```xml
<?xml version="1.0" ?>
<sdf version="1.6">
  <model name="my_simple_robot_sdf">
    <link name="base_link">
      <visual name="visual">
        <geometry>
          <box>
            <size>0.5 0.3 0.1</size>
          </box>
        </geometry>
        <material>
          <ambient>0 0 0.8 1</ambient>
          <diffuse>0 0 0.8 1</diffuse>
          <specular>0 0 0.8 1</specular>
        </material>
      </visual>
      <collision name="collision">
        <geometry>
          <box>
            <size>0.5 0.3 0.1</size>
          </box>
        </geometry>
      </collision>
      <inertial>
        <mass>1.0</mass>
        <inertia>
          <ixx>1.0</ixx>
          <ixy>0.0</ixy>
          <ixz>0.0</ixz>
          <iyy>1.0</iyy>
          <iyz>0.0</iyz>
          <izz>1.0</izz>
        </inertia>
      </inertial>
    </link>
  </model>
</sdf>
```

## Spawning Robots in Gazebo

To spawn a robot defined by a URDF or SDF file into a Gazebo world, you can use various methods:

### Using `ros2 spawn_entity` (for ROS 2 integration)

If you have `ros_gz` installed and integrated with your Gazebo setup, you can use the `ros2 spawn_entity` command to insert a robot model into your running Gazebo simulation:

```bash
ros2 run gazebo_ros spawn_entity.py -entity my_simple_robot -file my_simple_robot.urdf -x 0 -y 0 -z 0.5
```

This command spawns a robot named `my_simple_robot` from the `my_simple_robot.urdf` file at coordinates (0, 0, 0.5).

### Directly in SDF World File

You can also include robot models directly within your world SDF file. This is useful for pre-defined scenarios where the robot is always present when the world launches.

```xml
<model name="my_robot">
  <pose>0 0 0.5 0 0 0</pose>
  <include>
    <uri>model://my_robot_description</uri>
  </include>
</model>
```

Here, `model://my_robot_description` refers to a model package that Gazebo can find in its resource paths.