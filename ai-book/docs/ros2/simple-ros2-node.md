---
next:
  title: "URDF Overview (Introductory)"
  description: "Introduction to Unified Robot Description Format for describing robot structure"
---

# Hands-on Example: Writing a Simple ROS 2 Node (`rclpy`)

This chapter provides a step-by-step guide to writing and running a basic ROS 2 node using `rclpy`, focusing on the core structure and interactions. We'll create a simple "talker" node that periodically publishes a message, similar to what we explored in the publisher/subscriber basics, but with a focus on the full node implementation process.

## 1. Project Setup (Review)

Ensure you have a ROS 2 workspace and a Python package set up. If not, refer to the "ROS 2 Packages and Workspace Structure" and "rclpy Basics" chapters.

For this example, we'll assume you have a package named `my_package` within your ROS 2 workspace (`~/ros2_ws`).

## 2. Writing the Simple Publisher Node (`simple_talker_node.py`)

Create a new Python file named `simple_talker_node.py` inside your `my_package/my_package/` directory:

`~/ros2_ws/src/my_package/my_package/simple_talker_node.py`

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class SimpleTalker(Node):
    def __init__(self):
        super().__init__('simple_talker') # Node name: 'simple_talker'
        self.publisher_ = self.create_publisher(String, 'topic', 10) # Publish to 'topic'
        self.timer = self.create_timer(0.5, self.timer_callback) # Timer to call callback every 0.5 seconds
        self.i = 0
        self.get_logger().info('SimpleTalker node has been initialized.')

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello from simple_talker! Count: {self.i}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.i += 1

def main(args=None):
    rclpy.init(args=args) # Initialize rclpy
    node = SimpleTalker() # Create the node
    rclpy.spin(node) # Keep the node alive and processing callbacks
    node.destroy_node() # Clean up when done
    rclpy.shutdown() # Shut down rclpy

if __name__ == '__main__':
    main()
```

### Code Explanation

*   **`rclpy.init(args=args)`**: Initializes the `rclpy` client library. This must be called before any other `rclpy` functions.
*   **`Node('simple_talker')`**: Creates an instance of the `Node` class. The argument `'simple_talker'` sets the name of this node.
*   **`self.create_publisher(String, 'topic', 10)`**: Creates a publisher that will send `String` messages to a topic named `'topic'` with a QoS history depth of 10.
*   **`self.create_timer(0.5, self.timer_callback)`**: Sets up a timer that triggers the `timer_callback` method every 0.5 seconds.
*   **`timer_callback()`**: This method is executed by the timer. It creates a `String` message, populates its `data` field, and publishes it using `self.publisher_.publish(msg)`.\n*   **`rclpy.spin(node)`**: This function blocks the program and keeps the node alive, allowing its callbacks (like the timer callback) to be executed. It will continue spinning until `rclpy.shutdown()` is called, typically when the program is interrupted (e.g., Ctrl+C).\n*   **`node.destroy_node()`**: Releases all resources associated with the node.\n*   **`rclpy.shutdown()`**: Shuts down the `rclpy` library.\n\n## 3. Registering the Node in `setup.py`\n\nFor `ros2 run` to find and execute your Python node, you need to add an entry point in your package's `setup.py` file.\n\nOpen `~/ros2_ws/src/my_package/setup.py` and modify the `entry_points` section to include your new node:\n\n```python\n# ... (other parts of setup.py)\n\nentry_points={\n    'console_scripts': [\n        'minimal_node = my_package.minimal_node:main', # Existing\n        'simple_publisher = my_package.simple_publisher:main', # Existing\n        'simple_subscriber = my_package.simple_subscriber:main', # Existing\n        'simple_talker = my_package.simple_talker_node:main', # Add this line\n    ],\n},\n)\n```\n\n## 4. Building and Sourcing Your Workspace\n\nAfter making changes to Python files or `setup.py`, you need to rebuild and re-source your workspace:\n\n```bash\ncd ~/ros2_ws\ncolcon build --packages-select my_package\nsource install/setup.bash\n```\n\n## 5. Running Your Node\n\nNow, open a terminal and run your node:\n\n```bash\nros2 run my_package simple_talker\n```\n\nYou should see output similar to this:\n\n```\n[INFO] [simple_talker]: SimpleTalker node has been initialized.\n[INFO] [simple_talker]: Publishing: \"Hello from simple_talker! Count: 0\"\n[INFO] [simple_talker]: Publishing: \"Hello from simple_talker! Count: 1\"\n[INFO] [simple_talker]: Publishing: \"Hello from simple_talker! Count: 2\"\n...\n```\n\nTo stop the node, press `Ctrl+C` in the terminal.\n\n## 6. Verifying with `ros2 topic echo`\n\nYou can verify that your `simple_talker` node is indeed publishing messages by using the `ros2 topic echo` command in a separate terminal:\n\n```bash\nros2 topic echo /topic\n```\n\nThis will display the messages being published to `/topic` by your `simple_talker` node.\n\n```\ndata: Hello from simple_talker! Count: 0\n---\ndata: Hello from simple_talker! Count: 1\n---\ndata: Hello from simple_talker! Count: 2\n---\n...\n```\n\n## Conclusion\n\nYou have successfully written, configured, built, and run a simple ROS 2 Python node. This hands-on experience solidifies your understanding of core `rclpy` concepts and the ROS 2 development workflow. You are now equipped to create more complex ROS 2 nodes and integrate them into larger robotic systems.\n