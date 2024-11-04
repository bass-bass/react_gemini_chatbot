import { createChatBotMessage } from 'react-chatbot-kit';
import { CustomHeader } from './CustomHeader';
import { CustomBotAvator } from './CustomBotAvatar';

type ConfigProps = {
  onclick: () => void,
  imgSrc: string,
  messages: any[],
  saveMessages: (newMassages: any[]) => void,
}

export const createConfig = (prop: ConfigProps) => {
  return {
  botName: "AI Chat Bot",
  initialMessages: [createChatBotMessage("Hi there! How can I help you?", {}),],
  customComponents: {
    header: () => <CustomHeader onClick={prop.onclick}/>,
    botAvatar: () => <CustomBotAvator imgSrc={prop.imgSrc} />,
    state: { messages: prop.messages },
    saveMessages: prop.saveMessages,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
}
};
