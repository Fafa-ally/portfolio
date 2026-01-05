import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { X, Send, Loader2, Sparkles, Bot } from 'lucide-react';
import { ChatMessage } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Fatma's AI assistant. I can tell you about her projects in C#, Dart, and her data analysis skills.", timestamp: new Date() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      // Construct history for context
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history
      });

      const result = await chat.sendMessage({ message: input });
      const text = result.text;

      const botMsg: ChatMessage = { role: 'model', text: text || "I'm analyzing that request...", timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);

    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMsg: ChatMessage = { role: 'model', text: "Connection to the neural network interrupted.", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 h-[500px] glass-panel rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-primary/20 animate-float-in origin-bottom-right transition-all duration-300">
          
          {/* Header */}
          <div className="bg-surfaceHighlight/80 p-4 flex justify-between items-center border-b border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-blue-800 flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-white">Fatma's AI Agent</h3>
                <span className="flex items-center gap-1 text-[10px] text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-950/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary/20 text-blue-100 border border-blue-500/20 rounded-tr-none' 
                      : 'bg-neutral-800/80 text-neutral-200 border border-white/5 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-800/80 p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-primary" />
                  <span className="text-xs text-neutral-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-surfaceHighlight/50 border-t border-white/5">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my projects..."
                className="w-full bg-neutral-900/80 text-white text-sm rounded-xl pl-4 pr-10 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 border border-white/5 placeholder:text-neutral-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-1.5 bg-primary/20 hover:bg-primary/40 text-primary rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 active:scale-95 group ${isOpen ? 'bg-neutral-800 text-white' : 'bg-primary text-black'}`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Bot size={28} className="group-hover:animate-bounce" />
        )}
      </button>
    </div>
  );
};

export default AIChatBot;