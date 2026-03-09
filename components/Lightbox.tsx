import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Disable scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetZoom();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetZoom();
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.5, 1));
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      const delta = e.deltaY * -0.01;
      setScale((prev) => Math.min(Math.max(1, prev + delta), 3));
    }
  };

  return (
    <div 
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-300"
        onClick={onClose}
        onWheel={handleWheel}
    >
      {/* Controls */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50 transition-colors"
      >
        <X size={32} />
      </button>

      {/* Navigation */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 z-50 transition-colors hover:bg-white/10 rounded-full"
      >
        <ChevronLeft size={40} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 z-50 transition-colors hover:bg-white/10 rounded-full"
      >
        <ChevronRight size={40} />
      </button>

      {/* Toolbar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-black/50 backdrop-blur rounded-full px-6 py-3 z-50" onClick={(e) => e.stopPropagation()}>
         <button onClick={handleZoomOut} className="text-white hover:text-bukhara-gold transition-colors"><ZoomOut size={24} /></button>
         <span className="text-white text-sm flex items-center font-mono">{Math.round(scale * 100)}%</span>
         <button onClick={handleZoomIn} className="text-white hover:text-bukhara-gold transition-colors"><ZoomIn size={24} /></button>
      </div>

      {/* Image Container */}
      <div 
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
      >
        <img 
            src={images[currentIndex]} 
            alt={`Gallery ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain transition-transform duration-200"
            style={{ 
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                cursor: scale > 1 ? 'grab' : 'default'
            }}
            onClick={(e) => e.stopPropagation()}
        />
      </div>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/80 font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;