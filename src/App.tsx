import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';

import { config } from './chat/config/config';
import { ActionProvider } from './chat/ActionProvider';
import MessageParser from './chat/MessageParser';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);

  const handleToggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  const saveMessages = (newMessages: any[]) => {
    setMessages(newMessages);
  };

  const CustomHeaderWithClose = () => <config.customComponents.header onClick={handleToggleChatbot} />;

  const customConfig = {
    ...config,
    customComponents: {
      ...config.customComponents,
      header: CustomHeaderWithClose,
      state: { messages: messages },
      saveMessages: saveMessages,
    },
  };

  return (
    <div className="App">
      <h1>sample</h1>
      {!isChatbotOpen && (
        <button onClick={handleToggleChatbot} className="chatbot-toggle-button">
          💬
        </button>
      )}
      {isChatbotOpen && (
        <Chatbot
          config={customConfig}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      )}
    </div>
  );
}

export default App;

