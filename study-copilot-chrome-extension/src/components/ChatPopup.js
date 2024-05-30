import React, { useState, useEffect } from 'react';

const ChatPopup = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setChatMessages([...chatMessages, { text: inputValue, sender: 'user' }]);
      setInputValue('');

      // Call GPT-4o API here to get response and add to chatMessages
    }
  };

  useEffect(() => {
    // Code to monitor user behavior and warn if visiting irrelevant websites
    // Code to integrate with GPT-4o API for advanced text input/output capabilities
  }, []);

  return (
    <div className="chat-popup">
      <div className="chat-messages">
        {chatMessages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatPopup;