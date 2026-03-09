import React, { useState } from 'react';
import { TripPreferences, Language } from '../types';
import { generateTripPlan } from '../services/openRouterService';
import { Calendar, Clock, DollarSign, Heart, User, Map, Loader2, Send, Sparkles } from 'lucide-react';
import { UI_TEXT } from '../constants';

interface TripPlannerProps {
    lang: Language;
}

const TripPlanner: React.FC<TripPlannerProps> = ({ lang }) => {
    const [loading, setLoading] = useState(false);
    const [itinerary, setItinerary] = useState<string | null>(null);
    const [formData, setFormData] = useState<TripPreferences>({
        travelerType: 'History Enthusiast',
        duration: 3,
        pace: 'Moderate',
        interests: '',
        budget: 'Mid-range'
    });

    const handleGenerate = async () => {
        setLoading(true);
        setItinerary(null);
        try {
            const plan = await generateTripPlan(formData, lang);
            setItinerary(plan);
        } catch (error) {
            setItinerary("Error generating plan.");
        } finally {
            setLoading(false);
        }
    };

    const formatItinerary = (text: string) => {
        return text.split('\n').map((line, i) => {
            if (line.trim().startsWith('**') || line.trim().startsWith('#')) {
                return <h3 key={i} className="text-2xl font-serif font-bold text-bukhara-primary mt-10 mb-6 pb-2 border-b border-gray-100">
                    {line.replace(/\*\*/g, '').replace(/#/g, '')}
                </h3>;
            }
            if (line.trim().startsWith('*')) {
                return (
                    <div key={i} className="flex gap-4 mb-4 group">
                        <div className="min-w-[4px] bg-bukhara-secondary/30 rounded-full group-hover:bg-bukhara-secondary transition-colors"></div>
                        <p className="text-bukhara-text leading-relaxed py-1">
                            {line.replace(/\*/g, '')}
                        </p>
                    </div>
                );
            }
            return <p key={i} className="text-gray-600 mb-2 leading-relaxed">{line}</p>;
        });
    };

    return (
        <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl animate-in fade-in slide-in-from-bottom-5">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-bukhara-primary/5 rounded-full text-bukhara-primary text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles size={14} /> AI Travel Agent
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-bukhara-primary mb-6">{UI_TEXT.plannerTitle[lang]}</h2>
                <p className="text-bukhara-muted text-lg font-light">{UI_TEXT.plannerSubtitle[lang]}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Form Section - White Card floating on stone bg */}
                <div className="lg:col-span-4 sticky top-28">
                    <div className="bg-white rounded-3xl p-8 shadow-soft border border-white/50">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="p-3 bg-bukhara-bg rounded-xl text-bukhara-primary">
                                <Map size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-bukhara-text">Preferences</h3>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                    {UI_TEXT.pTravelerType[lang]}
                                </label>
                                <select
                                    className="w-full p-4 bg-bukhara-bg rounded-xl border-none focus:ring-2 focus:ring-bukhara-primary/20 transition-all text-sm font-medium text-bukhara-text"
                                    value={formData.travelerType}
                                    onChange={(e) => setFormData({ ...formData, travelerType: e.target.value })}
                                >
                                    <option value="History Enthusiast">History Enthusiast</option>
                                    <option value="Spiritual Seeker">Spiritual Seeker</option>
                                    <option value="Foodie">Foodie</option>
                                    <option value="Family with Kids">Family with Kids</option>
                                    <option value="Adventure Traveler">Adventure Traveler</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                    {UI_TEXT.pDuration[lang]}
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max="14"
                                    className="w-full p-4 bg-bukhara-bg rounded-xl border-none focus:ring-2 focus:ring-bukhara-primary/20 transition-all text-sm font-medium text-bukhara-text"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                    {UI_TEXT.pPace[lang]}
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {['Relaxed', 'Moderate', 'Fast'].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setFormData({ ...formData, pace: opt === 'Fast' ? 'Fast-paced' : opt })}
                                            className={`py-3 text-sm font-medium rounded-xl transition-all ${formData.pace.includes(opt)
                                                    ? 'bg-bukhara-primary text-white shadow-md'
                                                    : 'bg-bukhara-bg text-gray-500 hover:bg-gray-200'
                                                }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                    {UI_TEXT.pBudget[lang]}
                                </label>
                                <select
                                    className="w-full p-4 bg-bukhara-bg rounded-xl border-none focus:ring-2 focus:ring-bukhara-primary/20 transition-all text-sm font-medium text-bukhara-text"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="Economy">Economy</option>
                                    <option value="Mid-range">Mid-range</option>
                                    <option value="Premium">Premium</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
                                    {UI_TEXT.pInterests[lang]}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Photography, Sufism..."
                                    className="w-full p-4 bg-bukhara-bg rounded-xl border-none focus:ring-2 focus:ring-bukhara-primary/20 transition-all text-sm font-medium text-bukhara-text"
                                    value={formData.interests}
                                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                />
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="w-full py-4 bg-bukhara-primary text-white font-bold rounded-xl hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                                {loading ? UI_TEXT.generating[lang] : UI_TEXT.pGenerate[lang]}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="lg:col-span-8">
                    {itinerary ? (
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-white/50 animate-in fade-in slide-in-from-bottom-5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-bukhara-primary/5 rounded-bl-full -mr-10 -mt-10"></div>

                            <div className="flex items-center gap-5 mb-12 pb-6 border-b border-gray-100 relative z-10">
                                <div className="w-16 h-16 bg-bukhara-secondary text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                                    <Map size={32} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-bukhara-text">Your Itinerary</h3>
                                    <p className="text-bukhara-muted mt-1">Curated specifically for you</p>
                                </div>
                            </div>
                            <div className="prose prose-lg prose-stone max-w-none">
                                {formatItinerary(itinerary)}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-12 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
                            <div className="p-6 bg-white rounded-full mb-6 shadow-sm">
                                <Sparkles size={40} className="text-bukhara-secondary" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-bukhara-text mb-3">Begin Your Journey</h3>
                            <p className="text-bukhara-muted max-w-md mx-auto leading-relaxed">
                                Our AI will craft a bespoke itinerary based on your preferences. Fill out the details to get started.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TripPlanner;