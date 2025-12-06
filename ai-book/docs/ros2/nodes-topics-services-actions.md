---
next:
  title: "Packages and Workspace Management"
  description: "Learn how to organize your ROS 2 code in packages and manage workspaces"
---

# Nodes, Topics, Services, and Actions in ROS 2

Understanding the fundamental communication primitives—Nodes, Topics, Services, and Actions—is essential for building any robotic application with ROS 2. These components form the "nervous system" of a ROS 2 system, allowing different parts of a robot's software to interact seamlessly.

## 1. Nodes: The Executable Units

In ROS 2, a **Node** is an executable process that performs computations. It is the fundamental building block of a ROS 2 system, designed to encapsulate a specific piece of functionality.

*   **Modularity**: Nodes encourage a modular design, allowing developers to break down complex robotic systems into smaller, manageable, and independently executable units.
*   **Encapsulation**: Each node typically focuses on a single responsibility, such as reading sensor data, controlling a motor, or executing a path planning algorithm.
*   **Communication**: Nodes communicate with each other using Topics, Services, and Actions.

**Example**:
*   A `camera_driver` node that publishes image data.
*   An `image_processor` node that subscribes to image data, processes it, and publishes results.
*   A `motor_controller` node that subscribes to velocity commands and sends signals to motors.

## 2. Topics: Asynchronous Data Streaming (Publish/Subscribe)

**Topics** provide a publish/subscribe mechanism for asynchronous, one-to-many communication in ROS 2. This is the most common way for nodes to exchange continuous streams of data.

*   **Publishers**: A node that sends messages to a topic is called a **Publisher**. It continuously publishes data to a named topic.
*   **Subscribers**: A node that receives messages from a topic is called a **Subscriber**. It registers interest in a topic and receives all messages published to it.
*   **Decoupling**: Publishers and subscribers are decoupled; they don't need to know about each other's existence. The DDS middleware handles the routing of messages.
*   **Message Types**: Each topic has a defined **message type**, which dictates the structure and data types of the messages that can be sent over that topic. This ensures type safety and consistency.

**Analogy**: Think of topics as radio channels. Publishers broadcast information on a specific channel, and any subscriber tuned to that channel will receive the information.

**Use Cases**:
*   Sensor data (camera images, LiDAR scans, IMU readings)
*   Robot odometry (position and orientation)
*   Status updates (battery level, error codes)

## 3. Services: Synchronous Request/Response

**Services** provide a synchronous request/response communication model, typically used for operations that require an immediate result or a single interaction.

*   **Service Servers**: A node that offers a service is called a **Service Server**. It waits for requests from clients, performs a computation, and sends back a response.
*   **Service Clients**: A node that requests a service is called a **Service Client**. It sends a request to a service server and blocks (waits) until it receives a response.
*   **Service Types**: Similar to topics, services have a defined **service type**, which specifies the structure of both the request and the response messages.

**Analogy**: Services are like making a phone call to a specific person. You ask a question (request), and they provide an answer (response).

**Use Cases**:
*   Triggering a specific robot action (e.g., "take a picture," "open gripper")
*   Querying the robot's current state (e.g., "get joint positions," "check battery status")
*   Performing a one-time calculation or configuration change.

## 4. Actions: Long-Running Asynchronous Tasks

**Actions** are designed for long-running, asynchronous tasks that involve a goal, continuous feedback, and an eventual result. They are built on top of topics and services and provide a more structured way to handle complex behaviors.

*   **Action Servers**: A node that provides the action functionality is called an **Action Server**. It accepts goals from clients, executes the task, provides periodic feedback, and sends a final result.
*   **Action Clients**: A node that requests an action is called an **Action Client**. It sends a goal to an action server, can monitor the progress through feedback, and can also cancel the goal if needed.
*   **Goal**: The desired state or task to be achieved.
*   **Feedback**: Intermediate updates on the progress of the action.
*   **Result**: The final outcome of the action.

**Analogy**: Actions are like ordering a pizza. You place an order (goal), get updates on its status (feedback: "pizza is being made," "pizza is in transit"), and eventually receive the pizza (result).

**Use Cases**:
*   Robot navigation (e.g., "go to a specific location")
*   Complex manipulation tasks (e.g., "pick up an object")
*   Any task that takes time and requires progress monitoring or cancellation.

## Summary

| Primitive | Communication Type | Best For | Characteristics |
| :-------- | :----------------- | :------------------------------------------ | :------------------------------------------------------------------------------ |
| **Nodes** | N/A | Encapsulating functionality | Independent executable units |
| **Topics** | Publish/Subscribe | Continuous data streams (1-to-N) | Asynchronous, decoupled, type-safe messages |
| **Services** | Request/Response | Immediate, one-time interactions (1-to-1) | Synchronous, blocking, type-safe requests and responses |
| **Actions** | Goal/Feedback/Result | Long-running tasks with monitoring | Asynchronous, goal-oriented, provides feedback, cancellable |

By effectively utilizing these communication primitives, developers can design and implement sophisticated and robust robotic applications within the ROS 2 framework.