import React, { ReactNode } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

type ActionProviderProps = {
  createChatBotMessage: (message: string) => any;
  setState: (stateFunc: (prevState: any) => any) => void;
  children: ReactNode;
};

const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {
  const greet = () => {
    const message = createChatBotMessage("こんにちは！何かお手伝いできますか？");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleQuestion = () => {
    const message = createChatBotMessage("どのようなご質問でしょうか？");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  };

  const chat = async (prompt: string) => {
    try {
      const result = await model.generateContent(prompt);
      const responseText = result.response.text();

      const message = createChatBotMessage(responseText);
      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    } catch (error) {
      const errorMessage = createChatBotMessage("エラーが発生しました。もう一度試してください。");
      setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, errorMessage],
      }));
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            actions: {greet, handleQuestion, chat},
          });
        }
        return child;
      })}
    </div>
  );
};

export default ActionProvider;
