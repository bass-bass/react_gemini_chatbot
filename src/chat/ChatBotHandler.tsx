import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import { createConfig } from './config/ConfigHandler';

import botAvatar from '../assets/image/bot_avatar.jpeg';
import 'react-chatbot-kit/build/main.css';


function ChatBotHandler() {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [messages, setMessages] = useState<any[]>([]);

    const handleToggleChatbot = () => {
        setIsChatbotOpen((prev) => !prev);
    };

    const saveMessages = (newMessages: any[]) => {
        setMessages(newMessages);
    };

    const config = createConfig({
        onclick: handleToggleChatbot,
        imgSrc: botAvatar,
        messages: messages,
        saveMessages: saveMessages,
    });

    return (
        <div className="chatbot">
            {!isChatbotOpen && (
                <button onClick={handleToggleChatbot} className="chatbot-toggle-button">
                    💬
                </button>
            )}
            {isChatbotOpen && (
                <Chatbot
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                />
            )}
        </div>
    );
}

export default ChatBotHandler;
