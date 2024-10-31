import React, { ReactNode } from 'react';

type ActionProviderProps = {
  createChatBotMessage: (message: string) => any;
  setState: (stateFunc: (prevState: any) => any) => void;
  children: ReactNode;
};

export const ActionProvider: React.FC<ActionProviderProps> = ({ createChatBotMessage, setState, children }) => {
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

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            actions: {greet, handleQuestion},
          });
        }
        return child;
      })}
    </div>
  );
};
