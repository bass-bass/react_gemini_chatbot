# react_gemini_chatbot
Geminiを使用したチャットボット

## react-chatbot-kit
https://github.com/FredrikOseberg/react-chatbot-kit

## Gemini API
https://ai.google.dev/gemini-api/docs?hl=ja

## How to use
1. Gemini APIのkeyを生成する
   1. https://ai.google.dev/gemini-api/docs/api-key?hl=ja
2. `git clone https://github.com/bass-bass/react_gemini_chatbot.git`
3. `cd react_gemini_chatbot`
4. `touch .env`
5. .envファイルにGemini API Keyを追記
   1. `REACT_APP_GEMINI_API_KEY={key}`
6. `npm install`
7. `npm start`
8. access `http://localhost:3000`