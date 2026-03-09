import React, { useState } from 'react';
import { BUKHARA_CULTURE, UI_TEXT } from '../constants';
import { Language } from '../types';
import { Utensils, Hammer, Star } from 'lucide-react';

interface CultureSectionProps {
  lang: Language;
}

const CultureSection: React.FC<CultureSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'cuisine' | 'craft'>('cuisine');

  const filteredItems = BUKHARA_CULTURE.filter(item => item.type === activeTab);

  return (
    <section id="culture" className="py-24 bg-bukhara-bg min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
            <span className="text-bukhara-secondary font-bold tracking-widest uppercase text-xs mb-3 block">
                {UI_TEXT.cultureTitle[lang]}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-bukhara-primary mb-6">
                {activeTab === 'cuisine' ? UI_TEXT.cuisine[lang] : UI_TEXT.crafts[lang]}
            </h2>
            <p className="text-bukhara-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
                {UI_TEXT.cultureDesc[lang]}
            </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <button
                onClick={() => setActiveTab('cuisine')}
                className={`px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 font-bold text-lg ${
                    activeTab === 'cuisine'
                    ? 'bg-bukhara-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm border border-stone-100'
                }`}
            >
                <Utensils size={20} />
                {UI_TEXT.cuisine[lang]}
            </button>
            <button
                onClick={() => setActiveTab('craft')}
                className={`px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 font-bold text-lg ${
                    activeTab === 'craft'
                    ? 'bg-bukhara-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-500 hover:bg-gray-50 shadow-sm border border-stone-100'
                }`}
            >
                <Hammer size={20} />
                {UI_TEXT.crafts[lang]}
            </button>
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, index) => (
                <div 
                    key={item.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                    style={{ 
                        animation: `fadeUp 0.6s ease-out forwards`,
                        animationDelay: `${index * 0.15}s`,
                        opacity: 0 // Initial state for animation
                    }}
                >
                    <div className="h-[250px] overflow-hidden relative">
                        <img 
                            src={item.imageUrl} 
                            alt={item.name[lang]} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-bukhara-primary uppercase tracking-wider shadow-sm">
                            Buxoro
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-serif font-bold text-bukhara-primary mb-4 group-hover:text-bukhara-secondary transition-colors">
                            {item.name[lang]}
                        </h3>
                        <p className="text-gray-600 leading-relaxed font-light text-justify">
                            {item.description[lang]}
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-2 text-bukhara-secondary text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                             <Star size={16} fill="currentColor" />
                             <span>Mashhur Tavsiya</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;