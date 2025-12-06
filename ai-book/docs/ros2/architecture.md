---
next:
  title: "Nodes, Topics, Services, and Actions"
  description: "Understand the primary communication paradigms in ROS 2"
---

# ROS 2 Architecture Overview

The Robot Operating System 2 (ROS 2) is built on a robust and flexible architecture designed to meet the demands of modern robotics. Understanding this architecture is crucial for developing efficient and scalable robotic applications.

## Key Architectural Principles

ROS 2's architecture is guided by several key principles:

*   **Decentralization**: Unlike ROS 1's reliance on a central `roscore`, ROS 2 uses a decentralized communication model based on DDS, allowing nodes to communicate directly.
*   **Modularity**: Promotes breaking down complex systems into smaller, independent components (nodes) that can be developed, tested, and deployed in isolation.
*   **Real-time Performance**: Designed with real-time capabilities to handle time-critical operations in robotics.
*   **Quality of Service (QoS)**: Provides configurable communication policies to ensure messages are delivered reliably, within latency constraints, and with desired durability.
*   **Security**: Incorporates security features like authentication, encryption, and access control for robust deployments.
*   **Multi-Platform Support**: Extends ROS's reach to various operating systems and embedded platforms.

## Core Components

The ROS 2 architecture is composed of several fundamental elements:

### 1. Nodes

*   **Definition**: An executable process that performs computations (e.g., a sensor driver, a motor controller, a planning algorithm).
*   **Purpose**: Encapsulates a specific piece of functionality. Multiple nodes can coexist and communicate within a ROS 2 system.
*   **Example**: A node to read data from a camera, another node to process images, and a third node to control a robot's wheels.

### 2. ROS 2 Graph (Logical View)

The ROS 2 graph represents the peer-to-peer network of ROS 2 processes. It consists of:

*   **Nodes**: The computational elements.
*   **Topics**: A named bus over which nodes exchange messages. Topics are a publish/subscribe communication model.
    *   **Publishers**: Nodes that send messages to a topic.
    *   **Subscribers**: Nodes that receive messages from a topic.
*   **Services**: A request/response communication model between nodes.
    *   **Service Servers**: Nodes that offer a service and respond to requests.
    *   **Service Clients**: Nodes that send requests to a service server and wait for a response.
*   **Actions**: A long-running, asynchronous request/response mechanism, typically used for tasks that take a significant amount of time to complete (e.g., navigating to a goal, picking up an object).
    *   **Action Servers**: Nodes that provide the action functionality.
    *   **Action Clients**: Nodes that request an action, receive continuous feedback, and eventually a result.

### 3. Data Distribution Service (DDS)

*   **Foundation**: DDS is the underlying middleware that ROS 2 uses for communication. It handles reliable, real-time, and scalable data exchange.
*   **Decentralization**: DDS enables nodes to discover each other and communicate directly, eliminating the need for a central message broker.
*   **Vendors**: ROS 2 supports multiple DDS implementations (e.g., Fast RTPS, Cyclone DDS, OpenSplice), allowing flexibility and optimization based on application needs.

### 4. Client Libraries

*   **rclcpp (C++)**: The C++ client library for developing ROS 2 applications.
*   **rclpy (Python)**: The Python client library for developing ROS 2 applications.
*   **rcl (ROS Client Library)**: A C API that provides a common interface for different language-specific client libraries.

### 5. Build System (ament)

*   **Purpose**: `ament` is the build system used by ROS 2. It is a meta-build system that uses `CMake` for C++ packages and Python's `setuptools` for Python packages.
*   **Workspaces**: Organizes packages into a structured environment where they can be built and installed together.

### 6. Tools

ROS 2 provides a rich set of command-line tools and graphical interfaces for introspection, debugging, and visualization:

*   **Command-line Tools**: `ros2 run`, `ros2 topic`, `ros2 node`, `ros2 param`, `ros2 service`, `ros2 action`, `ros2 launch`, `ros2 pkg` for interacting with the ROS 2 system.
*   **Rviz 2**: A powerful 3D visualization tool for displaying sensor data, robot models, and planning outputs.
*   **PlotJuggler**: A time-series data plotter for visualizing topic data.

## Communication Patterns

ROS 2 supports various communication patterns to suit different application requirements:

*   **Publish/Subscribe**: For asynchronous, one-to-many data streaming (e.g., sensor data, robot odometry).
*   **Request/Response**: For synchronous, one-to-one calls that expect an immediate result (e.g., querying robot state, triggering a specific action).
*   **Actions**: For asynchronous, goal-oriented tasks that provide feedback and can be cancelled (e.g., navigating to a target, executing a complex manipulation).

## Conclusion

The ROS 2 architecture provides a robust, flexible, and scalable foundation for developing advanced robotic applications. Its decentralized nature, modular design, and emphasis on QoS and security make it a powerful choice for modern robotics challenges.