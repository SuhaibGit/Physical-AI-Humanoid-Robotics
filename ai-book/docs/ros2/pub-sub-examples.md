---
next:
  title: "Simple ROS 2 Node Example"
  description: "Build a complete hands-on ROS 2 node with practical implementation"
---

# Basic Publisher/Subscriber Examples in ROS 2 (`rclpy`)

The publish/subscribe communication pattern is fundamental to ROS 2, allowing nodes to asynchronously exchange messages. This chapter provides hands-on Python code examples using `rclpy` to demonstrate how to create a basic publisher and a basic subscriber.

## 1. The Publisher Node

A **publisher** node sends messages to a named topic. Any node subscribing to that topic will receive the messages.

**Example: `simple_publisher.py`**

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String # Standard ROS 2 message type for strings

class SimplePublisher(Node):
    def __init__(self):
        super().__init__('simple_publisher') # Node name
        self.publisher_ = self.create_publisher(String, 'chatter', 10) # Create a publisher
        # Arguments:
        # 1. Message Type (e.g., String)
        # 2. Topic Name (e.g., 'chatter')
        # 3. QoS Profile (Queue Size): 10 means store up to 10 messages if subscriber is slow
        self.timer_ = self.create_timer(0.5, self.timer_callback) # Create a timer for publishing
        self.i = 0
        self.get_logger().info('SimplePublisher node has started, publishing messages.')

    def timer_callback(self):
        msg = String() # Create a new String message
        msg.data = f'Hello ROS 2 from Python! Count: {self.i}' # Set message data
        self.publisher_.publish(msg) # Publish the message
        self.get_logger().info(f'Publishing: "{msg.data}"') # Log what we published
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    simple_publisher = SimplePublisher()
    rclpy.spin(simple_publisher) # Keep the node alive
    simple_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Explanation of Publisher Code

*   **`import rclpy`, `from rclpy.node import Node`**: Standard imports for `rclpy`.
*   **`from std_msgs.msg import String`**: Imports the `String` message type from the `std_msgs` package. ROS 2 provides many standard message types for common data.
*   **`super().__init__('simple_publisher')`**: Initializes the base `Node` class with the name `simple_publisher`.
*   **`self.create_publisher(String, 'chatter', 10)`**: This is the core line for creating a publisher. It specifies:
    *   `String`: The type of message this publisher will send.
    *   `'chatter'`: The name of the topic.
    *   `10`: The QoS (Quality of Service) history depth (or "queue size"). This means if subscribers are slow, up to 10 messages will be buffered.
*   **`self.create_timer(0.5, self.timer_callback)`**: Creates a timer that calls `self.timer_callback` every 0.5 seconds. This is a common way to periodically publish data.
*   **`msg = String()`**: Instantiates an empty `String` message object.
*   **`msg.data = ...`**: Assigns data to the `data` field of the `String` message.
*   **`self.publisher_.publish(msg)`**: Sends the message to the `'chatter'` topic.

## 2. The Subscriber Node

A **subscriber** node listens for messages on a named topic and processes them when they arrive.

**Example: `simple_subscriber.py`**

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String # Same message type as the publisher

class SimpleSubscriber(Node):
    def __init__(self):
        super().__init__('simple_subscriber') # Node name
        self.subscription = self.create_subscription(
            String,       # Message type
            'chatter',    # Topic name (must match publisher's topic)
            self.listener_callback, # Callback function to process received messages
            10            # QoS Profile (Queue Size)
        )
        self.subscription # Prevent unused variable warning
        self.get_logger().info('SimpleSubscriber node has started, waiting for messages.')

    def listener_callback(self, msg):
        # This function is called every time a new message is received on the 'chatter' topic
        self.get_logger().info(f'I heard: "{msg.data}"')

def main(args=None):
    rclpy.init(args=args)
    simple_subscriber = SimpleSubscriber()
    rclpy.spin(simple_subscriber) # Keep the node alive
    simple_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Explanation of Subscriber Code

*   **`self.create_subscription(String, 'chatter', self.listener_callback, 10)`**: This is the core line for creating a subscription. It specifies:
    *   `String`: The type of message this subscriber expects.
    *   `'chatter'`: The name of the topic to subscribe to (must match the publisher's topic).
    *   `self.listener_callback`: The function that will be called whenever a new message arrives on the topic.
    *   `10`: The QoS history depth.
*   **`listener_callback(self, msg)`**: This method is automatically invoked by `rclpy` when a message is received. The received message object (`msg`) is passed as an argument.

## 3. Running Publisher and Subscriber Together

To run these examples:

1.  **Place the files**:
    *   Save `simple_publisher.py` in `~/ros2_ws/src/my_package/my_package/`
    *   Save `simple_subscriber.py` in `~/ros2_ws/src/my_package/my_package/`
2.  **Update `setup.py`**: Add entry points for both nodes in `~/ros2_ws/src/my_package/setup.py`:

    ```python
    # ... (other parts of setup.py)
        entry_points={
            'console_scripts': [
                'minimal_node = my_package.minimal_node:main',
                'simple_publisher = my_package.simple_publisher:main',
                'simple_subscriber = my_package.simple_subscriber:main',
            ],
        },
    )
    ```
3.  **Build and Source**:
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_package
    source install/setup.bash
    ```
4.  **Open two terminal windows**:
    *   **Terminal 1 (Publisher)**:
        ```bash
        ros2 run my_package simple_publisher
        ```
    *   **Terminal 2 (Subscriber)**:
        ```bash
        ros2 run my_package simple_subscriber
        ```

You should see the publisher terminal printing "Publishing:..." messages and the subscriber terminal printing "I heard:..." messages, demonstrating successful communication.

## Conclusion

The publish/subscribe pattern is a powerful and flexible way for nodes to exchange data in ROS 2. By understanding how to create publishers to send messages and subscribers to receive them, you've taken a significant step toward building more dynamic and interactive robotic applications with `rclpy`.
