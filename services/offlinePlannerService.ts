import { TripPreferences, Language } from '../types';

// Predefined Data for Bukhara
const SITES = {
    sufi: [
        { name: "Xo'ja Abdulxoliq G'ijduvoniy Majmuasi", desc: "Xojagon tariqati asoschisi, birinchi pir. Jimgina ziyorat va mushohada qilish uchun qulay.", time: "1 soat" },
        { name: "Bahouddin Naqshband Majmuasi", desc: "Naqshbandiya tariqati asoschisi qabri. Buxoroning eng muhim ziyoratgohlaridan biri.", time: "2 soat" },
        { name: "Sayyid Amir Kulol Maqbarasi", desc: "Oltinchi pir, kulolchilik piri va Bahouddin Naqshbandning ustozi.", time: "1 soat" },
        { name: "Xo'ja Orif Revgariy Maqbarasi", desc: "Ikkinchi pir qabri. Sokin, ma'naviy joy.", time: "1 soat" },
        { name: "Chor Bakr Majmuasi", desc: "O'liklar shahri. Ko'plab dindorlar uyi va ajoyib me'moriy majmua.", time: "1.5 soat" }
    ],
    history: [
        { name: "Ark Qal'asi", desc: "Buxoro amirlarining qadimiy saroyi va shahar ichidagi shahar.", time: "2 soat" },
        { name: "Poi Kalon Majmuasi", desc: "Kalon minorasi va masjidi, Buxoroning eng baland va haybatli obidalari.", time: "1.5 soat" },
        { name: "Ismoil Somoniy Maqbarasi", desc: "Markaziy Osiyodagi eng qadimiy g'ishtli me'morchilik namunalaridan biri.", time: "1 soat" },
        { name: "Chashmayi Ayyub", desc: "Ayyub payg'ambar bulog'i va suv muzeyi.", time: "45 daqiqa" },
        { name: "Mag'oki Attor Masjidi", desc: "Islomdan oldingi davr inshooti ustiga qurilgan juda qadimiy masjid.", time: "30 daqiqa" }
    ],
    culture: [
        { name: "Toqi Zargaron", desc: "Zargarlar timi - qadimiy savdo gumbazi. Hunarmandchilikni ko'rish imkoniyati.", time: "1 soat" },
        { name: "Lyabi Hovuz Majmuasi", desc: "Buxoroning qo'q markazi, hovuz atrofidagi tarixiy madrasalar.", time: "1.5 soat" },
        { name: "Sitorai Mohi Xosa", desc: "Buxoro so'nggi amirlarining yozgi saroyi. Yevropa va sharq aralashmasi.", time: "2 soat" },
        { name: "Buxoro Hammmomi (Bozori Kord)", desc: "XVI asrdan beri ishlab turgan tarixiy gumbazli hammom.", time: "2 soat" }
    ]
};

const RESTAURANTS = {
    premium: [
        { name: "Old Bukhara", type: "Milliy va Yevropa taomlari", spec: "Tomdagi terassa, shaharga ajoyib manzara" },
        { name: "Minzifa", type: "Milliy taomlar", spec: "Qadimiy interyer, ajoyib palov" }
    ],
    midrange: [
        { name: "Lyabi Hovuz Choyxonasi", type: "An'anaviy taomlar", spec: "Hovuz bo'yida, ochiq havoda" },
        { name: "Choyxona Doston", type: "Buxoro oshi, somsa", spec: "Hovlili eski o'zbek uyi" },
        { name: "Ayub Restaurant", type: "Buxoro milliy taomlari", spec: "Qulay narx, shahar markazida" }
    ]
};

const HIGHLIGHTS = {
    'History Enthusiast': "Kun Fayzi: Qadimiy devorlar orasida Buxoroning 2500 yillik shonli tarixini his qildingiz.",
    'Spiritual Seeker': "Kun Fayzi: Pirlar xoki yotgan muqaddas zaminning ruhiy farog'ati va osoyishtaligini tuydingiz.",
    'Foodie': "Kun Fayzi: Buxoroning boy pazandachilik sirlari va har bir taom ortidagi asrlik an'analar bilan tanishdingiz.",
    'Family with Kids': "Kun Fayzi: Tarix bilan qiziqarli oilaviy sarguzasht, bolalar uchun unutilmas xotiralar yaratildi.",
    'Adventure Traveler': "Kun Fayzi: Eski shaharning yashirin ko'chalari va tarixiy sirlarini kashf etish zavqini tuydingiz."
};

function getRandom<T>(arr: T[], count: number): T[] {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const generateOfflinePlan = async (prefs: TripPreferences, lang: Language): Promise<string> => {
    // Simulate network delay for UX
    await new Promise(resolve => setTimeout(resolve, 1500));

    const plan: string[] = [];
    plan.push(`**${prefs.duration} Kunlik Buxoro Sayohati: ${prefs.travelerType}**\n`);

    for (let day = 1; day <= prefs.duration; day++) {
        plan.push(`**Day ${day}: ${prefs.travelerType} Kuni**\n`);

        // Select sites based on traveler type
        let morningSites = [];
        let afternoonSites = [];

        if (prefs.travelerType === 'Spiritual Seeker') {
            morningSites = getRandom(SITES.sufi, 2);
            afternoonSites = getRandom([...SITES.sufi, ...SITES.history], 2);
        } else if (prefs.travelerType === 'History Enthusiast') {
            morningSites = getRandom(SITES.history, 2);
            afternoonSites = getRandom([...SITES.history, ...SITES.culture], 2);
        } else if (prefs.travelerType === 'Adventure Traveler') {
            morningSites = getRandom(SITES.culture, 2);
            afternoonSites = getRandom(SITES.history, 2);
        } else {
            // Default / Mixed
            morningSites = [getRandom(SITES.history, 1)[0], getRandom(SITES.sufi, 1)[0]];
            afternoonSites = getRandom(SITES.culture, 2);
        }

        const todayRest = getRandom(prefs.budget === 'Premium' ? RESTAURANTS.premium : RESTAURANTS.midrange, 1)[0];

        plan.push(`**Ertalab (9:00 - 13:00):**`);
        plan.push(`* ${morningSites[0].name} — ${morningSites[0].desc}`);
        plan.push(`* Harakat: Taksi/Piyoda (${morningSites[0].time})`);
        if (morningSites[1]) {
            plan.push(`* ${morningSites[1].name} — ${morningSites[1].desc}`);
        }
        plan.push('');

        plan.push(`**Tushlik (13:00 - 14:30):**`);
        plan.push(`* ${todayRest.name} — ${todayRest.spec} (${todayRest.type})`);
        plan.push('');

        plan.push(`**Kunduzi (14:30 - 18:00):**`);
        plan.push(`* ${afternoonSites[0].name} — ${afternoonSites[0].desc}`);
        plan.push(`* Harakat: Piyoda sayr`);
        if (afternoonSites[1]) {
            plan.push(`* ${afternoonSites[1].name} — ${afternoonSites[1].desc}`);
        }
        plan.push('');

        plan.push(`**Kechqurun (18:00+):**`);
        plan.push(`* Eski shahar boylab erkin sayr va toqilarda suvenirlar xarid qilish.`);
        plan.push('');

        // @ts-ignore
        plan.push(`${HIGHLIGHTS[prefs.travelerType] || HIGHLIGHTS['History Enthusiast']}\n`);
        plan.push('---------------------');
    }

    return plan.join('\n');
};
