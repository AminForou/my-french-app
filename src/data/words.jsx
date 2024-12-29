// src/data/words.js

export const wordSets = {
  french: {
    id: 'french',
    name: 'Essential French Words',
    description: 'Basic French vocabulary for everyday conversations',
    icon: () => (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fff" d="M0 0h640v480H0z"/>
          <path fill="#00267f" d="M0 0h213.3v480H0z"/>
          <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
        </g>
      </svg>
    ),
    words: [
      {
        id: 1,
        word: "bonjour",
        meaning: "Hello (English) - سلام (Farsi)",
        pronunciation: "/bɔ̃.ʒuʁ/",
        example: "Elle a dit bonjour à tout le monde.",
        tip: "Imagine a 'bon' (good) 'jour' (day) starting with a hello!"
      },
      {
        id: 2,
        word: "merci",
        meaning: "Thank you (English) - متشکرم (Farsi)",
        pronunciation: "/mɛʁ.si/",
        example: "Merci pour votre aide.",
        tip: "Think of 'mercy' for those who help you, and say merci!"
      },
      {
        id: 3,
        word: "s'il vous plaît",
        meaning: "Please (English) - لطفاً (Farsi)",
        pronunciation: "/sil vu plɛ/",
        example: "Un café, s'il vous plaît.",
        tip: "Imagine a polite 'seal' asking 'please' for fish!"
      },
      {
        id: 4,
        word: "amour",
        meaning: "Love (English) - عشق (Farsi)",
        pronunciation: "/a.muʁ/",
        example: "L'amour est dans l'air.",
        tip: "Think of 'a more' love in the air!"
      },
      {
        id: 5,
        word: "famille",
        meaning: "Family (English) - خانواده (Farsi)",
        pronunciation: "/fa.mij/",
        example: "La famille est importante.",
        tip: "Imagine a 'family' of 'ants' (famille) working together!"
      },
      {
        id: 6,
        word: "ami",
        meaning: "Friend (English) - دوست (Farsi)",
        pronunciation: "/a.mi/",
        example: "Il est mon meilleur ami.",
        tip: "An 'ami' is a friend who says 'ah, me!' when you need help."
      },
      {
        id: 7,
        word: "maison",
        meaning: "House (English) - خانه (Farsi)",
        pronunciation: "/mɛ.zɔ̃/",
        example: "Ils ont une belle maison.",
        tip: "A 'maze' in your 'house' is a maison!"
      },
      {
        id: 8,
        word: "école",
        meaning: "School (English) - مدرسه (Farsi)",
        pronunciation: "/e.kɔl/",
        example: "Les enfants vont à l'école.",
        tip: "Think of 'eco' friendly 'school' as école!"
      },
      {
        id: 9,
        word: "voiture",
        meaning: "Car (English) - ماشین (Farsi)",
        pronunciation: "/vwa.tyʁ/",
        example: "Elle a acheté une nouvelle voiture.",
        tip: "Imagine a 'voyage' in your 'car' (voiture)!"
      },
      {
        id: 10,
        word: "chat",
        meaning: "Cat (English) - گربه (Farsi)",
        pronunciation: "/ʃa/",
        example: "Le chat dort sur le canapé.",
        tip: "A 'chat' with a 'cat' is always fun!"
      },
      {
        id: 11,
        word: "chien",
        meaning: "Dog (English) - سگ (Farsi)",
        pronunciation: "/ʃjɛ̃/",
        example: "Le chien aboie fort.",
        tip: "A 'chien' is a 'sheen' dog in the park!"
      },
      {
        id: 12,
        word: "eau",
        meaning: "Water (English) - آب (Farsi)",
        pronunciation: "/o/",
        example: "Je bois de l'eau.",
        tip: "Think of 'oh!' refreshing water (eau)!"
      },
      {
        id: 13,
        word: "soleil",
        meaning: "Sun (English) - خورشید (Farsi)",
        pronunciation: "/sɔ.lɛj/",
        example: "Le soleil brille aujourd'hui.",
        tip: "The 'sole' light in the sky is the soleil!"
      },
      {
        id: 14,
        word: "lune",
        meaning: "Moon (English) - ماه (Farsi)",
        pronunciation: "/lyn/",
        example: "La lune est pleine ce soir.",
        tip: "A 'loon' howls at the 'moon' (lune)!"
      },
      {
        id: 15,
        word: "fleur",
        meaning: "Flower (English) - گل (Farsi)",
        pronunciation: "/flœʁ/",
        example: "Elle a reçu des fleurs.",
        tip: "A 'flour' of beauty is a fleur!"
      },
      {
        id: 16,
        word: "arbre",
        meaning: "Tree (English) - درخت (Farsi)",
        pronunciation: "/aʁbʁ/",
        example: "Il y a un grand arbre dans le jardin.",
        tip: "An 'arb' of trees is an arbre!"
      },
      {
        id: 17,
        word: "livre",
        meaning: "Book (English) - کتاب (Farsi)",
        pronunciation: "/livʁ/",
        example: "Elle lit un livre intéressant.",
        tip: "A 'library' of 'books' is a livre!"
      },
      {
        id: 18,
        word: "musique",
        meaning: "Music (English) - موسیقی (Farsi)",
        pronunciation: "/my.zik/",
        example: "J'aime écouter de la musique.",
        tip: "A 'muse' of 'music' is musique!"
      },
      {
        id: 19,
        word: "temps",
        meaning: "Time (English) - زمان (Farsi)",
        pronunciation: "/tɑ̃/",
        example: "Le temps passe vite.",
        tip: "A 'temp' worker keeps track of time (temps)!"
      },
      {
        id: 20,
        word: "jour",
        meaning: "Day (English) - روز (Farsi)",
        pronunciation: "/ʒuʁ/",
        example: "Chaque jour est une nouvelle aventure.",
        tip: "A 'journey' starts with a new day (jour)!"
      }
    ]
  }
  // Future language sets can be added here
}

// For backward compatibility
export const words = wordSets.french.words
  