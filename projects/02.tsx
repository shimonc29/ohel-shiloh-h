import React, { useState, useMemo } from 'react';

// Inline SVG Icon components to ensure no missing dependencies or React child errors
const Droplets = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
  </svg>
);

const Search = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MapPin = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Navigation = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const Star = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Heart = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const MessageCircle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Filter = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);

const Compass = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BookOpen = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const Layers = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const Sparkles = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const X = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Footprints = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Calendar = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Car = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h14l2 4M3 9v7a1 1 0 001 1h1m16 0h1a1 1 0 001-1V9M3 9h18" />
  </svg>
);

const ChevronLeft = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const CheckCircle2 = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldAlert = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

// Comprehensive Database of Israeli Springs & Water Trails with direct authentic photo links
const INITIAL_WATER_SPOTS = [
  {
    id: 'hexagons-pool',
    name: 'בריכת המשושים',
    region: 'רמת הגולן',
    subRegion: 'דרום רמת הגולן, סמוך לחד-נס',
    featured: true,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'בריכה טבעית מרהיבה שנוצרה בתוך קניון בזלת מרשים, המוגנת בעמודי בזלת משושים שמורים. מוגדרת כחלק משמורת טבע מוכרזת.',
    wazeQuery: 'שמורת טבע בריכת המשושים',
    googleMapsUrl: 'https://maps.google.com/?q=32.8872,35.6653',
    wazeUrl: 'https://waze.com/ul?q=שמורת+טבע+בריכת+המשושים',
    coordinates: '32.8872° N, 35.6653° E',
    targetAudience: ['משפחות', 'צעירים', 'מטיבי לכת'],
    difficulty: 'בינוני',
    season: ['אביב', 'קיץ'],
    waterFeatures: {
      depth: 'עמוקים מאוד (שחייה חובה)',
      depthType: 'deep',
      temp: 'קרים ומרעננים',
      tempType: 'cold',
      clarity: 'צלולים ונקיים',
      flow: 'זרימת נחל איתנה'
    },
    distanceFromCar: 'הליכה קצרה',
    walkDuration: '20-25 דקות',
    routeLengthKm: 2.0,
    strollerAccessible: false,
    shade: 'צל חלקי ליד המים',
    howToGetThere: 'נסיעה על כביש 888, פנייה לפי השילוט לחניון שמורת בריכת המשושים. חנייה מוסדרת לרכב פרטי.',
    safetyAndEquipment: 'הירידה והעלייה תלולות בשביל מרוצף. חובה נעלי הליכה, מים רבים ואמצעי ציפה.'
  },
  {
    id: 'ein-mokesh',
    name: 'עין מוקש',
    region: 'רמת הגולן',
    subRegion: 'מרכז רמת הגולן, בין עין זיוון לאלוני הבשן',
    featured: true,
    rating: 4.8,
    reviewsCount: 115,
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'באר מים צ\'רקסית עתיקה ועמוקה עשויה אבני בזלת עגולות. הבריכה עמוקה מאוד והמים קרים ונקיים בכל ימות השנה.',
    wazeQuery: 'עין מוקש',
    googleMapsUrl: 'https://maps.google.com/?q=33.1424,35.8115',
    wazeUrl: 'https://waze.com/ul?q=עין+מוקש',
    coordinates: '33.1424° N, 35.8115° E',
    targetAudience: ['צעירים', 'משפחות'],
    difficulty: 'קל',
    season: ['כל השנה', 'אביב', 'קיץ'],
    waterFeatures: {
      depth: 'עמוקים מאוד (כ-8 מטר)',
      depthType: 'deep',
      temp: 'קפואים',
      tempType: 'icy',
      clarity: 'צלולים וכהים',
      flow: 'באר מים נחה'
    },
    distanceFromCar: 'חנייה וטבילה',
    walkDuration: '8-10 דקות',
    routeLengthKm: 0.8,
    strollerAccessible: false,
    shade: 'מוצל חלקית מסביב',
    howToGetThere: 'נסיעה על כביש 98, חנייה במפרץ לצד הדרך. צעידה בשביל התחום בגדרות בלבד.',
    safetyAndEquipment: 'אזהרה: אין לסטות מהשביל המסומן עקב שטחי מוקשים מסביב! הירידה בסולם מתכת. חובה מצופים.'
  },
  {
    id: 'ein-tina',
    name: 'עין תינה (עין נוטרה)',
    region: 'רמת הגולן',
    subRegion: 'מורדות רמת הגולן / צפון עמק החולה',
    featured: true,
    rating: 4.9,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'מסלול מים רטוב חווייתי במיוחד המציע הליכה בתוך נחל זורם עד להגעה למפל מים עוצמתי הפורץ מתוך ההר.',
    wazeQuery: 'עין תינה',
    googleMapsUrl: 'https://maps.google.com/?q=33.0903,35.6569',
    wazeUrl: 'https://waze.com/ul?q=עין+תינה',
    coordinates: '33.0903° N, 35.6569° E',
    targetAudience: ['משפחות', 'ילדים קטנים', 'צעירים'],
    difficulty: 'קל',
    season: ['אביב', 'קיץ', 'סתיו'],
    waterFeatures: {
      depth: 'רדודים (עד הברכיים)',
      depthType: 'shallow',
      temp: 'נעימים / קרים קלות',
      tempType: 'pleasant',
      clarity: 'צלולים וזורמים',
      flow: 'זרימה חזקה ומפל'
    },
    distanceFromCar: 'חנייה וטבילה',
    walkDuration: '5 דקות לתחילת המים',
    routeLengthKm: 1.5,
    strollerAccessible: false,
    shade: 'מוצל ברובו',
    howToGetThere: 'נסיעה על כביש 918 בין גשר בנות יעקב לגונן, פנייה מזרחה לפי השילוט לעין תינה לדרך עפר.',
    safetyAndEquipment: 'חובה ללכת עם נעלי מים נסגרות (אבנים חלקות). מומלץ להביא בגדים להחלפה.'
  },
  {
    id: 'ein-fik',
    name: 'עין פיק',
    region: 'רמת הגולן',
    subRegion: 'דרום רמת הגולן, למרגלות קיבוץ אפיק',
    featured: true,
    rating: 4.7,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1546412414-8035e1776c9a?auto=format&fit=crop&w=800&q=80'],
    description: 'מעיין קסום ומוצל הנובע בתוך מבוך צמחייה ועצי תאנה ענקיים, עם ירידה קצרה במדרגות אבן עתיקות.',
    wazeQuery: 'עין פיק',
    googleMapsUrl: 'https://maps.google.com/?q=32.7788,35.7011',
    wazeUrl: 'https://waze.com/ul?q=עין+פיק',
    coordinates: '32.7788° N, 35.7011° E',
    targetAudience: ['משפחות', 'צעירים'],
    difficulty: 'קל',
    season: ['אביב', 'קיץ', 'סתיו'],
    waterFeatures: {
      depth: 'בינוני (כ-1.2 מטר)',
      depthType: 'variable',
      temp: 'קרים מאוד',
      tempType: 'cold',
      clarity: 'מים זורמים צלולים',
      flow: 'נביעה קבועה מתחת לסלע'
    },
    distanceFromCar: 'חנייה וטבילה',
    walkDuration: '5 דקות ירידה במדרגות',
    routeLengthKm: 0.4,
    strollerAccessible: false,
    shade: 'מוצל מלא',
    howToGetThere: 'נסיעה על כביש 98 ליד קיבוץ אפיק, חנייה במגרש המסודר וירידה במדרגות האבן.',
    safetyAndEquipment: 'זהירות במדרגות האבן הלחות. מקום מעולה לפיקניק מוצל.'
  },
  {
    id: 'zavitan-stream',
    name: 'נחל זוויתן ובריכותיו',
    region: 'רמת הגולן',
    subRegion: 'מרכז רמת הגולן, שמורת יהודיה',
    featured: false,
    rating: 4.8,
    reviewsCount: 96,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'אחד הקניונים המרשימים בישראל הכולל בריכות מים טבעיות ענקיות העטופות בעמודי בזלת ומפלים מרשימים.',
    wazeQuery: 'שמורת טבע יהודיה',
    googleMapsUrl: 'https://maps.google.com/?q=32.9094,35.6881',
    wazeUrl: 'https://waze.com/ul?q=שמורת+טבע+יהודיה',
    coordinates: '32.9094° N, 35.6881° E',
    targetAudience: ['מטיבי לכת', 'צעירים'],
    difficulty: 'קשה',
    season: ['אביב', 'קיץ'],
    waterFeatures: {
      depth: 'עמוקים מאוד',
      depthType: 'deep',
      temp: 'קרים מאוד',
      tempType: 'cold',
      clarity: 'צלולים בגוון טורקיז',
      flow: 'מפלים ובריכות'
    },
    distanceFromCar: 'מסלול הליכה מלא',
    walkDuration: '3-5 שעות מסלול',
    routeLengthKm: 6.5,
    strollerAccessible: false,
    shade: 'חלקית מוצל',
    howToGetThere: 'חנייה מוסדרת בשמורת יהודיה על כביש 87, ויציאה רגלית לפי סימון השבילים.',
    safetyAndEquipment: 'חובה 3 ליטר מים לאדם, נעלי הליכה גבוהות, כובע ותיק אטום למים.'
  },
  {
    id: 'ein-shokek',
    name: 'עין שוקק ופארק המעיינות',
    region: 'גליל עליון ומערבי',
    subRegion: 'עמק המעיינות / למרגלות הגלבוע',
    featured: true,
    rating: 4.9,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'בריכה טבעית ענקית וצלולה במיוחד עם מים צלולים כקריסטל, המוקפת צמחייה עשירה ונגישות מעולה לפעוטות ולעגלות.',
    wazeQuery: 'פארק המעיינות',
    googleMapsUrl: 'https://maps.google.com/?q=32.5061,35.4741',
    wazeUrl: 'https://waze.com/ul?q=פארק+המעיינות',
    coordinates: '32.5061° N, 35.4741° E',
    targetAudience: ['משפחות', 'ילדים קטנים', 'פעוטות', 'צעירים'],
    difficulty: 'קל',
    season: ['כל השנה', 'אביב', 'קיץ'],
    waterFeatures: {
      depth: 'בינוני (כ-1.5 מטר)',
      depthType: 'variable',
      temp: 'נעימים לאורך כל השנה',
      tempType: 'pleasant',
      clarity: 'צלולים קריסטל',
      flow: 'נביעה איתנה'
    },
    distanceFromCar: 'הליכה קצרה',
    walkDuration: '15 דקות הליכה מישורית',
    routeLengthKm: 1.2,
    strollerAccessible: true,
    shade: 'מוצל מלא תחת העצים',
    howToGetThere: 'חנייה בפארק המעיינות ליד גן השלושה. משם הליכה רגלית, באופניים או ברכב ירוק.',
    safetyAndEquipment: 'נגיש מאוד, מומלץ להביא מחצלת וציוד פיקניק.'
  },
  {
    id: 'majrase',
    name: 'שמורת הבטחה - המג\'רסה',
    region: 'רמת הגולן',
    subRegion: 'בקעת בית צידה, צפון-מזרח הכנרת',
    featured: true,
    rating: 4.8,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'מפגש נחלי הגולן הגדולים אל הכנרת. מסלול מים מוסדר ומהנה המאפשר הליכה רצופה בתוך מים זורמים בדרגות עומק משתנות.',
    wazeQuery: 'שמורת טבע מג\'רסה',
    googleMapsUrl: 'https://maps.google.com/?q=32.8938,35.6841',
    wazeUrl: 'https://waze.com/ul?q=שמורת+טבע+מג\'רסה',
    coordinates: '32.8938° N, 35.6841° E',
    targetAudience: ['משפחות', 'ילדים קטנים', 'קבוצות'],
    difficulty: 'קל',
    season: ['אביב', 'קיץ'],
    waterFeatures: {
      depth: 'משתנים (מקרסול ועד חזה)',
      depthType: 'variable',
      temp: 'נעימים',
      tempType: 'pleasant',
      clarity: 'נחל זורם טבעי',
      flow: 'זרימה איטית ונעימה'
    },
    distanceFromCar: 'חנייה וטבילה',
    walkDuration: '5 דקות מהחנייה',
    routeLengthKm: 1.0,
    strollerAccessible: false,
    shade: 'מוצל ברובו',
    howToGetThere: 'נסיעה על כביש 92, פנייה מערבה לפי השילוט לשמורת הבטחה / מג\'רסה. חנייה מוסדרת.',
    safetyAndEquipment: 'חובה נעלי מים וציוד ציפה לפעוטות.'
  },
  {
    id: 'ein-hardalit',
    name: 'עין חרדלית ונחל כזיב',
    region: 'גליל עליון ומערבי',
    subRegion: 'גליל מערבי, סמוך למושב עבדון',
    featured: true,
    rating: 4.9,
    reviewsCount: 177,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80'],
    description: 'פינת חמד מוצלת במיוחד לאורך נחל כזיב הזורם, המציעה בריכות שכשוך צלולות וקטנות תחת חורש עבות.',
    wazeQuery: 'עין חרדלית',
    googleMapsUrl: 'https://maps.google.com/?q=33.0421,35.1842',
    wazeUrl: 'https://waze.com/ul?q=עין+חרדלית',
    coordinates: '33.0421° N, 35.1842° E',
    targetAudience: ['משפחות', 'ילדים קטנים', 'פעוטות'],
    difficulty: 'קל',
    season: ['אביב', 'קיץ', 'סתיו'],
    waterFeatures: {
      depth: 'רדודים עד בינוני',
      depthType: 'shallow',
      temp: 'נעימים וקרירים',
      tempType: 'pleasant',
      clarity: 'צלולים וזרמים',
      flow: 'זרימת נחל איתנה'
    },
    distanceFromCar: 'חנייה וטבילה',
    walkDuration: '3-5 דקות הליכה',
    routeLengthKm: 0.5,
    strollerAccessible: true,
    shade: 'מוצל מלא תחת עצים',
    howToGetThere: 'כביש 70, פנייה לכיוון עבדון/מצפה הילה לפי השילוט לעין חרדלית. חנייה מוסדרת.',
    safetyAndEquipment: 'נעלי מים מומלצות, מקום מעולה לפיקניק משפחתי.'
  },
  {
    id: 'ein-dvir',
    name: 'עין פואר (עין מבוע)',
    region: 'מרכז',
    subRegion: 'נחל פרת (ואדי קלט), מדבר יהודה',
    featured: true,
    rating: 4.9,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80'],
    description: 'מעיין פועם ייחודי שבו הבריכה מתרוקנת ומתמלאת חליפות באופן מחזורי. חוויית טבע מרהיבה ומסתורית בלב מדבר.',
    wazeQuery: 'שמורת טבע עין מבוע',
    googleMapsUrl: 'https://maps.google.com/?q=31.8384,35.3524',
    wazeUrl: 'https://waze.com/ul?q=עין+מבוע',
    coordinates: '31.8384° N, 35.3524° E',
    targetAudience: ['משפחות', 'צעירים'],
    difficulty: 'קל',
    season: ['כל השנה', 'אביב', 'חורף'],
    waterFeatures: {
      depth: 'משתנה (ריק עד עמוק מאוד)',
      depthType: 'variable',
      temp: 'קרים ומרעננים',
      tempType: 'cold',
      clarity: 'צלולים וצלולים מאוד',
      flow: 'נביעה מחזורית פועמת'
    },
    distanceFromCar: 'חנייה וטבילה',
    walkDuration: '3 דקות הליכה',
    routeLengthKm: 0.3,
    strollerAccessible: true,
    shade: 'מוצל בחלקו',
    howToGetThere: 'נסיעה בכביש 458 (אלון), חנייה מסודרת בכניסה לשמורה.',
    safetyAndEquipment: 'שימו לב למחזורי התרוקנות והתמלאות הבריכה. כובע ומים מומלצים.'
  },
  {
    id: 'ein-akev',
    name: 'עין עקב',
    region: 'דרום',
    subRegion: 'רמת נגב, סמוך לשדה בוקר',
    featured: false,
    rating: 4.8,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'],
    description: 'נווה מדבר קסום בעומק הנחל, עם בריכת מים עמוקה וקפואה הנובעת תחת מפל סלע ענקי בלב צוקי המדבר.',
    wazeQuery: 'חניון סרפנטינות עין עקב',
    googleMapsUrl: 'https://maps.google.com/?q=30.8322,34.8311',
    wazeUrl: 'https://waze.com/ul?q=עין+עקב',
    coordinates: '30.8322° N, 34.8311° E',
    targetAudience: ['מטיבי לכת', 'צעירים'],
    difficulty: 'קשה',
    season: ['סתיו', 'חורף', 'אביב'],
    waterFeatures: {
      depth: 'עמוקים מאוד (כ-7 מטר)',
      depthType: 'deep',
      temp: 'קפואים מאוד',
      tempType: 'icy',
      clarity: 'מים צלולים במדבר',
      flow: 'נביעה קבועה'
    },
    distanceFromCar: 'מסלול הליכה מלא',
    walkDuration: '2-3 שעות הליכה לכל כיוון',
    routeLengthKm: 8.5,
    strollerAccessible: false,
    shade: 'חשוף לשמש בדרך, מוצל בבריכה',
    howToGetThere: 'מדרשת בן גוריון, ירידה במעלה סרפנטינות (ברכב 4X4 או ברגל מחניון הלילה).',
    safetyAndEquipment: 'חובה להצטייד ב-4 ליטר מים לאדם, כובע והגנה מהשמש. אין לטייל בימים חמים מאוד.'
  }
];

// Articles & Travel Guides Database
const ARTICLES_DATABASE = [
  {
    id: 'golan-hidden-springs',
    title: '5 המעיינות הסודיים והפחות מוכרים ברמת הגולן',
    readTime: '4 דק\' קריאה',
    category: 'המלצות גולן',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    summary: 'מעבר לבריכת המשושים ועין מוקש, רמת הגולן מציעה פינות חמד נסתרות ושקטות הטבולות בירק וסלעי בזלת. גלו את הבריכות הפחות מוכרות.',
    content: `רמת הגולן שופעת במקורות מים, אך בסופי שבוע חמימים האתרים המוכרים נוטים להתמלא במטיילים. אם אתם מחפשים שקט, צלילות מים וחוויית טבע צרופה, כדאי להכיר את המעיינות הנסתרים:

1. **עין כבשים (צפון הגולן):** פינה קטנה ופסטורלית למרגלות הר חרמונית, המוקפת עצי פופולר ענקיים המעניקים צל מלא. המים קרים מאוד והגישה נוחה.
2. **בריכת כפר עקב:** בריכת בטון עתיקה הממוקמת מעל מורדות הכנרת, המציעה תצפית נוף מרהיבה לצד מים צלולים.
3. **עין איוב (המפל הנסתר):** מפל מים מתוקים הפורץ ישר אל תוך הכנרת בצפון הימה.

**טיפ זהב:** תמיד הגיעו בשעות הבוקר המוקדמות (עד 09:30) ליהנות מהשקט והפרטיות במעיין.`
  },
  {
    id: 'toddlers-water-safety',
    title: 'איך מטיילים בבטחה עם פעוטות וילדים במקורות מים',
    readTime: '5 דק\' קריאה',
    category: 'בטיחות ומשפחה',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    summary: 'כללים חשובים ורשימת ציוד חובה למשפחות היורדות למסלולי מים רטובים עם ילדים קטנים ועגלות.',
    content: `טיול מים עם ילדים הוא החוויה המהנה ביותר של הקיץ, אך מים טבעיים מציבים אתגרים ייחודיים שחשוב להיערך אליהם מראש:

- **נעלי מים נסגרות בלבד:** סלעי הנחלים והמעיינות חלקים מאוד עקב אצות. אל תתנו לילדים להיכנס בכפכפים! נעלי מים מונעות החלקה ופציעות.
- **אמצעי ציפה תקניים:** בבריכות טבעיות אין מציל. ודאו שכל ילד שאינו שוחה מוגן במצופים או בווסט ציפה לפני שהוא מתקרב לקו המים.
- **מים לשתייה:** גם כשמוקפים במים קרים, גוף הילדים מאבד נוזלים. הקפידו על הפסקות שתייה יזומות בכל 20 דקות.`
  },
  {
    id: 'golan-minefields-rules',
    title: 'הסכנות בשטחי מוקשים בגולן – כללי ברזל מצילי חיים',
    readTime: '3 דק\' קריאה',
    category: 'כללי בטיחות',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    summary: 'רמת הגולן מכילה שטחים צבאיים ושטחי מוקשים מבוצרים. למדו איך לזהות את השילוט ולהישאר בטוחים.',
    content: `חלק מפינות החמד והמעיינות בגולן גובלים בשטחי מוקשים ישנים מעבר לגדר. כדי ליהנות מהטיול ולהחזיר את כולם בשלום:

1. **לעולם אין לעבור גדרות!** גדרות שטחי מוקשים מסומנות בשלטי אזהרה צהובים-אדומים עם ציור משולש אדום וכתובת "זהירות מוקשים".
2. **צעידה בשבילים מסומנים בלבד:** בעין מוקש למשל, השביל הראשי תחום בגדרות תיל ברורות. אין לרדת מהשביל הכבוש לצדדים.
3. **השגחה צמודה על כלבים וילדים:** אין לאפשר לכלבים לרוץ חופשי בשטחי בור פתוחים בגולן.`
  }
];

export default function App() {
  // State for Spots Data (Allows local rating dynamic updates)
  const [spots, setSpots] = useState(INITIAL_WATER_SPOTS);

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('הכל');
  const [selectedAudience, setSelectedAudience] = useState('הכל');
  const [selectedDifficulty, setSelectedDifficulty] = useState('הכל');
  const [selectedSeason, setSelectedSeason] = useState('הכל');
  const [selectedWaterDepth, setSelectedWaterDepth] = useState('הכל');
  const [selectedDistance, setSelectedDistance] = useState('הכל');

  // Active Spot for Modal
  const [activeSpot, setActiveSpot] = useState(null);
  
  // Active Article Modal
  const [activeArticle, setActiveArticle] = useState(null);

  // Main Tabs: 'grid' | 'table' | 'articles' | 'guide'
  const [viewMode, setViewMode] = useState('grid');

  // Favorites logic
  const [favorites, setFavorites] = useState([]);

  // User Interactive Rating logic
  const [userRatings, setUserRatings] = useState({});

  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleRateSpot = (spotId, newStars) => {
    setUserRatings(prev => ({ ...prev, [spotId]: newStars }));
    setSpots(prevSpots => prevSpots.map(spot => {
      if (spot.id === spotId) {
        const totalScore = (spot.rating * spot.reviewsCount) + newStars;
        const newCount = spot.reviewsCount + 1;
        return {
          ...spot,
          rating: Number((totalScore / newCount).toFixed(1)),
          reviewsCount: newCount
        };
      }
      return spot;
    }));
  };

  const handleWhatsAppShare = (spot, e) => {
    if (e) e.stopPropagation();
    const message = `שלום! תראה את המעיין המטורף הזה מתוך פורטל "מישראל":
*${spot.name}* (${spot.region})
💧 עומק מים: ${spot.waterFeatures.depth}
🚗 מרחק מהרכב: ${spot.distanceFromCar}
📍 ניווט ב-Waze: ${spot.wazeUrl}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('הכל');
    setSelectedAudience('הכל');
    setSelectedDifficulty('הכל');
    setSelectedSeason('הכל');
    setSelectedWaterDepth('הכל');
    setSelectedDistance('הכל');
  };

  // Filter Logic
  const filteredSpots = useMemo(() => {
    return spots.filter(spot => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = spot.name.toLowerCase().includes(query);
        const matchDesc = spot.description.toLowerCase().includes(query);
        const matchSub = spot.subRegion.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchSub) return false;
      }

      if (selectedRegion !== 'הכל' && spot.region !== selectedRegion) return false;
      if (selectedAudience !== 'הכל' && !spot.targetAudience.includes(selectedAudience)) return false;
      if (selectedDifficulty !== 'הכל' && spot.difficulty !== selectedDifficulty) return false;
      if (selectedSeason !== 'הכל' && !spot.season.includes(selectedSeason) && !spot.season.includes('כל השנה')) return false;

      if (selectedWaterDepth !== 'הכל') {
        if (selectedWaterDepth === 'עמוקים' && spot.waterFeatures.depthType !== 'deep') return false;
        if (selectedWaterDepth === 'רדודים' && spot.waterFeatures.depthType !== 'shallow') return false;
      }

      if (selectedDistance !== 'הכל' && spot.distanceFromCar !== selectedDistance) return false;

      return true;
    });
  }, [spots, searchQuery, selectedRegion, selectedAudience, selectedDifficulty, selectedSeason, selectedWaterDepth, selectedDistance]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dir-rtl font-sans antialiased selection:bg-teal-500 selection:text-white" dir="rtl">
      
      {/* Header Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Brand Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setViewMode('grid')}>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-teal-600 via-cyan-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                <Droplets className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-teal-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  מישראל
                </span>
                <span className="hidden sm:inline-block text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full mr-2 border border-teal-200">
                  מדריך המעיינות והנחלים
                </span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="flex items-center gap-1 sm:gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>פנינות המים</span>
              </button>

              <button 
                onClick={() => setViewMode('articles')}
                className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  viewMode === 'articles' 
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>מאמרים ומדריכים</span>
              </button>

              <button 
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  viewMode === 'table' 
                    ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>טבלת השוואה</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-slate-900 to-slate-950 text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-teal-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>הפורטל המקיף ביותר למקורות מים ברמת הגולן ובישראל</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            המעיינות והנחלים <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              היפים והצלולים ביותר בישראל
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
            מבריכות הבזלת של הגולן ועד מעיינות המדבר. מצאו את פינת החמד הבאה שלכם עם ניווט ל-Waze, דירוגי מטיילים בלייב, ושיתוף מהיר ב-WhatsApp.
          </p>

          {/* Quick Search */}
          <div className="pt-4 max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl text-slate-800">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="חפשו מעיין, נחל או אזור (למשל: המשושים, עין מוקש, גולן...)"
                className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-slate-800 text-sm sm:text-base placeholder-slate-400 py-2 px-2"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* VIEW 1: SPRINGS & WATER SPOTS GRID */}
        {viewMode === 'grid' && (
          <div className="space-y-8">
            
            {/* Filters Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-lg">
                  <Filter className="w-5 h-5 text-teal-600" />
                  <span>סינון מתקדם למסלולים ומעיינות</span>
                </div>
                
                <button 
                  onClick={handleResetFilters}
                  className="text-xs text-teal-700 hover:text-teal-800 font-bold underline underline-offset-4 transition"
                >
                  איפוס סינונים
                </button>
              </div>

              {/* Filters Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                
                {/* Region */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    אזור בארץ
                  </label>
                  <select 
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="הכל">כל האזורים</option>
                    <option value="רמת הגולן">רמת הגולן</option>
                    <option value="גליל עליון ומערבי">גליל עליון ומערבי</option>
                    <option value="מרכז">מרכז ויהודה</option>
                    <option value="דרום">דרום ונגב</option>
                  </select>
                </div>

                {/* Target Audience */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <Footprints className="w-3.5 h-3.5 text-teal-600" />
                    קהל יעד
                  </label>
                  <select 
                    value={selectedAudience}
                    onChange={(e) => setSelectedAudience(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="הכל">לכולם</option>
                    <option value="משפחות">משפחות עם ילדים</option>
                    <option value="ילדים קטנים">פעוטות / ילדים קטנים</option>
                    <option value="צעירים">צעירים</option>
                    <option value="מטיבי לכת">מטיבי לכת</option>
                  </select>
                </div>

                {/* Difficulty */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-teal-600" />
                    דרגת קושי
                  </label>
                  <select 
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="הכל">כל דרגות הקושי</option>
                    <option value="קל">קל (נגיש)</option>
                    <option value="בינוני">בינוני</option>
                    <option value="קשה">קשה (אתגרי)</option>
                  </select>
                </div>

                {/* Season */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    עונה מומלצת
                  </label>
                  <select 
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="הכל">כל העונות</option>
                    <option value="אביב">אביב</option>
                    <option value="קיץ">קיץ</option>
                    <option value="כל השנה">כל השנה</option>
                  </select>
                </div>

                {/* Water Depth */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <Droplets className="w-3.5 h-3.5 text-teal-600" />
                    עומק המים
                  </label>
                  <select 
                    value={selectedWaterDepth}
                    onChange={(e) => setSelectedWaterDepth(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="הכל">כל העומקים</option>
                    <option value="עמוקים">עמוקים (שחייה)</option>
                    <option value="רדודים">רדודים (שכשוך)</option>
                  </select>
                </div>

                {/* Distance From Car */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-teal-600" />
                    מרחק מהרכב
                  </label>
                  <select 
                    value={selectedDistance}
                    onChange={(e) => setSelectedDistance(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="הכל">כל המרחקים</option>
                    <option value="חנייה וטבילה">חנייה וטבילה (עד 5 דק')</option>
                    <option value="הליכה קצרה">הליכה קצרה (15-25 דק')</option>
                    <option value="מסלול הליכה מלא">מסלול הליכה מלא</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Results Count Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  מעיינות ומקורות מים מומלצים
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  נמצאו <span className="font-bold text-teal-700">{filteredSpots.length}</span> אתרים המתאימים לחיפוש שלך
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredSpots.map((spot) => {
                const isFav = favorites.includes(spot.id);
                return (
                  <div 
                    key={spot.id}
                    onClick={() => setActiveSpot(spot)}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                  >
                    {/* Image Preview Container */}
                    <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={spot.image} 
                        alt={spot.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                      {/* Top Badges */}
                      <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                        <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                          {spot.region}
                        </span>
                        {spot.featured && (
                          <span className="bg-teal-500/90 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                            <Sparkles className="w-3 h-3" /> מומלץ
                          </span>
                        )}
                      </div>

                      {/* Action Icon Buttons */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <button
                          onClick={(e) => handleWhatsAppShare(spot, e)}
                          className="w-9 h-9 rounded-full bg-emerald-500/90 hover:bg-emerald-600 backdrop-blur-md flex items-center justify-center text-white shadow-md transition"
                          title="שתף ב-WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4 fill-white" />
                        </button>
                        
                        <button
                          onClick={(e) => toggleFavorite(spot.id, e)}
                          className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-red-500 hover:bg-white transition"
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                      </div>

                      {/* Title & Rating Overlay */}
                      <div className="absolute bottom-4 right-4 left-4 text-white flex items-end justify-between">
                        <div>
                          <h3 className="text-xl font-black drop-shadow-md group-hover:text-teal-300 transition-colors">
                            {spot.name}
                          </h3>
                          <p className="text-xs text-slate-200 flex items-center gap-1 mt-0.5 font-light">
                            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span className="truncate">{spot.subRegion}</span>
                          </p>
                        </div>

                        {/* Rating Display */}
                        <div className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1 border border-white/10 shrink-0">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-xs font-bold">{spot.rating}</span>
                          <span className="text-[10px] text-slate-400">({spot.reviewsCount})</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {spot.description}
                      </p>

                      {/* Attributes */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-teal-600 shrink-0" />
                          <div className="truncate">
                            <span className="block text-[10px] text-slate-400 font-medium">עומק מים</span>
                            <span className="font-bold text-slate-700">{spot.waterFeatures.depth}</span>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center gap-2">
                          <Car className="w-4 h-4 text-cyan-600 shrink-0" />
                          <div className="truncate">
                            <span className="block text-[10px] text-slate-400 font-medium">מהרכב</span>
                            <span className="font-bold text-slate-700">{spot.distanceFromCar}</span>
                          </div>
                        </div>
                      </div>

                      {/* Audience Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {spot.targetAudience.map((tag, idx) => (
                          <span key={idx} className="bg-teal-50 text-teal-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Card Action Footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSpot(spot);
                          }}
                          className="flex-1 py-2 px-3 bg-slate-900 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm"
                        >
                          <span>פרטים מלאים ודירוג</span>
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <a 
                          href={spot.wazeUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="py-2 px-3 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 rounded-xl text-xs font-bold transition flex items-center gap-1 border border-cyan-200 shrink-0"
                        >
                          <Navigation className="w-3.5 h-3.5 text-cyan-600" />
                          <span>Waze</span>
                        </a>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: ARTICLES & GUIDES */}
        {viewMode === 'articles' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-extrabold inline-block">
                מדריכים ומאמרי טיולים
              </span>
              <h2 className="text-3xl font-black text-slate-900">מאמרים, טיפים והמלצות לטיולי מים</h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
                למדו איך למצוא את המעיינות השקטים בגולן, איך לשמור על בטיחות הילדים במים, ואיך להימנע מסכנות בשטח.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ARTICLES_DATABASE.map((article) => (
                <div 
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-teal-600">{article.readTime}</span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition">
                        {article.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center text-xs font-bold text-teal-700">
                      <span>קרא את המאמר המלא</span>
                      <ChevronLeft className="w-4 h-4 mr-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: COMPARISON TABLE */}
        {viewMode === 'table' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">טבלת השוואה מהירה בין המעיינות</h2>
              <p className="text-sm text-slate-500 mt-1">השוואת עומקים, נגישות לרכב ודרגות קושי לקבלת החלטה מהירה לטיול</p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-right text-sm">
                  <thead className="bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-4">שם האתר</th>
                      <th className="p-4">אזור</th>
                      <th className="p-4">דירוג</th>
                      <th className="p-4">עומק המים</th>
                      <th className="p-4">מרחק מהרכב</th>
                      <th className="p-4">נגישות לעגלות</th>
                      <th className="p-4 text-center">פעולות</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    {spots.map((spot) => (
                      <tr 
                        key={spot.id} 
                        onClick={() => setActiveSpot(spot)}
                        className="hover:bg-teal-50/50 transition cursor-pointer"
                      >
                        <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-teal-600 shrink-0" />
                          <span>{spot.name}</span>
                        </td>
                        <td className="p-4 text-xs">{spot.subRegion}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1 font-bold text-xs text-slate-800">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                            <span>{spot.rating}</span>
                          </div>
                        </td>
                        <td className="p-4 text-xs font-semibold text-slate-800">{spot.waterFeatures.depth}</td>
                        <td className="p-4 text-xs">{spot.distanceFromCar}</td>
                        <td className="p-4">
                          {spot.strollerAccessible ? (
                            <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs">
                              <CheckCircle2 className="w-4 h-4" /> כן
                            </span>
                          ) : (
                            <span className="text-slate-400 text-xs">לא</span>
                          )}
                        </td>
                        <td className="p-4 text-center" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-center gap-2">
                            <button 
                              onClick={(e) => handleWhatsAppShare(spot, e)}
                              className="px-2.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition shadow-sm"
                              title="שתף ב-WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-white" />
                            </button>
                            <a 
                              href={spot.wazeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
                            >
                              Waze
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* SPOT DETAILS MODAL WITH INTERACTIVE RATING & WHATSAPP SHARE */}
      {activeSpot && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 my-auto">
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-900">
              <img 
                src={activeSpot.image} 
                alt={activeSpot.name} 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>

              {/* Top Action Buttons */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <button 
                  onClick={() => setActiveSpot(null)}
                  className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition border border-white/20 shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute bottom-6 right-6 left-6 text-white space-y-1">
                <div className="flex items-center gap-2 text-teal-300 text-xs font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>{activeSpot.region} • {activeSpot.subRegion}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black">{activeSpot.name}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Action Bar: WhatsApp & Navigation */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 font-bold block">נקודות ציון לחיפוש (נ"צ):</span>
                  <span className="font-mono text-sm text-slate-800 font-bold">{activeSpot.coordinates}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button 
                    onClick={(e) => handleWhatsAppShare(activeSpot, e)}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>שתף ב-WhatsApp</span>
                  </button>

                  <a 
                    href={activeSpot.wazeUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md shadow-cyan-600/20"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Waze</span>
                  </a>
                </div>
              </div>

              {/* Interactive Rating Section */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>דירוג מטיילים: {activeSpot.rating} מתוך 5 ({activeSpot.reviewsCount} מדרגים)</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">הייתם כאן? דרגו את המעיין כדי לעזור למטיילים אחרים</p>
                </div>

                {/* Rating Input Stars */}
                <div className="flex items-center gap-1 bg-white px-3 py-2 rounded-xl border border-amber-200 shadow-sm">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRateSpot(activeSpot.id, star)}
                      className="p-1 hover:scale-125 transition text-amber-400"
                    >
                      <Star 
                        className={`w-5 h-5 ${
                          (userRatings[activeSpot.id] || 0) >= star || activeSpot.rating >= star
                            ? 'fill-amber-400 text-amber-400' 
                            : 'text-slate-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">תיאור המקום והחוויה</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {activeSpot.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-teal-50/60 border border-teal-100 p-3.5 rounded-2xl">
                  <span className="text-slate-400 font-medium block mb-1">עומק המים</span>
                  <span className="font-bold text-teal-900 text-sm">{activeSpot.waterFeatures.depth}</span>
                </div>

                <div className="bg-cyan-50/60 border border-cyan-100 p-3.5 rounded-2xl">
                  <span className="text-slate-400 font-medium block mb-1">קרירות המים</span>
                  <span className="font-bold text-cyan-900 text-sm">{activeSpot.waterFeatures.temp}</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl">
                  <span className="text-slate-400 font-medium block mb-1">מרחק מהרכב</span>
                  <span className="font-bold text-slate-800 text-sm">{activeSpot.distanceFromCar}</span>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl">
                  <span className="text-slate-400 font-medium block mb-1">אורך מסלול</span>
                  <span className="font-bold text-slate-800 text-sm">{activeSpot.routeLengthKm} ק"מ ({activeSpot.walkDuration})</span>
                </div>
              </div>

              {/* Driving Instructions */}
              <div className="space-y-2 bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Car className="w-4 h-4 text-teal-600" />
                  <span>צורת הגעה וחנייה</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeSpot.howToGetThere}
                </p>
              </div>

              {/* Safety */}
              <div className="space-y-2 bg-rose-50/60 rounded-2xl p-4 border border-rose-100">
                <h4 className="text-sm font-bold text-rose-900 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  <span>דגשי בטיחות וציוד</span>
                </h4>
                <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-medium">
                  {activeSpot.safetyAndEquipment}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ARTICLE FULL VIEW MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 my-auto">
            <div className="relative h-56 w-full">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-teal-600">{activeArticle.category} • {activeArticle.readTime}</span>
              <h2 className="text-2xl font-black text-slate-900">{activeArticle.title}</h2>
              <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line pt-2 border-t border-slate-100">
                {activeArticle.content}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs text-center space-y-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Droplets className="w-5 h-5 text-teal-400" />
            <span>מישראל - מדריך מעיינות הגולן והארץ</span>
          </div>
          <p>נבנה באהבה עבור מטיילים ומשפחות לשמירה על הטבע והסביבה.</p>
        </div>
      </footer>

    </div>
  );
}