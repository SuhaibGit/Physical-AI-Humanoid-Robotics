# Building and Simulating Worlds in Gazebo

Creating compelling simulation environments in Gazebo is essential for realistic robotics testing. This section guides you through defining and launching custom worlds, adding static objects, and configuring environmental properties.

## World Definition Files (SDF)

Gazebo worlds are defined using SDF (Simulation Description Format) files. SDF is an XML-based format that describes robots, environments, and their physical properties. A basic world file includes gravity, physics properties, and light sources.

```xml
<?xml version="1.0" ?>
<sdf version="1.6">
  <world name="my_empty_world">
    <gravity>0 0 -9.8</gravity>
    <physics type="ode">
      <ode>
        <solver>
          <type>quick</type>
          <iters>50</iters>
        </solver>
      </ode>
    </physics>
    <light type="directional" name="sun">
      <cast_shadows>1</cast_shadows>
      <pose>0 0 10 0 -30 0</pose>
      <diffuse>0.8 0.8 0.8 1</diffuse>
      <specular>0.2 0.2 0.2 1</specular>
      <attenuation>
        <range>1000</range>
        <constant>0.9</constant>
        <linear>0.01</linear>
        <quadratic>0.001</quadratic>
      </attenuation>
      <direction>-0.5 0.1 -0.9</direction>
    </light>
    <model name="ground_plane">
      <static>true</static>
      <link name="link">
        <collision name="collision">
          <geometry>
            <plane>
              <normal>0 0 1</normal>
              <size>100 100</size>
            </plane>
          </geometry>
          <surface>
            <friction>
              <ode>
                <mu>1.0</mu>
                <mu2>1.0</mu2>
              </ode>
            </friction>
          </surface>
        </collision>
        <visual name="visual">
          <geometry>
            <plane>
              <normal>0 0 1</normal>
              <size>100 100</size>
            </plane>
          </geometry>
          <material>
            <ambient>0.8 0.8 0.8 1</ambient>
            <diffuse>0.8 0.8 0.8 1</diffuse>
            <specular>0.8 0.8 0.8 1</specular>
          </material>
        </visual>
      </link>
    </model>
  </world>
</sdf>
```

## Launching a World

You can launch a Gazebo world using the `ign gazebo` command. If your SDF file is named `my_world.sdf` and located in your Gazebo resource path, you can launch it with:

```bash
ign gazebo my_world.sdf
```

For custom worlds not in the default path, specify the full path to the SDF file.

## Adding Static Objects

Gazebo allows you to add various static objects (e.g., walls, furniture, obstacles) to your world. These are typically defined as `<model>` tags within your SDF file, referencing pre-defined models from Gazebo's model database or custom-created models.

```xml
<model name="coke_can">
  <pose>1 0 0.5 0 0 0</pose>
  <include>
    <uri>model://coke_can</uri>
  </include>
</model>
```

This example includes a `coke_can` model from the Gazebo model database at a specific pose.