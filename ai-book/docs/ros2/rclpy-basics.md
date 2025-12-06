---
next:
  title: "Publisher/Subscriber Examples"
  description: "Explore practical examples of publisher and subscriber patterns in ROS 2"
---

# rclpy Basics - Python Client Library for ROS 2

**rclpy** is the official Python client library for ROS 2, enabling developers to write ROS 2 nodes and interact with the ROS 2 ecosystem using Python. This chapter will introduce the fundamental concepts and basic usage of `rclpy` to get you started with building your first ROS 2 applications in Python.

## 1. Setting Up Your Python Environment

Before writing `rclpy` code, ensure your ROS 2 environment is sourced. If you've installed ROS 2 (e.g., Humble, Iron), you typically source its setup file:

```bash
source /opt/ros/humble/setup.bash # Replace 'humble' with your ROS 2 distribution
```

If you are working in a custom workspace, also source its setup file after the ROS 2 distribution:

```bash
source ~/ros2_ws/install/setup.bash # Replace '~/ros2_ws' with your workspace path
```

## 2. Minimal ROS 2 Node with `rclpy`

The simplest ROS 2 node in `rclpy` involves initializing the `rclpy` library, creating a node, spinning the node to allow it to process callbacks, and then shutting down.

**Example: `minimal_node.py`**

```python
import rclpy
from rclpy.node import Node

def main(args=None):
    # 1. Initialize rclpy
    rclpy.init(args=args)

    # 2. Create a Node
    node = Node('minimal_node') # 'minimal_node' is the name of our node

    # 3. Log a message to demonstrate the node is running
    node.get_logger().info('Minimal node has started.')

    # 4. Spin the node (keep it alive)
    # This will block until the node is shut down
    rclpy.spin(node)

    # 5. Destroy the node and shutdown rclpy
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Running the Node

To run this node, you would typically save it in a ROS 2 package (e.g., `my_package/my_package/minimal_node.py`) and then use `ros2 run`:

1.  **Create a ROS 2 package**:
    ```bash
    cd ~/ros2_ws/src
    ros2 pkg create --build-type ament_python my_package
    ```
2.  **Place the `minimal_node.py` inside `my_package/my_package/`**:
    ```bash
    mv minimal_node.py ~/ros2_ws/src/my_package/my_package/
    ```
3.  **Update `setup.py`**: In `~/ros2_ws/src/my_package/setup.py`, add the entry point:

    ```python
    from setuptools import setup

    package_name = 'my_package'

    setup(
        name=package_name,
        version='0.0.0',
        packages=[package_name],
        data_files=[
            ('share/ament_index/resource_index/packages',
                ['resource/' + package_name]),
            ('share/' + package_name, ['package.xml']),
        ],
        install_requires=['setuptools'],
        zip_safe=True,
        maintainer='your_name',
        maintainer_email='your_email@example.com',
        description='TODO: Package description',
        license='TODO: License declaration',
        tests_require=['pytest'],
        entry_points={
            'console_scripts': [
                'minimal_node = my_package.minimal_node:main',
            ],
        },
    )
    ```
4.  **Build the workspace**:
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_package
    ```
5.  **Source the workspace**:
    ```bash
source install/setup.bash
```
6.  **Run the node**:
    ```bash
ros2 run my_package minimal_node
```

You should see the output:
```
[INFO] [minimal_node]: Minimal node has started.
```

## 3. Node Initialization and Naming

*   **`rclpy.init(args=args)`**: Initializes the `rclpy` library. It should be called once at the beginning of your program.
*   **`Node('node_name')`**: Creates an instance of a ROS 2 node. The string argument is the unique name of the node in the ROS 2 graph.
*   **`node.get_logger().info('message')`**: Accesses the node's logger to print informative messages. `info`, `warn`, `error`, `debug`, `fatal` are common logging levels.
*   **`rclpy.spin(node)`**: Keeps the node alive and allows it to process events (like receiving messages, handling service requests, etc.). It continuously calls the node's callbacks until `rclpy.shutdown()` is called or the process is interrupted.
*   **`node.destroy_node()`**: Cleans up resources associated with the node before shutdown.
*   **`rclpy.shutdown()`**: Shuts down the `rclpy` library, releasing all ROS 2 resources.

## Conclusion

This introduction covers the absolute basics of `rclpy`, from setting up your environment to creating and running a minimal ROS 2 Python node. These foundational concepts are essential for delving into more complex `rclpy` functionalities like topics, services, and actions, which you'll explore in subsequent chapters.