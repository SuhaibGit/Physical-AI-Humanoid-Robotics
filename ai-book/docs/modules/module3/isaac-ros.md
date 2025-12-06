# Isaac ROS

Isaac ROS is a collection of GPU-accelerated software packages designed to run on NVIDIA Jetson platforms and other NVIDIA hardware for robotics perception and navigation. These packages leverage NVIDIA's hardware acceleration capabilities to deliver high-performance processing for critical robotics tasks.

## Key Features

*   **GPU Acceleration**: Leverages CUDA, TensorRT, and other NVIDIA technologies for high-performance processing.
*   **ROS 2 Compatibility**: Built as standard ROS 2 packages, integrating seamlessly with existing ROS 2 workflows.
*   **Hardware Optimization**: Specifically optimized for NVIDIA Jetson and other NVIDIA platforms.
*   **Real-time Performance**: Designed for real-time robotics applications with low latency.

## Core Packages

### ISAAC_ROS Apriltag

Detects AprilTag fiducial markers for precise pose estimation. It's highly optimized for GPU processing, making it suitable for real-time applications.

### ISAAC_ROS DNN Inference

Provides a flexible, hardware-accelerated deep neural network inference pipeline. It supports various model formats and can be used for object detection, segmentation, and other perception tasks.

### ISAAC_ROS Image Pipeline

Accelerates common image processing tasks such as rectification, resizing, and format conversion using GPU acceleration.

### ISAAC_ROS NITROS

The Network Interface for Time-based, Resilient, Observability-based communication. It optimizes data transport between Isaac ROS nodes for maximum throughput and minimal latency.

### ISAAC_ROS Visual SLAM

Provides Simultaneous Localization and Mapping capabilities using visual data, accelerated on NVIDIA hardware.

## Installation

Isaac ROS packages are typically installed via Debian packages for supported Jetson platforms or built from source for other configurations.

```bash
# Example for installing ISAAC_ROS Apriltag on Jetson
sudo apt update
sudo apt install ros-<ros2-distro>-isaac-ros-apriltag
```

## Example: Using ISAAC_ROS Apriltag

A typical usage involves subscribing to a camera image topic and publishing the detected AprilTag poses:

```bash
# Launch the apriltag node
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

The node will subscribe to `/image` and `/camera_info` topics and publish detected tag poses to `/tag_detections` and `/tf`.

## Performance Benefits

Isaac ROS packages can provide significant performance improvements over CPU-only implementations, especially for:

*   **Perception Tasks**: Object detection, image processing, sensor data fusion.
*   **SLAM**: Visual-inertial odometry, mapping.
*   **Deep Learning Inference**: Running neural networks for various robotics tasks.

These performance gains are crucial for resource-constrained robotic platforms like mobile robots or drones, where computational power is limited.