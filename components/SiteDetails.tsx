import React, { useState, useEffect, useRef } from 'react';
import { Site, Language } from '../types';
import { Calendar, Compass, Image as ImageIcon, BookOpen, Map as MapIcon, Share2, ArrowLeft, Activity, Accessibility, Navigation, ZoomIn, MapPin } from 'lucide-react';
import { UI_TEXT, BUKHARA_SITES } from '../constants';
import Lightbox from './Lightbox';

interface SiteDetailsProps {
  site: Site | null;
  onClose: () => void;
  onVRClick: (site: Site) => void;
  lang: Language;
  onNavigate: (site: Site) => void; 
}

const Timeline: React.FC<{ events: any[], lang: Language }> = ({ events, lang }) => {
    return (
        <div className="relative border-l-2 border-stone-200 ml-3 space-y-8 py-4">
            {events.map((event, idx) => (
                <div key={idx} className="relative pl-6 group">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-bukhara-teal group-hover:scale-125 transition-transform"></div>
                    <span className="text-sm font-bold text-bukhara-teal bg-bukhara-teal/10 px-2 py-0.5 rounded mb-1 inline-block">
                        {event.year}
                    </span>
                    <h5 className="font-bold text-stone-800 text-lg">{event.title[lang]}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description[lang]}</p>
                </div>
            ))}
        </div>
    );
};

const SiteDetails: React.FC<SiteDetailsProps> = ({ site, onClose, onVRClick, lang, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'info' | 'map' | 'gallery'>('info');
  const [showShareToast, setShowShareToast] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll to top when site changes
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
     if (contentRef.current) contentRef.current.scrollTop = 0;
     setActiveTab('info');
  }, [site]);

  if (!site) return null;

  const handleShare = async () => {
    const url = window.location.href;
    const shareData = {
      title: site.name[lang],
      text: site.description[lang],
      url: url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      navigator.clipboard.writeText(url);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    }
  };

  const getNearbySites = () => {
      if (!site) return [];
      // Calculate distance (simple euclidean approx is enough for local city scale)
      const nearby = BUKHARA_SITES
        .filter(s => s.id !== site.id)
        .map(s => {
            const dist = Math.sqrt(
                Math.pow(s.coordinates.lat - site.coordinates.lat, 2) + 
                Math.pow(s.coordinates.lng - site.coordinates.lng, 2)
            );
            return { ...s, distance: dist };
        })
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3);
      return nearby;
  };

  return (
    <>
        <div className="fixed inset-0 z-[60] bg-white animate-in slide-in-from-bottom-5 duration-300 overflow-y-auto" ref={contentRef}>
        
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex justify-between items-center shadow-sm">
            <button 
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors text-stone-700"
            >
            <ArrowLeft size={20} />
            <span className="font-medium hidden sm:inline">{UI_TEXT.back[lang]}</span>
            </button>
            
            <h2 className="font-serif font-bold text-lg md:text-xl truncate max-w-[50%] text-center">
            {site.name[lang]}
            </h2>

            <div className="flex gap-2">
                <button 
                    onClick={handleShare}
                    className="p-2.5 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors relative"
                >
                    <Share2 size={20} className="text-stone-700" />
                    {showShareToast && (
                        <span className="absolute top-full right-0 mt-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-in fade-in">
                            {UI_TEXT.shareSuccess[lang]}
                        </span>
                    )}
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto pb-20">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] w-full group">
            <img 
                src={site.imageUrl} 
                alt={site.name[lang]} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="bg-bukhara-gold px-3 py-1 rounded-full text-stone-900 text-sm font-bold uppercase tracking-wider shadow-lg">
                        {site.category}
                    </span>
                    <span className="flex items-center gap-2 bg-black/40 backdrop-blur px-3 py-1 rounded-full text-sm border border-white/20">
                        <Calendar size={16} /> {site.year}
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 drop-shadow-lg leading-tight">
                    {site.name[lang]}
                </h1>
            </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 sticky top-[65px] bg-white z-40 shadow-sm overflow-x-auto">
                <button 
                    onClick={() => setActiveTab('info')}
                    className={`flex-1 py-4 px-6 font-medium text-sm md:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'info' ? 'text-bukhara-teal border-b-2 border-bukhara-teal' : 'text-gray-500 hover:text-gray-800'}`}
                >
                    <BookOpen size={18} /> {UI_TEXT.info[lang]}
                </button>
                <button 
                    onClick={() => setActiveTab('map')}
                    className={`flex-1 py-4 px-6 font-medium text-sm md:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'map' ? 'text-bukhara-teal border-b-2 border-bukhara-teal' : 'text-gray-500 hover:text-gray-800'}`}
                >
                    <MapIcon size={18} /> {UI_TEXT.map[lang]}
                </button>
                <button 
                    onClick={() => setActiveTab('gallery')}
                    className={`flex-1 py-4 px-6 font-medium text-sm md:text-base flex items-center justify-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'gallery' ? 'text-bukhara-teal border-b-2 border-bukhara-teal' : 'text-gray-500 hover:text-gray-800'}`}
                >
                    <ImageIcon size={18} /> {UI_TEXT.gallery[lang]}
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 md:p-8 min-h-[500px]">
                {activeTab === 'info' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Main Text */}
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4 flex items-center gap-2">
                                    <Activity size={24} className="text-bukhara-gold" />
                                    {UI_TEXT.history[lang]}
                                </h3>
                                <p className="text-gray-700 leading-8 text-lg text-justify first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-bukhara-teal">
                                    {site.fullDescription[lang]}
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                                <h3 className="text-xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                                    <Activity size={24} className="text-bukhara-teal" />
                                    {UI_TEXT.timeline[lang]}
                                </h3>
                                <Timeline events={site.timeline} lang={lang} />
                            </div>

                            {/* Adaptive Tourism (Accessibility) */}
                            <div className="bg-white p-6 rounded-2xl border-l-4 border-bukhara-gold shadow-sm">
                                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                                    <Accessibility size={24} className="text-bukhara-gold" />
                                    {UI_TEXT.adaptiveTourism[lang]}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {site.accessibility[lang]}
                                </p>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div className="space-y-6">
                            
                            {/* VR CTA */}
                            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 sticky top-24">
                                <h4 className="font-bold text-stone-900 text-xl mb-6">{UI_TEXT.startTour[lang]}</h4>
                                <button 
                                    onClick={() => onVRClick(site)}
                                    className="w-full py-4 bg-bukhara-gold text-white rounded-xl hover:bg-yellow-600 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 font-bold text-lg"
                                >
                                    <Compass size={24} />
                                    {UI_TEXT.startVR[lang]}
                                </button>
                                <p className="text-sm text-gray-500 mt-4 text-center leading-relaxed">
                                    {UI_TEXT.dragHint[lang]}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'map' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 w-full h-[500px] lg:h-[600px] bg-stone-100 rounded-2xl overflow-hidden shadow-inner border border-stone-200 relative">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                frameBorder="0" 
                                scrolling="no" 
                                marginHeight={0} 
                                marginWidth={0} 
                                src={`https://maps.google.com/maps?q=${site.coordinates.lat},${site.coordinates.lng}&z=15&output=embed`}
                                title="Map"
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        </div>

                        {/* Nearby Sites List */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-stone-800 flex items-center gap-2">
                                <Navigation size={20} className="text-bukhara-teal" />
                                {UI_TEXT.nearbySites[lang]}
                            </h3>
                            {getNearbySites().map((nearbySite) => (
                                <div 
                                    key={nearbySite.id}
                                    onClick={() => onNavigate(nearbySite)}
                                    className="flex gap-3 p-3 rounded-xl bg-white border border-stone-100 shadow-sm hover:shadow-md hover:border-bukhara-gold/50 cursor-pointer transition-all group"
                                >
                                    <img src={nearbySite.imageUrl} alt="" className="w-20 h-20 rounded-lg object-cover" />
                                    <div>
                                        <h4 className="font-bold text-sm text-stone-900 group-hover:text-bukhara-teal transition-colors line-clamp-2">
                                            {nearbySite.name[lang]}
                                        </h4>
                                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{nearbySite.year}</p>
                                        <div className="mt-2 text-xs font-medium text-bukhara-gold flex items-center gap-1">
                                            <MapPin size={12} />
                                            ~{(nearbySite.distance * 111).toFixed(1)} km
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'gallery' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {site.gallery.map((img, idx) => (
                            <div 
                                key={idx} 
                                onClick={() => setLightboxIndex(idx)}
                                className="aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in hover:shadow-xl transition-all duration-300 group relative"
                            >
                                <img 
                                    src={img} 
                                    alt={`Gallery ${idx}`} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ZoomIn size={32} className="text-white drop-shadow-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
            <Lightbox 
                images={site.gallery} 
                initialIndex={lightboxIndex} 
                onClose={() => setLightboxIndex(null)} 
            />
        )}
    </>
  );
};

export default SiteDetails;