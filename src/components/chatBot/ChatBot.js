import React, { useState, useEffect } from 'react';
import './ChatBot.css'; // Import your CSS file for styling

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I assist you?', fromUser: false },
    ]);
    const [userInput, setUserInput] = useState('');
    const [botTyping, setBotTyping] = useState(false);

    const addBotResponse = async (userInput) => {
        setBotTyping(true);

        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: userInput }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessages([...messages, { text: userInput, fromUser: true }]);
                setMessages([...messages, { text: data.reply, fromUser: false }]);
            } else {
                console.error('Error:', response.statusText);
                setMessages([...messages, { text: 'An error occurred.', fromUser: false }]);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages([...messages, { text: 'An error occurred.', fromUser: false }]);
        } finally {
            setBotTyping(false);
        }
    };

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            addBotResponse(userInput);
            setUserInput('');
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
                {botTyping && (
                    <div className="chatbot-message bot">
                        <span className="typing-indicator">Bot is typing...</span>
                    </div>
                )}
            </div>
            <div className="chatbot-input">
                <form onSubmit={handleUserSubmit}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ChatBot;
