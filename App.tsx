import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Instagram, Send, ChevronRight, Sun, History, ArrowRight, UserCheck } from 'lucide-react';
import { BUKHARA_SITES, UI_TEXT } from './constants';
import SiteCard from './components/SiteCard';
import VRSection from './components/VRSection';
import CultureSection from './components/CultureSection';
import AIChat from './components/AIChat';
import VRModal from './components/VRModal';
import SiteDetails from './components/SiteDetails';
import TripPlanner from './components/TripPlanner';
import { Site, Language } from './types';

type ViewState = 'home' | 'vr-page' | 'culture' | 'planner' | 'project';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [lang, setLang] = useState<Language>('uz');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedVRSite, setSelectedVRSite] = useState<Site | null>(null);
  const [selectedDetailSite, setSelectedDetailSite] = useState<Site | null>(null);
  
  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    
    if (view === 'home' && sectionId) {
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleVRClick = (site: Site) => {
    setSelectedVRSite(site);
    setSelectedDetailSite(null);
  };

  const handleReadMore = (site: Site) => {
    setSelectedDetailSite(site);
  };

  const filteredSites = useMemo(() => {
    if (activeFilter === 'all') return BUKHARA_SITES;
    return BUKHARA_SITES.filter(site => site.category === activeFilter);
  }, [activeFilter]);

  const filters = [
    { id: 'all', label: UI_TEXT.filterAll[lang] },
    { id: 'yetti-pir', label: UI_TEXT.filterPirs[lang] },
    { id: 'maqbara', label: UI_TEXT.filterMausoleum[lang] },
    { id: 'masjid-madrasa', label: UI_TEXT.filterMosque[lang] },
    { id: 'tarixiy', label: UI_TEXT.filterHistory[lang] },
  ];

  return (
    <div className="min-h-screen font-sans text-bukhara-text overflow-x-hidden bg-bukhara-bg selection:bg-bukhara-primary selection:text-white">
      {/* Navigation - Transparent & Airy */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-white/20' 
            : 'bg-gradient-to-b from-black/40 to-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${isScrolled || currentView !== 'home' ? 'bg-bukhara-primary text-white' : 'bg-white text-bukhara-primary'}`}>
                <span className="font-serif font-bold text-xl">B</span>
            </div>
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || currentView !== 'home' ? 'text-bukhara-primary' : 'text-white'}`}>
              Buxoro
            </span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-300 ${isScrolled ? 'bg-stone-100/50 border border-stone-200' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
            {[
                { id: 'home', label: UI_TEXT.home[lang], view: 'home', section: 'hero' },
                { id: 'about', label: UI_TEXT.history[lang], view: 'home', section: 'about' },
                { id: 'sites', label: UI_TEXT.sites[lang], view: 'home', section: 'sites' },
                { id: 'vr', label: UI_TEXT.vrPage[lang], view: 'vr-page' },
                { id: 'culture', label: UI_TEXT.culture[lang], view: 'culture' },
                { id: 'planner', label: UI_TEXT.planner[lang], view: 'planner' },
                { id: 'project', label: UI_TEXT.project[lang], view: 'project' },
            ].map((item) => (
                <button 
                    key={item.id}
                    onClick={() => handleNavClick(item.view as ViewState, item.section)}
                    className={`
                        px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${currentView === item.view && (!item.section || item.section === 'hero' && currentView === 'home')
                            ? 'bg-bukhara-primary text-white shadow-md' 
                            : isScrolled 
                                ? 'text-gray-600 hover:text-bukhara-primary hover:bg-white' 
                                : 'text-white hover:bg-white/20'
                        }
                    `}
                >
                    {item.label}
                </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
             {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-2">
                {(['uz', 'ru', 'en'] as Language[]).map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`text-xs font-bold uppercase px-2 py-1 rounded transition-colors ${
                            lang === l 
                            ? 'text-bukhara-secondary border-b-2 border-bukhara-secondary' 
                            : isScrolled || currentView !== 'home' ? 'text-gray-400 hover:text-bukhara-primary' : 'text-white/80 hover:text-white'
                        }`}
                    >
                        {l}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
                className={`md:hidden p-2 rounded-lg ${isScrolled || currentView !== 'home' ? 'text-bukhara-primary bg-white shadow-sm' : 'text-white bg-white/10'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-bukhara-bg border-b border-gray-200 py-6 px-6 flex flex-col space-y-2 animate-in slide-in-from-top-2 shadow-xl">
             <button onClick={() => handleNavClick('home', 'hero')} className="text-lg font-serif font-bold text-bukhara-primary text-left py-3 px-4 rounded-xl hover:bg-white">{UI_TEXT.home[lang]}</button>
             <button onClick={() => handleNavClick('home', 'about')} className="text-lg font-serif font-bold text-bukhara-primary text-left py-3 px-4 rounded-xl hover:bg-white">{UI_TEXT.history[lang]}</button>
             <button onClick={() => handleNavClick('home', 'sites')} className="text-lg font-serif font-bold text-bukhara-primary text-left py-3 px-4 rounded-xl hover:bg-white">{UI_TEXT.sites[lang]}</button>
             <button onClick={() => handleNavClick('vr-page')} className="text-lg font-serif font-bold text-bukhara-primary text-left py-3 px-4 rounded-xl hover:bg-white">{UI_TEXT.vrPage[lang]}</button>
             <button onClick={() => handleNavClick('culture')} className="text-lg font-serif font-bold text-bukhara-primary text-left py-3 px-4 rounded-xl hover:bg-white">{UI_TEXT.culture[lang]}</button>
             <button onClick={() => handleNavClick('planner')} className="text-lg font-serif font-bold text-bukhara-primary text-left py-3 px-4 rounded-xl hover:bg-white">{UI_TEXT.planner[lang]}</button>
             <button onClick={() => handleNavClick('project')} className="text-lg font-serif font-bold text-bukhara-primary text-left py-3 px-4 rounded-xl hover:bg-white">{UI_TEXT.project[lang]}</button>
             
             {/* Mobile Language */}
             <div className="flex gap-2 pt-4 justify-center">
                {(['uz', 'ru', 'en'] as Language[]).map((l) => (
                    <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold uppercase ${
                            lang === l ? 'bg-bukhara-primary text-white' : 'bg-white text-gray-500'
                        }`}
                    >
                        {l}
                    </button>
                ))}
             </div>
          </div>
        )}
      </nav>

      {/* Main Content Router */}
      <main className="animate-in fade-in duration-500">
      {currentView === 'home' ? (
        <>
            {/* Hero Section - Colorful & Vibrant */}
            <header id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#2d1b4e]">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://uzbekistan.travel/storage/app/media/Rasmlar/Buxoro/cropped-images/image_2024-12-23_16-38-28-0-0-0-0-1738740766.png" 
                        alt="Bukhara Poi Kalyan at Night" 
                        className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
                    />
                    
                    {/* Vibrant Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2d1b4e]/30 via-transparent to-[#0B1D36]/80 mix-blend-multiply"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bukhara-primary/90 via-bukhara-primary/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center pt-20">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white shadow-lg mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <Sun size={16} className="text-yellow-400 animate-pulse" />
                        <span className="tracking-[0.2em] uppercase text-xs font-bold text-white shadow-black drop-shadow-md">Sharq Gavhari</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-2xl">
                        {UI_TEXT.heroTitle[lang]}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-lg">
                        {UI_TEXT.heroSubtitle[lang]}
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <button 
                            onClick={() => handleNavClick('home', 'sites')}
                            className="bg-bukhara-secondary hover:bg-yellow-500 text-white px-10 py-4 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(202,138,4,0.5)] flex items-center gap-2 border border-transparent"
                        >
                            {UI_TEXT.sites[lang]}
                            <ChevronRight size={18} />
                        </button>
                        <button 
                            onClick={() => handleNavClick('planner')}
                            className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-bukhara-primary transition-all hover:-translate-y-1 hover:shadow-lg"
                        >
                            {UI_TEXT.planner[lang]}
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-white/80 rounded-full"></div>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50 skew-x-12 translate-x-20 z-0"></div>
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative group animate-fade-up">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                                <img 
                                    src="https://uzbekistan.travel/storage/app/media/Rasmlar/Buxoro/Umumiy/cropped-images/shutterstock_1007253181-0-0-0-0-1738740666.jpg" 
                                    alt="Ark Fortress" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-bukhara-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            {/* Decorative Box */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-bukhara-secondary/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-10 -left-10 w-48 h-48 bg-bukhara-primary/5 rounded-full blur-3xl -z-10"></div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bukhara-primary/5 text-bukhara-primary rounded-full mb-6">
                                <History size={18} />
                                <span className="text-sm font-bold uppercase tracking-wider">{UI_TEXT.historyTag[lang]}</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-bukhara-primary mb-8 leading-tight">
                                {UI_TEXT.aboutTitle[lang]}
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
                                {UI_TEXT.aboutDesc[lang]}
                            </p>
                            
                            <button 
                                onClick={() => handleNavClick('home', 'sites')}
                                className="group flex items-center gap-3 text-bukhara-secondary font-bold text-lg hover:gap-4 transition-all"
                            >
                                {UI_TEXT.startTour[lang]} 
                                <ArrowRight size={20} className="group-hover:text-bukhara-primary transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sites Grid */}
            <section id="sites" className="py-32 bg-bukhara-bg relative">
                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none"></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl animate-fade-up">
                            <span className="text-bukhara-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Kashf eting</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-bukhara-primary mb-6">
                                {UI_TEXT.sitesTitle[lang]}
                            </h2>
                            <p className="text-bukhara-muted text-lg leading-relaxed border-l-4 border-bukhara-secondary/30 pl-4">
                                {UI_TEXT.sitesDesc[lang]}
                            </p>
                        </div>
                        
                        {/* Refined Tabs */}
                        <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-bukhara-primary text-white shadow-lg ring-2 ring-bukhara-primary ring-offset-2 ring-offset-bukhara-bg'
                                    : 'bg-white text-gray-500 hover:text-bukhara-primary hover:bg-gray-50 shadow-sm border border-gray-100'
                                }`}
                            >
                                {filter.label}
                            </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid with More Breathing Room */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredSites.map((site, index) => (
                            <div key={site.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-up">
                                <SiteCard 
                                    site={site} 
                                    onVRClick={handleVRClick}
                                    onReadMore={handleReadMore}
                                    lang={lang}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
      ) : currentView === 'vr-page' ? (
          /* VR Page View */
          <div className="pt-24 bg-stone-100 min-h-screen">
              <VRSection onSiteClick={handleVRClick} lang={lang} />
          </div>
      ) : currentView === 'culture' ? (
          /* Culture Page View */
          <div className="pt-24 bg-bukhara-bg">
              <CultureSection lang={lang} />
          </div>
      ) : currentView === 'project' ? (
         /* Project Page View */
         <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-stone-100 animate-fade-up">
                    <div className="inline-block px-4 py-2 bg-bukhara-primary/10 text-bukhara-primary rounded-full font-bold text-sm mb-6">
                        {UI_TEXT.project[lang]}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-bukhara-primary mb-10 leading-tight">
                        {UI_TEXT.projectTitle[lang]}
                    </h1>
                    
                    <div className="prose prose-lg prose-stone max-w-none mb-12">
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {UI_TEXT.projectContent[lang]}
                        </p>
                    </div>

                    <div className="border-t border-gray-100 pt-10">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-bukhara-primary to-bukhara-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                                <UserCheck size={32} />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider block mb-1">
                                    {UI_TEXT.authorTitle[lang]}
                                </span>
                                <h3 className="text-2xl font-serif font-bold text-bukhara-primary">
                                    Sevinch Jovliyeva
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      ) : (
          /* Planner View */
          <div className="pt-24 bg-bukhara-bg">
              <TripPlanner lang={lang} />
          </div>
      )}
      </main>

      {/* Footer - Deep Blue */}
      <footer className="bg-bukhara-primary text-white py-20 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
            <div className="md:col-span-2">
              <span className="font-serif text-3xl font-bold text-white block mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-bukhara-secondary rounded-lg flex items-center justify-center text-bukhara-primary text-lg">B</div>
                Buxoro.
              </span>
              <p className="text-white/60 text-lg max-w-sm leading-relaxed">
                 Raqamli turizm orqali o'tmish va kelajakni bog'laymiz. Har bir qadamda tarixni his eting.
              </p>
            </div>
            
            <div>
                 <h4 className="font-bold text-lg mb-6 text-bukhara-secondary">Platforma</h4>
                 <ul className="space-y-4 text-white/60">
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('home', 'hero')}>Asosiy</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('home', 'sites')}>Obidalar</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('culture')}>Madaniyat</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavClick('project')}>Loyiha</li>
                 </ul>
            </div>

            <div>
                 <h4 className="font-bold text-lg mb-6 text-bukhara-secondary">Aloqa</h4>
                 <div className="flex gap-4">
                    <a href="https://www.instagram.com/jovliyevasevinch/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-bukhara-primary transition-all border border-white/10"><Instagram size={22} /></a>
                    <a href="https://t.me/iiau_official" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-bukhara-primary transition-all border border-white/10"><Send size={22} /></a>
                </div>
            </div>
          </div>
          <div className="text-center text-white/40 text-sm flex flex-col md:flex-row justify-between items-center">
            <span>© Buxoro Digital Tourism.</span>
            <span>Made with ❤️ for Uzbekistan</span>
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <VRModal 
        isOpen={!!selectedVRSite} 
        onClose={() => setSelectedVRSite(null)} 
        url={selectedVRSite?.vrUrl || ''} 
        title={selectedVRSite?.name[lang] || ''} 
      />

      <SiteDetails 
        site={selectedDetailSite}
        onClose={() => setSelectedDetailSite(null)}
        onVRClick={handleVRClick}
        lang={lang}
        onNavigate={handleReadMore}
      />

      {/* AI Assistant */}
      <AIChat />
    </div>
  );
};

export default App;