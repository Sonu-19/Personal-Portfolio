import React, { useState, useRef, useEffect } from 'react';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user"
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! I'll get back to you soon.",
        sender: "bot"
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Chat with Me</h3>
      </div>
      <div className="messages-container">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="input-form">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox; 