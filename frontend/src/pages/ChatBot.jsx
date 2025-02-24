import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import ChatIcon from "./ChatIcon";
import useStore from "../context/ChatStore.js";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hey there! How can I help you?" },
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const messagesEndRef = useRef(null);
  const { chatBotStatus, setChatBotStatus } = useStore();

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setIsProcessing(true);

    try {
      const { data } = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB7Z95A95JXPxEhjfGu-I1Hs5_eBcZfxWs`,
        { contents: [{ role: "user", parts: [{ text: input.trim() }] }] }
      );

      const botResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: botResponse || "Sorry, I couldn't understand that." },
      ]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Oops! Something went wrong. Please try again." },
      ]);
    } finally {
      setIsProcessing(false);
      setInput(""); // Clear input field after sending
    }
  }, [input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  if (!chatBotStatus) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-sm mx-auto rounded-lg shadow-lg relative bg-gray-900 bg-opacity-90"
    >
      <div className="flex justify-between items-center mb-4">
        <ChatIcon />
        <button
          type="button"
          className="text-xl font-semibold text-white"
          onClick={() => setChatBotStatus(false)}
        >
          X
        </button>
      </div>

      <div className="p-4 h-80 overflow-y-auto rounded-lg bg-gray-800 shadow-sm backdrop-blur-md bg-opacity-40">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`mb-2 py-2 px-4 rounded-md ${
              msg.role === "user" ? "bg-blue-100 text-blue-700" : "bg-indigo-500 text-white"
            }`}
          >
            <strong>{msg.role === "user" ? "You: " : "Bot: "}</strong>
            {msg.content}
          </p>
        ))}
        {isProcessing && <p className="py-2 px-4 bg-indigo-500 text-white">Bot: Thinking...</p>}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center mt-4">
        <input
          type="text"
          className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none text-white bg-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          disabled={isProcessing}
        />
        <button
          type="submit"
          className="ml-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 disabled:bg-blue-200"
          disabled={isProcessing}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Chatbot;
