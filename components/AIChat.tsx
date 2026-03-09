import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2, Sparkles, User, MapPin } from 'lucide-react';
import { ChatMessage, MessageRole } from '../types';
import { sendChatMessage } from '../services/openRouterService';
import { UI_TEXT } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: MessageRole.MODEL,
      text: "Assalomu alaykum! Men Buxoro bo'yicha virtual gidman. Qaysi obida yoki tarixiy voqea haqida bilmoqchisiz?"
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: input.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for OpenRouter (OpenAI-compatible format)
      const history = messages.map(m => ({
        role: m.role === MessageRole.USER ? 'user' : 'assistant',
        content: m.text
      }));

      const responseText = await sendChatMessage(userMsg.text, history);

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.MODEL,
        text: responseText
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.MODEL,
        text: "Kechirasiz, xatolik yuz berdi. Qaytadan urinib ko'ring.",
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-2 hover:scale-105 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 bg-bukhara-primary text-white'}`}
      >
        <MapPin size={24} />
        <span className="font-semibold">{UI_TEXT.aiGid['uz']}</span>
      </button>

      {/* Chat Interface */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header - Fixed background color to primary */}
        <div className="p-4 bg-bukhara-primary text-white flex justify-between items-center shadow-md">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <User size={20} className="text-bukhara-secondary" />
            </div>
            <div>
              <h3 className="font-bold">Virtual Gid</h3>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-red-600 rounded-lg transition-colors border border-white/20 shadow-sm"
          >
            <span className="text-sm font-bold">{UI_TEXT.close['uz']}</span>
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === MessageRole.USER
                    ? 'bg-bukhara-primary text-white rounded-tr-none'
                    : 'bg-white text-gray-800 shadow-sm border border-stone-200 rounded-tl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-stone-100">
                <Loader2 size={20} className="animate-spin text-bukhara-secondary" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Savolingizni yozing..."
              className="flex-1 px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-bukhara-primary/50 transition-all placeholder-gray-400 text-gray-700"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-bukhara-primary text-white rounded-xl hover:bg-bukhara-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;