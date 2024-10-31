import React, { ReactNode, ReactElement } from 'react';

type MessageParserProps = {
    children: ReactNode;
    actions: Record<string, any>;
};

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
    const parse = (message: string) => {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            actions.greet();
        } else if (lowerCaseMessage.includes("help")) {
            actions.handleQuestion();
        } else {
            console.log("未対応のメッセージです:", message);
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement<any>, {
                        parse: parse,
                        actions: actions,
                    });
                }
                return child;
            })}
        </div>
    );
};

export default MessageParser;
