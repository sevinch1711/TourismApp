import React from 'react';
import { Site, Language } from '../types';
import { Compass, ArrowRight, Star } from 'lucide-react';
import { UI_TEXT } from '../constants';

interface SiteCardProps {
  site: Site;
  onVRClick: (site: Site) => void;
  onReadMore: (site: Site) => void;
  lang: Language;
}

const getCategoryLabel = (cat: string, lang: Language) => {
  const labels = {
    'yetti-pir': UI_TEXT.filterPirs[lang],
    'maqbara': UI_TEXT.filterMausoleum[lang],
    'masjid-madrasa': UI_TEXT.filterMosque[lang],
    'tarixiy': UI_TEXT.filterHistory[lang],
  };
  return labels[cat] || 'Obida';
};

const SiteCard: React.FC<SiteCardProps> = ({ site, onVRClick, onReadMore, lang }) => {
  return (
    <div 
        className="group relative bg-bukhara-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 flex flex-col h-full border border-white/50"
        onClick={() => onReadMore(site)}
    >
      {/* Image - Tall and elegant */}
      <div className="relative h-[280px] overflow-hidden">
        <img 
          src={site.imageUrl} 
          alt={site.name[lang]} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
        
        {/* Category Pill */}
        <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-bukhara-primary rounded-full shadow-md">
                {getCategoryLabel(site.category, lang)}
            </span>
        </div>

        {/* VR FAB */}
        <button 
            onClick={(e) => { e.stopPropagation(); onVRClick(site); }}
            className="absolute bottom-4 right-4 w-12 h-12 bg-white text-bukhara-primary rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-bukhara-primary hover:text-white z-10"
            title={UI_TEXT.startVR[lang]}
        >
            <Compass size={24} />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-bukhara-secondary text-xs font-bold uppercase tracking-wider mb-3">
            <Star size={12} fill="currentColor" />
            <span>{site.year}</span>
        </div>

        <h3 className="text-2xl font-serif font-bold text-bukhara-text mb-4 leading-tight group-hover:text-bukhara-primary transition-colors cursor-pointer">
            {site.name[lang]}
        </h3>

        <p className="text-bukhara-muted text-sm leading-relaxed mb-8 line-clamp-3 font-light">
          {site.description[lang]}
        </p>
        
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm font-bold text-bukhara-primary group-hover:underline decoration-bukhara-secondary underline-offset-4 transition-all">
                {UI_TEXT.readMore[lang]}
            </span>
            <div className="p-2 bg-bukhara-bg rounded-full text-gray-400 group-hover:text-bukhara-primary group-hover:bg-white transition-all">
                <ArrowRight size={18} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;