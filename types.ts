export type Language = 'uz' | 'ru' | 'en';

export interface LocalizedText {
  uz: string;
  ru: string;
  en: string;
}

export interface TimelineEvent {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface Site {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  fullDescription: LocalizedText; // Longer text for details page
  imageUrl: string;
  gallery: string[]; // Array of image URLs
  year: string;
  vrUrl: string;
  category: 'yetti-pir' | 'maqbara' | 'masjid-madrasa' | 'tarixiy';
  coordinates: { lat: number; lng: number };
  timeline: TimelineEvent[];
  audioGuideUrl?: string; // Optional URL for audio
  accessibility: LocalizedText; // Adaptive tourism info
}

export interface CultureItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  imageUrl: string;
  type: 'cuisine' | 'craft';
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  isError?: boolean;
}

export interface VRProfileProps {
  onSiteClick: (site: Site) => void;
  lang: Language;
}

export interface TripPreferences {
  travelerType: string;
  duration: number;
  pace: string;
  interests: string;
  budget: string;
}