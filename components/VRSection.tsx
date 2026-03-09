import React from 'react';
import { VRProfileProps, Language } from '../types';
import { Compass, ExternalLink, Play } from 'lucide-react';
import { BUKHARA_SITES, UI_TEXT } from '../constants';

const VRSection: React.FC<VRProfileProps> = ({ onSiteClick, lang }) => {
  return (
    <section className="py-24 bg-stone-100 text-bukhara-text min-h-screen" id="vr-tour">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-bukhara-secondary mb-4">
                    <Compass size={20} />
                    <span className="font-bold tracking-widest uppercase text-sm">Virtual Reality Tour</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-bukhara-primary mb-6">
                    {UI_TEXT.vrPage[lang]}
                </h2>
                <p className="text-bukhara-muted text-lg font-light leading-relaxed">
                    {UI_TEXT.heroSubtitle[lang]}
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BUKHARA_SITES.map((site) => (
                <div 
                    key={site.id} 
                    onClick={() => onSiteClick(site)}
                    className="group relative h-[350px] bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl border border-stone-200 transition-all duration-300"
                >
                    <img 
                        src={site.imageUrl} 
                        alt={site.name[lang]} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay - Lighter for readability but still needed for white text on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="w-20 h-20 rounded-full bg-bukhara-secondary/90 backdrop-blur text-white flex items-center justify-center shadow-[0_0_30px_rgba(202,138,4,0.3)] transform scale-50 group-hover:scale-100 transition-transform duration-300">
                             <Play size={32} fill="currentColor" className="ml-2" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-bukhara-secondary text-xs font-bold uppercase tracking-wider mb-2 block">360° View</span>
                        <h3 className="text-2xl font-serif font-bold text-white drop-shadow-md">
                            {site.name[lang]}
                        </h3>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur p-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-bukhara-primary text-white">
                        <ExternalLink size={20} />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VRSection;