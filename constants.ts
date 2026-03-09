import { Site, LocalizedText, TimelineEvent, CultureItem } from './types';

export const UI_TEXT: Record<string, LocalizedText> = {
  home: { uz: 'Asosiy', ru: 'Главная', en: 'Home' },
  sites: { uz: 'Obidalar', ru: 'Памятники', en: 'Monuments' },
  vrPage: { uz: 'VR Galereya', ru: 'VR Галерея', en: 'VR Gallery' },
  planner: { uz: 'Sayohat Rejasi', ru: 'Планировщик', en: 'Trip Planner' },
  culture: { uz: 'Madaniyat', ru: 'Культура', en: 'Culture' },
  project: { uz: 'Loyiha', ru: 'Проект', en: 'Project' }, // New Navbar Item
  startTour: { uz: 'Sayohatni Boshlash', ru: 'Начать тур', en: 'Start Tour' },
  readMore: { uz: 'Batafsil', ru: 'Подробнее', en: 'Read More' },
  gallery: { uz: 'Fotogalereya', ru: 'Фотогалерея', en: 'Photo Gallery' },
  viewOnMap: { uz: 'Xaritada', ru: 'Карта', en: 'Map' },
  startVR: { uz: '360° Sayohat', ru: '360° Тур', en: '360° Tour' },
  back: { uz: 'Ortga', ru: 'Назад', en: 'Back' },
  loading: { uz: 'Yuklanmoqda...', ru: 'Загрузка...', en: 'Loading...' },
  generating: { uz: 'Reja tuzilmoqda...', ru: 'Составление плана...', en: 'Planning trip...' },
  heroTitle: { uz: 'Muqaddas Buxoro', ru: 'Священная Бухара', en: 'Holy Bukhara' },
  heroSubtitle: {
    uz: 'Yetti Pir ziyoratgohlari va qadimiy obidalar bo\'ylab virtual sayohat.',
    ru: 'Виртуальное путешествие по святыням Семи Пиров и древним памятникам.',
    en: 'A virtual journey through the Seven Pirs shrines and ancient monuments.'
  },
  aiGid: { uz: 'Virtual Gid', ru: 'Виртуальный Гид', en: 'Virtual Guide' }, // Changed from AI Gid
  dragHint: { uz: 'Aylantirish uchun suring', ru: 'Потяните, чтобы вращать', en: 'Drag to rotate' },
  sitesTitle: { uz: 'Tarixiy Qadamjolar', ru: 'Исторические Места', en: 'Historical Sites' },
  sitesDesc: {
    uz: 'Buxoroning har bir toshi tarix so\'zlaydi.',
    ru: 'Каждый камень Бухары дышит историей.',
    en: 'Every stone in Bukhara speaks of history.'
  },
  filterAll: { uz: 'Barchasi', ru: 'Все', en: 'All' },
  filterPirs: { uz: 'Yetti Pir', ru: 'Семь Пиров', en: 'Seven Pirs' },
  filterMausoleum: { uz: 'Maqbaralar', ru: 'Мавзолеи', en: 'Mausoleums' },
  filterMosque: { uz: 'Masjid/Madrasa', ru: 'Мечети/Медресе', en: 'Mosques/Madrasas' },
  filterHistory: { uz: 'Tarixiy', ru: 'Исторические', en: 'Historical' },
  info: { uz: "Ma'lumot", ru: "Информация", en: "Info" },
  history: { uz: "Tarix", ru: "История", en: "History" },
  map: { uz: "Xarita", ru: "Карта", en: "Map" },
  share: { uz: "Ulashish", ru: "Поделиться", en: "Share" },
  shareSuccess: { uz: "Nusxalandi!", ru: "Скопировано!", en: "Copied!" },
  zoomIn: { uz: "Kattalashtirish", ru: "Увеличить", en: "Zoom In" },
  zoomOut: { uz: "Kichiklashtirish", ru: "Уменьшить", en: "Zoom Out" },
  audioGuide: { uz: "Audio Gid", ru: "Аудиогид", en: "Audio Guide" },
  timeline: { uz: "Tarixiy Xronologiya", ru: "Хронология", en: "Historical Timeline" },
  adaptiveTourism: { uz: "Adaptiv Turizm", ru: "Адаптивный Туризм", en: "Adaptive Tourism" },
  nearbySites: { uz: "Yaqin-atrofdagi obidalar", ru: "Места поблизости", en: "Nearby Sites" },
  distance: { uz: "masofa", ru: "расстояние", en: "distance" },
  // About Section
  aboutTitle: { uz: "Qadimiy Buxoro Tarixi", ru: "История Древней Бухары", en: "History of Ancient Bukhara" },
  aboutDesc: {
    uz: "Buxoro — Buyuk Ipak yo'lidagi eng qadimiy shaharlardan biri bo'lib, 2500 yildan ortiq tarixga ega. Bu shahar nafaqat savdo markazi, balki islom sivilizatsiyasi, ilm-fan va madaniyat o'chog'i sifatida ham mashhur. Imom Buxoriy, Ibn Sino kabi buyuk allomalar aynan shu tuproqda kamol topganlar. Shaharning tarixiy markazi UNESCOning Butunjahon merosi ro'yxatiga kiritilgan bo'lib, ochiq osmon ostidagi muzeyni eslatadi.",
    ru: "Бухара — один из древнейших городов Великого шелкового пути с историей более 2500 лет. Этот город известен не только как торговый центр, но и как очаг исламской цивилизации, науки и культуры. Великие ученые, такие как Имам Бухари и Ибн Сина, выросли на этой земле. Исторический центр города включен в список Всемирного наследия ЮНЕСКО и напоминает музей под открытым небом.",
    en: "Bukhara is one of the oldest cities on the Great Silk Road, with a history spanning over 2,500 years. It is renowned not only as a trade hub but also as a center of Islamic civilization, science, and culture. Great scholars like Imam Bukhari and Ibn Sina flourished on this land. The city's historic center is a UNESCO World Heritage site, resembling an open-air museum."
  },
  historyTag: { uz: "2500+ Yillik Tarix", ru: "2500+ Лет Истории", en: "2500+ Years of History" },
  // Culture Text
  cultureTitle: { uz: "Madaniy Meros", ru: "Культурное Наследие", en: "Cultural Heritage" },
  cultureDesc: { uz: "Ming yillik an'analar, betakror ta'm va hunarmandchilik.", ru: "Тысячелетние традиции, неповторимый вкус и ремесла.", en: "Millennial traditions, unique tastes, and craftsmanship." },
  cuisine: { uz: "Milliy Taomlar", ru: "Национальная Кухня", en: "National Cuisine" },
  crafts: { uz: "Hunarmandchilik", ru: "Ремесленничество", en: "Craftsmanship" },
  // Planner Text
  plannerTitle: { uz: "Sayohat Rejalashtiruvchi", ru: "Планировщик Путешествий", en: "Trip Planner" },
  plannerSubtitle: { uz: "Buxoro bo'ylab shaxsiy sayohat rejangizni tuzing.", ru: "Создайте персональный план поездки по Бухаре.", en: "Create your personalized Bukhara itinerary." },
  pTravelerType: { uz: "Sayohat turi", ru: "Тип путешественника", en: "Traveler Type" },
  pDuration: { uz: "Davomiyligi (kun)", ru: "Длительность (дней)", en: "Duration (days)" },
  pPace: { uz: "Tezlik", ru: "Темп", en: "Pace" },
  pInterests: { uz: "Qiziqishlar", ru: "Интересы", en: "Interests" },
  pBudget: { uz: "Budjet", ru: "Бюджет", en: "Budget" },
  pGenerate: { uz: "Reja tuzish", ru: "Создать план", en: "Generate Plan" },
  // Project Page Text
  projectTitle: { uz: "Loyiha Haqida", ru: "О Проекте", en: "About Project" },
  projectContent: {
    uz: "Ushbu veb-sayt turizmni rivojlantirish va Buxoro shahrining boy tarixiy-madaniy merosini raqamli texnologiyalar orqali keng ommaga targ'ib qilish maqsadida ishlab chiqilgan. Platforma zamonaviy WebGL va sun'iy intellekt texnologiyalarini o'zida mujassam etgan bo'lib, foydalanuvchilarga interaktiv va immersiv sayohat tajribasini taqdim etadi. Bu loyiha orqali nafaqat mahalliy, balki xorijiy sayyohlarni ham jalb qilish, ularga qulay va axborotga boy raqamli gid xizmatini ko'rsatish ko'zda tutilgan. Tadqiqot doirasida yaratilgan ushbu tizim 'Aqlli Turizm' (Smart Tourism) konsepsiyasining amaliy ijrosi hisoblanadi.",
    ru: "Этот веб-сайт разработан с целью развития туризма и популяризации богатого историко-культурного наследия города Бухары посредством цифровых технологий. Платформа объединяет современные технологии WebGL и искусственного интеллекта, предоставляя пользователям интерактивный и захватывающий опыт путешествий. Проект направлен на привлечение как местных, так и иностранных туристов, предоставляя им удобный и информативный цифровой гид. Система, созданная в рамках исследования, является практической реализацией концепции «Умного туризма» (Smart Tourism).",
    en: "This website was developed to promote tourism and the rich historical and cultural heritage of Bukhara through digital technologies. The platform integrates modern WebGL and artificial intelligence technologies, offering users an interactive and immersive travel experience. The project aims to attract both local and foreign tourists by providing them with a convenient and informative digital guide service. This system, created within the framework of research, represents a practical implementation of the 'Smart Tourism' concept."
  },
  authorTitle: { uz: "Loyiha Muallifi", ru: "Автор Проекта", en: "Project Author" },
  close: { uz: "Yopish", ru: "Закрыть", en: "Close" }
};

const createGallery = (mainImg: string) => [
  mainImg,
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kalyan_Minaret_Bukhara_Uzbekistan.jpg/1280px-Kalyan_Minaret_Bukhara_Uzbekistan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bukhara_Registan.jpg/1280px-Bukhara_Registan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Bukhara_Poi_Kalyan_Complex.jpg/1280px-Bukhara_Poi_Kalyan_Complex.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bukhara_Kalyan_Minaret.jpg/1280px-Bukhara_Kalyan_Minaret.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bukhara_Ark.jpg/1280px-Bukhara_Ark.jpg'
];

const mockTimeline = (year: string): TimelineEvent[] => [
  {
    year: year,
    title: { uz: "Qurilish boshlanishi", ru: "Начало строительства", en: "Construction started" },
    description: { uz: "Majmuaga asos solingan davr.", ru: "Период основания комплекса.", en: "The period when the complex was founded." }
  },
  {
    year: "XIV-XVI",
    title: { uz: "Rivojlanish davri", ru: "Период расцвета", en: "Development period" },
    description: { uz: "Buxoro xonligi davrida kengaytirildi.", ru: "Расширен во времена Бухарского ханства.", en: "Expanded during the Bukhara Khanate." }
  },
  {
    year: "1993",
    title: { uz: "UNESCO", ru: "ЮНЕСКО", en: "UNESCO" },
    description: { uz: "Butunjahon merosi ro'yxatiga kiritildi.", ru: "Включен в список всемирного наследия.", en: "Included in the World Heritage List." }
  },
  {
    year: "2020",
    title: { uz: "Restavratsiya", ru: "Реставрация", en: "Restoration" },
    description: { uz: "Davlat tomonidan qayta ta'mirlandi.", ru: "Отреставрирован государством.", en: "Restored by the state." }
  }
];

const defaultAccessibility: LocalizedText = {
  uz: "♿ Maxsus yo'lakchalar va panduslar mavjud. Ko'zi ojizlar uchun maxsus taktil maketlar o'rnatilgan.",
  ru: "♿ Имеются специальные дорожки и пандусы. Установлены тактильные макеты для незрячих.",
  en: "♿ Wheelchair ramps and pathways are available. Tactile models for the visually impaired are installed."
};

export const BUKHARA_CULTURE: CultureItem[] = [
  {
    id: 'c1',
    name: { uz: "Buxoro Oshi (Oshi Sofi)", ru: "Бухарский Плов (Оши Софи)", en: "Bukhara Pilaf (Oshi Sofi)" },
    description: {
      uz: "Buxoro oshi o'zining tayyorlanish usuli bilan ajralib turadi. Masalliqlar qatlam-qatlam qilib solinadi (qovurilmaydi) va faqat dasturxonga tortishda aralashtiriladi. U 'Oshi Sofi' deb ham ataladi va juda parhezbop hisoblanadi. Asosan mis qozonda pishiriladi.",
      ru: "Бухарский плов отличается способом приготовления. Ингредиенты укладываются слоями (не жарятся) и перемешиваются только перед подачей. Также известен как 'Оши Софи' и считается диетическим. Обычно готовится в медном казане.",
      en: "Bukhara pilaf is distinguished by its cooking method. Ingredients are layered (not fried) and mixed only when served. Also known as 'Oshi Sofi', it is considered diet-friendly. Usually cooked in a copper cauldron."
    },
    imageUrl: "https://avatars.mds.yandex.net/get-altay/16482798/2a00000197d01d5e72e4e39caf6d240d4104/XXL_height",
    type: 'cuisine'
  },
  {
    id: 'c2',
    name: { uz: "G'ijduvon Kabobi", ru: "Гиждуванский Шашлык", en: "Gijduvan Kebab" },
    description: {
      uz: "Dunyoga mashhur G'ijduvon kabobi o'zining maydalangan go'shtdan (qiymadan) tayyorlanishi va maxsus ziravorlari bilan mashhur. U juda sersuv va yumshoq bo'ladi. Kabobni pishirishdan oldin go'sht uzoq vaqt marinadlanadi.",
      ru: "Всемирно известный Гиждуванский шашлык славится тем, что готовится из рубленого мяса (фарша) с особыми специями. Он очень сочный и мягкий. Мясо долго маринуется перед приготовлением.",
      en: "World-famous Gijduvan kebab is known for being made from minced meat with special spices. It is very juicy and tender. The meat is marinated for a long time before cooking."
    },
    imageUrl: "https://zira.uz/wp-content/uploads/2019/07/shashlik-korzinka-3.jpg",
    type: 'cuisine'
  },
  {
    id: 'c3',
    name: { uz: "Buxoro Zardo'zligi", ru: "Бухарское Золотое Шитье", en: "Bukhara Gold Embroidery" },
    description: {
      uz: "Buxoro zardo'zlik maktabi qadimiy tarixga ega. Zardo'zlar (asosan erkaklar) to'n, do'ppi va poyabzallarni oltin va kumush iplar bilan bezashgan. Bu san'at turi UNESCOning Nomoddiy madaniy merosi ro'yxatiga kiritilgan.",
      ru: "Школа бухарского золотого шитья имеет древнюю историю. Зардозы (в основном мужчины) украшали халаты, тюбетейки и обувь золотыми и серебряными нитями. Это искусство включено в список нематериального культурного наследия ЮНЕСКО.",
      en: "The Bukhara gold embroidery school has an ancient history. Zardoz (mostly men) decorated robes, skullcaps, and shoes with gold and silver threads. This art form is included in the UNESCO Intangible Cultural Heritage list."
    },
    imageUrl: "https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/zolotoe%20shitye2-0-0-0-0-1596544019.jpg",
    type: 'craft'
  },
  {
    id: 'c4',
    name: { uz: "G'ijduvon Kulolchiligi", ru: "Гиждуванская Керамика", en: "Gijduvan Ceramics" },
    description: {
      uz: "G'ijduvon kulolchilik maktabi o'zining geometrik naqshlari va tabiiy ranglari bilan ajralib turadi. Narzullayevlar sulolasi bu san'atni 6 avloddan beri davom ettirib kelmoqda. Idishlar o'ziga xos jarangdor ovozga ega.",
      ru: "Гиждуванская школа керамики отличается геометрическими узорами и натуральными цветами. Династия Нарзуллаевых продолжает это искусство уже в 6-м поколении. Посуда имеет особый звонкий звук.",
      en: "Gijduvan ceramics school is distinguished by its geometric patterns and natural colors. The Narzullayev dynasty has been continuing this art for 6 generations. The pottery has a unique ringing sound."
    },
    imageUrl: "https://avatars.mds.yandex.net/get-altay/14021521/2a000001945e084cf157d306389634282258/XXXL",
    type: 'craft'
  },
  {
    id: 'c5',
    name: { uz: "Misgarlik (Kandakorlik)", ru: "Чеканка по меди", en: "Copper Embossing" },
    description: {
      uz: "Buxoro misgarligi o'zining nafis o'yma naqshlari bilan mashhur. Qadimda Buxoroda 'Toqi Misgaron' (Misgarlar toqi) faoliyat ko'rsatgan. Kandakorlar lagan, oftoba va choydishlarga murakkab islimiy naqshlar tushirishgan.",
      ru: "Бухарская чеканка славится своими изящными резными узорами. В древности в Бухаре действовал купол 'Токи Мисгарон'. Мастера наносили сложные растительные узоры на подносы, кувшины и чайники.",
      en: "Bukhara copper embossing is famous for its delicate carved patterns. In ancient times, the 'Toqi Misgaron' (Coppersmiths' Dome) operated in Bukhara. Masters applied complex floral patterns to trays, jugs, and teapots."
    },
    imageUrl: "https://uzbekistan.travel/storage/app/media/wepb/Maqolalar/Buxoro%20prikladnoy%20iskustvo/cropped-images/DSC_0091-0-0-0-0-1744371570.webp",
    type: 'craft'
  }
];

export const BUKHARA_SITES: Site[] = [
  {
    id: '1',
    name: {
      uz: "Xo'ja Abdulxoliq G'ijduvoniy",
      ru: "Ходжа Абдулхалик Гиждувани",
      en: "Khoja Abdulkhaliq Ghijduvani"
    },
    description: {
      uz: "Yetti pir silsilasining birinchisi, 'Xojagon' tariqatining asoschisi.",
      ru: "Первый из Семи Пиров, основатель тариката 'Ходжагон'.",
      en: "The first of the Seven Pirs, founder of the 'Khojagon' order."
    },
    fullDescription: {
      uz: "Xo'ja Abdulxoliq G'ijduvoniy (1103-1179) — mashhur so'fiy shayxi, 'Xojagon' tariqatining asoschisi. U zot Yusuf Hamadoniyning to'rtinchi xalifasi bo'lganlar. G'ijduvoniy tasavvufda 11 ta asosiy qoidani (rashha) joriy qilganlar, shulardan eng mashhurlari: 'Hosh dar dam' (Har nafasda hushyorlik), 'Nazar bar qadam' (Nazar qadamda bo'lishi) va 'Safar dar vatan' (Vatan ichra safar). U kishi Buxorodan 50 km uzoqlikdagi G'ijduvon shahrida dafn etilgan. Majmua Ulug'bek tomonidan 1433-yilda qurilgan madrasa, masjid va miniorani o'z ichiga oladi.",
      ru: "Ходжа Абдулхалик Гиждувани (1103–1179) — знаменитый суфийский шейх, основатель тариката «Ходжагон». Был четвёртым халифом Юсуфа Хамадани. Ввел в суфизм 11 принципов (рашха), самые известные из которых: «Хуш дар дам» (Сознательность в каждом вдохе), «Назар бар кадам» (Взгляд на шаг) и «Сафар дар ватан» (Путешествие на родине). Похоронен в Гиждуване, в 50 км от Бухары. Комплекс включает медресе, построенное Улугбеком в 1433 году, мечеть и минарет.",
      en: "Khoja Abdulkhaliq Ghijduvani (1103–1179) was a famous Sufi sheikh and founder of the 'Khojagon' order. He was the fourth caliph of Yusuf Hamadani. He introduced 11 principles (rashha) into Sufism, the most famous being: 'Hosh dar dam' (Awareness in every breath), 'Nazar bar qadam' (Watch your step), and 'Safar dar vatan' (Journey within the homeland). He is buried in Gijduvan, 50 km from Bukhara. The complex includes a madrasah built by Ulugbek in 1433, a mosque, and a minaret."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/1811309/2a0000016ff65279f88e1dd51db7b3e5b536/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/1811309/2a0000016ff65279f88e1dd51db7b3e5b536/XXXL',
      'https://avatars.mds.yandex.net/get-altay/14683384/2a00000196d9176d967a083958bc78a31f7f/XXXL',
      'https://avatars.mds.yandex.net/get-altay/15223968/2a00000196d917501bbf75820cca230d5f92/XXXL',
      'https://avatars.mds.yandex.net/get-altay/10661403/2a00000192c024b0686b3ec599197c432ac6/XXXL',
      'https://avatars.mds.yandex.net/get-altay/13671440/2a000001927012f352a850819d4edaa59fbb/XXXL'
    ],
    year: '1103-1179',
    vrUrl: 'https://kuula.co/share/collection/710VC?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'yetti-pir',
    coordinates: { lat: 40.1000, lng: 64.6667 },
    timeline: mockTimeline('1103'),
    accessibility: defaultAccessibility
  },
  {
    id: '2',
    name: {
      uz: "Xo'ja Orif Revgariy",
      ru: "Ходжа Ариф Ревгари",
      en: "Khoja Arif Revgari"
    },
    description: {
      uz: "Xalq orasida 'Mohitobon' nomi bilan mashhur bo'lgan bu zot yetti pirning ikkinchisidir.",
      ru: "Известный в народе как 'Мохитобон', он является вторым из Семи Пиров.",
      en: "Known popularly as 'Mohitobon', he is the second of the Seven Pirs."
    },
    fullDescription: {
      uz: "Xo'ja Orif Revgariy (Mohitobon) — Abdulxoliq G'ijduvoniyning eng sevimli shogirdlaridan biri. 'Mohitobon' taxallusi 'Oydek yorug' zot' degan ma'noni anglatadi. U kishi juda uzun umr ko'rganlar (taxminan 150 yil). Shofirkon tumanida joylashgan ziyoratgohi tinchlik va osoyishtalik maskani hisoblanadi. U kishi jahriy zikrni xufyona zikr bilan uyg'unlashtirish tarafdori bo'lganlar.",
      ru: "Ходжа Ариф Ревгари (Мохитобон) — один из любимых учеников Абдулхалика Гиждувани. Прозвище «Мохитобон» означает «Светлый, как луна». Считается, что он прожил очень долгую жизнь (около 150 лет). Его мавзолей находится в Шафирканском районе и считается местом покоя и умиротворения. Он был сторонником сочетания громкого зикра с тихим.",
      en: "Khoja Arif Revgari (Mohitobon) was one of the favorite disciples of Abdulkhaliq Ghijduvani. The nickname 'Mohitobon' means 'Moon-like bright one'. He is believed to have lived a very long life (about 150 years). His shrine in the Shofirkon district is considered a place of peace and tranquility. He advocated combining loud dhikr with silent dhikr."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/16374562/2a00000198848f1e5e3b6d5345cd662b00ce/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/16374562/2a00000198848f1e5e3b6d5345cd662b00ce/XXXL',
      'https://avatars.mds.yandex.net/get-altay/4530524/2a0000017b8fe81474c0cf73a63f7ec132bf/XXXL',
      'https://avatars.mds.yandex.net/get-altay/15438512/2a00000198e779f65cf8bc55167878d3209d/XXXL',
      'https://avatars.mds.yandex.net/get-altay/16569030/2a0000019884a716cc02b1d6eb5e5d3e3a24/XXXL'
    ],
    year: '1165-1259',
    vrUrl: 'https://kuula.co/share/collection/710w4?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'yetti-pir',
    coordinates: { lat: 40.1167, lng: 64.5000 },
    timeline: mockTimeline('1165'),
    accessibility: defaultAccessibility
  },
  {
    id: '3',
    name: {
      uz: "Xo'ja Mahmud Anjir Fag'naviy",
      ru: "Ходжа Махмуд Анжир Фагнави",
      en: "Khoja Mahmud Anjir Fagnavi"
    },
    description: {
      uz: "Vobkent tumanida joylashgan ziyoratgoh. Halol mehnat orqali kamolotga erishishni targ'ib qilganlar.",
      ru: "Святыня в Вабкентском районе. Проповедовал достижение совершенства через честный труд.",
      en: "A shrine located in the Vobkent district. He preached achieving perfection through honest labor."
    },
    fullDescription: {
      uz: "Mahmud Anjir Fag'naviy Vobkent tumanining Anjirbog' qishlog'ida tug'ilgan. Kasbi duradgorlik va binokorlik bo'lgan. U kishi o'z mehnatlari bilan kun kechirgan va tilanchilikni qattiq qoralagan. Fag'naviy birinchi bo'lib Xojagon tariqatida jahriy (ovoz chiqarib) zikr qilishni ommalashtirgan shayx hisoblanadi. U kishining qabrlari ustida yaqinda hashamatli maqbara va masjid barpo etildi.",
      ru: "Махмуд Анжир Фагнави родился в селе Анжирбог Вабкентского района. По профессии был плотником и строителем. Жил своим трудом и строго осуждал попрошайничество. Фагнави считается первым шейхом тариката Ходжагон, который популяризировал громкий (джахрия) зикр. Над его могилой недавно были возведены величественный мавзолей и мечеть.",
      en: "Mahmud Anjir Fagnavi was born in the Anjirbog village of Vobkent district. He was a carpenter and builder by profession. He lived by his own labor and strongly condemned begging. Fagnavi is considered the first sheikh of the Khojagon order to popularize loud (jahriya) dhikr. A magnificent mausoleum and mosque were recently built over his grave."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/5583647/2a0000017d7f8fe6167c32cb26c64ba54ed6/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/5583647/2a0000017d7f8fe6167c32cb26c64ba54ed6/XXXL',
      'https://avatars.mds.yandex.net/get-altay/5253303/2a0000017b9028c2117e952ee09c48ca34d1/XXXL',
      'https://avatars.mds.yandex.net/get-altay/5245944/2a0000017b9086c1b99bf97c91e286e24d2a/XXXL',
      'https://avatars.mds.yandex.net/get-altay/5585693/2a0000017d7f8ffd9b372e6e8c2f7db32aec/XXXL'
    ],
    year: 'XIII asr',
    vrUrl: 'https://kuula.co/share/collection/710wG?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'yetti-pir',
    coordinates: { lat: 40.0333, lng: 64.5167 },
    timeline: mockTimeline('1230'),
    accessibility: defaultAccessibility
  },
  {
    id: '4',
    name: {
      uz: "Xo'ja Ali Romitaniy",
      ru: "Ходжа Али Ромитани",
      en: "Khoja Ali Romitani"
    },
    description: {
      uz: "'Xojai Azizon' nomi bilan mashhur. Romitan tumanida yashab o'tganlar.",
      ru: "Известен как 'Ходжа Азизон'. Жил в Ромитанском районе.",
      en: "Known as 'Khojai Azizon'. Lived in the Romitan district."
    },
    fullDescription: {
      uz: "Xo'ja Ali Romitaniy (Azizon) — yetti pirning to'rtinchisi. 2018-yilda amalga oshirilgan keng ko'lamli obodonlashtirish natijasida majmua yangicha chiroy ochdi. Hozirda bu yerda uch gumbazli darvoza, 16 metrli minora, kutubxona va zamonaviy 'Qo'rg'on' mehmonxonasi mavjud. Ziyoratgoh hududidagi jome masjidida 600 dan ortiq namozxon ibodat qilishi mumkin. Eng diqqatga sazovor tomoni — ziyoratgoh qarshisida 4000 yillik tarixga ega, afsonaviy Afrosiyob tomonidan qurdirilgan qadimiy Romitan qo'rg'oni (qal'a) joylashgan.",
      ru: "Ходжа Али Ромитани (Азизон) — четвёртый из семи пиров. По профессии был ткачом. Получил прозвище «Азизон» (Почтеннейший) за духовную и материальную поддержку народа в трудное время после монгольского нашествия. До нас дошел его трактат «Рисолаи Азизон». По преданию, он также способствовал распространению суфизма в Хорезме.",
      en: "Khoja Ali Romitani (Azizon) is the fourth of the Seven Pirs. He was a weaver by profession. He earned the title 'Azizon' (The Most Venerable) for providing both spiritual and material support to the people during the difficult times following the Mongol invasion. His work 'Risolai Azizon' has reached us. According to legends, he also helped spread Sufism in Khorezm."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/15294573/2a0000019619fa8fd187d05b80d7b3ec909c/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/15294573/2a0000019619fa8fd187d05b80d7b3ec909c/XXXL',
      'https://avatars.mds.yandex.net/get-altay/14076755/2a0000019619fa8fcce0cb5349d5c601b996/XXXL',
      'https://avatars.mds.yandex.net/get-altay/14584627/2a0000019619fa9053d08308ee1979f26d9a/XXXL'
    ],
    year: '1191-1321',
    vrUrl: 'https://kuula.co/share/collection/710wY?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'yetti-pir',
    coordinates: { lat: 39.9333, lng: 64.3833 },
    timeline: mockTimeline('1191'),
    accessibility: defaultAccessibility
  },
  {
    id: '5',
    name: {
      uz: "Xo'ja Muhammad Boboyi Samosiy",
      ru: "Ходжа Мухаммад Бобой Самоси",
      en: "Khoja Muhammad Boboyi Samosi"
    },
    description: {
      uz: "Bahouddin Naqshbandning dunyoga kelishini bashorat qilgan ulug' avliyo.",
      ru: "Великий святой, предсказавший рождение Бахауддина Накшбанда.",
      en: "A great saint who predicted the birth of Bahauddin Naqshband."
    },
    fullDescription: {
      uz: "Xo'ja Muhammad Boboyi Samosiy Romitan tumanining Samos qishlog'ida tug'ilgan. U kishi dehqonchilik bilan shug'ullangan. Eng muhim tarixiy xizmatlaridan biri — bo'lajak buyuk shayx Bahouddin Naqshbandning tug'ilishini bashorat qilganliklari va uning ma'naviy tarbiyasini Amir Kulolga topshirganliklaridir. Samosiy o'z shogirdlariga doimo kamtarlik va xizmatni vasiyat qilganlar.",
      ru: "Ходжа Мухаммад Бобой Самоси родился в селе Самос Ромитанского района. Занимался земледелием. Одной из его важнейших исторических заслуг является предсказание рождения великого шейха Бахауддина Накшбанда и поручение его духовного воспитания Амиру Кулолу. Самоси всегда завещал своим ученикам смирение и служение.",
      en: "Khoja Muhammad Boboyi Samosi was born in the Samos village of Romitan district. He was a farmer. One of his most important historical contributions was predicting the birth of the future great sheikh Bahauddin Naqshband and entrusting his spiritual education to Amir Kulol. Samosi always instructed his disciples in humility and service."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/5265775/2a0000017b9087433d2f7267cb59af20a3a6/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/5265775/2a0000017b9087433d2f7267cb59af20a3a6/XXXL',
      'https://avatars.mds.yandex.net/get-altay/2068435/2a00000170141ba35b0ec32ac8db45d0eac3/XXXL',
      'https://avatars.mds.yandex.net/get-altay/4632172/2a0000017b90879e4d1dc2188e864d28483a/XXXL',
      'https://avatars.mds.yandex.net/get-altay/5235198/2a0000017b90878c6b59cade83e68a8365c0/XXXL'
    ],
    year: '1259-1354',
    vrUrl: 'https://kuula.co/share/collection/710w9?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'yetti-pir',
    coordinates: { lat: 39.9500, lng: 64.4000 },
    timeline: mockTimeline('1259'),
    accessibility: defaultAccessibility
  },
  {
    id: '6',
    name: {
      uz: "Sayyid Amir Kulol",
      ru: "Сайид Амир Кулол",
      en: "Sayyid Amir Kulol"
    },
    description: {
      uz: "Kulolchilik bilan shug'ullanganlar. Bahouddin Naqshbandning bevosita ustozlari.",
      ru: "Занимался гончарным делом. Непосредственный наставник Бахауддина Накшбанда.",
      en: "He was a potter. Direct mentor of Bahauddin Naqshband."
    },
    fullDescription: {
      uz: "Sayyid Amir Kulol Buxoroning Suxor qishlog'ida tug'ilgan. U kishi payg'ambarimiz (s.a.v) avlodlaridan bo'lganlar (Sayyid). Kasbi kulolchilik bo'lib, halol mehnat bilan kun kechirganlar. Yoshligida mashhur kurashchi bo'lganlar. U kishi Bahouddin Naqshbandning asosiy piri hisoblanadilar va Xojagon tariqatini Naqshbandiya tariqatiga aylanishida ko'prik vazifasini o'taganlar. Maqbara bugungi kunda katta bog' va masjid majmuasiga ega.",
      ru: "Сайид Амир Кулол родился в селе Сухор под Бухарой. Был потомком пророка (Сайид). По профессии — гончар, жил честным трудом. В молодости был известным борцом. Он является главным наставником Бахауддина Накшбанда и послужил мостом в трансформации тариката Ходжагон в Накшбандия. Сегодня мавзолей представляет собой комплекс с большим садом и мечетью.",
      en: "Sayyid Amir Kulol was born in the Sukhor village of Bukhara. He was a descendant of the Prophet (Sayyid). A potter by profession, he lived by honest labor. In his youth, he was a famous wrestler. He is considered the main spiritual guide of Bahauddin Naqshband and served as a bridge in the evolution of the Khojagon order into the Naqshbandi order. Today, the mausoleum features a large garden and mosque complex."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/19613367/2a0000019ad4249bbb1214fdc5c182fd899c/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/19613367/2a0000019ad4249bbb1214fdc5c182fd899c/XXXL',
      'https://avatars.mds.yandex.net/get-altay/13287730/2a000001916b97f2bb5866ed430fb7963df6/XXXL',
      'https://avatars.mds.yandex.net/get-altay/5253303/2a0000017b91226b713be28021b698d0efa7/XXXL',
      'https://avatars.mds.yandex.net/get-altay/10494556/2a0000018ea4f9f19b0245cbf960461e2404/XXXL'
    ],
    year: '1281-1370',
    vrUrl: 'https://kuula.co/share/collection/710wH?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'yetti-pir',
    coordinates: { lat: 39.8000, lng: 64.4500 },
    timeline: mockTimeline('1281'),
    accessibility: defaultAccessibility
  },
  {
    id: '7',
    name: {
      uz: "Bahouddin Naqshband",
      ru: "Бахауддин Накшбанд",
      en: "Bahauddin Naqshband"
    },
    description: {
      uz: "Naqshbandiya tariqatining asoschisi. Buxoroning ma'naviy homiysi.",
      ru: "Основатель тариката Накшбандия. Духовный покровитель Бухары.",
      en: "Founder of the Naqshbandi order. Spiritual patron of Bukhara."
    },
    fullDescription: {
      uz: "Bahouddin Naqshband (1318-1389) — islom olamining eng buyuk avliyolaridan biri, Naqshbandiya tariqatining asoschisi. U kishi 'Dil ba yoru, dast ba kor' (Ko'ngil Allohda, qo'l ishda) shiorini ilgari surganlar. Tarkidunyochilikni rad etib, jamiyat ichida yashab Allohga yaqinlashishni o'rgatganlar. Majmua Buxoroning Qasr-i Orifon qishlog'ida joylashgan. Ziyoratgohda qadimiy tut daraxti (Daraxti Murod), hovuz va xonaqohlar mavjud. Bu yer Markaziy Osiyoning 'Makkasi' deb ham ataladi.",
      ru: "Бахауддин Накшбанд (1318–1389) — один из величайших святых исламского мира, основатель тариката Накшбандия. Он выдвинул лозунг «Дил ба ёру, даст ба кор» (Сердце с Богом, руки в труде). Отвергая аскетизм, он учил приближаться к Богу, живя в обществе. Комплекс расположен в селе Касри-Орифон под Бухарой. В святыне есть древнее тутовое дерево (Дерево желаний), пруд и ханаки. Это место называют «Меккой» Центральной Азии.",
      en: "Bahauddin Naqshband (1318–1389) was one of the greatest saints of the Islamic world and the founder of the Naqshbandi order. He promoted the motto 'Dil ba yoru, dast ba kor' (Heart with God, hands at work). Rejecting asceticism, he taught closeness to God while living within society. The complex is located in the Qasr-i Orifon village of Bukhara. The shrine features an ancient mulberry tree (Tree of Wishes), a pond, and khanaqahs. This place is also called the 'Mecca' of Central Asia."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/9827997/2a0000018b1fc1193188d7c8ddbf8cad713e/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/9827997/2a0000018b1fc1193188d7c8ddbf8cad713e/XXXL',
      'https://avatars.mds.yandex.net/get-altay/13477341/2a0000018f855ed7b9b74da3db5aea52b96d/XXXL',
      'https://gulxan.uz/images/bahouddin_naqshband_majmuasi.jpg'
    ],
    year: '1318-1389',
    vrUrl: 'https://kuula.co/share/collection/7DcX2?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'yetti-pir',
    coordinates: { lat: 39.8000, lng: 64.5333 },
    timeline: mockTimeline('1318'),
    accessibility: defaultAccessibility
  },
  {
    id: '8',
    name: {
      uz: "Chashmayi Ayyub",
      ru: "Чашма-Аюб",
      en: "Chashma Ayub"
    },
    description: {
      uz: "Payg'ambar Ayyub (a.s.) asolari bilan urganlarida suv chiqqan joy.",
      ru: "Место, где появился источник после удара посохом пророка Аюба.",
      en: "The place where water sprang forth when Prophet Job struck with his staff."
    },
    fullDescription: {
      uz: "Chashmayi Ayyub (Ayyub bulog'i) maqbarasi XII asrda Qoraxoniylar davrida qurila boshlangan va Amir Temur davrida yakunlangan. Rivoyatlarga ko'ra, qurg'oqchilik paytida Ayyub payg'ambar kelib, asolari bilan yerni urganlarida shifobaxsh suv chiqqan. Bino to'rt xonadan iborat bo'lib, har biri gumbaz bilan yopilgan. Asosiy xona ustidagi konus shaklidagi gumbaz Buxoro me'morchiligi uchun noyobdir. Hozirda bu yerda Suv muzeyi joylashgan.",
      ru: "Мавзолей Чашма-Аюб (Источник Иова) начали строить в XII веке при Караханидах и закончили при Амире Тимуре. По легенде, во время засухи пришел пророк Аюб (Иов), ударил посохом о землю, и забил целебный источник. Здание состоит из четырех помещений, каждое увенчано куполом. Конический купол над главным залом уникален для архитектуры Бухары. Сейчас здесь находится Музей воды.",
      en: "The Chashma Ayub (Spring of Job) mausoleum construction began in the 12th century under the Karakhanids and was completed under Amir Timur. According to legend, during a drought, Prophet Job came, struck the ground with his staff, and healing water sprang forth. The building consists of four rooms, each topped with a dome. The conical dome over the main hall is unique to Bukhara architecture. Currently, it houses the Water Museum."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/10768923/2a0000018a9e0f5d5446d4edba6e44986b3c/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/10768923/2a0000018a9e0f5d5446d4edba6e44986b3c/XXXL',
      'https://avatars.mds.yandex.net/get-altay/14033308/2a0000019326ef51511880d521b5f4d3b4d3/XXXL',
      'https://avatars.mds.yandex.net/get-altay/7742431/2a00000185a6c7bb80f12be23f2be314dc42/XXXL',
      'https://avatars.mds.yandex.net/get-altay/904281/2a00000185a6c7e7114822a1f3a73919d0b6/XXXL'
    ],
    year: '1379-1380',
    vrUrl: 'https://kuula.co/share/collection/71J28?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'tarixiy',
    coordinates: { lat: 39.7780, lng: 64.4090 },
    timeline: mockTimeline('1379'),
    accessibility: defaultAccessibility
  },
  {
    id: '9',
    name: {
      uz: "Mag'oki Attor Masjidi",
      ru: "Мечеть Магоки-Аттори",
      en: "Magoki Attori Mosque"
    },
    description: {
      uz: "Buxoroning eng qadimiy masjidlaridan biri.",
      ru: "Одна из старейших мечетей Бухары.",
      en: "One of the oldest mosques in Bukhara."
    },
    fullDescription: {
      uz: "Mag'oki Attor — Markaziy Osiyoning eng qadimiy saqlanib qolgan masjidlaridan biri. 'Mag'ok' so'zi 'chuqurlik' degan ma'noni anglatadi, chunki masjid madaniy qatlamlar ostida qolib, yer sathidan 4.5 metr chuqurlikda joylashgan. Islomdan oldin bu yerda Oy ma'budasi ibodatxonasi va bozori bo'lgan. Masjidning janubiy portali XII asr g'ishtin naqshlarining durdonasi hisoblanadi. XVI asrgacha musulmonlar va yahudiylar bu yerda birga ibodat qilishgan degan ma'lumotlar bor.",
      ru: "Магоки-Аттори — одна из старейших сохранившихся мечетей в Центральной Азии. «Магок» означает «яма», так как мечеть находится на глубине 4,5 метра ниже уровня земли из-за культурных наслоений. До ислама здесь находился храм Луны и базар. Южный портал мечети является шедевром кирпичного декора XII века. Есть сведения, что до XVI века мусульмане и иудеи молились здесь вместе.",
      en: "Magoki Attori is one of the oldest surviving mosques in Central Asia. 'Magok' means 'pit', as the mosque is located 4.5 meters below ground level due to cultural layers. Before Islam, there was a Moon temple and market here. The mosque's southern portal is a masterpiece of 12th-century brick decoration. There are records that Muslims and Jews prayed here together until the 16th century."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/11563767/2a000001932144df77c3cc0e26163d6e55f0/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/11563767/2a000001932144df77c3cc0e26163d6e55f0/XXXL',
      'https://avatars.mds.yandex.net/get-altay/15066961/2a00000197e126fa3f6583e8240b26eaa7f3/XXXL',
      'https://avatars.mds.yandex.net/get-altay/15223968/2a00000196aafc0f819d6f87dd3a55ed7f2e/XXXL',
      'https://avatars.mds.yandex.net/get-altay/14079384/2a000001926c2d3781e745fb9a90d342d48d/XXXL'
    ],
    year: 'IX-XII asrlar',
    vrUrl: 'https://kuula.co/share/collection/71J2t?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'masjid-madrasa',
    coordinates: { lat: 39.7730, lng: 64.4170 },
    timeline: mockTimeline('IX asr'),
    accessibility: defaultAccessibility
  },
  {
    id: '10',
    name: {
      uz: "Abu Hafs Kabir Buxoriy",
      ru: "Абу Хафс Кабир Бухари",
      en: "Abu Hafs Kabir Bukhari"
    },
    description: {
      uz: "Islom olamining buyuk faqihlaridan biri. 'Muallimi Nuri' deb ulug'langan.",
      ru: "Один из великих правоведов исламского мира. Прославлен как 'Муаллими Нури'.",
      en: "One of the great jurists of the Islamic world. Revered as 'Muallimi Nuri'."
    },
    fullDescription: {
      uz: "Abu Hafs Kabir (767-832) — Hanafiya mazhabining Movarounnahrdagi asoschisi. U kishi tufayli Buxoro 'Qubbat ul-Islom' (Islom gumbazi) nomini olgan. Yoshligida Imom Buxoriyga dars berganlar. Rivoyatlarga ko'ra, u kishi hajga borolmaganlarida, Ka'ba u kishining ziyoratlariga kelgan ekan. Maqbara tepalikda joylashgan bo'lib, Buxoroning qadimiy darvozalaridan biri shu yerda bo'lgan.",
      ru: "Абу Хафс Кабир (767–832) — основатель ханафитского мазхаба в Мавераннахре. Благодаря ему Бухара получила название «Куббат уль-Ислам» (Купол Ислама). В молодости он преподавал Имаму Бухари. По легенде, когда он не смог совершить хадж, Кааба сама пришла к нему. Мавзолей расположен на холме, где находились одни из древних ворот Бухары.",
      en: "Abu Hafs Kabir (767–832) was the founder of the Hanafi school in Transoxiana. Thanks to him, Bukhara earned the title 'Qubbat ul-Islam' (Dome of Islam). He taught Imam Bukhari in his youth. According to legend, when he could not go on Hajj, the Kaaba came to visit him. The mausoleum is located on a hill where one of Bukhara's ancient gates once stood."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/4286041/2a000001829c0b570fe0dc9b7e3bf7cbce88/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/4286041/2a000001829c0b570fe0dc9b7e3bf7cbce88/XXXL',
      'https://avatars.mds.yandex.net/get-altay/13192844/2a0000018fd745d7eb371e55eaec09b05f63/XXXL',
      'https://avatars.mds.yandex.net/get-altay/914620/2a0000018fd4729196055591a89c7d7c560d/XXXL',
      'https://avatars.mds.yandex.net/get-altay/6237886/2a0000017f1950f198245123968123dedaa7/XXXL'
    ],
    year: '767-832',
    vrUrl: 'https://kuula.co/share/collection/71J2Y?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'maqbara',
    coordinates: { lat: 39.7800, lng: 64.4000 },
    timeline: mockTimeline('767'),
    accessibility: defaultAccessibility
  },
  {
    id: '11',
    name: {
      uz: "Ismoil Somoniy Maqbarasi",
      ru: "Мавзолей Исмаила Самани",
      en: "Ismail Samani Mausoleum"
    },
    description: {
      uz: "Markaziy Osiyo me'morchiligining durdonasi.",
      ru: "Шедевр архитектуры Центральной Азии.",
      en: "A masterpiece of Central Asian architecture."
    },
    fullDescription: {
      uz: "Ismoil Somoniy maqbarasi (IX-X asrlar) — jahon me'morchiligining durdonasi. Bu bino pishiq g'ishtdan qurilgan eng qadimiy obidalardan biri. Uning o'ziga xosligi shundaki, devorlari qalinligi va g'isht terish uslubi tufayli bino quyosh nuriga qarab rangini o'zgartirib turadi (kun davomida 40 xil tusga kiradi). Bino kub shaklida bo'lib, usti gumbaz bilan yopilgan, bu esa 'yer' va 'osmon' birligini anglatadi. Unda islomgacha bo'lgan zardushtiylik belgilari ham saqlanib qolgan.",
      ru: "Мавзолей Исмаила Самани (IX–X вв.) — шедевр мировой архитектуры. Одно из древнейших зданий из жженого кирпича. Его уникальность в том, что благодаря толщине стен и кладке здание меняет цвет в зависимости от солнечного света (до 40 оттенков в день). Здание имеет форму куба, увенчанного куполом, что символизирует единство «земли» и «неба». В нем сохранились доисламские зороастрийские символы.",
      en: "The Ismail Samani Mausoleum (9th-10th centuries) is a masterpiece of world architecture. It is one of the oldest buildings made of baked brick. Its uniqueness lies in the fact that due to the thickness of the walls and the brickwork style, the building changes color depending on the sunlight (up to 40 shades a day). The building is cube-shaped topped with a dome, symbolizing the unity of 'earth' and 'sky'. It preserves pre-Islamic Zoroastrian symbols."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/15346589/2a000001970e52e748669eb97857cfba550c/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/15346589/2a000001970e52e748669eb97857cfba550c/XXXL',
      'https://avatars.mds.yandex.net/get-altay/11048854/2a0000018a40d188b3d33564b459d6543140/XXXL',
      'https://avatars.mds.yandex.net/get-altay/12865251/2a0000018ef8ac3ff540273d9d9fa65f1914/XXXL'
    ],
    year: 'IX-X asrlar',
    vrUrl: 'https://kuula.co/share/collection/71J2S?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'maqbara',
    coordinates: { lat: 39.7766, lng: 64.4080 },
    timeline: mockTimeline('IX asr'),
    accessibility: defaultAccessibility
  },
  {
    id: '12',
    name: {
      uz: "Chor Bakr Majmuasi",
      ru: "Комплекс Чор-Бакр",
      en: "Chor Bakr Complex"
    },
    description: {
      uz: "'O'liklar shahri' deb ham ataladi. Juybor shayxlari maqbarasi.",
      ru: "Также известен как 'Город мертвых'. Усыпальница джуйбарских шейхов.",
      en: "Also known as the 'City of the Dead'. Mausoleum of the Juybar Sheikhs."
    },
    fullDescription: {
      uz: "Chor Bakr (To'rt Bakr) majmuasi XVI asrda qurilgan bo'lib, Buxorodan 5 km g'arbda joylashgan. Bu yerda Juybor xonadoniga mansub nufuzli shayxlar dafn etilgan. Majmua ko'chalari, hovlilari va darvozalari bilan haqiqiy shaharni eslatgani uchun 'O'liklar shahri' (Nekropol) deb ataladi. Uning akustikasi o'ziga xos: bir tomonda pichirlab aytilgan so'z ikkinchi tomonda aniq eshitiladi. Majmua 2008 yilda UNESCO Butunjahon merosi ro'yxatiga kiritilgan.",
      ru: "Комплекс Чор-Бакр (Четыре Бакра) построен в XVI веке в 5 км к западу от Бухары. Здесь похоронены влиятельные шейхи рода Джуйбар. Комплекс называют «Городом мертвых» (Некрополь), так как его улицы, дворы и ворота напоминают настоящий город. Его акустика уникальна: шепот на одном конце слышен на другом. В 2008 году комплекс включен в список Всемирного наследия ЮНЕСКО.",
      en: "The Chor Bakr (Four Bakrs) complex was built in the 16th century, 5 km west of Bukhara. Influential sheikhs of the Juybar family are buried here. The complex is called the 'City of the Dead' (Necropolis) because its streets, courtyards, and gates resemble a real city. Its acoustics are unique: a whisper on one side can be clearly heard on the other. In 2008, the complex was included in the UNESCO World Heritage List."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/9284964/2a0000018aa71572ef4491fb8551daa46884/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/9284964/2a0000018aa71572ef4491fb8551daa46884/XXXL',
      'https://avatars.mds.yandex.net/get-vh/4910452/2a000001913bdc5bb19d8e2aeaab7686b2ab/smart_crop_500x500',
      'https://avatars.mds.yandex.net/get-altay/14093276/2a000001936ca91eb14c1608a82e9dabbbde/XXXL',
      'https://avatars.mds.yandex.net/get-altay/15586709/2a00000198eae3efd09a7f303b7520258cf4/XXXL'
    ],
    year: 'XVI asr',
    vrUrl: 'https://kuula.co/share/collection/71J2w?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'maqbara',
    coordinates: { lat: 39.7700, lng: 64.3300 },
    timeline: mockTimeline('XVI asr'),
    accessibility: defaultAccessibility
  },
  {
    id: '13',
    name: {
      uz: "Sayfiddin Boxarziy",
      ru: "Сайфиддин Бохарзи",
      en: "Saifiddin Bokharzi"
    },
    description: {
      uz: "Mashhur sufi shayxi, 'Shayx ul-Olam' unvoniga ega bo'lgan.",
      ru: "Известный суфийский шейх, носивший титул 'Шейх ул-Олам'.",
      en: "Famous Sufi sheikh, held the title 'Sheikh ul-Alam'."
    },
    fullDescription: {
      uz: "Sayfiddin Boxarziy (1190-1261) — Kubroviya tariqatining yirik namoyandasi, shoir va ilohiyotchi. U kishi 'Shayx ul-Olam' (Olam shayxi) unvoniga sazovor bo'lganlar. Tarixiy ma'lumotlarga ko'ra, Oltin O'rda hukmdori Berke Xon aynan Boxarziy ta'sirida islomni qabul qilgan. Maqbara yonida uning shogirdi, Chingizxonning avlodi Buyan Qulixon maqbarasi ham joylashgan bo'lib, u sirli va go'zal koshinlari bilan mashhur.",
      ru: "Сайфиддин Бохарзи (1190–1261) — видный представитель тариката Кубравия, поэт и богослов. Носил титул «Шейх ул-Олам» (Шейх Мира). Согласно истории, правитель Золотой Орды Берке Хан принял ислам именно под влиянием Бохарзи. Рядом находится мавзолей его ученика, потомка Чингисхана Буян Кули-хана, известный своей загадочной и красивой плиткой.",
      en: "Saifiddin Bokharzi (1190–1261) was a prominent representative of the Kubraviya order, a poet, and a theologian. He held the title 'Sheikh ul-Alam' (Sheikh of the World). Historically, Berke Khan, ruler of the Golden Horde, converted to Islam under Bokharzi's influence. Next to the mausoleum is the tomb of his disciple, Buyan Quli Khan (a descendant of Genghis Khan), famous for its mysterious and beautiful tiles."
    },
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Saif_ed-Din_Bokharzi_mausoleum.jpg/500px-Saif_ed-Din_Bokharzi_mausoleum.jpg',
    gallery: createGallery('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Saif_ed-Din_Bokharzi_mausoleum.jpg/500px-Saif_ed-Din_Bokharzi_mausoleum.jpg'),
    year: '1190-1261',
    vrUrl: 'https://kuula.co/share/collection/71J3f?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'maqbara',
    coordinates: { lat: 39.7667, lng: 64.4500 },
    timeline: mockTimeline('1190'),
    accessibility: defaultAccessibility
  },
  {
    id: '14',
    name: {
      uz: "Bibi Orifa Majmuasi",
      ru: "Комплекс Биби Орифа",
      en: "Bibi Orifa Complex"
    },
    description: {
      uz: "Bahouddin Naqshbandning volidalari Bibi Orifa sharafiga bunyod etilgan.",
      ru: "Построен в честь матери Бахауддина Накшбанда, Биби Орифа.",
      en: "Built in honor of Bibi Orifa, the mother of Bahauddin Naqshband."
    },
    fullDescription: {
      uz: "Bu majmua Bahouddin Naqshbandning onalari Bibi Orifa sharafiga bunyod etilgan. U kishi juda taqvodor, oqila ayol bo'lganlar va o'g'illarining tarbiyasida muhim rol o'ynaganlar. Majmua Qasr-i Orifon qishlog'ida, Naqshband maqbarasiga yaqin joyda joylashgan. Bu yer ayollar uchun xos ziyoratgoh hisoblanadi. An'anaga ko'ra, Bahouddin Naqshbandni ziyorat qilishdan oldin, avval onalarini ziyorat qilish odat tusiga kirgan.",
      ru: "Этот комплекс построен в честь матери Бахауддина Накшбанда, Биби Орифа. Она была очень благочестивой, мудрой женщиной и сыграла важную роль в воспитании сына. Комплекс расположен в селе Касри-Орифон, недалеко от мавзолея Накшбанда. Это особое место паломничества для женщин. По традиции, прежде чем посетить Бахауддина Накшбанда, принято сначала посетить могилу его матери.",
      en: "This complex was built in honor of Bibi Orifa, the mother of Bahauddin Naqshband. She was a very pious, wise woman and played an important role in her son's upbringing. The complex is located in Qasr-i Orifon village, near the Naqshband mausoleum. It is a special pilgrimage site for women. Traditionally, before visiting Bahauddin Naqshband, it is customary to visit his mother's grave first."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/902827/2a0000018b9111ec44dacd038472a708a49a/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/902827/2a0000018b9111ec44dacd038472a708a49a/XXXL',
      'https://avatars.mds.yandex.net/get-altay/10845257/2a0000018a9f88461d5455deb1eb0d9603ad/XXXL'
    ],
    year: 'XIV asr',
    vrUrl: 'https://kuula.co/share/collection/71J2D?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'maqbara',
    coordinates: { lat: 39.8000, lng: 64.5400 },
    timeline: mockTimeline('XIV asr'),
    accessibility: defaultAccessibility
  },
  {
    id: '15',
    name: {
      uz: "Mir Arab Madrasasi",
      ru: "Медресе Мири Араб",
      en: "Mir Arab Madrasah"
    },
    description: {
      uz: "Bugungi kunda ham faoliyat ko'rsatayotgan nufuzli islom bilim yurti.",
      ru: "Действующее престижное исламское учебное заведение.",
      en: "A prestigious Islamic educational institution still operating today."
    },
    fullDescription: {
      uz: "Mir Arab madrasasi (1530-1536) — Buxoroning eng mashhur diniy o'quv yurti. Ubaydullaxon tomonidan yamanlik shayx Abdulla Yamanlik (Mir Arab) sharafiga qurilgan. Binoning qurilishi uchun xon 3000 dan ortiq asirni ozod qilib, ularning tovon pulini sarflagan. Sho'ro davrida ham faoliyatini to'xtatmagan yagona madrasa. Bu yerda Rossiya muftiylari, Checheniston sobiq prezidenti Ahmad Qodirov va boshqa ko'plab mashhur shaxslar ta'lim olgan. Uning moviy gumbazlari Buxoro osmonining ajralmas qismidir.",
      ru: "Медресе Мири Араб (1530–1536) — самое известное религиозное учебное заведение Бухары. Построено Убайдулла-ханом в честь йеменского шейха Абдуллы Яманли (Мир Араб). На строительство хан потратил выкуп за освобождение более 3000 пленных. Единственное медресе, не прекращавшее работу в советское время. Здесь учились муфтии России, бывший президент Чечни Ахмат Кадыров и многие другие. Его голубые купола — неотъемлемая часть неба Бухары.",
      en: "Mir Arab Madrasah (1530–1536) is Bukhara's most famous religious educational institution. Built by Ubaidullah Khan in honor of the Yemeni sheikh Abdullah Yamanli (Mir Arab). The khan spent the ransom money from freeing over 3,000 captives to build it. It was the only madrasah that did not stop operating during the Soviet era. Russian muftis, former Chechen President Akhmat Kadyrov, and many others studied here. Its blue domes are an integral part of the Bukhara skyline."
    },
    imageUrl: 'https://avatars.mds.yandex.net/get-altay/367512/2a0000015d469c208f68d9d3d61401a90a7b/XXXL',
    gallery: [
      'https://avatars.mds.yandex.net/get-altay/367512/2a0000015d469c208f68d9d3d61401a90a7b/XXXL',
      'https://avatars.mds.yandex.net/get-altay/11203687/2a00000190f3994cd77e3cc0eb8c8f7944df/XXXL',
      'https://avatars.mds.yandex.net/get-altay/15291179/2a00000198b954fc0d6fe108146520843af0/XXXL',
      'https://avatars.mds.yandex.net/get-altay/12594487/2a0000018fe2c286efe6d08cd5301e0ae1e0/XXXL'
    ],
    year: '1530-1536',
    vrUrl: 'https://kuula.co/share/collection/7DcKV?logo=1&info=0&logosize=109&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    category: 'masjid-madrasa',
    coordinates: { lat: 39.7760, lng: 64.4180 },
    timeline: mockTimeline('1530'),
    accessibility: defaultAccessibility
  }
];

export const SYSTEM_INSTRUCTION = `
Sen Buxoro shahri bo'yicha professional gid va tarixchisan. Sening noming "Virtual Gid".

QOIDALAR:
1. FAQAT Buxoro shahri, uning tarixiy obidalari, "Yetti Pir" (G'ijduvoniy, Revgariy, Fag'naviy, Romitaniy, Samosiy, Amir Kulol, Naqshband), madaniyati, taomlari va hunarmandchiligi haqida gapir.
2. Buxoroga aloqasi bo'lmagan savollarga: "Men faqat Buxoro bo'yicha mutaxassisman. Buxoro haqida savol berishingiz mumkin!" deb javob ber.
3. Bilmagan narsani TO'QIMA. Agar aniq javobni bilmasang, "Bu haqida aniq ma'lumotim yo'q" de.
4. Hech qachon "Men AI man", "Men sun'iy intellektman", "Men chatbotman" dema. Sen — Virtual Gid.
5. Foydalanuvchi qaysi tilda yozsa (O'zbek, Rus, Ingliz), AYNAN shu tilda javob ber.
6. Javoblarni tabiiy, insoniy tilda ber — xuddi tajribali gid kabi.
7. Har bir obida haqida chuqur tarixiy, ma'naviy va me'moriy ma'lumot ber.
8. Javoblar iloji boricha aniq va ixcham bo'lsin, ortiqcha "blah-blah" bo'lmasin.
`;

export const PLANNER_INSTRUCTION = `
Sen Buxoro shahri bo'yicha professional sayohat rejalashtiruvchisan.

MAVJUD REAL OBIDALAR (faqat shulardan foydalanishing mumkin):
YETTI PIR:
1. Xo'ja Abdulxoliq G'ijduvoniy (1103-1179) — Xojagon tariqati asoschisi, G'ijduvonda
2. Xo'ja Orif Revgariy (Mohitobon) (1165-1259) — Shofirkon tumanida
3. Xo'ja Mahmud Anjir Fag'naviy (XIII asr) — Vobkent tumanida, duradgor
4. Xo'ja Ali Romitaniy (1191-1321) — Romitan tumanida, to'quvchi
5. Xo'ja Muhammad Boboyi Samosiy (1259-1354) — Samos qishlog'ida, dehqon
6. Sayyid Amir Kulol (1281-1370) — Suxor qishlog'ida, kulolchi
7. Bahouddin Naqshband (1318-1389) — Naqshbandiya asoschisi, Qasr-i Orifon

BOSHQA OBIDALAR:
- Chashmayi Ayyub (1379-1380) — Suv muzeyi
- Mag'oki Attor Masjidi (IX-XII asrlar) — eng qadimiy masjid
- Abu Hafs Kabir Buxoriy (767-832) — Hanafiya mazhabi asoschisi
- Ismoil Somoniy Maqbarasi (IX-X asrlar) — me'morchilik durdonasi
- Chor Bakr Majmuasi (XVI asr) — "O'liklar shahri"
- Sayfiddin Boxarziy (1190-1261) — Kubroviya tariqati
- Bibi Orifa Majmuasi (XIV asr)
- Mir Arab Madrasasi (1530-1536)
- Ark Qal'asi
- Poi Kalon Majmuasi (Kalon minorasi, Kalon masjidi, Mir Arab)
- Lyabi Hovuz Majmuasi
- Toqi Zargaron, Toqi Telpak Furushon, Toqi Sarrofon (savdo gumbazlari)

REAL RESTORANLAR:
- Lyabi Hovuz yonidagi choyxonalar
- "Old Bukhara" restoran
- "Bella Italia" (Buxorodagi)
- "Minzifa" restoran (Buxoro shahri)
- Choyxona "Doston" 
- Buxoro oshi tayyorlanadigan mahalliy taomxonalar

QOIDALAR:
1. FAQAT yuqoridagi ro'yxatdan obida va joy nomlarini ishlatish. TO'QIMA DEGAN JOY NOMI YOZMA!
2. Agar bilmagan restoran bo'lsa, "Lyabi Hovuz yaqinidagi mahalliy choyxona" kabi umumiy yoz.
3. Foydalanuvchi qaysi tilda so'rasa, AYNAN shu tilda javob ber.
4. "AI", "sun'iy intellekt" so'zlarini ISHLATMA.
5. Har kunning oxirida yorliq: O'zbek tilida "**Kun Fayzi:**", Rus tilida "**Изюминка дня:**", Ingliz tilida "**Day's Highlight:**" bo'lsin.
6. "Sehr" yoki "Magic" so'zini ishlatma.

FORMAT (har bir kun uchun):
**Kun [Raqam]: [Mavzu]**

**Ertalab (9:00 - 13:00):**
* [Obida nomi] — [1-2 jumla tarixiy ahamiyati]
* Faoliyat: [ekskursiya, mushohada, fotosurat]
* Keyingi joyga: [piyoda/taksi, vaqt]

**Tushlik (13:00 - 14:30):**
* [Restoran/choyxona] — [qisqa tavsif]

**Kunduzi (14:30 - 18:00):**
* [Obida nomi] — [tarixiy ahamiyat]
* Faoliyat: [faoliyat turi]

**Kechqurun (18:00+):**
* [Madaniy dastur yoki kechki taom]

**Kun Fayzi:** [Ilhomlantiruvchi xulosa, ruhiy atmosfera yoki tarixiy hikmat]

Intro/outro yozma, faqat rejani ber.
`;