import React, { useState } from 'react';
import './ChatBot.css'; // Import your CSS file for styling

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I assist you?', fromUser: false },
    ]);
    const [userInput, setUserInput] = useState('');

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            // Add user message
            setMessages([...messages, { text: userInput, fromUser: true }]);
            setUserInput('');

            // Simulate a response from the ChatBot (you can replace this with your logic)
            setTimeout(() => {
                setMessages([
                    ...messages,
                    { text: 'I am a ChatBot. How can I assist you?', fromUser: false },
                ]);
            }, 1000);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <h2>ChatBot</h2>
            </div>
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`chatbot-message ${message.fromUser ? 'user' : 'bot'}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <form onSubmit={handleUserSubmit}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={userInput}
                        onChange={handleUserInput}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;
