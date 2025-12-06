import React, { useState } from 'react';
import styles from './Chatbot.module.css';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot'}[]>([]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const newUserMessage = { text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, newUserMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = { text: `I received your message: "${inputValue}". This is a demo response.`, sender: 'bot' as const };
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen ? (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h4>AI Assistant</h4>
            <button onClick={toggleChat} className={styles.closeButton}>×</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            {messages.length === 0 && (
              <div className={styles.welcomeMessage}>
                Hello! I'm your AI assistant for the Physical AI & Humanoid Robotics textbook. How can I help you today?
              </div>
            )}
          </div>
          <div className={styles.chatInputArea}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className={styles.chatInput}
            />
            <button onClick={sendMessage} className={styles.sendButton}>Send</button>
          </div>
        </div>
      ) : (
        <button onClick={toggleChat} className={styles.chatButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;