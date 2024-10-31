import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import {config} from './chat/config/config';
import {ActionProvider} from './chat/ActionProvider';
import MessageParser from './chat/MessageParser';

function App() {
  return (
    <div className="App">
      <h1>sample</h1>
      <Chatbot
       config={config}
       actionProvider={ActionProvider}
       messageParser={MessageParser}
       />
    </div>
  );
}

export default App;

