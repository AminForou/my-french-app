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
        meaning: {
          en: "Hello",
          fa: "سلام"
        },
        pronunciation: "/bɔ̃.ʒuʁ/",
        example: {
          fr: "Elle a dit bonjour à tout le monde.",
          en: "She said hello to everyone.",
          fa: "او به همه سلام کرد."
        },
        tip: "Imagine a 'bon' (good) 'jour' (day) starting with a hello!"
      },
      {
        id: 2,
        word: "merci",
        meaning: {
          en: "Thank you",
          fa: "متشکرم"
        },
        pronunciation: "/mɛʁ.si/",
        example: {
          fr: "Merci pour votre aide.",
          en: "Thank you for your help.",
          fa: "از کمک شما متشکرم."
        },
        tip: "Think of 'mercy' for those who help you!"
      },
      {
        id: 3,
        word: "s'il vous plaît",
        meaning: {
          en: "Please",
          fa: "لطفاً"
        },
        pronunciation: "/sil vu plɛ/",
        example: {
          fr: "Un café, s'il vous plaît.",
          en: "A coffee, please.",
          fa: "یک جورت، لطفاً."
        },
        tip: "Imagine a polite 'seal' asking 'please' for fish!"
      },
      {
        id: 4,
        word: "amour",
        meaning: {
          en: "Love",
          fa: "عشق"
        },
        pronunciation: "/a.muʁ/",
        example: {
          fr: "L'amour est dans l'air.",
          en: "Love is in the air.",
          fa: "عشق در هواست."
        },
        tip: "Think of 'a more' love in the air!"
      },
      {
        id: 5,
        word: "famille",
        meaning: {
          en: "Family",
          fa: "خانواده"
        },
        pronunciation: "/fa.mij/",
        example: {
          fr: "La famille est importante.",
          en: "Family is important.",
          fa: "خانواده بسیار اهمیت دارد."
        },
        tip: "Imagine a 'family' of 'ants' (famille) working together!"
      },
      {
        id: 6,
        word: "ami",
        meaning: {
          en: "Friend",
          fa: "دوست"
        },
        pronunciation: "/a.mi/",
        example: {
          fr: "Il est mon meilleur ami.",
          en: "He is my best friend.",
          fa: "اون من بهترین دوستمه."
        },
        tip: "An 'ami' is a friend who says 'ah, me!' when you need help."
      },
      {
        id: 7,
        word: "maison",
        meaning: {
          en: "House",
          fa: "خانه"
        },
        pronunciation: "/mɛ.zɔ̃/",
        example: {
          fr: "Ils ont une belle maison.",
          en: "They have a beautiful house.",
          fa: "خانه آنها زیباست."
        },
        tip: "A 'maze' in your 'house' is a maison!"
      },
      {
        id: 8,
        word: "école",
        meaning: {
          en: "School",
          fa: "مدرسه"
        },
        pronunciation: "/e.kɔl/",
        example: {
          fr: "Les enfants vont à l'école.",
          en: "The children go to school.",
          fa: "بچه ها به مدرسه می روند."
        },
        tip: "Think of 'eco' friendly 'school' as école!"
      },
      {
        id: 9,
        word: "voiture",
        meaning: {
          en: "Car",
          fa: "ماشین"
        },
        pronunciation: "/vwa.tyʁ/",
        example: {
          fr: "Elle a acheté une nouvelle voiture.",
          en: "She bought a new car.",
          fa: "اون ماشین جدید خرید."
        },
        tip: "Imagine a 'voyage' in your 'car' (voiture)!"
      },
      {
        id: 10,
        word: "chat",
        meaning: {
          en: "Cat",
          fa: "گربه"
        },
        pronunciation: "/ʃa/",
        example: {
          fr: "Le chat dort sur le canapé.",
          en: "The cat is sleeping on the sofa.",
          fa: "گربه در سفیده خوابیده است."
        },
        tip: "A 'chat' with a 'cat' is always fun!"
      },
      {
        id: 11,
        word: "chien",
        meaning: {
          en: "Dog",
          fa: "سگ"
        },
        pronunciation: "/ʃjɛ̃/",
        example: {
          fr: "Le chien aboie fort.",
          en: "The dog barks loudly.",
          fa: "سگ زیاد خوش آویز می کند."
        },
        tip: "A 'chien' is a 'sheen' dog in the park!"
      },
      {
        id: 12,
        word: "eau",
        meaning: {
          en: "Water",
          fa: "آب"
        },
        pronunciation: "/o/",
        example: {
          fr: "Je bois de l'eau.",
          en: "I drink water.",
          fa: "من آب می نوشم."
        },
        tip: "Think of 'oh!' refreshing water (eau)!"
      },
      {
        id: 13,
        word: "soleil",
        meaning: {
          en: "Sun",
          fa: "خورشید"
        },
        pronunciation: "/sɔ.lɛj/",
        example: {
          fr: "Le soleil brille aujourd'hui.",
          en: "The sun is shining today.",
          fa: "خورشید امروز به صورت زیادی نمایش دارد."
        },
        tip: "The 'sole' light in the sky is the soleil!"
      },
      {
        id: 14,
        word: "lune",
        meaning: {
          en: "Moon",
          fa: "ماه"
        },
        pronunciation: "/lyn/",
        example: {
          fr: "La lune est pleine ce soir.",
          en: "The moon is full tonight.",
          fa: "ماه امروز به صورت کامل است."
        },
        tip: "A 'loon' howls at the 'moon' (lune)!"
      },
      {
        id: 15,
        word: "fleur",
        meaning: {
          en: "Flower",
          fa: "گل"
        },
        pronunciation: "/flœʁ/",
        example: {
          fr: "Elle a reçu des fleurs.",
          en: "She received flowers.",
          fa: "اون گل ها را دریافت کرد."
        },
        tip: "A 'flour' of beauty is a fleur!"
      },
      {
        id: 16,
        word: "arbre",
        meaning: {
          en: "Tree",
          fa: "درخت"
        },
        pronunciation: "/aʁbʁ/",
        example: {
          fr: "Il y a un grand arbre dans le jardin.",
          en: "There is a large tree in the garden.",
          fa: "درخت بزرگ در باغ وجود دارد."
        },
        tip: "An 'arb' of trees is an arbre!"
      },
      {
        id: 17,
        word: "livre",
        meaning: {
          en: "Book",
          fa: "کتاب"
        },
        pronunciation: "/livʁ/",
        example: {
          fr: "Elle lit un livre intéressant.",
          en: "She reads an interesting book.",
          fa: "اون کتاب جذاب را می خواند."
        },
        tip: "A 'library' of 'books' is a livre!"
      },
      {
        id: 18,
        word: "musique",
        meaning: {
          en: "Music",
          fa: "موسیقی"
        },
        pronunciation: "/my.zik/",
        example: {
          fr: "J'aime écouter de la musique.",
          en: "I enjoy listening to music.",
          fa: "من صدای موسیقی را دوست دارم."
        },
        tip: "A 'muse' of 'music' is musique!"
      },
      {
        id: 19,
        word: "temps",
        meaning: {
          en: "Time",
          fa: "زمان"
        },
        pronunciation: "/tɑ̃/",
        example: {
          fr: "Le temps passe vite.",
          en: "Time passes quickly.",
          fa: "زمان به سرعت می گذرد."
        },
        tip: "A 'temp' worker keeps track of time (temps)!"
      },
      {
        id: 20,
        word: "jour",
        meaning: {
          en: "Day",
          fa: "روز"
        },
        pronunciation: "/ʒuʁ/",
        example: {
          fr: "Chaque jour est une nouvelle aventure.",
          en: "Every day is a new adventure.",
          fa: "هر روز یک آثاره جدید است."
        },
        tip: "A 'journey' starts with a new day (jour)!"
      }
    ]
  }
  // Future language sets can be added here
}

// Update the Card component display format
export const formatWordData = (word) => ({
  ...word,
  meaning: `${word.meaning.en} - ${word.meaning.fa}`,
  example: `${word.example.fr}\n${word.example.en} - ${word.example.fa}`
})

// For backward compatibility
export const words = wordSets.french.words.map(formatWordData)
  