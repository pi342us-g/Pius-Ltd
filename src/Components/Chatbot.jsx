import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Welcome! Looking for a laptop today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (input) => {
    const text = input.toLowerCase();

    // Laptop sales specific responses
    if (text.includes("price") || text.includes("cost")) {
      return "Our laptops start from 15000. Do you have a specific brand or budget in mind?";
    }
    if (text.includes("gaming")) {
      return "We have high-performance gaming laptops like the ASUS ROG and Dell G-series.";
    }
    if (text.includes("best") || text.includes("recommend")) {
      return "For performance and value, we recommend the Lenovo Legion or HP Pavilion.";
    }
    if (text.includes("available") || text.includes("stock")) {
      return "You can check available models in our Products section. Need help navigating?";
    }
    if (text.includes("laptop")) {
      return "We have a wide variety of laptops available for all purposes. Are you looking for something specific?";
    }
    if (text.includes("hello","hi")) {
      return "We have a wide variety of laptops available for all purposes. Are you looking for something specific?";
    }


    // Default message if no match
    return "How can I assist you?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);

    // Bot's response
    setTimeout(() => {
      const botReply = { text: getBotResponse(input), sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
