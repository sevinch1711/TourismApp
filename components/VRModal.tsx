import React, { useState, useEffect } from 'react';
import { X, Loader2, ArrowLeft, MousePointer2, Share2, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { UI_TEXT } from '../constants';

interface VRModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

const VRModal: React.FC<VRModalProps> = ({ isOpen, onClose, url, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [scale, setScale] = useState(1);
  const [showShareToast, setShowShareToast] = useState(false);

  // Reset loading state when the modal opens or URL changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setShowHint(false);
      setScale(1);
    }
  }, [isOpen, url]);

  // Show hint after loading finishes
  const handleLoad = () => {
    setIsLoading(false);
    setShowHint(true);
    // Hide hint after 4 seconds
    setTimeout(() => setShowHint(false), 4000);
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.5, 1));
  
  const handleShare = async () => {
      const shareUrl = window.location.href; 
      const shareData = {
        title: `VR Tour: ${title}`,
        text: `Check out this 360 tour of ${title}`,
        url: shareUrl,
      };
  
      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          console.log('Share canceled');
        }
      } else {
        navigator.clipboard.writeText(shareUrl);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
      }
    };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full h-full md:h-[90vh] md:max-w-7xl bg-stone-900 md:rounded-2xl overflow-hidden shadow-2xl border-0 md:border border-bukhara-gold/30 flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-stone-900/90 border-b border-white/10 backdrop-blur-sm absolute top-0 left-0 right-0 z-20 md:static">
           <div className="flex items-center gap-4">
             <button 
               onClick={onClose}
               className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-200 border border-white/10 group shadow-lg"
             >
               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
               <span className="font-medium text-sm hidden sm:inline">Ortga</span>
             </button>
             <h3 className="text-white font-serif text-lg md:text-xl tracking-wide hidden sm:block text-ellipsis whitespace-nowrap overflow-hidden max-w-[200px] md:max-w-md">
               <span className="text-bukhara-gold mr-2">360°:</span> 
               {title}
             </h3>
           </div>
           
           <div className="flex items-center gap-2">
                <button
                    onClick={handleShare}
                    className="p-2 bg-white/5 text-white hover:bg-white/10 rounded-full border border-white/10 transition-all relative"
                >
                    <Share2 size={20} />
                    {showShareToast && (
                        <span className="absolute top-full right-0 mt-2 bg-white text-black text-xs px-2 py-1 rounded whitespace-nowrap animate-in fade-in z-50">
                            Copied!
                        </span>
                    )}
                </button>
                <button 
                    onClick={onClose}
                    className="p-2 bg-white/5 text-gray-400 hover:text-white rounded-full hover:bg-red-500/20 hover:border-red-500/50 border border-transparent transition-all"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>
           </div>
        </div>
        
        {/* Mobile Title */}
        <div className="md:hidden absolute top-20 left-4 z-20 pointer-events-none">
            <h3 className="text-white font-serif text-sm drop-shadow-md bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm inline-block border border-white/10">
               {title}
            </h3>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-black relative w-full h-full overflow-hidden">
            {/* Loading Overlay */}
            {(isLoading) && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-stone-900 text-bukhara-gold transition-opacity duration-500">
                    <div className="relative">
                        <div className="absolute inset-0 animate-ping rounded-full bg-bukhara-gold/20"></div>
                        <Loader2 size={48} className="animate-spin relative z-10" />
                    </div>
                    <p className="mt-4 text-white/80 font-medium tracking-wider animate-pulse">Yuklanmoqda...</p>
                </div>
            )}

            {/* Interactive Hint */}
            <div className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${showHint ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-3 border border-white/20 shadow-xl transform scale-100 animate-in fade-in zoom-in duration-300">
                    <MousePointer2 size={24} className="animate-bounce" />
                    <span className="font-medium">Aylantirish uchun suring</span>
                </div>
            </div>
            
            {/* Controls Overlay */}
            <div className="absolute bottom-6 right-6 z-20 flex flex-col gap-2">
                <button 
                    onClick={handleZoomIn}
                    className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md border border-white/20 transition-all active:scale-95"
                    title="Zoom In"
                >
                    <ZoomIn size={24} />
                </button>
                <button 
                    onClick={handleZoomOut}
                    className="p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md border border-white/20 transition-all active:scale-95"
                    title="Zoom Out"
                >
                    <ZoomOut size={24} />
                </button>
            </div>

            {/* Iframe */}
            <div className="w-full h-full overflow-hidden relative">
                <iframe 
                    onLoad={handleLoad}
                    width="100%" 
                    height="100%" 
                    style={{ 
                        border: 0,
                        transform: `scale(${scale})`,
                        transformOrigin: 'center center',
                        transition: 'transform 0.3s ease-out'
                    }} 
                    allow="xr-spatial-tracking; gyroscope; accelerometer" 
                    allowFullScreen 
                    src={url}
                    title={`VR tour of ${title}`}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                >
                </iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VRModal;