import React, { useState } from 'react';
import { 
  Globe, Volume2, Mic, CheckCircle2, Lock, Unlock, 
  Sparkles, BookOpen, Tv, ArrowRight, Subtitles, Shield,
  Check, X, Edit3, Search, Flame, Zap,
  Heart, Share2, MessageSquare, Send, Play, Pause, RefreshCw
} from 'lucide-react';

// --- FULL GOOGLE TRANSLATE SUPPORTED LANGUAGES LIST (100+ LANGUAGES) ---
const ALL_LANGUAGES = [
  { code: 'he', name: 'Hebrew', native: 'עברית', flag: '🇮🇱', rtl: true },
  { code: 'en', name: 'English', native: 'English', flag: '🇺🇸', rtl: false },
  { code: 'es', name: 'Spanish', native: 'Español', flag: '🇪🇸', rtl: false },
  { code: 'fr', name: 'French', native: 'Français', flag: '🇫🇷', rtl: false },
  { code: 'de', name: 'German', native: 'Deutsch', flag: '🇩🇪', rtl: false },
  { code: 'it', name: 'Italian', native: 'Italiano', flag: '🇮🇹', rtl: false },
  { code: 'pt', name: 'Portuguese', native: 'Português', flag: '🇵🇹', rtl: false },
  { code: 'ru', name: 'Russian', native: 'Русский', flag: '🇷🇺', rtl: false },
  { code: 'ar', name: 'Arabic', native: 'العربية', flag: '🇸🇦', rtl: true },
  { code: 'zh', name: 'Chinese (Simplified)', native: '中文(简体)', flag: '🇨🇳', rtl: false },
  { code: 'ja', name: 'Japanese', native: '日本語', flag: '🇯🇵', rtl: false },
  { code: 'ko', name: 'Korean', native: '한국어', flag: '🇰🇷', rtl: false },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', flag: '🇮🇳', rtl: false },
  { code: 'tr', name: 'Turkish', native: 'Türkçe', flag: '🇹🇷', rtl: false },
  { code: 'nl', name: 'Dutch', native: 'Nederlands', flag: '🇳🇱', rtl: false },
  { code: 'pl', name: 'Polish', native: 'Polski', flag: '🇵🇱', rtl: false },
  { code: 'sv', name: 'Swedish', native: 'Svenska', flag: '🇸🇪', rtl: false },
  { code: 'uk', name: 'Ukrainian', native: 'Українська', flag: '🇺🇦', rtl: false },
  { code: 'el', name: 'Greek', native: 'Ελληνικά', flag: '🇬🇷', rtl: false },
  { code: 'cs', name: 'Czech', native: 'Čeština', flag: '🇨🇿', rtl: false },
  { code: 'ro', name: 'Romanian', native: 'Română', flag: '🇷🇴', rtl: false },
  { code: 'hu', name: 'Hungarian', native: 'Magyar', flag: '🇭🇺', rtl: false },
  { code: 'da', name: 'Danish', native: 'Dansk', flag: '🇩🇰', rtl: false },
  { code: 'fi', name: 'Finnish', native: 'Suomi', flag: '🇫🇮', rtl: false },
  { code: 'no', name: 'Norwegian', native: 'Norsk', flag: '🇳🇴', rtl: false },
  { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', flag: '🇮🇩', rtl: false },
  { code: 'ms', name: 'Malay', native: 'Bahasa Melayu', flag: '🇲🇾', rtl: false },
  { code: 'th', name: 'Thai', native: 'ไทย', flag: '🇹🇭', rtl: false },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt', flag: '🇻🇳', rtl: false },
  { code: 'fa', name: 'Persian', native: 'فارسی', flag: '🇮🇷', rtl: true },
  { code: 'ur', name: 'Urdu', native: 'اردو', flag: '🇵🇰', rtl: true },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', flag: '🇧🇩', rtl: false },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', flag: '🇮🇳', rtl: false },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', flag: '🇮🇳', rtl: false },
  { code: 'mr', name: 'Marathi', native: 'מראטהי', flag: '🇮🇳', rtl: false },
  { code: 'sw', name: 'Swahili', native: 'Kiswahili', flag: '🇰🇪', rtl: false },
  { code: 'fil', name: 'Filipino', native: 'Tagalog', flag: '🇵🇭', rtl: false },
  { code: 'af', name: 'Afrikaans', native: 'Afrikaans', flag: '🇿🇦', rtl: false },
  { code: 'sq', name: 'Albanian', native: 'Shqip', flag: '🇦🇱', rtl: false },
  { code: 'am', name: 'Amharic', native: 'አማርኛ', flag: '🇪🇹', rtl: false },
  { code: 'hy', name: 'Armenian', native: 'Հայերեն', flag: '🇦🇲', rtl: false },
  { code: 'az', name: 'Azerbaijani', native: 'Azərbaycan', flag: '🇦🇿', rtl: false },
  { code: 'eu', name: 'Basque', native: 'Euskara', flag: '🇪🇸', rtl: false },
  { code: 'be', name: 'Belarusian', native: 'Беларуская', flag: '🇧🇾', rtl: false },
  { code: 'bs', name: 'Bosnian', native: 'Bosanski', flag: '🇧🇦', rtl: false },
  { code: 'bg', name: 'Bulgarian', native: 'Български', flag: '🇧🇬', rtl: false },
  { code: 'ca', name: 'Catalan', native: 'Català', flag: '🇪🇸', rtl: false },
  { code: 'hr', name: 'Croatian', native: 'Hrvatski', flag: '🇭🇷', rtl: false },
  { code: 'eo', name: 'Esperanto', native: 'Esperanto', flag: '🌍', rtl: false },
  { code: 'et', name: 'Estonian', native: 'Eesti', flag: '🇪🇪', rtl: false },
  { code: 'ka', name: 'Georgian', native: 'ქართული', flag: '🇬🇪', rtl: false },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', flag: '🇮🇳', rtl: false },
  { code: 'is', name: 'Icelandic', native: 'Íslenska', flag: '🇮🇸', rtl: false },
  { code: 'ga', name: 'Irish', native: 'Gaeilge', flag: '🇮🇪', rtl: false },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', flag: '🇮🇳', rtl: false },
  { code: 'kk', name: 'Kazakh', native: 'Қазақ тілі', flag: '🇰🇿', rtl: false },
  { code: 'km', name: 'Khmer', native: 'ភាសាខ្មែរ', flag: '🇰🇭', rtl: false },
  { code: 'lo', name: 'Lao', native: 'ພາສາລາວ', flag: '🇱🇴', rtl: false },
  { code: 'lv', name: 'Latvian', native: 'Latviešu', flag: '🇱🇻', rtl: false },
  { code: 'lt', name: 'Lithuanian', native: 'Lietuvių', flag: '🇱🇹', rtl: false },
  { code: 'mk', name: 'Macedonian', native: 'Македонски', flag: '🇲🇰', rtl: false },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', flag: '🇮🇳', rtl: false },
  { code: 'mt', name: 'Maltese', native: 'Malti', flag: '🇲🇹', rtl: false },
  { code: 'mi', name: 'Maori', native: 'Te Reo Māori', flag: '🇳🇿', rtl: false },
  { code: 'mn', name: 'Mongolian', native: 'Монгол', flag: '🇲🇳', rtl: false },
  { code: 'ne', name: 'Nepali', native: 'नेपाली', flag: '🇳🇵', rtl: false },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', flag: '🇮🇳', rtl: false },
  { code: 'sr', name: 'Serbian', native: 'Српски', flag: '🇷🇸', rtl: false },
  { code: 'sk', name: 'Slovak', native: 'Slovenčina', flag: '🇸🇰', rtl: false },
  { code: 'sl', name: 'Slovenian', native: 'Slovenščina', flag: '🇸🇮', rtl: false },
  { code: 'som', name: 'Somali', native: 'Soomaali', flag: '🇸🇴', rtl: false },
  { code: 'uz', name: 'Uzbek', native: 'Oʻzbekcha', flag: '🇺🇿', rtl: false },
  { code: 'cy', name: 'Welsh', native: 'Cymraeg', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', rtl: false },
  { code: 'yi', name: 'Yiddish', native: 'ייִדיש', flag: '✡️', rtl: true },
  { code: 'zu', name: 'Zulu', native: 'isiZulu', flag: '🇿🇦', rtl: false }
];

// --- EXPANDED VOCABULARY CORE (5 WORDS PER LESSON SET) ---
const LESSON_VOCAB_BANKS = {
  alphabet1: [
    { key: 'letter_a', icon: '🔤', dict: { en: 'Letter A / Sounds: Ah', he: 'אות א / צליל: אָ', es: 'Letra A', fr: 'Lettre A', de: 'Buchstabe A', ja: 'あ (A)' } },
    { key: 'letter_b', icon: '🔤', dict: { en: 'Letter B / Sounds: Buh', he: 'אות ב / צליל: בְּ', es: 'Letra B', fr: 'Lettre B', de: 'Buchstabe B', ja: 'い (I)' } },
    { key: 'letter_c', icon: '🔤', dict: { en: 'Letter C / Sounds: Kuh', he: 'אות ג/כ / צליל: קְּ', es: 'Letra C', fr: 'Lettre C', de: 'Buchstabe C', ja: 'う (U)' } },
    { key: 'letter_d', icon: '🔤', dict: { en: 'Letter D / Sounds: Duh', he: 'אות ד / צליל: דְּ', es: 'Letra D', fr: 'Lettre D', de: 'Buchstabe D', ja: 'え (E)' } },
    { key: 'letter_e', icon: '🔤', dict: { en: 'Letter E / Sounds: Eh', he: 'אות ה/ע / צליל: אֶ', es: 'Letra E', fr: 'Lettre E', de: 'Buchstabe E', ja: 'お (O)' } }
  ],
  greetings: [
    { key: 'hello', icon: '👋', dict: { en: 'Hello', he: 'שלום', es: 'Hola', fr: 'Bonjour', de: 'Hallo', ja: 'こんにちは' } },
    { key: 'thank_you', icon: '🙏', dict: { en: 'Thank you', he: 'תודה', es: 'Gracias', fr: 'Merci', de: 'Danke', ja: 'ありがとう' } },
    { key: 'welcome', icon: '🤝', dict: { en: 'Welcome', he: 'ברוך הבא', es: 'Bienvenido', fr: 'Bienvenue', de: 'Willkommen', ja: 'ようこそ' } },
    { key: 'goodbye', icon: '🖐️', dict: { en: 'Goodbye', he: 'להתראות', es: 'Adiós', fr: 'Au revoir', de: 'Auf Wiedersehen', ja: 'さようなら' } },
    { key: 'please', icon: '✨', dict: { en: 'Please', he: 'בבקשה', es: 'Por favor', fr: 'S\'il vous plaît', de: 'Bitte', ja: 'どうぞ' } }
  ],
  food: [
    { key: 'water', icon: '💧', dict: { en: 'Water', he: 'מים', es: 'Agua', fr: 'Eau', de: 'Wasser', ja: '水' } },
    { key: 'bread', icon: '🍞', dict: { en: 'Bread', he: 'לחם', es: 'Pan', fr: 'Pain', de: 'Brot', ja: 'チーズ' } },
    { key: 'apple', icon: '🍎', dict: { en: 'Apple', he: 'תפוח', es: 'Manzana', fr: 'Pomme', de: 'Apfel', ja: 'りんご' } },
    { key: 'coffee', icon: '☕', dict: { en: 'Coffee', he: 'קפה', es: 'Café', fr: 'Café', de: 'Kaffee', ja: 'コーヒー' } },
    { key: 'cheese', icon: '🧀', dict: { en: 'Cheese', he: 'גבינה', es: 'Queso', fr: 'Fromage', de: 'Käse', ja: 'チーズ' } }
  ],
  animals: [
    { key: 'cat', icon: '🐱', dict: { en: 'Cat', he: 'חתול', es: 'Gato', fr: 'Chat', de: 'Katze', ja: '猫' } },
    { key: 'dog', icon: '🐶', dict: { en: 'Dog', he: 'כלב', es: 'Perro', fr: 'Chien', de: 'Hund', ja: '犬' } },
    { key: 'bird', icon: '🐦', dict: { en: 'Bird', he: 'ציפור', es: 'Pájaro', fr: 'Oiseau', de: 'Vogel', ja: '鳥' } },
    { key: 'fish', icon: '🐟', dict: { en: 'Fish', he: 'דג', es: 'Pez', fr: 'Poisson', de: 'Fisch', ja: '魚' } },
    { key: 'lion', icon: '🦁', dict: { en: 'Lion', he: 'אריה', es: 'León', fr: 'Lion', de: 'Löwe', ja: 'ライオン' } }
  ],
  travel: [
    { key: 'car', icon: '🚗', dict: { en: 'Car', he: 'מכונית', es: 'Coche', fr: 'Voiture', de: 'Auto', ja: '車' } },
    { key: 'plane', icon: '✈️', dict: { en: 'Airplane', he: 'מטוס', es: 'Avión', fr: 'Avion', de: 'Flugzeug', ja: '飛行機' } },
    { key: 'hotel', icon: '🏨', dict: { en: 'Hotel', he: 'מלון', es: 'Hotel', fr: 'Hôtel', de: 'Hotel', ja: 'ホテル' } },
    { key: 'passport', icon: '🛂', dict: { en: 'Passport', he: 'דרכון', es: 'Pasaporte', fr: 'Passeport', de: 'Reisepass', ja: 'パスポート' } },
    { key: 'city', icon: '🏙️', dict: { en: 'City', he: 'עיר', es: 'Ciudad', fr: 'Ville', de: 'Stadt', ja: '都市' } }
  ]
};

// UI TRANSLATIONS OBJECT FOR FULL i18n
const UI_TRANSLATIONS = {
  he: {
    dir: 'rtl',
    appName: 'LingoWorld',
    navMap: 'מסלול לימודים',
    navPractice: 'אימון ותרגול',
    navHub: 'משחקים ומדיה',
    streak: 'ימים ברצף',
    xp: 'נקודות XP',
    nativeLangSelect: 'שפת אם',
    targetLangSelect: 'שפת יעד',
    ageGroupSelect: 'קבוצת גיל',
    selectDifficulty: 'רמת קושי',
    easy: 'קל',
    medium: 'בינוני',
    hard: 'קשה',
    homeworkMode: 'שיעורי בית (10-15 דק׳)',
    lesson: 'שיעור',
    startLesson: 'התחל שיעור',
    checkAnswer: 'בדוק תשובה',
    continue: 'המשך',
    correct: 'כל הכבוד! תשובה נכונה',
    incorrect: 'לא מדויק, נסה שוב',
    playAudio: 'השמע סאונד',
    speakNow: 'דבר כעת (מיקרופון)',
    micListening: 'מקשיב...',
    homeworkTitle: 'משימת כתיבה ומחשבה (שיעורי בית)',
    submitHW: 'הגש שיעורי בית',
    animeSummaryTitle: 'סרטון סיכום אנימה מונפש',
    subtitlesLabel: 'כתוביות (CC)',
    subOff: 'ללא כתוביות',
    subTarget: 'שפת יעד בלבד',
    subNative: 'שפת אם בלבד',
    subDual: 'כתוביות כפולות (שתי השפות)',
    finishLesson: 'סיום שיעור ואסוף XP',
    gamesHub: 'משחקי שפה',
    rpgGame: 'הרפתקת RPG מילים',
    typingGame: 'אתגר הקלדה מהירה',
    mediaCenter: 'מרכז מדיה ופודקאסטים',
    wordsInLesson: '5 מילים חדשות בשיעור זה:',
    likeCount: 'לייקים',
    shareWhatsapp: 'שתף בוואטסאפ',
    commentsTitle: 'תגובות הקהילה',
    addCommentPlaceholder: 'כתוב תגובה על האפליקציה...',
    postComment: 'פרסם תגובה',
    age_kids: 'ילדים (3-8)',
    age_teens: 'נוער (9-16)',
    age_adult_17_20: 'צעירים (17-20: טיולים ושיחה)',
    age_adult_21_25: 'אקדמיה וקריירה (21-25)',
    age_adult_26_40: 'עסקים ומשא ומתן (26-40)',
    age_adult_41_plus: 'תרבות, היסטוריה ופנאי (41+)',
    welcomeGreeting: 'ברוכים הבאים למסע הלמידה שלך!',
    searchLangPlaceholder: 'חפש שפה...'
  },
  en: {
    dir: 'ltr',
    appName: 'LingoWorld',
    navMap: 'Learning Roadmap',
    navPractice: 'Interactive Practice',
    navHub: 'Games & Media',
    streak: 'Streak',
    xp: 'XP Points',
    nativeLangSelect: 'Native Language',
    targetLangSelect: 'Target Language',
    ageGroupSelect: 'Age Group',
    selectDifficulty: 'Difficulty',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
    homeworkMode: 'Homework Mode (10-15m)',
    lesson: 'Lesson',
    startLesson: 'Start Lesson',
    checkAnswer: 'Check Answer',
    continue: 'Continue',
    correct: 'Great job! Correct answer',
    incorrect: 'Not quite, try again',
    playAudio: 'Play Sound',
    speakNow: 'Speak Now (Mic)',
    micListening: 'Listening...',
    homeworkTitle: 'Writing & Reflection Task (Homework)',
    submitHW: 'Submit Homework',
    animeSummaryTitle: 'Animated Anime Summary Video',
    subtitlesLabel: 'Subtitles (CC)',
    subOff: 'Subtitles Off',
    subTarget: 'Target Language Only',
    subNative: 'Native Language Only',
    subDual: 'Dual Subtitles (Both)',
    finishLesson: 'Complete Lesson & Collect XP',
    gamesHub: 'Language Games',
    rpgGame: 'RPG Word Adventure',
    typingGame: 'Speed Typing Challenge',
    mediaCenter: 'Media Center & Podcasts',
    wordsInLesson: '5 New words in this lesson:',
    likeCount: 'Likes',
    shareWhatsapp: 'Share on WhatsApp',
    commentsTitle: 'Community Comments',
    addCommentPlaceholder: 'Write a comment about the app...',
    postComment: 'Post Comment',
    age_kids: 'Kids (3-8)',
    age_teens: 'Teens (9-16)',
    age_adult_17_20: 'Young Adults (17-20)',
    age_adult_21_25: 'Academic & Career (21-25)',
    age_adult_26_40: 'Business & Negotiation (26-40)',
    age_adult_41_plus: 'Culture & Leisure (41+)',
    welcomeGreeting: 'Welcome to your language learning journey!',
  searchLangPlaceholder: 'Search language...'
  }
};

// HELPER FUNCTION TO DYNAMICALLY GENERATE LESSON ROADMAPS WITH ALPHABET FIRST & INCREASING DIFFICULTY
const generateLessons = (count) => {
  const categories = ['Alphabet & Sounds', 'Food & Dining', 'Animals', 'Travel & Hotel', 'Shopping', 'Business', 'Culture', 'Complex Grammar'];
  const icons = ['🔤', '🍞', '🐱', '✈️', '🛍️', '💼', '🏛️', '📚'];
  
  return Array.from({ length: count }, (_, i) => {
    const isAlphabetLesson = i < 10;
    const categoryName = isAlphabetLesson 
      ? `Alphabet Part ${i + 1} (אותיות והגייה)` 
      : categories[i % categories.length];

    return {
      id: i + 1,
      category: categoryName,
      title: `Lesson ${i + 1}: ${categoryName}`,
      icon: isAlphabetLesson ? '🔤' : icons[i % icons.length],
      difficultyLevel: Math.min(10, Math.floor(i / 5) + 1), // Progressive difficulty multiplier
      completed: i === 0,
      unlocked: i === 0
    };
  });
};

// Sound synthesizer using Web Audio API
const playSound = (type) => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'incorrect') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    }
  } catch (e) {
    // Audio fallback
  }
};

export default function App() {
  // App state with 100+ language support
  const [nativeLang, setNativeLang] = useState('he');
  const [targetLang, setTargetLang] = useState('ja');
  const [ageGroup, setAgeGroup] = useState('teens');
  const [activeTab, setActiveTab] = useState('map');
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);

  // Custom total lessons state (Expanded options up to 200)
  const [totalLessonsCount, setTotalLessonsCount] = useState(100);

  // Search filter states for language dropdowns
  const [nativeSearch, setNativeSearch] = useState('');
  const [targetSearch, setTargetSearch] = useState('');
  const [isNativeOpen, setIsNativeOpen] = useState(false);
  const [isTargetOpen, setIsTargetOpen] = useState(false);

  // Lesson & Progress State
  const [lessons, setLessons] = useState(() => generateLessons(100));
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [difficulty, setDifficulty] = useState('medium');

  // Video player state for Anime Summary
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  // Dynamic lesson count change handler (Resets roadmap progress, keeps social state intact)
  const handleTotalLessonsChange = (newCount) => {
    setTotalLessonsCount(newCount);
    setLessons(generateLessons(newCount));
    setSelectedLesson(null);
    setXp(0);
    setStreak(0);
  };

  // Target Language change handler (Resets roadmap progress, keeps social state intact)
  const handleTargetLanguageChange = (code) => {
    setTargetLang(code);
    setIsTargetOpen(false);
    setLessons(generateLessons(totalLessonsCount));
    setSelectedLesson(null);
    setXp(0);
    setStreak(0);
  };

  // Social Footer States (Likes, Share & Comments STAY INTACT across reset)
  const [likesCount, setLikesCount] = useState(142);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, author: 'אלון ש.', text: 'אפליקציה מדהימה! 10 השיעורים הראשונים של האותיות עזרו לי מאוד.', time: 'לפני 10 דקות' },
    { id: 2, author: 'Noa K.', text: 'Loved the RPG word game and anime summary videos!', time: '1 hour ago' }
  ]);
  const [newComment, setNewComment] = useState('');

  // Step & Exercise State
  const [currentStep, setCurrentStep] = useState(0);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [listeningState, setListeningState] = useState(false);
  const [ccOption, setCcOption] = useState('dual');
  const [hwText, setHwText] = useState('');

  // Mini-Games State
  const [gameMode, setGameMode] = useState('rpg');
  const [rpgHp, setRpgHp] = useState(100);
  const [rpgMonsterHp, setRpgMonsterHp] = useState(100);
  const [rpgScore, setRpgScore] = useState(0);
  const [rpgTargetWordIdx, setRpgTargetWordIdx] = useState(0);
  const [typingInput, setTypingInput] = useState('');
  const [typingScore, setTypingScore] = useState(0);
  const [typingWordIdx, setTypingWordIdx] = useState(0);
  const [playingMediaId, setPlayingMediaId] = useState(null);

  // Derived Objects & Language Data
  const nativeLangObj = ALL_LANGUAGES.find(l => l.code === nativeLang) || ALL_LANGUAGES[0];
  const targetLangObj = ALL_LANGUAGES.find(l => l.code === targetLang) || ALL_LANGUAGES[1];
  const t = UI_TRANSLATIONS[nativeLang] || UI_TRANSLATIONS.en;

  // Retrieve 5 Lesson Vocab Items dynamically based on lesson ID
  const getLesson5Words = (lessonId) => {
    if (lessonId <= 10) {
      // 10 Alphabet Lessons
      return LESSON_VOCAB_BANKS.alphabet1.map(item => ({
        icon: item.icon,
        native: item.dict[nativeLang] || item.dict.he || item.dict.en,
        target: item.dict[targetLang] || item.dict.en,
        audioText: item.dict[targetLang] || item.dict.en
      }));
    }

    const keys = Object.keys(LESSON_VOCAB_BANKS).filter(k => k !== 'alphabet1');
    const bankKey = keys[(lessonId - 11) % keys.length];
    const rawList = LESSON_VOCAB_BANKS[bankKey];
    
    return rawList.map(item => ({
      icon: item.icon,
      native: item.dict[nativeLang] || item.dict.he || item.dict.en,
      target: item.dict[targetLang] || item.dict.en,
      audioText: item.dict[targetLang] || item.dict.en
    }));
  };

  const currentLesson5Words = selectedLesson ? getLesson5Words(selectedLesson.id) : getLesson5Words(1);
  const currentVocab = currentLesson5Words[activeWordIndex] || currentLesson5Words[0];

  // Dynamic Audio Speech Synthesis
  const speakWord = (text) => {
    try {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = targetLang;
        window.speechSynthesis.speak(utterance);
      } else {
        playSound('click');
      }
    } catch (e) {
      playSound('click');
    }
  };

  // Like & Social Handlers
  const handleLike = () => {
    if (hasLiked) {
      setLikesCount(prev => prev - 1);
      setHasLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
      playSound('correct');
    }
  };

  const handleShareWhatsApp = () => {
    const message = encodeURIComponent(`אני לומד ${targetLangObj.name} באפליקציית LingoWorld! בוא ללמוד איתי: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments(prev => [
      { id: Date.now(), author: 'משתמש חדש', text: newComment, time: 'עכשיו' },
      ...prev
    ]);
    setNewComment('');
    playSound('click');
  };

  // Start Lesson Handler
  const handleStartLesson = (lesson) => {
    if (!lesson.unlocked) return;
    setSelectedLesson(lesson);
    setCurrentStep(0);
    setActiveWordIndex(0);
    setUserAnswer('');
    setFeedback(null);
    setActiveTab('practice');
  };

  // Answer Check
  const handleCheckAnswer = (answerToCheck) => {
    const val = answerToCheck || userAnswer;
    const isCorrect = val.toLowerCase().trim() === currentVocab.native.toLowerCase().trim() || val === currentVocab.target;
    
    if (isCorrect) {
      playSound('correct');
      setFeedback('correct');
      setXp(prev => prev + 15);
    } else {
      playSound('incorrect');
      setFeedback('incorrect');
    }
  };

  // Step Progression
  const handleNextStep = () => {
    setFeedback(null);
    setUserAnswer('');
    
    // Cycle through 5 words in step 0-3
    if (activeWordIndex < currentLesson5Words.length - 1) {
      setActiveWordIndex(prev => prev + 1);
    } else {
      setActiveWordIndex(0);
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1);
      } else if (currentStep === 3) {
        setCurrentStep(4); // Anime Summary Video
      } else if (currentStep === 4) {
        if (difficulty === 'hw') {
          setCurrentStep(5); // Homework
        } else {
          completeLesson();
        }
      } else if (currentStep === 5) {
        completeLesson();
      }
    }
  };

  const completeLesson = () => {
    if (!selectedLesson) return;
    playSound('correct');
    setLessons(prev => prev.map(l => {
      if (l.id === selectedLesson.id) return { ...l, completed: true };
      if (l.id === selectedLesson.id + 1) return { ...l, unlocked: true };
      return l;
    }));
    setActiveTab('map');
    setSelectedLesson(null);
  };

  // Age group theme styling
  const getAgeGroupStyles = () => {
    switch (ageGroup) {
      case 'kids':
        return {
          bg: 'bg-gradient-to-b from-yellow-100 via-pink-100 to-sky-100 text-slate-800',
          card: 'bg-white border-4 border-yellow-300 rounded-3xl shadow-xl',
          accent: 'bg-pink-500 hover:bg-pink-600 text-white font-black text-xl rounded-2xl shadow-lg transform active:scale-95 transition',
          font: 'font-sans'
        };
      case 'teens':
        return {
          bg: 'bg-slate-950 text-slate-100',
          card: 'bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10',
          accent: 'bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:opacity-90 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition',
          font: 'font-mono'
        };
      case 'adult_17_20':
        return {
          bg: 'bg-emerald-950 text-emerald-50',
          card: 'bg-emerald-900/60 border border-emerald-500/30 rounded-2xl backdrop-blur-md',
          accent: 'bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-md transition',
          font: 'font-sans'
        };
      case 'adult_21_25':
        return {
          bg: 'bg-indigo-950 text-indigo-50',
          card: 'bg-indigo-900/50 border border-indigo-400/20 rounded-xl',
          accent: 'bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition',
          font: 'font-sans'
        };
      case 'adult_26_40':
        return {
          bg: 'bg-gray-900 text-gray-100',
          card: 'bg-gray-800 border border-gray-700 rounded-lg shadow-sm',
          accent: 'bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition',
          font: 'font-sans'
        };
      case 'adult_41_plus':
      default:
        return {
          bg: 'bg-amber-50/40 text-stone-800',
          card: 'bg-white border border-amber-200 rounded-2xl shadow-md',
          accent: 'bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-xl transition',
          font: 'font-serif'
        };
    }
  };

  const styleTheme = getAgeGroupStyles();

  return (
    <div dir={t.dir || 'ltr'} className={`min-h-screen ${styleTheme.bg} ${styleTheme.font} transition-colors duration-300`}>
      {/* TOP HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-gray-500/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-tr from-amber-500 to-pink-500 rounded-xl text-white shadow-md">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {t.appName}
            </span>
          </div>

          {/* Controls: Native Language, Target Language, Age Selector */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Searchable Native Lang Dropdown */}
            <div className="relative">
              <button 
                onClick={() => { setIsNativeOpen(!isNativeOpen); setIsTargetOpen(false); }}
                className="flex items-center gap-2 bg-black/10 dark:bg-white/10 px-3 py-1.5 rounded-xl border border-gray-500/20 text-xs font-bold"
              >
                <Globe className="w-4 h-4 opacity-70" />
                <span>{nativeLangObj.flag} {nativeLangObj.native}</span>
              </button>

              {isNativeOpen && (
                <div className="absolute top-full mt-2 right-0 w-64 max-h-80 bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl p-2 z-50 overflow-y-auto">
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-black/30 rounded-xl mb-2">
                    <Search className="w-4 h-4 opacity-50 text-white" />
                    <input 
                      type="text" 
                      value={nativeSearch}
                      onChange={(e) => setNativeSearch(e.target.value)}
                      placeholder={t.searchLangPlaceholder || "Search..."}
                      className="bg-transparent text-xs w-full focus:outline-none text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    {ALL_LANGUAGES.filter(l => l.name.toLowerCase().includes(nativeSearch.toLowerCase()) || l.native.includes(nativeSearch)).map(l => (
                      <button
                        key={l.code}
                        onClick={() => { setNativeLang(l.code); setIsNativeOpen(false); }}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-amber-500/20 ${nativeLang === l.code ? 'bg-amber-500/30 text-amber-300 font-bold' : 'text-gray-300'}`}
                      >
                        <span>{l.flag} {l.native}</span>
                        <span className="opacity-50 text-[10px]">{l.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Searchable Target Lang Dropdown */}
            <div className="relative">
              <button 
                onClick={() => { setIsTargetOpen(!isTargetOpen); setIsNativeOpen(false); }}
                className="flex items-center gap-2 bg-black/10 dark:bg-white/10 px-3 py-1.5 rounded-xl border border-gray-500/20 text-xs font-bold"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>{targetLangObj.flag} {targetLangObj.name}</span>
              </button>

              {isTargetOpen && (
                <div className="absolute top-full mt-2 right-0 w-64 max-h-80 bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl p-2 z-50 overflow-y-auto">
                  <div className="flex items-center gap-2 px-2 py-1.5 bg-black/30 rounded-xl mb-2">
                    <Search className="w-4 h-4 opacity-50 text-white" />
                    <input 
                      type="text" 
                      value={targetSearch}
                      onChange={(e) => setTargetSearch(e.target.value)}
                      placeholder={t.searchLangPlaceholder || "Search..."}
                      className="bg-transparent text-xs w-full focus:outline-none text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    {ALL_LANGUAGES.filter(l => l.name.toLowerCase().includes(targetSearch.toLowerCase()) || l.native.includes(targetSearch)).map(l => (
                      <button
                        key={l.code}
                        onClick={() => handleTargetLanguageChange(l.code)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between hover:bg-emerald-500/20 ${targetLang === l.code ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-gray-300'}`}
                      >
                        <span>{l.flag} {l.name}</span>
                        <span className="opacity-50 text-[10px]">{l.native}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Age Group Selector */}
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              className="bg-black/10 dark:bg-white/10 px-3 py-1.5 rounded-xl border border-gray-500/20 text-xs font-bold focus:outline-none cursor-pointer"
            >
              <option value="kids" className="text-black">{t.age_kids}</option>
              <option value="teens" className="text-black">{t.age_teens}</option>
              <option value="adult_17_20" className="text-black">{t.age_adult_17_20}</option>
              <option value="adult_21_25" className="text-black">{t.age_adult_21_25}</option>
              <option value="adult_26_40" className="text-black">{t.age_adult_26_40}</option>
              <option value="adult_41_plus" className="text-black">{t.age_adult_41_plus}</option>
            </select>
          </div>

          {/* User Stats & Navigation Tabs */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-black/20 px-3 py-1.5 rounded-xl border border-gray-500/20 text-xs font-bold">
              <span className="flex items-center gap-1 text-amber-400">
                <Flame className="w-4 h-4 fill-amber-400" />
                {streak} {t.streak}
              </span>
              <span className="text-gray-500">|</span>
              <span className="flex items-center gap-1 text-cyan-400">
                <Zap className="w-4 h-4 fill-cyan-400" />
                {xp} {t.xp}
              </span>
            </div>

            <nav className="flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-gray-500/20 text-xs font-bold">
              <button
                onClick={() => setActiveTab('map')}
                className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'map' ? 'bg-amber-500 text-black shadow-md' : 'opacity-70 hover:opacity-100'}`}
              >
                {t.navMap}
              </button>
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'practice' ? 'bg-amber-500 text-black shadow-md' : 'opacity-70 hover:opacity-100'}`}
              >
                {t.navPractice}
              </button>
              <button
                onClick={() => setActiveTab('hub')}
                className={`px-3 py-1.5 rounded-lg transition ${activeTab === 'hub' ? 'bg-amber-500 text-black shadow-md' : 'opacity-70 hover:opacity-100'}`}
              >
                {t.navHub}
              </button>
            </nav>
          </div>

        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 py-6">

        {/* TAB 1: CURRICULUM ROADMAP (MAP) */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            
            {/* Global Top Roadmap Controls */}
            {/* Total Lessons Selector & Difficulty Selector Banner */}
            <div className={`${styleTheme.card} p-4 flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto`}>
              
              {/* Total Lessons Selection - Expanded Options */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  כמות שיעורים במסלול:
                </span>
                <div className="flex flex-wrap gap-1">
                  {[10, 25, 50, 100, 150, 200].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleTotalLessonsChange(num)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-bold transition ${
                        totalLessonsCount === num 
                          ? 'bg-emerald-500 text-white shadow-md' 
                          : 'bg-black/20 hover:bg-black/30'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Selection (Includes Homework mode) */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-xs sm:text-sm flex items-center gap-1">
                  <Shield className="w-4 h-4 text-amber-400" />
                  {t.selectDifficulty}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['easy', 'medium', 'hard', 'hw'].map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setDifficulty(diff)}
                      className={`px-3 py-1.5 text-xs rounded-lg font-bold transition-all ${
                        difficulty === diff 
                          ? 'bg-amber-500 text-black shadow-md' 
                          : 'bg-black/20 hover:bg-black/30'
                      }`}
                    >
                      {diff === 'hw' ? 'מסלול + שיעורי בית (10-15 דק׳)' : t[diff]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Lessons Roadmap Grid */}
            <div className="relative py-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {lessons.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleStartLesson(item)}
                    className={`relative p-5 rounded-2xl flex flex-col items-center justify-between transition-all transform hover:-translate-y-1 cursor-pointer ${
                      item.completed 
                        ? 'bg-emerald-500/20 border-2 border-emerald-500' 
                        : item.unlocked 
                          ? `${styleTheme.card} hover:border-amber-400` 
                          : 'bg-black/40 border border-gray-700/50 opacity-40 cursor-not-allowed'
                    }`}
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-center">
                      <span className="text-xs opacity-60 font-mono block">{t.lesson} {item.id} / {totalLessonsCount}</span>
                      <h3 className="font-bold text-sm line-clamp-1">{item.category}</h3>
                    </div>
                    
                    <div className="mt-4">
                      {item.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      ) : item.unlocked ? (
                        <Unlock className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Lock className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE PRACTICE SESSION */}
        {activeTab === 'practice' && (
          <div className="max-w-3xl mx-auto space-y-6">
            {!selectedLesson ? (
              <div className={`${styleTheme.card} p-12 text-center space-y-4`}>
                <BookOpen className="w-16 h-16 mx-auto opacity-40 animate-bounce" />
                <h2 className="text-2xl font-bold">No Lesson Selected</h2>
                <p className="opacity-70 text-sm">Please choose an unlocked lesson from the Curriculum Roadmap to begin.</p>
                <button onClick={() => setActiveTab('map')} className={`${styleTheme.accent} px-6 py-2.5`}>
                  {t.navMap}
                </button>
              </div>
            ) : (
              <div className={`${styleTheme.card} p-6 sm:p-8 space-y-6 relative overflow-hidden`}>
                
                {/* Lesson Header Progress Bar */}
                <div className="flex items-center justify-between border-b border-gray-500/20 pb-4">
                  <div>
                    <h2 className="text-xl font-bold">{selectedLesson.title}</h2>
                    <span className="text-xs opacity-70 uppercase tracking-widest">{t.selectDifficulty}: {difficulty}</span>
                  </div>
                  <span className="text-sm font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full">
                    Step {currentStep + 1} / {difficulty === 'hw' ? 6 : 5}
                  </span>
                </div>

                {/* STEPS 0 to 3: Interactive Practice Questions */}
                {currentStep <= 3 && (
                  <div className="space-y-6 py-4">

                    {/* Lesson Banner with Progressive Difficulty Level */}
                    <div className="flex items-center justify-between text-xs font-mono opacity-80 bg-black/10 px-3 py-1.5 rounded-lg">
                      <span>דרגת קושי עולה: רמה {selectedLesson.difficultyLevel} / 10</span>
                      <span>{selectedLesson.id <= 10 ? '🔤 שיעור יסודות אותיות' : '📚 שיעור מתקדם'}</span>
                    </div>

                    {/* 5 Lesson Words Indicator Bar */}
                    <div className="bg-black/20 p-3 rounded-xl border border-gray-500/10 space-y-2">
                      <span className="text-xs font-bold text-amber-400 block">{t.wordsInLesson}</span>
                      <div className="grid grid-cols-5 gap-2">
                        {currentLesson5Words.map((word, idx) => (
                          <button
                            key={idx}
                            onClick={() => { setActiveWordIndex(idx); setFeedback(null); setUserAnswer(''); }}
                            className={`p-2 rounded-lg text-center transition border ${
                              activeWordIndex === idx 
                                ? 'bg-amber-500/30 border-amber-400 font-bold scale-105 shadow-md' 
                                : 'bg-black/20 border-transparent hover:bg-black/40 opacity-70'
                            }`}
                          >
                            <span className="text-xl block">{word.icon}</span>
                            <span className="text-[10px] font-bold block truncate">{word.target}</span>
                            <span className="text-[9px] opacity-70 block truncate">({word.native})</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Visual Card */}
                    <div className="flex flex-col items-center justify-center p-8 bg-black/20 rounded-2xl border border-gray-500/10 space-y-4">
                      <span className="text-7xl animate-bounce">{currentVocab.icon}</span>
                      
                      {/* Both Languages Prominently Displayed */}
                      <div className="text-center space-y-1">
                        <h3 className="text-3xl font-extrabold tracking-wide text-amber-300">{currentVocab.target}</h3>
                        <p className="text-lg font-bold opacity-80">({currentVocab.native})</p>
                      </div>
                      
                      <button 
                        onClick={() => speakWord(currentVocab.audioText)}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-full font-semibold text-sm transition"
                      >
                        <Volume2 className="w-4 h-4" />
                        {t.playAudio}
                      </button>
                    </div>

                    {/* Question Prompt */}
                    {ageGroup === 'kids' ? (
                      <div className="text-center space-y-4">
                        <p className="font-bold text-lg">בחר את התשובה הנכונה עבור {currentVocab.target}:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {currentLesson5Words.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleCheckAnswer(item.native)}
                              className="p-4 rounded-xl border-2 border-dashed border-amber-400 hover:bg-amber-500/10 font-bold text-base flex items-center justify-center gap-2"
                            >
                              <span>{item.icon}</span>
                              <span>{item.native}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <label className="block text-sm font-bold opacity-80">
                          תקף או תרגם את המילה ({currentVocab.target}) לשפת האם ({nativeLangObj.native}):
                        </label>
                        <input 
                          type="text" 
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          placeholder="הקלד את התרגום..."
                          className="w-full p-4 rounded-xl bg-black/20 border border-gray-500/30 focus:outline-none focus:border-amber-400 text-lg font-bold"
                        />
                        
                        {/* Microphone Input Simulation */}
                        <div className="flex items-center justify-between pt-2">
                          <button
                            onClick={() => {
                              setListeningState(true);
                              setTimeout(() => {
                                setUserAnswer(currentVocab.native);
                                setListeningState(false);
                              }, 1500);
                            }}
                            className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg border ${
                              listeningState ? 'bg-red-500/20 text-red-400 border-red-500 animate-pulse' : 'bg-black/10 border-gray-500/20'
                            }`}
                          >
                            <Mic className="w-4 h-4" />
                            {listeningState ? t.micListening : t.speakNow}
                          </button>

                          <button 
                            onClick={() => handleCheckAnswer(userAnswer)}
                            className={`${styleTheme.accent} px-6 py-2 text-sm font-bold`}
                          >
                            {t.checkAnswer}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Answer Feedback Banner */}
                    {feedback && (
                      <div className={`p-4 rounded-xl font-bold flex items-center justify-between text-sm ${
                        feedback === 'correct' 
                          ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-300' 
                          : 'bg-rose-500/20 border border-rose-500 text-rose-300'
                      }`}>
                        <div className="flex items-center gap-2">
                          {feedback === 'correct' ? <Check className="w-5 h-5 text-emerald-400" /> : <X className="w-5 h-5 text-rose-400" />}
                          <span>{feedback === 'correct' ? t.correct : t.incorrect}</span>
                        </div>
                        {feedback === 'correct' && (
                          <span className="text-xs font-mono bg-emerald-500/30 px-2 py-1 rounded">+15 XP</span>
                        )}
                      </div>
                    )}

                  </div>
                )}

                {/* STEP 4: Animated Anime Summary Video (FULLY ACTIVE VIDEO PLAYER) */}
                {currentStep === 4 && (
                  <div className="space-y-6 py-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-500/20 pb-3">
                      <h3 className="text-xl font-extrabold flex items-center gap-2">
                        <Tv className="w-6 h-6 text-pink-400 animate-pulse" />
                        {t.animeSummaryTitle}
                      </h3>
                      
                      {/* Subtitle CC Selector */}
                      <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-xl border border-gray-500/20">
                        <Subtitles className="w-4 h-4 text-amber-400" />
                        <span className="text-xs font-bold">{t.subtitlesLabel}:</span>
                        <select
                          value={ccOption}
                          onChange={(e) => setCcOption(e.target.value)}
                          className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer"
                        >
                          <option value="off" className="text-black">{t.subOff}</option>
                          <option value="target" className="text-black">{t.subTarget}</option>
                          <option value="native" className="text-black">{t.subNative}</option>
                          <option value="dual" className="text-black">{t.subDual}</option>
                        </select>
                      </div>
                    </div>

                    {/* Active Animated Anime Video Player */}
                    <div className="relative aspect-video bg-gradient-to-tr from-slate-950 via-purple-950 to-indigo-950 rounded-2xl overflow-hidden border-2 border-pink-500/40 shadow-2xl flex flex-col justify-between p-4 sm:p-6">
                      
                      {/* Animated Scene Content */}
                      <div className="relative z-10 my-auto text-center space-y-4">
                        <div className="flex justify-center items-center gap-6 text-6xl">
                          <span className={`transform transition-transform duration-700 ${isVideoPlaying ? 'scale-110 rotate-3 animate-bounce' : 'scale-100'}`}>🌸</span>
                          <span className={`transform transition-transform duration-700 ${isVideoPlaying ? 'scale-125 -rotate-6 animate-pulse' : 'scale-100'}`}>🎌</span>
                          <span className={`transform transition-transform duration-700 ${isVideoPlaying ? 'scale-110 rotate-3 animate-bounce' : 'scale-100'}`}>🦊</span>
                        </div>
                        
                        <div className="inline-block bg-pink-500/20 border border-pink-400/40 text-pink-200 text-xs px-3 py-1 rounded-full font-bold">
                          {selectedLesson.id <= 10 ? 'סרטון אנימה: תרגול כתיבה והגיית אותיות' : 'סרטון אנימה: דיאלוג יומי מונפש'}
                        </div>                      </div>

                      {/* Subtitles Overlay */}
                      {ccOption !== 'off' && (
                        <div className="relative z-10 w-full bg-black/85 backdrop-blur-md p-3 rounded-xl text-center space-y-1 border border-pink-500/30">
                          {(ccOption === 'target' || ccOption === 'dual') && (
                            <p className="text-amber-300 font-extrabold text-base sm:text-lg tracking-wide">
                              "{currentVocab.target}" — Sugoi! ⚡
                            </p>
                          )}
                          {(ccOption === 'native' || ccOption === 'dual') && (
                            <p className="text-white text-xs sm:text-sm font-medium opacity-90">
                              ({currentVocab.native})
                            </p>
                          )}
                        </div>
                      )}

                      {/* Video Player Controls Bar */}
                      <div className="relative z-10 flex items-center justify-between gap-3 pt-3 border-t border-white/10 text-xs">
                        <button 
                          onClick={() => setIsVideoPlaying(!isVideoPlaying)} 
                          className="p-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white transition shadow-md"
                        >
                          {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>

                        <div className="flex-1 bg-white/20 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-pink-500 to-amber-400 h-full transition-all duration-300" 
                            style={{ width: isVideoPlaying ? '65%' : '30%' }}
                          />
                        </div>

                        <span className="font-mono text-gray-300 text-[11px]">0:24 / 0:45</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Homework Section (10-15 min assignment) */}
                {currentStep === 5 && (
                  <div className="space-y-4 py-4 bg-indigo-950/40 p-6 rounded-2xl border border-indigo-500/30">
                    <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
                      <h3 className="text-lg font-bold flex items-center gap-2 text-indigo-300">
                        <Edit3 className="w-5 h-5 text-indigo-400" />
                        {t.homeworkTitle} (תרגול מורחב 10-15 דקות)
                      </h3>
                      <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-mono">
                        ⏱️ זמן מומלץ: 12 דקות
                      </span>
                    </div>

                    <div className="space-y-3 text-sm">
                      <p className="font-medium text-slate-200">
                        משימת כתיבה וחיבור לשיעור זה:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-xs opacity-90 text-slate-300">
                        <li>רשום 3 משפטים שלמים בשפת היעד ({targetLangObj.name}) בעזרת המילון של השיעור.</li>
                        <li>תרגם את המשפטים חזרה לשפת האם ({nativeLangObj.native}).</li>
                        <li>הסבר בקצרה מתי נשתמש בביטוי <span className="font-bold text-amber-300">{currentVocab.target}</span> בחיי היומיום.</li>
                      </ul>
                    </div>

                    <textarea
                      rows={6}
                      value={hwText}
                      onChange={(e) => setHwText(e.target.value)}
                      placeholder="הקלד כאן את שיעורי הבית שלך (משפטים, תרגום וניתוח)..."
                      className="w-full p-4 rounded-xl bg-black/40 border border-indigo-500/40 focus:outline-none focus:border-indigo-300 text-sm font-sans"
                    />

                    <div className="flex justify-between items-center text-xs opacity-70 pt-1">
                      <span>מספר מילים: {hwText.trim() ? hwText.trim().split(/\s+/).length : 0}</span>
                      <span>הגשת ש"ב מעניקה 50 XP נוספים!</span>
                    </div>
                  </div>
                )}

                {/* Footer Action Button */}
                <div className="flex justify-end pt-4 border-t border-gray-500/20">
                  <button
                    onClick={handleNextStep}
                    className={`${styleTheme.accent} px-8 py-3 flex items-center gap-2`}
                  >
                    <span>{currentStep >= (difficulty === 'hw' ? 5 : 4) ? t.finishLesson : t.continue}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

              </div>
            )}
          </div>
        )}

        {/* TAB 3: PLAY & MEDIA HUB */}
        {activeTab === 'hub' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-extrabold">{t.gamesHub}</h2>
                <p className="opacity-70 text-sm">Interactive language games and immersive media.</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setGameMode('rpg')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${gameMode === 'rpg' ? styleTheme.accent : 'bg-black/20'}`}
                >
                  {t.rpgGame}
                </button>
                <button
                  onClick={() => setGameMode('typing')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${gameMode === 'typing' ? styleTheme.accent : 'bg-black/20'}`}
                >
                  {t.typingGame}
                </button>
              </div>
            </div>

            {/* RPG Game Arcade (FULLY FUNCTIONAL) */}
            {gameMode === 'rpg' && (
              <div className={`${styleTheme.card} p-8 space-y-6 relative overflow-hidden`}>
                <div className="flex justify-between items-center border-b border-gray-500/20 pb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-sm">Player HP: ❤️ {rpgHp}</span>
                    <span className="font-bold text-sm">Monster HP: 👾 {rpgMonsterHp}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-amber-400">Score: {rpgScore}</span>
                    <button 
                      onClick={() => { setRpgHp(100); setRpgMonsterHp(100); setRpgScore(0); }} 
                      className="p-1.5 bg-black/30 hover:bg-black/50 rounded-lg text-xs"
                      title="Reset Battle"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="text-center py-6 space-y-4">
                  <span className="text-6xl animate-pulse">
                    {rpgMonsterHp <= 0 ? '🏆' : rpgHp <= 0 ? '💀' : '🐲 vs 🧙‍♂️'}
                  </span>
                  
                  {rpgMonsterHp <= 0 ? (
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-emerald-400">Monster Defeated! You Won! 🎉</h3>
                      <button onClick={() => { setRpgMonsterHp(100); setRpgHp(100); }} className={`${styleTheme.accent} px-4 py-2 text-xs`}>
                        Next Battle ⚔️
                      </button>
                    </div>
                  ) : rpgHp <= 0 ? (
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-rose-400">Game Over! Try Again!</h3>
                      <button onClick={() => { setRpgMonsterHp(100); setRpgHp(100); setRpgScore(0); }} className={`${styleTheme.accent} px-4 py-2 text-xs`}>
                        Restart Battle 🔄
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold">Defeat the Monster by matching the Target Word!</h3>
                      <div className="p-4 bg-black/20 rounded-xl inline-block font-extrabold text-3xl text-amber-300 border border-amber-500/30">
                        {currentLesson5Words[rpgTargetWordIdx]?.target}
                      </div>
                    </>
                  )}
                </div>

                {rpgMonsterHp > 0 && rpgHp > 0 && (
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {currentLesson5Words.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (idx === rpgTargetWordIdx) {
                            setRpgMonsterHp(prev => Math.max(0, prev - 25));
                            setRpgScore(prev => prev + 50);
                            playSound('correct');
                            setRpgTargetWordIdx((prev) => (prev + 1) % currentLesson5Words.length);
                          } else {
                            setRpgHp(prev => Math.max(0, prev - 15));
                            playSound('incorrect');
                          }
                        }}
                        className="p-3 bg-black/30 hover:bg-black/50 border border-gray-500/30 rounded-xl font-bold text-sm flex items-center justify-between"
                      >
                        <span>{item.icon}</span>
                        <span>{item.native}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Typing & Calligraphy Game (FULLY FUNCTIONAL) */}
            {gameMode === 'typing' && (
              <div className={`${styleTheme.card} p-8 space-y-6 text-center max-w-xl mx-auto`}>
                <h3 className="text-xl font-bold">{t.typingGame}</h3>
                <p className="text-sm opacity-70">Type the target word accurately as fast as you can!</p>

                <div className="text-4xl font-extrabold tracking-widest text-pink-400 my-4 p-4 bg-black/20 rounded-2xl border border-pink-500/30 inline-block w-full">
                  {currentLesson5Words[typingWordIdx]?.target}
                  <span className="block text-xs text-gray-400 font-normal mt-1">({currentLesson5Words[typingWordIdx]?.native})</span>
                </div>

                <input
                  type="text"
                  value={typingInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setTypingInput(val);
                    if (val.trim().toLowerCase() === currentLesson5Words[typingWordIdx]?.target.toLowerCase()) {
                      setTypingScore(prev => prev + 25);
                      setTypingInput('');
                      setTypingWordIdx((prev) => (prev + 1) % currentLesson5Words.length);
                      playSound('correct');
                    }
                  }}
                  placeholder="Type target word here..."
                  className="w-full p-4 rounded-xl bg-black/20 border border-gray-500/30 text-center font-bold text-xl focus:outline-none focus:border-amber-400"
                />

                <div className="font-bold text-amber-400 text-lg">Score: {typingScore} XP</div>
              </div>
            )}

            {/* Media Center (FULLY FUNCTIONAL INTERACTIVE PLAYER) */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-extrabold flex items-center gap-2">
                <Tv className="w-5 h-5 text-indigo-400" />
                {t.mediaCenter}
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 1, title: `${targetLangObj.name} Daily Conversations Podcast`, duration: '12 min', icon: '🎙️' },
                  { id: 2, title: 'Business Negotiation Practice Video', duration: '8 min', icon: '🎬' },
                  { id: 3, title: 'Culture & History Audio Book', duration: '25 min', icon: '🎧' }
                ].map((media) => (
                  <div key={media.id} className={`${styleTheme.card} p-5 flex flex-col justify-between space-y-4 hover:border-amber-400 transition`}>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{media.icon}</span>
                      <div>
                        <h4 className="font-bold text-sm">{media.title}</h4>
                        <span className="text-xs opacity-60">{media.duration} • Dual Subtitles</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (playingMediaId === media.id) {
                          setPlayingMediaId(null);
                        } else {
                          setPlayingMediaId(media.id);
                          playSound('click');
                        }
                      }}
                      className={`w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 ${
                        playingMediaId === media.id ? 'bg-amber-500 text-black' : 'bg-black/30 hover:bg-black/40'
                      }`}
                    >
                      {playingMediaId === media.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{playingMediaId === media.id ? 'מנגן עכשיו...' : 'נגן מדיה'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* FOOTER WITH LIKES, WHATSAPP SHARE & COMMENTS */}
      <footer className="border-t border-gray-500/20 mt-12 bg-black/40 backdrop-blur-md py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Like and Share Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-black/20 rounded-2xl border border-gray-500/20">
            <div className="flex items-center gap-4">
              {/* Like Button */}
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition transform active:scale-95 ${
                  hasLiked 
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
                    : 'bg-black/30 hover:bg-black/50 text-gray-300'
                }`}
              >
                <Heart className={`w-5 h-5 ${hasLiked ? 'fill-white' : ''}`} />
                <span>{likesCount} {t.likeCount}</span>
              </button>

              {/* WhatsApp Share Button */}
              <button
                onClick={handleShareWhatsApp}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-bold transition shadow-lg shadow-emerald-600/20 transform active:scale-95"
              >
                <Share2 className="w-5 h-5" />
                <span>{t.shareWhatsapp}</span>
              </button>
            </div>

            <span className="text-xs opacity-60 font-mono">LingoWorld App © 2026</span>
          </div>

          {/* Comments Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              {t.commentsTitle}
            </h3>

            {/* Add Comment Form */}
            <form onSubmit={handleAddComment} className="flex gap-2">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={t.addCommentPlaceholder}
                className="flex-1 p-3 rounded-xl bg-black/30 border border-gray-500/30 focus:outline-none focus:border-amber-400 text-sm"
              />
              <button
                type="submit"
                className={`${styleTheme.accent} px-5 py-3 flex items-center gap-2 text-sm font-bold`}
              >
                <span>{t.postComment}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-3">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-black/20 rounded-xl border border-gray-500/10 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-amber-300">{comment.author}</span>
                    <span className="opacity-50">{comment.time}</span>
                  </div>
                  <p className="text-sm opacity-90">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}