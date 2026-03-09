import React, { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Map, Navigation, Locate, MapPin, Eye } from 'lucide-react';
import { BUKHARA_SITES, UI_TEXT } from '../constants';
import { Site, Language } from '../types';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon for selected/active site
const createCustomIcon = (color: string) => {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: ${color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.5);"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });
};

const defaultIcon = createCustomIcon('#0B1D36'); // bukhara-primary
const activeIcon = createCustomIcon('#ca8a04'); // bukhara-secondary

// Haversine formula to calculate distance in KM
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Component to handle map centering
const ChangeView = ({ center, zoom }: { center: [number, number], zoom: number }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
};

interface InteractiveMapProps {
    lang: Language;
    onNavigateDetail: (site: Site) => void;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ lang, onNavigateDetail }) => {
    const [selectedSite, setSelectedSite] = useState<Site | null>(null);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

    // Bukhara center coordinates
    const defaultCenter: [number, number] = [39.7747, 64.4286];
    const center = selectedSite ? [selectedSite.coordinates.lat, selectedSite.coordinates.lng] as [number, number] : defaultCenter;
    const zoom = selectedSite ? 16 : 14;

    const handleLocateUser = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation([position.coords.latitude, position.coords.longitude]);
            }, () => {
                alert("Buxoroda emassiz yoki geolokatsiyaga ruxsat berilmadi.");
            });
        }
    };

    // Find nearest places to selected site (or center if none selected)
    const nearestSites = useMemo(() => {
        const referencePoint = selectedSite
            ? [selectedSite.coordinates.lat, selectedSite.coordinates.lng]
            : defaultCenter;

        return BUKHARA_SITES
            .filter(site => selectedSite ? site.id !== selectedSite.id : true)
            .map(site => ({
                site,
                distance: calculateDistance(referencePoint[0], referencePoint[1], site.coordinates.lat, site.coordinates.lng)
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 4); // Top 4 nearest
    }, [selectedSite]);

    return (
        <div className="container mx-auto px-6 md:px-12 py-16 max-w-7xl animate-in fade-in slide-in-from-bottom-5">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-bukhara-primary/5 rounded-full text-bukhara-primary text-xs font-bold uppercase tracking-wider mb-4">
                        <Map size={14} /> {UI_TEXT.map[lang]}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-bukhara-primary">
                        Buxoro Xaritasi
                    </h2>
                    <p className="text-bukhara-muted mt-4 max-w-xl">
                        Obidalar joylashuvini ko'ring va o'zingizga eng yaqin qadamjolarni toping.
                    </p>
                </div>

                <button
                    onClick={handleLocateUser}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-bukhara-primary border-2 border-bukhara-primary/10 rounded-xl font-bold hover:bg-bukhara-primary/5 transition-all w-full md:w-auto justify-center"
                >
                    <Locate size={18} /> Mening joylashuvim
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Map Container */}
                <div className="lg:col-span-3 h-[600px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                    <MapContainer center={center} zoom={zoom} className="w-full h-full z-0">
                        <ChangeView center={center} zoom={zoom} />
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        />

                        {/* Render all sites as markers */}
                        {BUKHARA_SITES.map(site => (
                            <Marker
                                key={site.id}
                                position={[site.coordinates.lat, site.coordinates.lng]}
                                icon={selectedSite?.id === site.id ? activeIcon : defaultIcon}
                                eventHandlers={{
                                    click: () => setSelectedSite(site)
                                }}
                            >
                                <Popup className="rounded-2xl overflow-hidden shadow-xl p-0">
                                    <div className="w-64">
                                        <div className="h-32 w-full relative">
                                            <img src={site.imageUrl} alt={site.name[lang]} className="w-full h-full object-cover" />
                                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bukhara-primary to-transparent"></div>
                                            <h3 className="absolute bottom-2 left-3 right-3 text-white font-serif font-bold leading-tight drop-shadow-md">
                                                {site.name[lang]}
                                            </h3>
                                        </div>
                                        <div className="p-4 bg-white">
                                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                                {site.description[lang]}
                                            </p>
                                            <button
                                                onClick={() => onNavigateDetail(site)}
                                                className="w-full py-2 bg-bukhara-primary text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors"
                                            >
                                                <Eye size={16} /> {UI_TEXT.readMore[lang]}
                                            </button>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}

                        {/* User Location Marker */}
                        {userLocation && (
                            <Marker position={userLocation} icon={createCustomIcon('#22c55e')}>
                                <Popup>Siz shu yerdasiz</Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </div>

                {/* Nearest Sites Sidebar */}
                <div className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-soft border border-gray-100 flex flex-col h-[600px]">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                        <Navigation className="text-bukhara-secondary" size={24} />
                        <h3 className="text-xl font-bold text-bukhara-text">
                            {UI_TEXT.nearbySites[lang]}
                        </h3>
                    </div>

                    <div className="overflow-y-auto pr-2 pb-4 flex-1 space-y-4 scrollbar-hide">
                        {nearestSites.map(({ site, distance }) => (
                            <div
                                key={site.id}
                                className={`p-4 rounded-2xl cursor-pointer transition-all border ${selectedSite?.id === site.id ? 'bg-bukhara-primary/5 border-bukhara-primary/30' : 'bg-gray-50 border-transparent hover:bg-gray-100'}`}
                                onClick={() => setSelectedSite(site)}
                            >
                                <div className="w-full h-24 rounded-xl overflow-hidden mb-3 relative">
                                    <img src={site.imageUrl} alt={site.name[lang]} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold text-bukhara-primary text-sm leading-tight mb-2">
                                    {site.name[lang]}
                                </h4>
                                <div className="flex items-center gap-1 text-xs font-bold text-bukhara-secondary bg-bukhara-secondary/10 px-2 py-1 rounded w-max">
                                    <MapPin size={12} />
                                    {distance < 1 ? `${Math.round(distance * 1000)}m` : `${distance.toFixed(1)}km`} {UI_TEXT.distance[lang]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveMap;
