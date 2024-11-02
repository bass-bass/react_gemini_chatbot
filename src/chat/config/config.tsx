import { createChatBotMessage } from 'react-chatbot-kit';
import { CustomHeader } from './CustomHeader';

export const config = {
  botName: "ヘルパーボット",
  initialMessages: [createChatBotMessage("こんにちは！私はヘルパーボットです。", {}),],
  customComponents: {
    header: CustomHeader,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  }
};
