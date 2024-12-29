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
        word: "Bonjour ",
        meaning: {
          en: "Hello",
          fa: "سلام"
        },
        pronunciation: "bohn-zhoor",
        example: {
          fr: "Bonjour, comment ça va?",
          en: "Hello, how are you?",
          fa: "سلام، چطوری؟"
        },
        tip: "Think of 'bon' as 'good' in English."
      },
      {
        id: 2,
        word: "Salut ",
        meaning: {
          en: "Hi",
          fa: "سلام"
        },
        pronunciation: "sa-loo",
        example: {
          fr: "Salut, mon ami!",
          en: "Hi, my friend!",
          fa: "سلام، دوست من!"
        },
        tip: "Sounds like salute without the 'e'."
      },
      {
        id: 3,
        word: "Au revoir ",
        meaning: {
          en: "Goodbye",
          fa: "خداحافظ"
        },
        pronunciation: "oh ruh-vwar",
        example: {
          fr: "Au revoir, à demain.",
          en: "Goodbye, see you tomorrow.",
          fa: "خداحافظ، تا فردا."
        },
        tip: "Think 'revoir' as 're-view' or 'see again'."
      },
      {
        id: 4,
        word: "Merci ",
        meaning: {
          en: "Thanks",
          fa: "ممنون"
        },
        pronunciation: "mehr-see",
        example: {
          fr: "Merci pour ton aide.",
          en: "Thanks for your help.",
          fa: "ممنون برای کمکت."
        },
        tip: "Sounds like Mercy as in thanks for mercy."
      },
      {
        id: 5,
        word: "S’il te plaît ",
        meaning: {
          en: "Please",
          fa: "لطفا"
        },
        pronunciation: "seel tuh pleh",
        example: {
          fr: "Peux-tu me passer le sel, s’il te plaît?",
          en: "Can you pass me the salt, please?",
          fa: "میتونی نمک رو به من بدی، لطفا؟"
        },
        tip: "Think 'plea' in please as asking for favor."
      },
      {
        id: 6,
        word: "S’il vous plaît ",
        meaning: {
          en: "Please",
          fa: "لطفا"
        },
        pronunciation: "Seel voo pleh",
        example: {
          fr: "S’il vous plaît, passez-moi le sel.",
          en: "Please, pass me the salt.",
          fa: "لطفا، نمک را به من بدهید."
        },
        tip: "Remember asking politely."
      },
      {
        id: 7,
        word: "Pardon ",
        meaning: {
          en: "Sorry",
          fa: "ببخشید"
        },
        pronunciation: "Par-don",
        example: {
          fr: "Pardon, je ne t’avais pas vu.",
          en: "Sorry, I didn’t see you.",
          fa: "ببخشید، تو را ندیدم."
        },
        tip: "Think of pardoning mistakes."
      },
      {
        id: 8,
        word: "Excusez-moi ",
        meaning: {
          en: "Excuse me",
          fa: "عذر می‌خواهم"
        },
        pronunciation: "Eks-kew-zeh mwa",
        example: {
          fr: "Excusez-moi, où est la gare?",
          en: "Excuse me, where is the station?",
          fa: "عذر می‌خواهم، ایستگاه کجاست؟"
        },
        tip: "Use it to get attention respectfully."
      },
      {
        id: 9,
        word: "Oui ",
        meaning: {
          en: "Yes",
          fa: "بله"
        },
        pronunciation: "Wee",
        example: {
          fr: "Oui, je suis d’accord.",
          en: "Yes, I agree.",
          fa: "بله، من موافقم."
        },
        tip: "Think of saying 'we' together."
      },
      {
        id: 10,
        word: "Non ",
        meaning: {
          en: "No",
          fa: "نه"
        },
        pronunciation: "Nohn",
        example: {
          fr: "Non, merci.",
          en: "No, thank you.",
          fa: "نه، ممنون."
        },
        tip: "Sounds like 'none'."
      },
      {
        id: 11,
        word: "D’accord ",
        meaning: {
          en: "Okay",
          fa: "خوب"
        },
        pronunciation: "dah-kor",
        example: {
          fr: "Je suis d’accord.",
          en: "I agree.",
          fa: "من موافقم."
        },
        tip: "Think of 'decor' and agreeing it's nice."
      },
      {
        id: 12,
        word: "Bien ",
        meaning: {
          en: "Good",
          fa: "خوب"
        },
        pronunciation: "byan",
        example: {
          fr: "Tout va bien.",
          en: "Everything is good.",
          fa: "همه چیز خوب است."
        },
        tip: "Think 'be and you'll be good'."
      },
      {
        id: 13,
        word: "Mal ",
        meaning: {
          en: "Bad",
          fa: "بد"
        },
        pronunciation: "mal",
        example: {
          fr: "Ça va mal.",
          en: "It's going badly.",
          fa: "اوضاع بد است."
        },
        tip: "Think of 'malfunctioning', which is bad."
      },
      {
        id: 14,
        word: "Ça va ",
        meaning: {
          en: "How are you?",
          fa: "چطوری؟"
        },
        pronunciation: "sa va",
        example: {
          fr: "Ça va bien.",
          en: "It's going well.",
          fa: "اوضاع خوب است."
        },
        tip: "Imagine saying 'Sava, are you okay?'"
      },
      {
        id: 15,
        word: "Comment ",
        meaning: {
          en: "How",
          fa: "چگونه"
        },
        pronunciation: "koh-mah",
        example: {
          fr: "Comment ça va?",
          en: "How's it going?",
          fa: "اوضاع چطور است؟"
        },
        tip: "Think of 'comment on how'."
      },
      {
        id: 16,
        word: "Quand ",
        meaning: {
          en: "When",
          fa: "کی"
        },
        pronunciation: "kahn",
        example: {
          fr: "Quand partons-nous?",
          en: "When are we leaving?",
          fa: "کی می‌رویم؟"
        },
        tip: "Think of 'calendar'."
      },
      {
        id: 17,
        word: "Où ",
        meaning: {
          en: "Where",
          fa: "کجا"
        },
        pronunciation: "oo",
        example: {
          fr: "Où est la bibliothèque?",
          en: "Where is the library?",
          fa: "کتابخانه کجاست؟"
        },
        tip: "Remember 'ou'standing location."
      },
      {
        id: 18,
        word: "Pourquoi ",
        meaning: {
          en: "Why",
          fa: "چرا"
        },
        pronunciation: "pour-kwah",
        example: {
          fr: "Pourquoi est-il triste?",
          en: "Why is he sad?",
          fa: "چرا او ناراحت است؟"
        },
        tip: "Link it to 'purpose'."
      },
      {
        id: 19,
        word: "Qui ",
        meaning: {
          en: "Who",
          fa: "کی"
        },
        pronunciation: "kee",
        example: {
          fr: "Qui est-ce?",
          en: "Who is it?",
          fa: "این کیه؟"
        },
        tip: "Like 'key' to a person's identity."
      },
      {
        id: 20,
        word: "Quoi ",
        meaning: {
          en: "What",
          fa: "چی"
        },
        pronunciation: "kwah",
        example: {
          fr: "Quoi de neuf?",
          en: "What's new?",
          fa: "چه خبر؟"
        },
        tip: "Starts like 'quote', asking for information."
      },
      {
        id: 21,
        word: "Rien ",
        meaning: {
          en: "Nothing",
          fa: "هیچ چیز"
        },
        pronunciation: "ree-en",
        example: {
          fr: "Il n'y a rien ici.",
          en: "There is nothing here.",
          fa: "اینجا هیچ چیزی نیست."
        },
        tip: "Think of 'zero', which is similar."
      },
      {
        id: 22,
        word: "Tout ",
        meaning: {
          en: "Everything",
          fa: "همه چیز"
        },
        pronunciation: "too",
        example: {
          fr: "J'ai tout compris.",
          en: "I understood everything.",
          fa: "همه چیز را فهمیدم."
        },
        tip: "Remember 'total'."
      },
      {
        id: 23,
        word: "Encore ",
        meaning: {
          en: "Again",
          fa: "دوباره"
        },
        pronunciation: "on-kor",
        example: {
          fr: "Je veux encore du gâteau.",
          en: "I want more cake again.",
          fa: "باز هم کیک می‌خواهم."
        },
        tip: "Think of 'encore performance'."
      },
      {
        id: 24,
        word: "Assez ",
        meaning: {
          en: "Enough",
          fa: "کافی"
        },
        pronunciation: "ah-sey",
        example: {
          fr: "C'est assez pour moi.",
          en: "It's enough for me.",
          fa: "برای من کافی است."
        },
        tip: "Think of 'assets' as sufficiency."
      },
      {
        id: 25,
        word: "Beaucoup ",
        meaning: {
          en: "A lot",
          fa: "زیاد"
        },
        pronunciation: "bo-ko",
        example: {
          fr: "Merci beaucoup.",
          en: "Thank you very much.",
          fa: "خیلی ممنون."
        },
        tip: "Imagine a big 'book' of something."
      },
      {
        id: 26,
        word: "Trop ",
        meaning: {
          en: "Too",
          fa: "بیش از حد"
        },
        pronunciation: "Troh",
        example: {
          fr: "Il mange trop.",
          en: "He eats too much.",
          fa: "او بیش از حد می‌خورد."
        },
        tip: "Think of 'tropical' having excess heat."
      },
      {
        id: 27,
        word: "Peu ",
        meaning: {
          en: "Little",
          fa: "کم"
        },
        pronunciation: "Puh",
        example: {
          fr: "Il dort peu.",
          en: "He sleeps a little.",
          fa: "او کمی می‌خوابد."
        },
        tip: "Think of a small 'pebble'."
      },
      {
        id: 28,
        word: "Souvent ",
        meaning: {
          en: "Often",
          fa: "اغلب"
        },
        pronunciation: "Soo-vahn",
        example: {
          fr: "Il va souvent au cinéma.",
          en: "He often goes to the cinema.",
          fa: "او اغلب به سینما می‌رود."
        },
        tip: "Remember 'souvenir' as something often remembered."
      },
      {
        id: 29,
        word: "Toujours ",
        meaning: {
          en: "Always",
          fa: "همیشه"
        },
        pronunciation: "Too-zhoor",
        example: {
          fr: "Il est toujours en retard.",
          en: "He is always late.",
          fa: "او همیشه دیر می‌کند."
        },
        tip: "Think of 'tour' always ongoing."
      },
      {
        id: 30,
        word: "Parfois ",
        meaning: {
          en: "Sometimes",
          fa: "گاهی"
        },
        pronunciation: "Par-fwah",
        example: {
          fr: "Il lit parfois le soir.",
          en: "He sometimes reads in the evening.",
          fa: "او گاهی عصر مطالعه می‌کند."
        },
        tip: "Think of 'part-time' for sometimes."
      },
      {
        id: 31,
        word: "Jamais ",
        meaning: {
          en: "Never",
          fa: "هرگز"
        },
        pronunciation: "zhah-may",
        example: {
          fr: "Je ne fais jamais ça.",
          en: "I never do that.",
          fa: "من هرگز این کار را نمی‌کنم."
        },
        tip: "Think of 'jam pack', never empty."
      },
      {
        id: 32,
        word: "Maintenant ",
        meaning: {
          en: "Now",
          fa: "اکنون"
        },
        pronunciation: "mahn-ten-ahng",
        example: {
          fr: "Je le fais maintenant.",
          en: "I am doing it now.",
          fa: "من اکنون این کار را می‌کنم."
        },
        tip: "Main time is now."
      },
      {
        id: 33,
        word: "Bientôt ",
        meaning: {
          en: "Soon",
          fa: "بزودی"
        },
        pronunciation: "byehn-toh",
        example: {
          fr: "Je vais partir bientôt.",
          en: "I am leaving soon.",
          fa: "من بزودی می‌روم."
        },
        tip: "Bien' leads to 'soon'."
      },
      {
        id: 34,
        word: "Tard ",
        meaning: {
          en: "Late",
          fa: "دیر"
        },
        pronunciation: "tahrd",
        example: {
          fr: "Il est déjà tard.",
          en: "It's already late.",
          fa: "او قبلاً دیر کرده است."
        },
        tip: "Think ‘Tardy’ means late."
      },
      {
        id: 35,
        word: "Tôt ",
        meaning: {
          en: "Early",
          fa: "زود"
        },
        pronunciation: "toht",
        example: {
          fr: "Je me lève tôt.",
          en: "I wake up early.",
          fa: "من زود بیدار می‌شوم."
        },
        tip: "Toe touches the ground early."
      },
      {
        id: 36,
        word: "Hier ",
        meaning: {
          en: "Yesterday",
          fa: "دیروز"
        },
        pronunciation: "ee-er",
        example: {
          fr: "Hier, j'ai visité un musée.",
          en: "Yesterday, I visited a museum.",
          fa: "دیروز به یک موزه رفتم."
        },
        tip: "Think 'history' for 'yesterday'."
      },
      {
        id: 37,
        word: "Aujourd’hui ",
        meaning: {
          en: "Today",
          fa: "امروز"
        },
        pronunciation: "oh-zhoor-dwee",
        example: {
          fr: "Aujourd’hui, il fait beau.",
          en: "Today, the weather is nice.",
          fa: "امروز هوا خوب است."
        },
        tip: "Think 'day of today' for 'Aujourd’hui'."
      },
      {
        id: 38,
        word: "Demain ",
        meaning: {
          en: "Tomorrow",
          fa: "فردا"
        },
        pronunciation: "duh-mahn",
        example: {
          fr: "Demain, je travaillerai tard.",
          en: "Tomorrow, I will work late.",
          fa: "فردا دیر کار خواهم کرد."
        },
        tip: "Sounds like 'duh, man, the future tomorrow'."
      },
      {
        id: 39,
        word: "Prochain ",
        meaning: {
          en: "Next",
          fa: "بعدی"
        },
        pronunciation: "pro-shahn",
        example: {
          fr: "Le mois prochain, je voyagerai.",
          en: "Next month, I will travel.",
          fa: "ماه بعدی سفر خواهم کرد."
        },
        tip: "Relate to 'pro chain' - the next link."
      },
      {
        id: 40,
        word: "Entendu ",
        meaning: {
          en: "Heard",
          fa: "شنیده"
        },
        pronunciation: "on-tahn-due",
        example: {
          fr: "J'ai bien entendu tes conseils.",
          en: "I clearly heard your advice.",
          fa: "نصیحتت را به وضوح شنیدم."
        },
        tip: "Sounds like 'on tune' to be heard."
      },
      {
        id: 41,
        word: "Bienvenue ",
        meaning: {
          en: "Welcome",
          fa: "خوش آمدید"
        },
        pronunciation: "bee-en-venu",
        example: {
          fr: "Bienvenue à Paris!",
          en: "Welcome to Paris!",
          fa: "به پاریس خوش آمدید!"
        },
        tip: "Think of 'be invited' to remember welcome."
      },
      {
        id: 42,
        word: "À plus tard ",
        meaning: {
          en: "See you later",
          fa: "بعدا می‌بینمت"
        },
        pronunciation: "ah ploo tar",
        example: {
          fr: "À plus tard, mon ami.",
          en: "See you later, my friend.",
          fa: "فعلا خداحافظ دوست من."
        },
        tip: "Remember 'plus' as more time later."
      },
      {
        id: 43,
        word: "Félicitations ",
        meaning: {
          en: "Congratulations",
          fa: "تبریک می‌گویم"
        },
        pronunciation: "feh-lee-see-ta-syon",
        example: {
          fr: "Félicitations pour ton diplôme!",
          en: "Congratulations on your degree!",
          fa: "تبریک بابت مدرکت!"
        },
        tip: "Finish with elation for congratulations."
      },
      {
        id: 44,
        word: "Bonne chance ",
        meaning: {
          en: "Good luck",
          fa: "موفق باشی"
        },
        pronunciation: "bon shawns",
        example: {
          fr: "Bonne chance avec les examens.",
          en: "Good luck with the exams.",
          fa: "با امتحانات موفق باشی."
        },
        tip: "Remember 'bon' as good."
      },
      {
        id: 45,
        word: "Bon voyage ",
        meaning: {
          en: "Have a nice trip",
          fa: "سفر خوبی داشته باشی"
        },
        pronunciation: "bon vwa-yazh",
        example: {
          fr: "Bon voyage à Rome!",
          en: "Have a nice trip to Rome!",
          fa: "سفر خوبی به رم داشته باشی!"
        },
        tip: "Think 'voyage' is trip."
      },
      {
        id: 46,
        word: "Bon appétit ",
        meaning: {
          en: "Enjoy your meal",
          fa: "نوش جان"
        },
        pronunciation: "bon ap-ay-tee",
        example: {
          fr: "Bon appétit à tous!",
          en: "Enjoy your meal everyone!",
          fa: "نوش جان به همه!"
        },
        tip: "Say it before meals."
      },
      {
        id: 47,
        word: "De rien ",
        meaning: {
          en: "You're welcome",
          fa: "خواهش می‌کنم"
        },
        pronunciation: "duh ree-ehn",
        example: {
          fr: "Merci! De rien.",
          en: "Thank you! You're welcome.",
          fa: "ممنون! خواهش می‌کنم."
        },
        tip: "Say after 'thank you'."
      },
      {
        id: 48,
        word: "C’est ça ",
        meaning: {
          en: "That's it",
          fa: "همین است"
        },
        pronunciation: "say sah",
        example: {
          fr: "C’est ça, nous avons terminé.",
          en: "That's it, we're done.",
          fa: "همین است، ما تمام کردیم."
        },
        tip: "Use to confirm something."
      },
      {
        id: 49,
        word: "D’accord ",
        meaning: {
          en: "Agreed",
          fa: "موافق"
        },
        pronunciation: "dah-kor",
        example: {
          fr: "D’accord, je vais le faire.",
          en: "Agreed, I will do it.",
          fa: "موافق، من انجام می‌دهم."
        },
        tip: "Use to show agreement."
      },
      {
        id: 50,
        word: "Important ",
        meaning: {
          en: "Important",
          fa: "مهم"
        },
        pronunciation: "ahm-por-tahng",
        example: {
          fr: "C’est un document important.",
          en: "It's an important document.",
          fa: "این یک سند مهم است."
        },
        tip: "Linked with priority."
      },
      {
        id: 51,
        word: "Famille ",
        meaning: {
          en: "Family",
          fa: "خانواده"
        },
        pronunciation: "fa-mee",
        example: {
          fr: "J'aime ma famille.",
          en: "I love my family.",
          fa: "من خانواده‌ام را دوست دارم."
        },
        tip: "Think of family photo album."
      },
      {
        id: 52,
        word: "Père ",
        meaning: {
          en: "Father",
          fa: "پدر"
        },
        pronunciation: "pehr",
        example: {
          fr: "Mon père est gentil.",
          en: "My father is kind.",
          fa: "پدر من مهربان است."
        },
        tip: "Relate Père to 'Papa'."
      },
      {
        id: 53,
        word: "Mère ",
        meaning: {
          en: "Mother",
          fa: "مادر"
        },
        pronunciation: "mehr",
        example: {
          fr: "Ma mère est docteur.",
          en: "My mother is a doctor.",
          fa: "مادر من یک دکتر است."
        },
        tip: "Think of 'Maternal'."
      },
      {
        id: 54,
        word: "Fils ",
        meaning: {
          en: "Son",
          fa: "پسر"
        },
        pronunciation: "fees",
        example: {
          fr: "Son fils est intelligent.",
          en: "Her son is intelligent.",
          fa: "پسر او باهوش است."
        },
        tip: "Sounds like 'Phil's son'."
      },
      {
        id: 55,
        word: "Fille ",
        meaning: {
          en: "Daughter",
          fa: "دختر"
        },
        pronunciation: "fee-yuh",
        example: {
          fr: "Sa fille est artiste.",
          en: "Her daughter is an artist.",
          fa: "دختر او یک هنرمند است."
        },
        tip: "Imagine 'fille' as 'female child'."
      },
      {
        id: 56,
        word: "Frère ",
        meaning: {
          en: "Brother",
          fa: "برادر"
        },
        pronunciation: "frair",
        example: {
          fr: "Mon frère est gentil.",
          en: "My brother is kind.",
          fa: "برادرم مهربان است."
        },
        tip: "Sounds like 'fair'."
      },
      {
        id: 57,
        word: "Sœur ",
        meaning: {
          en: "Sister",
          fa: "خواهر"
        },
        pronunciation: "sur",
        example: {
          fr: "Ma sœur aime lire.",
          en: "My sister likes to read.",
          fa: "خواهرم دوست دارد کتاب بخواند."
        },
        tip: "Think 'sir'."
      },
      {
        id: 58,
        word: "Mari ",
        meaning: {
          en: "Husband",
          fa: "شوهر"
        },
        pronunciation: "mah-ree",
        example: {
          fr: "Son mari est drôle.",
          en: "Her husband is funny.",
          fa: "شوهرش بامزه است."
        },
        tip: "Think 'marry'."
      },
      {
        id: 59,
        word: "Femme ",
        meaning: {
          en: "Wife",
          fa: "همسر"
        },
        pronunciation: "fam",
        example: {
          fr: "Sa femme est médecin.",
          en: "His wife is a doctor.",
          fa: "همسرش دکتر است."
        },
        tip: "Rhyme with 'ham'."
      },
      {
        id: 60,
        word: "Oncle ",
        meaning: {
          en: "Uncle",
          fa: "عمو"
        },
        pronunciation: "onkl",
        example: {
          fr: "Mon oncle visite demain.",
          en: "My uncle visits tomorrow.",
          fa: "عموم فردا به دیدار می‌آید."
        },
        tip: "Sounds like 'ankle'."
      },
      {
        id: 61,
        word: "Tante ",
        meaning: {
          en: "Aunt",
          fa: "عمه یا خاله"
        },
        pronunciation: "tahnt",
        example: {
          fr: "Ma tante est gentille.",
          en: "My aunt is nice.",
          fa: "عمه‌ی من مهربان است."
        },
        tip: "Think of 'taunt' without the 'u'."
      },
      {
        id: 62,
        word: "Cousin ",
        meaning: {
          en: "Cousin",
          fa: "پسر عمو، دختر عمو، ..."
        },
        pronunciation: "koo-zan",
        example: {
          fr: "Mon cousin habite à Paris.",
          en: "My cousin lives in Paris.",
          fa: "پسر عموی من در پاریس زندگی می‌کند."
        },
        tip: "Same as English 'cousin'."
      },
      {
        id: 63,
        word: "Cousine ",
        meaning: {
          en: "Female cousin",
          fa: "دختر عمو یا ..."
        },
        pronunciation: "koo-zeen",
        example: {
          fr: "Ma cousine adore la danse.",
          en: "My female cousin loves dancing.",
          fa: "دختر عموی من عاشق رقص است."
        },
        tip: "Just add an 'e' to cousin for female."
      },
      {
        id: 64,
        word: "Grand-père ",
        meaning: {
          en: "Grandfather",
          fa: "پدربزرگ"
        },
        pronunciation: "gron-payr",
        example: {
          fr: "Mon grand-père raconte des histoires.",
          en: "My grandfather tells stories.",
          fa: "پدر بزرگم داستان می‌گوید."
        },
        tip: "Think 'grand pear' for old wisdom."
      },
      {
        id: 65,
        word: "Grand-mère ",
        meaning: {
          en: "Grandmother",
          fa: "مادربزرگ"
        },
        pronunciation: "gron-mair",
        example: {
          fr: "Ma grand-mère cuisine bien.",
          en: "My grandmother cooks well.",
          fa: "مادر بزرگم خوب آشپزی می‌کند."
        },
        tip: "Picture a 'grand mayor' as a matriarch."
      },
      {
        id: 66,
        word: "Petit-fils ",
        meaning: {
          en: "Grandson",
          fa: "نوه پسر"
        },
        pronunciation: "puh-tee-feese",
        example: {
          fr: "Mon petit-fils est adorable.",
          en: "My grandson is adorable.",
          fa: "نوه پسر من دوست‌داشتنی است."
        },
        tip: "Think 'little son'."
      },
      {
        id: 67,
        word: "Petite-fille ",
        meaning: {
          en: "Granddaughter",
          fa: "نوه دختر"
        },
        pronunciation: "puh-teet-feey",
        example: {
          fr: "Ma petite-fille aime la danse.",
          en: "My granddaughter loves dancing.",
          fa: "نوه دختر من عاشق رقص است."
        },
        tip: "Think 'little girl'."
      },
      {
        id: 68,
        word: "Parents ",
        meaning: {
          en: "Parents",
          fa: "والدین"
        },
        pronunciation: "pah-rahnts",
        example: {
          fr: "Mes parents sont très gentils.",
          en: "My parents are very kind.",
          fa: "والدین من خیلی مهربان هستند."
        },
        tip: "Similar to English 'parents'."
      },
      {
        id: 69,
        word: "Enfant ",
        meaning: {
          en: "Child",
          fa: "کودک"
        },
        pronunciation: "ohn-fahn",
        example: {
          fr: "L'enfant joue dans le parc.",
          en: "The child is playing in the park.",
          fa: "کودک در پارک بازی می‌کند."
        },
        tip: "Think of 'infant'."
      },
      {
        id: 70,
        word: "Bébé ",
        meaning: {
          en: "Baby",
          fa: "نوزاد"
        },
        pronunciation: "bay-bay",
        example: {
          fr: "Le bébé dort paisiblement.",
          en: "The baby sleeps peacefully.",
          fa: "نوزاد به آرامی می‌خوابد."
        },
        tip: "Sounds like 'baby'."
      },
      {
        id: 71,
        word: "Ami ",
        meaning: {
          en: "Friend",
          fa: "دوست"
        },
        pronunciation: "A-mee",
        example: {
          fr: "Il est mon ami.",
          en: "He is my friend.",
          fa: "او دوست من است."
        },
        tip: "Think of 'amicable'."
      },
      {
        id: 72,
        word: "Amie ",
        meaning: {
          en: "Girlfriend",
          fa: "دوست دختر"
        },
        pronunciation: "A-mee",
        example: {
          fr: "Elle est mon amie.",
          en: "She is my friend.",
          fa: "او دوست من است."
        },
        tip: "Similar to 'ami', but feminine."
      },
      {
        id: 73,
        word: "Copain ",
        meaning: {
          en: "Boyfriend",
          fa: "دوست پسر"
        },
        pronunciation: "Ko-pan",
        example: {
          fr: "Il est mon copain.",
          en: "He is my boyfriend.",
          fa: "او دوست پسر من است."
        },
        tip: "Think of 'company'."
      },
      {
        id: 74,
        word: "Copine ",
        meaning: {
          en: "Girlfriend",
          fa: "دوست دختر"
        },
        pronunciation: "Ko-peen",
        example: {
          fr: "Elle est ma copine.",
          en: "She is my girlfriend.",
          fa: "او دوست دختر من است."
        },
        tip: "Feminine form of 'Copain'."
      },
      {
        id: 75,
        word: "Collègue ",
        meaning: {
          en: "Colleague",
          fa: "همکار"
        },
        pronunciation: "koh-lehg",
        example: {
          fr: "Mon collègue travaille bien.",
          en: "My colleague works well.",
          fa: "همکارم خوب کار می‌کند."
        },
        tip: "Sounds like 'colleague'."
      },
      {
        id: 76,
        word: "Voisin ",
        meaning: {
          en: "Neighbor",
          fa: "همسایه"
        },
        pronunciation: "vwa-zan",
        example: {
          fr: "Le voisin est amical.",
          en: "The neighbor is friendly.",
          fa: "همسایه دوستانه است."
        },
        tip: "Think of 'voice-in' the neighborhood."
      },
      {
        id: 77,
        word: "Voisine ",
        meaning: {
          en: "Neighbor",
          fa: "همسایه"
        },
        pronunciation: "vwa-zeen",
        example: {
          fr: "La voisine est gentille.",
          en: "The neighbor is kind.",
          fa: "همسایه مهربان است."
        },
        tip: "Female neighbor voisine reminds of 'voice in'."
      },
      {
        id: 78,
        word: "Monsieur ",
        meaning: {
          en: "Mister",
          fa: "آقا"
        },
        pronunciation: "muh-syur",
        example: {
          fr: "Monsieur Dupont est ici.",
          en: "Mr. Dupont is here.",
          fa: "آقای دوپونت اینجاست."
        },
        tip: "Monsieur sounds similar to 'My sir'."
      },
      {
        id: 79,
        word: "Madame ",
        meaning: {
          en: "Madam",
          fa: "خانم"
        },
        pronunciation: "ma-dam",
        example: {
          fr: "Madame Dupont est allée.",
          en: "Mrs. Dupont has gone.",
          fa: "خانم دوپونت رفته است."
        },
        tip: "Madame is similar to 'My dame'."
      },
      {
        id: 80,
        word: "Mademoiselle ",
        meaning: {
          en: "Miss",
          fa: "دوشیزه"
        },
        pronunciation: "mad-mwa-zel",
        example: {
          fr: "Mademoiselle Dupont est jeune.",
          en: "Miss Dupont is young.",
          fa: "دوشیزه دوپونت جوان است."
        },
        tip: "Mademoiselle refers to an unmarried lady."
      },
      {
        id: 81,
        word: "Homme ",
        meaning: {
          en: "Man",
          fa: "مرد"
        },
        pronunciation: "om",
        example: {
          fr: "L'homme est ici.",
          en: "The man is here.",
          fa: "مرد اینجا است."
        },
        tip: "Think of 'hombre' in Spanish."
      },
      {
        id: 82,
        word: "Femme ",
        meaning: {
          en: "Woman",
          fa: "زن"
        },
        pronunciation: "fam",
        example: {
          fr: "La femme parle.",
          en: "The woman speaks.",
          fa: "زن صحبت می‌کند."
        },
        tip: "F-emme sounds like femme."
      },
      {
        id: 83,
        word: "Garçon ",
        meaning: {
          en: "Boy",
          fa: "پسر"
        },
        pronunciation: "gahr-sohn",
        example: {
          fr: "Le garçon joue.",
          en: "The boy plays.",
          fa: "پسر بازی می‌کند."
        },
        tip: "Remember the restaurant waiter."
      },
      {
        id: 84,
        word: "Fille ",
        meaning: {
          en: "Girl",
          fa: "دختر"
        },
        pronunciation: "feey",
        example: {
          fr: "La fille court.",
          en: "The girl runs.",
          fa: "دختر می‌دود."
        },
        tip: "Looks like 'file' but it's a girl."
      },
      {
        id: 85,
        word: "Jeune ",
        meaning: {
          en: "Young",
          fa: "جوان"
        },
        pronunciation: "zhuhn",
        example: {
          fr: "Il est jeune.",
          en: "He is young.",
          fa: "او جوان است."
        },
        tip: "Similar to 'junior'."
      },
      {
        id: 86,
        word: "Adolescent ",
        meaning: {
          en: "Teen",
          fa: "نوجوان"
        },
        pronunciation: "a-do-les-ont",
        example: {
          fr: "L'adolescent aime le sport.",
          en: "The teen likes sports.",
          fa: "نوجوان ورزش را دوست دارد."
        },
        tip: "Sounds like 'adolescent' in English."
      },
      {
        id: 87,
        word: "Adulte ",
        meaning: {
          en: "Adult",
          fa: "بزرگسال"
        },
        pronunciation: "a-dylt",
        example: {
          fr: "L'adulte lit un livre.",
          en: "The adult is reading a book.",
          fa: "بزرگسال در حال خواندن کتاب است."
        },
        tip: "Sounds like 'adult'."
      },
      {
        id: 88,
        word: "Personne ",
        meaning: {
          en: "Person",
          fa: "فرد"
        },
        pronunciation: "per-sonn",
        example: {
          fr: "La personne est heureuse.",
          en: "The person is happy.",
          fa: "فرد خوشحال است."
        },
        tip: "Think of 'person'."
      },
      {
        id: 89,
        word: "Gens ",
        meaning: {
          en: "People",
          fa: "مردم"
        },
        pronunciation: "zhon",
        example: {
          fr: "Les gens aiment voyager.",
          en: "People like to travel.",
          fa: "مردم دوست دارند سفر کنند."
        },
        tip: "Think of the collective 'people'."
      },
      {
        id: 90,
        word: "Invité ",
        meaning: {
          en: "Guest",
          fa: "مهمان"
        },
        pronunciation: "an-vee-tey",
        example: {
          fr: "L'invité est arrivé.",
          en: "The guest has arrived.",
          fa: "مهمان رسیده است."
        },
        tip: "Similar to 'invited' guest."
      },
      {
        id: 91,
        word: "Hôte ",
        meaning: {
          en: "Host",
          fa: "میزبان"
        },
        pronunciation: "oat",
        example: {
          fr: "L'hôte accueille ses invités.",
          en: "The host welcomes his guests.",
          fa: "میزبان از مهمانانش استقبال می‌کند."
        },
        tip: "Think of hospitality."
      },
      {
        id: 92,
        word: "Patron ",
        meaning: {
          en: "Boss",
          fa: "رئیس"
        },
        pronunciation: "pa-tron",
        example: {
          fr: "Le patron donne des instructions.",
          en: "The boss gives instructions.",
          fa: "رئیس دستورالعمل‌ها را می‌دهد."
        },
        tip: "A patron is like a pattern of leadership."
      },
      {
        id: 93,
        word: "Employé ",
        meaning: {
          en: "Employee",
          fa: "کارمند"
        },
        pronunciation: "om-plwah",
        example: {
          fr: "L'employé travaille dur.",
          en: "The employee works hard.",
          fa: "کارمند سخت کار می‌کند."
        },
        tip: "Think of employment."
      },
      {
        id: 94,
        word: "Chef ",
        meaning: {
          en: "Chef",
          fa: "آشپز"
        },
        pronunciation: "shef",
        example: {
          fr: "Le chef prépare un plat.",
          en: "The chef prepares a dish.",
          fa: "آشپز یک غذا آماده می‌کند."
        },
        tip: "A chef is chief of the kitchen."
      },
      {
        id: 95,
        word: "Leader ",
        meaning: {
          en: "Leader",
          fa: "رهبر"
        },
        pronunciation: "lee-der",
        example: {
          fr: "Le leader inspire l'équipe.",
          en: "The leader inspires the team.",
          fa: "رهبر گروه را الهام می‌بخشد."
        },
        tip: "A leader shows the lead."
      },
      {
        id: 96,
        word: "Responsable ",
        meaning: {
          en: "Responsible",
          fa: "مسئول"
        },
        pronunciation: "res-pon-suh-buhl",
        example: {
          fr: "Il est responsable de l'équipe.",
          en: "He is responsible for the team.",
          fa: "او مسئول تیم است."
        },
        tip: "Think of being accountable."
      },
      {
        id: 97,
        word: "Camarade ",
        meaning: {
          en: "Comrade",
          fa: "رفیق"
        },
        pronunciation: "kam-uh-rad",
        example: {
          fr: "Mon camarade est gentil.",
          en: "My comrade is kind.",
          fa: "رفیق من مهربان است."
        },
        tip: "Sounds like 'comrade'."
      },
      {
        id: 98,
        word: "Partenaire ",
        meaning: {
          en: "Partner",
          fa: "شریک"
        },
        pronunciation: "par-tuh-nair",
        example: {
          fr: "Elle est ma partenaire de danse.",
          en: "She is my dance partner.",
          fa: "او شریک رقص من است."
        },
        tip: "Think of 'partner' in business or dance."
      },
      {
        id: 99,
        word: "Connaissance ",
        meaning: {
          en: "Acquaintance",
          fa: "آشنایی"
        },
        pronunciation: "kon-eh-sawns",
        example: {
          fr: "J'ai une connaissance en France.",
          en: "I have an acquaintance in France.",
          fa: "من در فرانسه آشنایی دارم."
        },
        tip: "Sounds like 'cognizance', related to knowing."
      },
      {
        id: 100,
        word: "Proche ",
        meaning: {
          en: "Close",
          fa: "نزدیک"
        },
        pronunciation: "prosh",
        example: {
          fr: "Elle habite proche de l'école.",
          en: "She lives close to the school.",
          fa: "او نزدیک مدرسه زندگی می‌کند."
        },
        tip: "Think of 'approach' as coming close."
      },
      {
        id: 101,
        word: "Matin ",
        meaning: {
          en: "Morning",
          fa: "صبح"
        },
        pronunciation: "mah-tan",
        example: {
          fr: "Je me lève tôt le matin.",
          en: "I wake up early in the morning.",
          fa: "من صبح زود بیدار می‌شوم."
        },
        tip: "Think of 'matins,' a morning prayer."
      },
      {
        id: 102,
        word: "Midi ",
        meaning: {
          en: "Noon",
          fa: "ظهر"
        },
        pronunciation: "mee-dee",
        example: {
          fr: "Nous déjeunons à midi.",
          en: "We have lunch at noon.",
          fa: "ما ظهر ناهار می‌خوریم."
        },
        tip: "Midi resembles 'midday'."
      },
      {
        id: 103,
        word: "Après-midi ",
        meaning: {
          en: "Afternoon",
          fa: "بعد از ظهر"
        },
        pronunciation: "ah-prey-mee-dee",
        example: {
          fr: "Je fais du sport cet après-midi.",
          en: "I am playing sports this afternoon.",
          fa: "من امروز بعد از ظهر ورزش می‌کنم."
        },
        tip: "Après means after; think 'after noon'."
      },
      {
        id: 104,
        word: "Soir ",
        meaning: {
          en: "Evening",
          fa: "شب"
        },
        pronunciation: "swahr",
        example: {
          fr: "Nous dînons le soir.",
          en: "We have dinner in the evening.",
          fa: "ما شب شام می‌خوریم."
        },
        tip: "Soir sounds like 'soirée,' an evening party."
      },
      {
        id: 105,
        word: "Nuit ",
        meaning: {
          en: "Night",
          fa: "شب"
        },
        pronunciation: "nwee",
        example: {
          fr: "La nuit est belle.",
          en: "The night is beautiful.",
          fa: "شب زیبا است."
        },
        tip: "Think of a dark night sky."
      },
      {
        id: 106,
        word: "Repos ",
        meaning: {
          en: "Rest",
          fa: "استراحت"
        },
        pronunciation: "ruh-poh",
        example: {
          fr: "Le repos est nécessaire.",
          en: "Rest is necessary.",
          fa: "استراحت لازم است."
        },
        tip: "Think of repose and relaxation."
      },
      {
        id: 107,
        word: "Travail ",
        meaning: {
          en: "Work",
          fa: "کار"
        },
        pronunciation: "truh-vye",
        example: {
          fr: "Le travail est important.",
          en: "Work is important.",
          fa: "کار مهم است."
        },
        tip: "Think of 'travel' for a journey of work."
      },
      {
        id: 108,
        word: "Tâche ",
        meaning: {
          en: "Task",
          fa: "وظیفه"
        },
        pronunciation: "tahsh",
        example: {
          fr: "Une tâche doit être accomplie.",
          en: "A task must be accomplished.",
          fa: "یک وظیفه باید انجام شود."
        },
        tip: "Think of a 'task to tackle'."
      },
      {
        id: 109,
        word: "Pause ",
        meaning: {
          en: "Break",
          fa: "وقفه"
        },
        pronunciation: "pohz",
        example: {
          fr: "Prenons une pause.",
          en: "Let's take a break.",
          fa: "بیایید وقفه بگیریم."
        },
        tip: "Think of a 'pause' in action."
      },
      {
        id: 110,
        word: "Repas ",
        meaning: {
          en: "Meal",
          fa: "غذا"
        },
        pronunciation: "ruh-pah",
        example: {
          fr: "Je prends un repas.",
          en: "I have a meal.",
          fa: "من غذا می‌خورم."
        },
        tip: "Think of repeat, as meals repeat daily."
      },
      {
        id: 111,
        word: "Petit-déjeuner ",
        meaning: {
          en: "Breakfast",
          fa: "صبحانه"
        },
        pronunciation: "puh-tee deh-zhuh-ner",
        example: {
          fr: "Je prends mon petit-déjeuner.",
          en: "I have my breakfast.",
          fa: "من صبحانه می‌خورم."
        },
        tip: "Remember 'petit' means small, like a small meal in the morning."
      },
      {
        id: 112,
        word: "Déjeuner ",
        meaning: {
          en: "Lunch",
          fa: "ناهار"
        },
        pronunciation: "deh-zhuh-ner",
        example: {
          fr: "Nous déjeunons à midi.",
          en: "We have lunch at noon.",
          fa: "ما ظهر ناهار می خوریم."
        },
        tip: "Think about a day journey, having lunch."
      },
      {
        id: 113,
        word: "Dîner ",
        meaning: {
          en: "Dinner",
          fa: "شام"
        },
        pronunciation: "dee-neh",
        example: {
          fr: "Nous dînons ensemble.",
          en: "We have dinner together.",
          fa: "ما با هم شام می‌خوریم."
        },
        tip: "Sounds like dinner."
      },
      {
        id: 114,
        word: "Collation ",
        meaning: {
          en: "Snack",
          fa: "تنقلات"
        },
        pronunciation: "koh-lah-syon",
        example: {
          fr: "Je prends une collation.",
          en: "I have a snack.",
          fa: "من یک میان‌وعده می‌خورم."
        },
        tip: "Think of collate, as gathering a quick bite."
      },
      {
        id: 115,
        word: "Boisson ",
        meaning: {
          en: "Drink",
          fa: "نوشیدنی"
        },
        pronunciation: "bwasson",
        example: {
          fr: "Je veux une boisson, s'il vous plaît.",
          en: "I want a drink, please.",
          fa: "من یک نوشیدنی می‌خواهم، لطفاً."
        },
        tip: "Think 'beverages' at a café."
      },
      {
        id: 116,
        word: "Eau ",
        meaning: {
          en: "Water",
          fa: "آب"
        },
        pronunciation: "oh",
        example: {
          fr: "L'eau est froide.",
          en: "The water is cold.",
          fa: "آب سرد است."
        },
        tip: "Eau sounds like 'ocean'."
      },
      {
        id: 117,
        word: "Cuisine ",
        meaning: {
          en: "Kitchen",
          fa: "آشپزخانه"
        },
        pronunciation: "kwee-zeen",
        example: {
          fr: "La cuisine est grande.",
          en: "The kitchen is big.",
          fa: "آشپزخانه بزرگ است."
        },
        tip: "Cuisine is 'cooking' space."
      },
      {
        id: 118,
        word: "Salle de bain ",
        meaning: {
          en: "Bathroom",
          fa: "حمام"
        },
        pronunciation: "sall deh ban",
        example: {
          fr: "La salle de bain est propre.",
          en: "The bathroom is clean.",
          fa: "حمام تمیز است."
        },
        tip: "Room for bathing."
      },
      {
        id: 119,
        word: "Chambre ",
        meaning: {
          en: "Room",
          fa: "اتاق"
        },
        pronunciation: "sham-bruh",
        example: {
          fr: "La chambre est confortable.",
          en: "The room is comfortable.",
          fa: "اتاق راحت است."
        },
        tip: "Chamber means 'room'."
      },
      {
        id: 120,
        word: "Lit ",
        meaning: {
          en: "Bed",
          fa: "تخت"
        },
        pronunciation: "lee",
        example: {
          fr: "Je suis allé au lit.",
          en: "I went to bed.",
          fa: "من به تخت رفتم."
        },
        tip: "Think of 'lit' like a 'lullaby' for bed."
      },
      {
        id: 121,
        word: "Oreiller ",
        meaning: {
          en: "Pillow",
          fa: "بالش"
        },
        pronunciation: "oh-ray-yay",
        example: {
          fr: "J'ai besoin de mon oreiller.",
          en: "I need my pillow.",
          fa: "من به بالشم نیاز دارم."
        },
        tip: "Think of 'oreiller' as 'rest' and 'soft'."
      },
      {
        id: 122,
        word: "Couverture ",
        meaning: {
          en: "Blanket",
          fa: "پتو"
        },
        pronunciation: "koo-ver-ture",
        example: {
          fr: "Elle a une couverture chaude.",
          en: "She has a warm blanket.",
          fa: "او یک پتوی گرم دارد."
        },
        tip: "Cover under a blanket."
      },
      {
        id: 123,
        word: "Chaise ",
        meaning: {
          en: "Chair",
          fa: "صندلی"
        },
        pronunciation: "shez",
        example: {
          fr: "Je m'assieds sur la chaise.",
          en: "I sit on the chair.",
          fa: "من روی صندلی می‌نشینم."
        },
        tip: "Shed' your weight on a chair to rest."
      },
      {
        id: 124,
        word: "Table ",
        meaning: {
          en: "Table",
          fa: "میز"
        },
        pronunciation: "tabl",
        example: {
          fr: "La table est grande.",
          en: "The table is big.",
          fa: "میز بزرگ است."
        },
        tip: "Think of 'tabl' as a 'tablet' flat surface."
      },
      {
        id: 125,
        word: "Fenêtre ",
        meaning: {
          en: "Window",
          fa: "پنجره"
        },
        pronunciation: "fuh-neh-truh",
        example: {
          fr: "Il regarde par la fenêtre.",
          en: "He is looking through the window.",
          fa: "او از پنجره نگاه می‌کند."
        },
        tip: "Think of 'fennel' by the window."
      },
      {
        id: 126,
        word: "Porte ",
        meaning: {
          en: "Door",
          fa: "در"
        },
        pronunciation: "port",
        example: {
          fr: "Il ouvre la porte.",
          en: "He opens the door.",
          fa: "او در را باز می‌کند."
        },
        tip: "Imagine a 'port' as a door to a new city."
      },
      {
        id: 127,
        word: "Clé ",
        meaning: {
          en: "Key",
          fa: "کلید"
        },
        pronunciation: "klay",
        example: {
          fr: "Voici la clé de ma voiture.",
          en: "Here is the key to my car.",
          fa: "این کلید ماشین من است."
        },
        tip: "Think of 'clay' shaping keys."
      },
      {
        id: 128,
        word: "Escalier ",
        meaning: {
          en: "Stairs",
          fa: "پله‌"
        },
        pronunciation: "ehs-ka-lyay",
        example: {
          fr: "Il monte l'escalier.",
          en: "He goes up the stairs.",
          fa: "او از پله‌ها بالا می‌رود."
        },
        tip: "Envision 'escalate' a stairway to heaven."
      },
      {
        id: 129,
        word: "Ascenseur ",
        meaning: {
          en: "Elevator",
          fa: "آسانسور"
        },
        pronunciation: "ah-sahn-sur",
        example: {
          fr: "L'ascenseur est en panne.",
          en: "The elevator is broken.",
          fa: "آسانسور خراب است."
        },
        tip: "Relate 'ascend' with 'ascenseur'."
      },
      {
        id: 130,
        word: "Courrier ",
        meaning: {
          en: "Mail",
          fa: "نامه"
        },
        pronunciation: "koo-rye",
        example: {
          fr: "J'ai reçu un courrier.",
          en: "I received a mail.",
          fa: "یک نامه دریافت کردم."
        },
        tip: "Think of a post office."
      },
      {
        id: 131,
        word: "Lettre ",
        meaning: {
          en: "Letter",
          fa: "نامه"
        },
        pronunciation: "letr",
        example: {
          fr: "J'écris une lettre.",
          en: "I am writing a letter.",
          fa: "دارم نامه‌ مینویسم."
        },
        tip: "Similar to 'letter' in postal letters."
      },
      {
        id: 132,
        word: "Timbre ",
        meaning: {
          en: "Stamp",
          fa: "تمبر"
        },
        pronunciation: "tam-bruh",
        example: {
          fr: "Je colle un timbre.",
          en: "I stick a stamp.",
          fa: "یک تمبر می‌چسبانم."
        },
        tip: "Think of postage stamps."
      },
      {
        id: 133,
        word: "Facture ",
        meaning: {
          en: "Invoice",
          fa: "فاکتور"
        },
        pronunciation: "fak-toor",
        example: {
          fr: "Je dois payer la facture.",
          en: "I have to pay the invoice.",
          fa: "باید فاکتور را پرداخت کنم."
        },
        tip: "Related to 'Bill'."
      },
      {
        id: 134,
        word: "Agenda ",
        meaning: {
          en: "Diary",
          fa: "دفترچه"
        },
        pronunciation: "a-jenda",
        example: {
          fr: "J'ai mis ça dans mon agenda.",
          en: "I put it in my diary.",
          fa: "این را در دفترچه‌ یادداشت گذاشتم."
        },
        tip: "Think of a planner."
      },
      {
        id: 135,
        word: "Planning ",
        meaning: {
          en: "Planning",
          fa: "برنامه‌ریزی"
        },
        pronunciation: "plah-ning",
        example: {
          fr: "J'ai un planning chargé.",
          en: "I have a busy planning.",
          fa: "من یک برنامه‌ریزی شلوغ دارم."
        },
        tip: "Think of planning a party."
      },
      {
        id: 136,
        word: "Rendez-vous ",
        meaning: {
          en: "Meeting",
          fa: "قرار"
        },
        pronunciation: "rahn-day-voo",
        example: {
          fr: "J'ai un rendez-vous à midi.",
          en: "I have a meeting at noon.",
          fa: "من ظهر قرار دارم."
        },
        tip: "Sounds like RON-day-VOO."
      },
      {
        id: 137,
        word: "Temps libre ",
        meaning: {
          en: "Free time",
          fa: "وقت آزاد"
        },
        pronunciation: "tohm lee-bruh",
        example: {
          fr: "J'aime lire pendant mon temps libre.",
          en: "I like to read during my free time.",
          fa: "در وقت آزادی‌ام دوست دارم کتاب بخوانم."
        },
        tip: "Remember: Free TEMPered."
      },
      {
        id: 138,
        word: "Loisirs ",
        meaning: {
          en: "Leisure",
          fa: "سرگرمی‌ها"
        },
        pronunciation: "lwah-zeer",
        example: {
          fr: "Les loisirs sont importants.",
          en: "Leisure activities are important.",
          fa: "سرگرمی‌ها مهم هستند."
        },
        tip: "LOISIR sounds Leisure."
      },
      {
        id: 139,
        word: "Devoirs ",
        meaning: {
          en: "Homework",
          fa: "تکالیف"
        },
        pronunciation: "duh-vwahr",
        example: {
          fr: "Je fais mes devoirs le soir.",
          en: "I do my homework in the evening.",
          fa: "من در شب تکالیفم را انجام می‌دهم."
        },
        tip: "Think: Duty to do homework."
      },
      {
        id: 140,
        word: "Tâche ménagère ",
        meaning: {
          en: "Chore",
          fa: "کار منزل"
        },
        pronunciation: "tash men-ah-zhair",
        example: {
          fr: "Je dois faire une tâche ménagère.",
          en: "I have to do a chore.",
          fa: "من باید یک کار منزل انجام دهم."
        },
        tip: "Think of 'task' in the house."
      },
      {
        id: 141,
        word: "Ménage ",
        meaning: {
          en: "Housework",
          fa: "کار خانه"
        },
        pronunciation: "men-ahj",
        example: {
          fr: "Le ménage est important.",
          en: "Housework is important.",
          fa: "کار خانه مهم است."
        },
        tip: "Similar to 'manage' the house."
      },
      {
        id: 142,
        word: "Lessive ",
        meaning: {
          en: "Laundry",
          fa: "لباس‌شویی"
        },
        pronunciation: "less-eve",
        example: {
          fr: "Je fais la lessive aujourd'hui.",
          en: "I am doing laundry today.",
          fa: "امروز لباسشویی انجام می‌دهم."
        },
        tip: "Think of 'leaves' of clothing."
      },
      {
        id: 143,
        word: "Vaisselle ",
        meaning: {
          en: "Dishwashing",
          fa: "ظرف‌شویی"
        },
        pronunciation: "vess-sell",
        example: {
          fr: "Je dois faire la vaisselle.",
          en: "I have to do the dishes.",
          fa: "من باید ظروف را بشویم."
        },
        tip: "Visualize 'vessel' for dishes."
      },
      {
        id: 144,
        word: "Balade ",
        meaning: {
          en: "Walk",
          fa: "پیاده‌روی"
        },
        pronunciation: "ba-lahd",
        example: {
          fr: "Nous faisons une balade.",
          en: "We are going for a walk.",
          fa: "ما برای پیاده‌روی می‌رویم."
        },
        tip: "Like a 'ballad' walk."
      },
      {
        id: 145,
        word: "Sortie ",
        meaning: {
          en: "Exit",
          fa: "خروج"
        },
        pronunciation: "sor-tee",
        example: {
          fr: "Je prends la sortie de l'école.",
          en: "I take the school exit.",
          fa: "من خروجی مدرسه را می‌گیرم."
        },
        tip: "Think of 'sortie' as a 'way out'."
      },
      {
        id: 146,
        word: "Réveil ",
        meaning: {
          en: "Alarm clock",
          fa: "ساعت زنگ‌دار"
        },
        pronunciation: "ray-vay",
        example: {
          fr: "Mon réveil sonne à six heures.",
          en: "My alarm clock rings at six o'clock.",
          fa: "ساعت زنگ‌دار من ساعت شش به صدا درمی‌آید."
        },
        tip: "Think 'réveil' as 'wake device'."
      },
      {
        id: 147,
        word: "Habitude ",
        meaning: {
          en: "Habit",
          fa: "عادت"
        },
        pronunciation: "ah-bee-tood",
        example: {
          fr: "J'ai l'habitude de lire chaque soir.",
          en: "I have a habit of reading every evening.",
          fa: "من عادت به خواندن هر شب دارم."
        },
        tip: "Remember 'habitude' as 'habit you do'."
      },
      {
        id: 148,
        word: "Occupation ",
        meaning: {
          en: "Occupation",
          fa: "شغل"
        },
        pronunciation: "aw-koo-pa-syon",
        example: {
          fr: "Mon occupation principale est enseignante.",
          en: "My main occupation is teaching.",
          fa: "شغل اصلی من معلمی است."
        },
        tip: "Think of 'occupation' as 'work'."
      },
      {
        id: 149,
        word: "Rituel ",
        meaning: {
          en: "Ritual",
          fa: "آیین"
        },
        pronunciation: "ree-twel",
        example: {
          fr: "Le rituel du matin est important pour moi.",
          en: "The morning ritual is important to me.",
          fa: "آیین صبحگاهی برای من مهم است."
        },
        tip: "Think 'rituel' as 'routine with meaning'."
      },
      {
        id: 150,
        word: "Routine ",
        meaning: {
          en: "Routine",
          fa: "روتین"
        },
        pronunciation: "roo-teen",
        example: {
          fr: "Ma routine du matin est simple.",
          en: "My morning routine is simple.",
          fa: "روتین صبحگاهی من ساده است."
        },
        tip: "Link it to routine tasks."
      },
      {
        id: 151,
        word: "Pain ",
        meaning: {
          en: "Bread",
          fa: "نان"
        },
        pronunciation: "pahn",
        example: {
          fr: "J'aime le pain frais.",
          en: "I love fresh bread.",
          fa: "من نان تازه را دوست دارم."
        },
        tip: "Pain sounds like pan, where bread is made."
      },
      {
        id: 152,
        word: "Fromage ",
        meaning: {
          en: "Cheese",
          fa: "پنیر"
        },
        pronunciation: "fro-mahzh",
        example: {
          fr: "Le fromage est délicieux.",
          en: "Cheese is delicious.",
          fa: "پنیر خوشمزه است."
        },
        tip: "Fromage is like Fromage Museum."
      },
      {
        id: 153,
        word: "Lait ",
        meaning: {
          en: "Milk",
          fa: "شیر"
        },
        pronunciation: "leh",
        example: {
          fr: "Je bois du lait le matin.",
          en: "I drink milk in the morning.",
          fa: "من صبح‌ها شیر می‌نوشم."
        },
        tip: "Milk is in Latte."
      },
      {
        id: 154,
        word: "Beurre ",
        meaning: {
          en: "Butter",
          fa: "کره"
        },
        pronunciation: "burr",
        example: {
          fr: "J'ai besoin de beurre pour la recette.",
          en: "I need butter for the recipe.",
          fa: "برای دستور پخت به کره نیاز دارم."
        },
        tip: "Butter makes bread better, burr-better."
      },
      {
        id: 155,
        word: "Crème ",
        meaning: {
          en: "Cream",
          fa: "خامه"
        },
        pronunciation: "krem",
        example: {
          fr: "J'aime la crème dans mon café.",
          en: "I like cream in my coffee.",
          fa: "من خامه در قهوه‌ام را دوست دارم."
        },
        tip: "Think of 'ice cream'."
      },
      {
        id: 156,
        word: "Oeuf ",
        meaning: {
          en: "Egg",
          fa: "تخم‌مرغ"
        },
        pronunciation: "uhf",
        example: {
          fr: "Je mange un œuf au petit-déjeuner.",
          en: "I eat an egg for breakfast.",
          fa: "من تخم‌مرغ برای صبحانه می‌خورم."
        },
        tip: "Oeuf sounds like 'off'."
      },
      {
        id: 157,
        word: "Viande ",
        meaning: {
          en: "Meat",
          fa: "گوشت"
        },
        pronunciation: "vyahnd",
        example: {
          fr: "Je préfère la viande blanche.",
          en: "I prefer white meat.",
          fa: "من گوشت سفید را ترجیح می‌دهم."
        },
        tip: "Viande sounds like 'beyond'."
      },
      {
        id: 158,
        word: "Poulet ",
        meaning: {
          en: "Chicken",
          fa: "مرغ"
        },
        pronunciation: "poo-leh",
        example: {
          fr: "Le poulet est délicieux.",
          en: "The chicken is delicious.",
          fa: "مرغ خوشمزه است."
        },
        tip: "Think of 'poultry'."
      },
      {
        id: 159,
        word: "Bœuf ",
        meaning: {
          en: "Beef",
          fa: "گوشت گاو"
        },
        pronunciation: "buhf",
        example: {
          fr: "Le bœuf est cuit à la perfection.",
          en: "The beef is cooked to perfection.",
          fa: "گوشت گاو به خوبی پخته شده است."
        },
        tip: "Sounds like 'buff' for tough beef."
      },
      {
        id: 160,
        word: "Poisson ",
        meaning: {
          en: "Fish",
          fa: "ماهی"
        },
        pronunciation: "pwah-sawn",
        example: {
          fr: "Le poisson nage dans l'eau.",
          en: "The fish swims in the water.",
          fa: "ماهی در آب شنا می‌کند."
        },
        tip: "Think of 'poise' in water."
      },
      {
        id: 161,
        word: "Légume ",
        meaning: {
          en: "Vegetable",
          fa: "سبزی"
        },
        pronunciation: "lay-goom",
        example: {
          fr: "Je mange un légume chaque jour.",
          en: "I eat a vegetable every day.",
          fa: "من هر روز یک سبزی می‌خورم."
        },
        tip: "Relate to 'legume' which is a type of vegetable."
      },
      {
        id: 162,
        word: "Fruit ",
        meaning: {
          en: "Fruit",
          fa: "میوه"
        },
        pronunciation: "fro-wee",
        example: {
          fr: "J'achète un fruit au marché.",
          en: "I buy a fruit at the market.",
          fa: "من در بازار میوه می‌خرم."
        },
        tip: "Similar to the English word 'fruit'."
      },
      {
        id: 163,
        word: "Pomme ",
        meaning: {
          en: "Apple",
          fa: "سیب"
        },
        pronunciation: "pawm",
        example: {
          fr: "Je mange une pomme.",
          en: "I eat an apple.",
          fa: "من یک سیب می‌خورم."
        },
        tip: "Think of 'pome' like a pomegranate."
      },
      {
        id: 164,
        word: "Poire ",
        meaning: {
          en: "Pear",
          fa: "گلابی"
        },
        pronunciation: "pwahr",
        example: {
          fr: "La poire est douce.",
          en: "The pear is sweet.",
          fa: "گلابی شیرین است."
        },
        tip: "Sounds like 'pear'."
      },
      {
        id: 165,
        word: "Orange ",
        meaning: {
          en: "Orange",
          fa: "پرتقال"
        },
        pronunciation: "aw-rahnzh",
        example: {
          fr: "Je bois du jus d'orange.",
          en: "I drink orange juice.",
          fa: "من آب پرتقال می‌نوشم."
        },
        tip: "Think of the color and fruit."
      },
      {
        id: 166,
        word: "Banane ",
        meaning: {
          en: "Banana",
          fa: "موز"
        },
        pronunciation: "bah-nahn",
        example: {
          fr: "Je mange une banane.",
          en: "I eat a banana.",
          fa: "من یک موز می‌خورم."
        },
        tip: "Think of banana split."
      },
      {
        id: 167,
        word: "Fraise ",
        meaning: {
          en: "Strawberry",
          fa: "توت‌فرنگی"
        },
        pronunciation: "frehz",
        example: {
          fr: "La fraise est rouge.",
          en: "The strawberry is red.",
          fa: "توت‌فرنگی قرمز است."
        },
        tip: "Rhyme with 'craze'."
      },
      {
        id: 168,
        word: "Raisin ",
        meaning: {
          en: "Grape",
          fa: "انگور"
        },
        pronunciation: "reh-zan",
        example: {
          fr: "Le raisin est sucré.",
          en: "The grape is sweet.",
          fa: "انگور شیرین است."
        },
        tip: "Think of raisins."
      },
      {
        id: 169,
        word: "Tomate ",
        meaning: {
          en: "Tomato",
          fa: "گوجه‌فرنگی"
        },
        pronunciation: "to-maht",
        example: {
          fr: "La tomate est mûre.",
          en: "The tomato is ripe.",
          fa: "گوجه‌فرنگی رسیده است."
        },
        tip: "Think of tomato soup."
      },
      {
        id: 170,
        word: "Carotte ",
        meaning: {
          en: "Carrot",
          fa: "هویج"
        },
        pronunciation: "ka-rot",
        example: {
          fr: "Je mange une carotte.",
          en: "I am eating a carrot.",
          fa: "من دارم هویج می‌خورم."
        },
        tip: "Think of the orange vegetable."
      },
      {
        id: 171,
        word: "Pomme de terre ",
        meaning: {
          en: "Potato",
          fa: "سیب‌زمینی"
        },
        pronunciation: "pom duh tair",
        example: {
          fr: "La pomme de terre est délicieuse.",
          en: "The potato is delicious.",
          fa: "سیب‌زمینی خوشمزه است."
        },
        tip: "Apple of the earth'."
      },
      {
        id: 172,
        word: "Oignon ",
        meaning: {
          en: "Onion",
          fa: "پیاز"
        },
        pronunciation: "aw-nyon",
        example: {
          fr: "L'oignon est piquant.",
          en: "The onion is sharp.",
          fa: "پیاز تند است."
        },
        tip: "Sounds like onion."
      },
      {
        id: 173,
        word: "Ail ",
        meaning: {
          en: "Garlic",
          fa: "سیر"
        },
        pronunciation: "eye",
        example: {
          fr: "J'ajoute de l'ail.",
          en: "I add garlic.",
          fa: "من سیر اضافه می‌کنم."
        },
        tip: "Think of the clove."
      },
      {
        id: 174,
        word: "Épice ",
        meaning: {
          en: "Spice",
          fa: "ادویه"
        },
        pronunciation: "eh-pees",
        example: {
          fr: "J'utilise une épice.",
          en: "I use a spice.",
          fa: "من از ادویه استفاده می‌کنم."
        },
        tip: "Spicy and savory."
      },
      {
        id: 175,
        word: "Sel ",
        meaning: {
          en: "Salt",
          fa: "نمک"
        },
        pronunciation: "sehl",
        example: {
          fr: "Le sel est sur la table.",
          en: "The salt is on the table.",
          fa: "نمک روی میز است."
        },
        tip: "Think of salted caramel."
      },
      {
        id: 176,
        word: "Poivre ",
        meaning: {
          en: "Pepper",
          fa: "فلفل"
        },
        pronunciation: "pwav-ruh",
        example: {
          fr: "J'aime ajouter du poivre.",
          en: "I like to add pepper.",
          fa: "دوست دارم فلفل اضافه کنم."
        },
        tip: "Poivre sounds like pepper pot."
      },
      {
        id: 177,
        word: "Sucre ",
        meaning: {
          en: "Sugar",
          fa: "شکر"
        },
        pronunciation: "sue-cruh",
        example: {
          fr: "Je prends du sucre avec mon café.",
          en: "I take sugar with my coffee.",
          fa: "من با قهوه‌ام شکر می‌خورم."
        },
        tip: "Sucre sounds like sweet."
      },
      {
        id: 178,
        word: "Miel ",
        meaning: {
          en: "Honey",
          fa: "عسل"
        },
        pronunciation: "mee-ehl",
        example: {
          fr: "Le miel est délicieux sur le pain.",
          en: "Honey is delicious on bread.",
          fa: "عسل روی نان خوشمزه است."
        },
        tip: "Miel like the bee's meal."
      },
      {
        id: 179,
        word: "Confiture ",
        meaning: {
          en: "Jam",
          fa: "مربا"
        },
        pronunciation: "cohn-fee-teur",
        example: {
          fr: "La confiture est faite de fraises.",
          en: "The jam is made from strawberries.",
          fa: "مربا از توت‌فرنگی درست شده است."
        },
        tip: "Confit sounds like confection."
      },
      {
        id: 180,
        word: "Huile ",
        meaning: {
          en: "Oil",
          fa: "روغن"
        },
        pronunciation: "oo-eel",
        example: {
          fr: "Je cuisine avec de l'huile.",
          en: "I cook with oil.",
          fa: "من با روغن آشپزی می‌کنم."
        },
        tip: "Think of lubricant."
      },
      {
        id: 181,
        word: "Vinaigre ",
        meaning: {
          en: "Vinegar",
          fa: "سرکه"
        },
        pronunciation: "vee-nay-gr",
        example: {
          fr: "Ajoute du vinaigre à la salade.",
          en: "Add vinegar to the salad.",
          fa: "به سالاد سرکه اضافه کن."
        },
        tip: "Sour seasoning use."
      },
      {
        id: 182,
        word: "Riz ",
        meaning: {
          en: "Rice",
          fa: "برنج"
        },
        pronunciation: "reez",
        example: {
          fr: "Il aime manger du riz.",
          en: "He likes to eat rice.",
          fa: "او دوست دارد برنج بخورد."
        },
        tip: "Grain staple food."
      },
      {
        id: 183,
        word: "Pâtes ",
        meaning: {
          en: "Pasta",
          fa: "پاستا"
        },
        pronunciation: "pat",
        example: {
          fr: "Les pâtes sont délicieuses.",
          en: "The pasta is delicious.",
          fa: "پاستا خوشمزه است."
        },
        tip: "Think Italian noodles."
      },
      {
        id: 184,
        word: "Soupe ",
        meaning: {
          en: "Soup",
          fa: "سوپ"
        },
        pronunciation: "soop",
        example: {
          fr: "Elle prépare une soupe chaude.",
          en: "She makes a hot soup.",
          fa: "او یک سوپ داغ درست می‌کند."
        },
        tip: "Often starter dish."
      },
      {
        id: 185,
        word: "Salade ",
        meaning: {
          en: "Salad",
          fa: "سالاد"
        },
        pronunciation: "sah-lahd",
        example: {
          fr: "Je voudrais une salade, s'il vous plaît.",
          en: "I would like a salad, please.",
          fa: "من یک سالاد می‌خواهم، لطفاً."
        },
        tip: "Think of 'salad' with a French twist."
      },
      {
        id: 186,
        word: "Gâteau ",
        meaning: {
          en: "Cake",
          fa: "کیک"
        },
        pronunciation: "gah-toh",
        example: {
          fr: "Elle a préparé un gâteau au chocolat.",
          en: "She made a chocolate cake.",
          fa: "او یک کیک شکلاتی درست کرد."
        },
        tip: "Think of 'gateau' as a fancy 'cake'."
      },
      {
        id: 187,
        word: "Dessert ",
        meaning: {
          en: "Dessert",
          fa: "دسر"
        },
        pronunciation: "deh-zairt",
        example: {
          fr: "Je vais prendre un dessert.",
          en: "I will have a dessert.",
          fa: "من یک دسر خواهم گرفت."
        },
        tip: "Dessert is served last, but remembered first."
      },
      {
        id: 188,
        word: "Boisson ",
        meaning: {
          en: "Drink",
          fa: "نوشیدنی"
        },
        pronunciation: "bwah-sohn",
        example: {
          fr: "Je veux une boisson froide.",
          en: "I want a cold drink.",
          fa: "من یک نوشیدنی سرد می‌خواهم."
        },
        tip: "Boisson sounds like 'bubbly' drink."
      },
      {
        id: 189,
        word: "Café ",
        meaning: {
          en: "Coffee",
          fa: "قهوه"
        },
        pronunciation: "kah-fay",
        example: {
          fr: "Il boit un café chaque matin.",
          en: "He drinks a coffee every morning.",
          fa: "او هر صبح یک قهوه می‌نوشد."
        },
        tip: "Remember café as a place to get coffee."
      },
      {
        id: 190,
        word: "Thé ",
        meaning: {
          en: "Tea",
          fa: "چای"
        },
        pronunciation: "tay",
        example: {
          fr: "Je voudrais du thé.",
          en: "I would like some tea.",
          fa: "من مقداری چای می‌خواهم."
        },
        tip: "Think of 'tay' for tea."
      },
      {
        id: 191,
        word: "Vin ",
        meaning: {
          en: "Wine",
          fa: "شراب"
        },
        pronunciation: "va",
        example: {
          fr: "Le vin est rouge.",
          en: "The wine is red.",
          fa: "شراب قرمز است."
        },
        tip: "Vin rhymes with 'pin'."
      },
      {
        id: 192,
        word: "Bière ",
        meaning: {
          en: "Beer",
          fa: "آبجو"
        },
        pronunciation: "byair",
        example: {
          fr: "Il commande une bière.",
          en: "He orders a beer.",
          fa: "او یک آبجو سفارش می‌دهد."
        },
        tip: "Bière sounds like 'beer'."
      },
      {
        id: 193,
        word: "Jus ",
        meaning: {
          en: "Juice",
          fa: "آبمیوه"
        },
        pronunciation: "joo",
        example: {
          fr: "Je bois du jus.",
          en: "I am drinking juice.",
          fa: "من در حال نوشیدن آب‌میوه هستم."
        },
        tip: "Think of 'joo' as in 'juice'."
      },
      {
        id: 194,
        word: "Faim ",
        meaning: {
          en: "Hunger",
          fa: "گرسنگی"
        },
        pronunciation: "fa",
        example: {
          fr: "J'ai faim.",
          en: "I am hungry.",
          fa: "من گرسنه هستم."
        },
        tip: "Faim is like 'famished'."
      },
      {
        id: 195,
        word: "Soif ",
        meaning: {
          en: "Thirst",
          fa: "تشنگی"
        },
        pronunciation: "swahf",
        example: {
          fr: "J'ai soif.",
          en: "I am thirsty.",
          fa: "من تشنه هستم."
        },
        tip: "Think of 'soft' but with a thirst."
      },
      {
        id: 196,
        word: "Délicieux ",
        meaning: {
          en: "Delicious",
          fa: "لذیذ"
        },
        pronunciation: "day-lee-syuh",
        example: {
          fr: "Ce goûter est délicieux.",
          en: "This snack is delicious.",
          fa: "این میان‌وعده لذیذ است."
        },
        tip: "Sounds like 'delish'."
      },
      {
        id: 197,
        word: "Goût ",
        meaning: {
          en: "Taste",
          fa: "طعم"
        },
        pronunciation: "goo",
        example: {
          fr: "Ton goût est intéressant.",
          en: "Your taste is interesting.",
          fa: "سلیقه تو جالب است."
        },
        tip: "Good flavor is 'good'."
      },
      {
        id: 198,
        word: "Recette ",
        meaning: {
          en: "Recipe",
          fa: "دستور پخت"
        },
        pronunciation: "ruh-set",
        example: {
          fr: "Tu as une recette de gâteau?",
          en: "Do you have a cake recipe?",
          fa: "آیا دستور پخت کیک داری؟"
        },
        tip: "Think 'reset the kitchen' for a new dish."
      },
      {
        id: 199,
        word: "Cuisiner ",
        meaning: {
          en: "Cook",
          fa: "پختن"
        },
        pronunciation: "kwee-zee-nay",
        example: {
          fr: "J'aime cuisiner les légumes.",
          en: "I like to cook vegetables.",
          fa: "من دوست دارم سبزیجات بپزم."
        },
        tip: "Sounds like 'cuisine' + 'air'."
      },
      {
        id: 200,
        word: "Servir ",
        meaning: {
          en: "Serve",
          fa: "خدمت"
        },
        pronunciation: "sair-veer",
        example: {
          fr: "Je vais servir le dîner.",
          en: "I'll serve dinner.",
          fa: "من شام را خدمت می کنم."
        },
        tip: "Think of serving refreshments."
      },
      {
        id: 201,
        word: "Voyage ",
        meaning: {
          en: "Trip",
          fa: "سفر"
        },
        pronunciation: "vwah-yahzh",
        example: {
          fr: "Nous partons en voyage demain.",
          en: "We leave on a trip tomorrow.",
          fa: "ما فردا به سفر می‌رویم."
        },
        tip: "Remember 'voyage' as a long journey."
      },
      {
        id: 202,
        word: "Transport ",
        meaning: {
          en: "Transport",
          fa: "حمل و نقل"
        },
        pronunciation: "trsahn-spor",
        example: {
          fr: "Le transport public est rapide.",
          en: "Public transport is fast.",
          fa: "حمل و نقل عمومی سریع است."
        },
        tip: "Think about moving things or people."
      },
      {
        id: 203,
        word: "Voiture ",
        meaning: {
          en: "Car",
          fa: "ماشین"
        },
        pronunciation: "vwah-tewr",
        example: {
          fr: "Ma voiture est rouge.",
          en: "My car is red.",
          fa: "ماشین من قرمز است."
        },
        tip: "A car makes 'vroom' sounds."
      },
      {
        id: 204,
        word: "Bus ",
        meaning: {
          en: "Bus",
          fa: "اتوبوس"
        },
        pronunciation: "buhs",
        example: {
          fr: "Je prends le bus tous les matins.",
          en: "I take the bus every morning.",
          fa: "هر روز صبح اتوبوس می‌گیرم."
        },
        tip: "Think about school buses."
      },
      {
        id: 205,
        word: "Train ",
        meaning: {
          en: "Train",
          fa: "قطار"
        },
        pronunciation: "Trayn",
        example: {
          fr: "Le train part à huit heures.",
          en: "The train leaves at eight o'clock.",
          fa: "قطار ساعت هشت حرکت می‌کند."
        },
        tip: "Trains run on tracks."
      },
      {
        id: 206,
        word: "Avion ",
        meaning: {
          en: "Plane",
          fa: "هواپیما"
        },
        pronunciation: "Ah-vee-on",
        example: {
          fr: "L'avion vole haut dans le ciel.",
          en: "The plane flies high in the sky.",
          fa: "هواپیما در ارتفاع بالایی پرواز می‌کند."
        },
        tip: "Think of 'aviation' regarding flying."
      },
      {
        id: 207,
        word: "Bateau ",
        meaning: {
          en: "Boat",
          fa: "قایق"
        },
        pronunciation: "Bah-to",
        example: {
          fr: "Le bateau est sur la mer.",
          en: "The boat is on the sea.",
          fa: "قایق روی دریا است."
        },
        tip: "Boats float on water."
      },
      {
        id: 208,
        word: "Taxi ",
        meaning: {
          en: "Taxi",
          fa: "تاکسی"
        },
        pronunciation: "Taxi",
        example: {
          fr: "Le taxi est en route.",
          en: "The taxi is on the way.",
          fa: "تاکسی در راه است."
        },
        tip: "Think of 'taximeter.'"
      },
      {
        id: 209,
        word: "Métro ",
        meaning: {
          en: "Metro",
          fa: "مترو"
        },
        pronunciation: "Met-roh",
        example: {
          fr: "Le métro arrive bientôt.",
          en: "The metro arrives soon.",
          fa: "مترو به زودی می‌رسد."
        },
        tip: "Subway in Paris."
      },
      {
        id: 210,
        word: "Vélo ",
        meaning: {
          en: "Bike",
          fa: "دوچرخه"
        },
        pronunciation: "vay-lo",
        example: {
          fr: "Je vais à l'école en vélo.",
          en: "I go to school by bike.",
          fa: "من با دوچرخه به مدرسه می‌روم."
        },
        tip: "Think 'vehicle' with a twist."
      },
      {
        id: 211,
        word: "Moto ",
        meaning: {
          en: "Moto",
          fa: "موتور"
        },
        pronunciation: "moh-toh",
        example: {
          fr: "Il conduit une moto rapide.",
          en: "He rides a fast motorcycle.",
          fa: "او یک موتورسیکلت سریع می‌راند."
        },
        tip: "Sounds like 'motor' with a twist."
      },
      {
        id: 212,
        word: "Trottinette ",
        meaning: {
          en: "Scooter",
          fa: "اسکوتر"
        },
        pronunciation: "troh-tee-net",
        example: {
          fr: "Elle aime faire de la trottinette.",
          en: "She likes to scooter.",
          fa: "او اسکوتر سواری را دوست دارد."
        },
        tip: "Trotting on a ride."
      },
      {
        id: 213,
        word: "Station ",
        meaning: {
          en: "Station",
          fa: "ایستگاه"
        },
        pronunciation: "sta-syon",
        example: {
          fr: "Nous devons aller à la station de métro.",
          en: "We have to go to the metro station.",
          fa: "ما باید به ایستگاه مترو برویم."
        },
        tip: "Think of a stop or place."
      },
      {
        id: 214,
        word: "Gare ",
        meaning: {
          en: "Train station",
          fa: "ایستگاه قطار"
        },
        pronunciation: "gar",
        example: {
          fr: "La gare est à côté du parc.",
          en: "The train station is next to the park.",
          fa: "ایستگاه قطار کنار پارک است."
        },
        tip: "Guard the trains."
      },
      {
        id: 215,
        word: "Aéroport ",
        meaning: {
          en: "Airport",
          fa: "فرودگاه"
        },
        pronunciation: "ay-roh-port",
        example: {
          fr: "Je vais à l'aéroport.",
          en: "I am going to the airport.",
          fa: "من به فرودگاه می‌روم."
        },
        tip: "Think of aero-port for air travel."
      },
      {
        id: 216,
        word: "Port ",
        meaning: {
          en: "Port",
          fa: "بندر"
        },
        pronunciation: "pohr",
        example: {
          fr: "Le bateau arrive au port.",
          en: "The boat arrives at the port.",
          fa: "قایق به بندر می‌رسد."
        },
        tip: "Think of a place for arriving ships."
      },
      {
        id: 217,
        word: "Billet ",
        meaning: {
          en: "Ticket",
          fa: "بلیط"
        },
        pronunciation: "bee-yay",
        example: {
          fr: "J'ai besoin d'un billet.",
          en: "I need a ticket.",
          fa: "من به بلیط نیاز دارم."
        },
        tip: "A ticket buys you entry, like a bill."
      },
      {
        id: 218,
        word: "Bagage ",
        meaning: {
          en: "Baggage",
          fa: "چمدان"
        },
        pronunciation: "bah-gahzh",
        example: {
          fr: "Où est mon bagage?",
          en: "Where is my baggage?",
          fa: "چمدان من کجاست؟"
        },
        tip: "Bags for travel."
      },
      {
        id: 219,
        word: "Valise ",
        meaning: {
          en: "Suitcase",
          fa: "چمدان"
        },
        pronunciation: "vah-leez",
        example: {
          fr: "Ma valise est lourde.",
          en: "My suitcase is heavy.",
          fa: "چمدان من سنگین است."
        },
        tip: "A 'valise' carries your valuables."
      },
      {
        id: 220,
        word: "Passeport ",
        meaning: {
          en: "Passport",
          fa: "پاسپورت"
        },
        pronunciation: "pas-port",
        example: {
          fr: "J'ai perdu mon passeport.",
          en: "I lost my passport.",
          fa: "من پاسپورتم را گم کرده‌ام."
        },
        tip: "Think of 'pass through port'."
      },
      {
        id: 221,
        word: "Douane ",
        meaning: {
          en: "Customs",
          fa: "گمرک"
        },
        pronunciation: "dwan",
        example: {
          fr: "La douane vérifie les bagages.",
          en: "The customs check the luggage.",
          fa: "گمرک چمدان‌ها را بررسی می‌کند."
        },
        tip: "Douane sounds like 'duty' for custom duty."
      },
      {
        id: 222,
        word: "Contrôle ",
        meaning: {
          en: "Check",
          fa: "بازرسی"
        },
        pronunciation: "kon-trol",
        example: {
          fr: "Le contrôle des passeports est rapide.",
          en: "The passport check is quick.",
          fa: "بازرسی پاسپورت سریع است."
        },
        tip: "Looks like 'control', as in 'inspect'."
      },
      {
        id: 223,
        word: "Arrivée ",
        meaning: {
          en: "Arrival",
          fa: "ورود"
        },
        pronunciation: "a-ree-vay",
        example: {
          fr: "L'arrivée du train est à 18h.",
          en: "The train arrival is at 6 PM.",
          fa: "ورود قطار ساعت ۶ است."
        },
        tip: "Think 'arrive' for arrival."
      },
      {
        id: 224,
        word: "Départ ",
        meaning: {
          en: "Departure",
          fa: "خروج"
        },
        pronunciation: "day-par",
        example: {
          fr: "Le départ est prévu à 10h.",
          en: "The departure is scheduled at 10 AM.",
          fa: "خروج برای ساعت ۱۰ برنامه‌ریزی شده است."
        },
        tip: "Think 'depart' for departure."
      },
      {
        id: 225,
        word: "Retard ",
        meaning: {
          en: "Delay",
          fa: "تاخیر"
        },
        pronunciation: "ruh-tar",
        example: {
          fr: "Le train a du retard.",
          en: "The train is delayed.",
          fa: "قطار تاخیر دارد."
        },
        tip: "Think of 'retard' in a timing context."
      },
      {
        id: 226,
        word: "Correspondance ",
        meaning: {
          en: "Connection",
          fa: "ارتباط"
        },
        pronunciation: "core-es-pon-donce",
        example: {
          fr: "Il y a une correspondance à Lyon.",
          en: "There is a connection in Lyon.",
          fa: "یک ارتباط در لیون وجود دارد."
        },
        tip: "Think of 'correspondence' in travel."
      },
      {
        id: 227,
        word: "Escale ",
        meaning: {
          en: "Stopover",
          fa: "توقف"
        },
        pronunciation: "es-kal",
        example: {
          fr: "Notre vol a une escale à Paris.",
          en: "Our flight has a stopover in Paris.",
          fa: "پرواز ما یک توقف در پاریس دارد."
        },
        tip: "Think 'scale' as in stop on scale."
      },
      {
        id: 228,
        word: "Itinéraire ",
        meaning: {
          en: "Route",
          fa: "مسیر"
        },
        pronunciation: "ee-tee-neh-rair",
        example: {
          fr: "Voici l'itinéraire pour demain.",
          en: "Here is the route for tomorrow.",
          fa: "این مسیر فردا است."
        },
        tip: "Think of it as a planned itinerary."
      },
      {
        id: 229,
        word: "Carte ",
        meaning: {
          en: "Card",
          fa: "کارت"
        },
        pronunciation: "kart",
        example: {
          fr: "Voici votre carte d'embarquement.",
          en: "Here is your boarding pass.",
          fa: "این کارت پرواز شما است."
        },
        tip: "Think of magnetic stripe cards."
      },
      {
        id: 230,
        word: "Plan ",
        meaning: {
          en: "Plan",
          fa: "برنامه"
        },
        pronunciation: "pla",
        example: {
          fr: "Je fais un plan pour demain.",
          en: "I make a plan for tomorrow.",
          fa: "من برای فردا برنامه می‌ریزم."
        },
        tip: "Think of planning a planner."
      },
      {
        id: 231,
        word: "Route ",
        meaning: {
          en: "Route",
          fa: "مسیر"
        },
        pronunciation: "root",
        example: {
          fr: "La route est longue.",
          en: "The route is long.",
          fa: "مسیر طولانی است."
        },
        tip: "Imagine taking a road trip route."
      },
      {
        id: 232,
        word: "Autoroute ",
        meaning: {
          en: "Highway",
          fa: "بزرگراه"
        },
        pronunciation: "oh-toh-root",
        example: {
          fr: "Nous prenons l'autoroute.",
          en: "We take the highway.",
          fa: "ما بزرگراه را می‌گیریم."
        },
        tip: "Think auto road for autoroute."
      },
      {
        id: 233,
        word: "Chemin ",
        meaning: {
          en: "Path",
          fa: "راه"
        },
        pronunciation: "shuh-man",
        example: {
          fr: "Elle suit le chemin.",
          en: "She follows the path.",
          fa: "او راه را دنبال می‌کند."
        },
        tip: "Picture a charming path."
      },
      {
        id: 234,
        word: "Trajet ",
        meaning: {
          en: "Journey",
          fa: "سفر"
        },
        pronunciation: "trah-zheh",
        example: {
          fr: "Le trajet est court.",
          en: "The journey is short.",
          fa: "سفر کوتاه است."
        },
        tip: "Think of a travel journey."
      },
      {
        id: 235,
        word: "Péage ",
        meaning: {
          en: "Toll",
          fa: "عوارضی"
        },
        pronunciation: "peh-ahzh",
        example: {
          fr: "Je dois payer le péage.",
          en: "I need to pay the toll.",
          fa: "باید عوارضی پرداخت کنم."
        },
        tip: "Think of 'pay' at toll booths."
      },
      {
        id: 236,
        word: "Essence ",
        meaning: {
          en: "Gasoline",
          fa: "بنزین"
        },
        pronunciation: "es-sahnce",
        example: {
          fr: "Je fais le plein d'essence.",
          en: "I am filling up with gasoline.",
          fa: "دارم بنزین می‌زنم."
        },
        tip: "Think of 'essential fuel'."
      },
      {
        id: 237,
        word: "Parking ",
        meaning: {
          en: "Parking",
          fa: "پارکینگ"
        },
        pronunciation: "par-keeng",
        example: {
          fr: "Le parking est plein.",
          en: "The parking is full.",
          fa: "پارکینگ پر است."
        },
        tip: "Similar to English 'parking'."
      },
      {
        id: 238,
        word: "Conduire ",
        meaning: {
          en: "Drive",
          fa: "رانندگی"
        },
        pronunciation: "kohn-dweer",
        example: {
          fr: "Je vais conduire aujourd'hui.",
          en: "I will drive today.",
          fa: "امروز رانندگی می‌کنم."
        },
        tip: "Conductor drives a train."
      },
      {
        id: 239,
        word: "Rouler ",
        meaning: {
          en: "Roll",
          fa: "حرکت کردن"
        },
        pronunciation: "roo-lehr",
        example: {
          fr: "La voiture roule lentement.",
          en: "The car rolls slowly.",
          fa: "ماشین به آرامی حرکت می‌کند."
        },
        tip: "Roll down the street."
      },
      {
        id: 240,
        word: "Piloter ",
        meaning: {
          en: "Pilot",
          fa: "پرواز"
        },
        pronunciation: "pee-loh-teh",
        example: {
          fr: "Je vais piloter l'avion.",
          en: "I am going to pilot the plane.",
          fa: "من هواپیما را هدایت می‌کنم."
        },
        tip: "Operation related to flying."
      },
      {
        id: 241,
        word: "Terminal ",
        meaning: {
          en: "Terminal",
          fa: "پایانه"
        },
        pronunciation: "ter-mee-nahl",
        example: {
          fr: "Le vol arrive au terminal.",
          en: "The flight arrives at the terminal.",
          fa: "پرواز به ترمینال می‌رسد."
        },
        tip: "End point of travel."
      },
      {
        id: 242,
        word: "Quai ",
        meaning: {
          en: "Platform",
          fa: "سکو"
        },
        pronunciation: "keh",
        example: {
          fr: "Nous attendons sur le quai.",
          en: "We are waiting on the platform.",
          fa: "ما روی سکو منتظریم."
        },
        tip: "Place where trains stop."
      },
      {
        id: 243,
        word: "Réservation ",
        meaning: {
          en: "Reservation",
          fa: "رزرو"
        },
        pronunciation: "reh-zair-va-syon",
        example: {
          fr: "J'ai une réservation à l'hôtel.",
          en: "I have a reservation at the hotel.",
          fa: "من یک رزرو در هتل دارم."
        },
        tip: "Booking ahead."
      },
      {
        id: 244,
        word: "Destination ",
        meaning: {
          en: "Destination",
          fa: "مقصد"
        },
        pronunciation: "dehs-tee-na-syon",
        example: {
          fr: "Notre destination est Paris.",
          en: "Our destination is Paris.",
          fa: "مقصد ما پاریس است."
        },
        tip: "End point of journey."
      },
      {
        id: 245,
        word: "Stationnement ",
        meaning: {
          en: "Parking",
          fa: "پارکینگ"
        },
        pronunciation: "sta-syon-mahn",
        example: {
          fr: "Le stationnement est gratuit ici.",
          en: "Parking is free here.",
          fa: "پارکینگ اینجا رایگان است."
        },
        tip: "Stationary vehicles need parking."
      },
      {
        id: 246,
        word: "Vol ",
        meaning: {
          en: "Flight",
          fa: "پرواز"
        },
        pronunciation: "vohl",
        example: {
          fr: "Le vol est à l'heure.",
          en: "The flight is on time.",
          fa: "پرواز به موقع است."
        },
        tip: "Flying 'vol'-cano."
      },
      {
        id: 247,
        word: "Embarquer ",
        meaning: {
          en: "Board",
          fa: "سوار شدن"
        },
        pronunciation: "am-bar-kay",
        example: {
          fr: "Nous allons embarquer maintenant.",
          en: "We will board now.",
          fa: "ما اکنون سوار می‌شویم."
        },
        tip: "Embark on a journey."
      },
      {
        id: 248,
        word: "Atterrir ",
        meaning: {
          en: "Land",
          fa: "فرود آمدن"
        },
        pronunciation: "ah-teh-reer",
        example: {
          fr: "L'avion va atterrir bientôt.",
          en: "The plane will land soon.",
          fa: "هواپیما به زودی فرود می‌آید."
        },
        tip: "To land on terra."
      },
      {
        id: 249,
        word: "Décoller ",
        meaning: {
          en: "Take off",
          fa: "برخاستن"
        },
        pronunciation: "day-koh-lay",
        example: {
          fr: "L'avion va décoller.",
          en: "The plane will take off.",
          fa: "هواپیما بلند می‌شود."
        },
        tip: "Decola is lift-off."
      },
      {
        id: 250,
        word: "Arrêter ",
        meaning: {
          en: "Stop",
          fa: "توقف"
        },
        pronunciation: "Ah-reh-tay",
        example: {
          fr: "Il est temps d'arrêter.",
          en: "It's time to stop.",
          fa: "وقتش رسیده که متوقف بشه."
        },
        tip: "Think of 'arrest' to imply stopping."
      },
      {
        id: 251,
        word: "Travail ",
        meaning: {
          en: "Work",
          fa: "کار"
        },
        pronunciation: "Trah-vahy",
        example: {
          fr: "Je vais au travail.",
          en: "I am going to work.",
          fa: "من به کار می‌روم."
        },
        tip: "Think of 'travel' as work is a journey."
      },
      {
        id: 252,
        word: "Métier ",
        meaning: {
          en: "Trade",
          fa: "حرفه"
        },
        pronunciation: "Meh-tee-ay",
        example: {
          fr: "Quel est ton métier?",
          en: "What is your trade?",
          fa: "حرفه تو چیست؟"
        },
        tip: "Relate it to 'mettle' showing skill."
      },
      {
        id: 253,
        word: "Profession ",
        meaning: {
          en: "Profession",
          fa: "شغل"
        },
        pronunciation: "Proh-fay-see-on",
        example: {
          fr: "Ma profession est avocat.",
          en: "My profession is a lawyer.",
          fa: "شغل من وکیل است."
        },
        tip: "Sounds like the English 'profession'."
      },
      {
        id: 254,
        word: "Carrière ",
        meaning: {
          en: "Career",
          fa: "مسیر شغلی"
        },
        pronunciation: "Kah-ree-air",
        example: {
          fr: "Elle a une belle carrière.",
          en: "She has a great career.",
          fa: "او مسیر شغلی خوبی دارد."
        },
        tip: "Think of 'care' moving through a career."
      },
      {
        id: 255,
        word: "Bureau ",
        meaning: {
          en: "Office",
          fa: "دفتر"
        },
        pronunciation: "byoo-roh",
        example: {
          fr: "Il travaille dans un bureau.",
          en: "He works in an office.",
          fa: "او در یک دفتر کار می‌کند."
        },
        tip: "Think of a bureau desk."
      },
      {
        id: 256,
        word: "Entreprise ",
        meaning: {
          en: "Company",
          fa: "شرکت"
        },
        pronunciation: "on-truh-prees",
        example: {
          fr: "Elle dirige une entreprise.",
          en: "She runs a company.",
          fa: "او یک شرکت را اداره می‌کند."
        },
        tip: "Enterprising company."
      },
      {
        id: 257,
        word: "Société ",
        meaning: {
          en: "Society",
          fa: "جامعه"
        },
        pronunciation: "soh-see-ay-tay",
        example: {
          fr: "La société évolue.",
          en: "The society is evolving.",
          fa: "جامعه در حال پیشرفت است."
        },
        tip: "Social society."
      },
      {
        id: 258,
        word: "Emploi ",
        meaning: {
          en: "Employment",
          fa: "اشتغال"
        },
        pronunciation: "om-plwah",
        example: {
          fr: "Il cherche un emploi.",
          en: "He is looking for a job.",
          fa: "او به دنبال کار می‌گردد."
        },
        tip: "Think of employee."
      },
      {
        id: 259,
        word: "Job ",
        meaning: {
          en: "Job",
          fa: "شغل"
        },
        pronunciation: "job",
        example: {
          fr: "Il a trouvé un job d'été.",
          en: "He found a summer job.",
          fa: "او یک کار تابستانی پیدا کرد."
        },
        tip: "English and French are the same."
      },
      {
        id: 260,
        word: "Patron ",
        meaning: {
          en: "Boss",
          fa: "رئیس"
        },
        pronunciation: "pah-trohn",
        example: {
          fr: "Le patron est en réunion.",
          en: "The boss is in a meeting.",
          fa: "رئیس در جلسه است."
        },
        tip: "Picture the 'patron' of a restaurant."
      },
      {
        id: 261,
        word: "Employé ",
        meaning: {
          en: "Employee",
          fa: "کارمند"
        },
        pronunciation: "awm-plwa-yay",
        example: {
          fr: "L'employé a terminé son travail.",
          en: "The employee has finished his work.",
          fa: "کارمند کارش را تمام کرده است."
        },
        tip: "Think of 'employer' and 'employee'."
      },
      {
        id: 262,
        word: "Collègue ",
        meaning: {
          en: "Colleague",
          fa: "همکار"
        },
        pronunciation: "ko-lehg",
        example: {
          fr: "Je déjeune avec un collègue.",
          en: "I have lunch with a colleague.",
          fa: "من با یک همکار ناهار می‌خورم."
        },
        tip: "If you know 'college', imagine studying with colleagues."
      },
      {
        id: 263,
        word: "Secrétaire ",
        meaning: {
          en: "Secretary",
          fa: "منشی"
        },
        pronunciation: "seh-kreh-tehr",
        example: {
          fr: "La secrétaire organise les documents.",
          en: "The secretary organizes the documents.",
          fa: "منشی اسناد را مرتب می‌کند."
        },
        tip: "Think of 'secret' tasks a secretary handles."
      },
      {
        id: 264,
        word: "Comptable ",
        meaning: {
          en: "Accountant",
          fa: "حسابدار"
        },
        pronunciation: "kom-tah-bluh",
        example: {
          fr: "Le comptable gère les finances.",
          en: "The accountant manages the finances.",
          fa: "حسابدار امور مالی را مدیریت می‌کند."
        },
        tip: "Compte' means account, think of managing money."
      },
      {
        id: 265,
        word: "Vendeur ",
        meaning: {
          en: "Seller",
          fa: "فروشنده"
        },
        pronunciation: "vahn-der",
        example: {
          fr: "Le vendeur est très gentil.",
          en: "The seller is very nice.",
          fa: "فروشنده بسیار مهربان است."
        },
        tip: "Think of vending items."
      },
      {
        id: 266,
        word: "Serveur ",
        meaning: {
          en: "Waiter",
          fa: "گارسون"
        },
        pronunciation: "ser-ver",
        example: {
          fr: "Le serveur apporte le menu.",
          en: "The waiter brings the menu.",
          fa: "گارسون منو را می آورد."
        },
        tip: "Serve customers."
      },
      {
        id: 267,
        word: "Chef ",
        meaning: {
          en: "Chef",
          fa: "آشپز"
        },
        pronunciation: "shef",
        example: {
          fr: "Le chef prépare le dîner.",
          en: "The chef prepares the dinner.",
          fa: "آشپز شام را آماده می‌کند."
        },
        tip: "Master of the kitchen."
      },
      {
        id: 268,
        word: "Ingénieur ",
        meaning: {
          en: "Engineer",
          fa: "مهندس"
        },
        pronunciation: "an-zhuh-nyehr",
        example: {
          fr: "L'ingénieur conçoit des ponts.",
          en: "The engineer designs bridges.",
          fa: "مهندس پل ها را طراحی می‌کند."
        },
        tip: "Think of innovative designs."
      },
      {
        id: 269,
        word: "Architecte ",
        meaning: {
          en: "Architect",
          fa: "معمار"
        },
        pronunciation: "ahr-kee-tekt",
        example: {
          fr: "L'architecte dessine le bâtiment.",
          en: "The architect draws the building.",
          fa: "معمار ساختمان را طراحی می‌کند."
        },
        tip: "Architects construct visions."
      },
      {
        id: 270,
        word: "Médecin ",
        meaning: {
          en: "Doctor",
          fa: "پزشک"
        },
        pronunciation: "meh-deh-sin",
        example: {
          fr: "Il est médecin.",
          en: "He is a doctor.",
          fa: "او پزشک است."
        },
        tip: "Think of 'medicine'."
      },
      {
        id: 271,
        word: "Infirmier ",
        meaning: {
          en: "Nurse",
          fa: "پرستار"
        },
        pronunciation: "an-feer-mee-ay",
        example: {
          fr: "Elle est infirmière.",
          en: "She is a nurse.",
          fa: "او پرستار است."
        },
        tip: "Think of 'infirmary'."
      },
      {
        id: 272,
        word: "Avocat ",
        meaning: {
          en: "Lawyer",
          fa: "وکیل"
        },
        pronunciation: "ah-voh-kah",
        example: {
          fr: "Il est avocat.",
          en: "He is a lawyer.",
          fa: "او وکیل است."
        },
        tip: "Think of 'advocate'."
      },
      {
        id: 273,
        word: "Juge ",
        meaning: {
          en: "Judge",
          fa: "قاضی"
        },
        pronunciation: "zhoozh",
        example: {
          fr: "Elle est juge.",
          en: "She is a judge.",
          fa: "او قاضی است."
        },
        tip: "Think of 'judicial'."
      },
      {
        id: 274,
        word: "Professeur ",
        meaning: {
          en: "Professor",
          fa: "استاد"
        },
        pronunciation: "proh-feh-suhr",
        example: {
          fr: "Il est professeur.",
          en: "He is a professor.",
          fa: "او استاد است."
        },
        tip: "Think of 'profess'."
      },
      {
        id: 275,
        word: "Enseignant ",
        meaning: {
          en: "Teacher",
          fa: "معلم"
        },
        pronunciation: "ahn-seh-nyah(n)",
        example: {
          fr: "L'enseignant explique le sujet.",
          en: "The teacher explains the topic.",
          fa: "معلم موضوع را توضیح می‌دهد."
        },
        tip: "Think of education and learning."
      },
      {
        id: 276,
        word: "Chercheur ",
        meaning: {
          en: "Researcher",
          fa: "پژوهشگر"
        },
        pronunciation: "shehr-sheur",
        example: {
          fr: "Le chercheur trouve une solution.",
          en: "The researcher finds a solution.",
          fa: "پژوهشگر راه حلی پیدا می‌کند."
        },
        tip: "Relate to search and inquiry."
      },
      {
        id: 277,
        word: "Ouvrier ",
        meaning: {
          en: "Worker",
          fa: "کارگر"
        },
        pronunciation: "oo-vree-yay",
        example: {
          fr: "L'ouvrier construit un bâtiment.",
          en: "The worker builds a building.",
          fa: "کارگر یک ساختمان می‌سازد."
        },
        tip: "Linked to manual labor."
      },
      {
        id: 278,
        word: "Technicien ",
        meaning: {
          en: "Technician",
          fa: "فنی‌کار"
        },
        pronunciation: "tehk-nee-syen",
        example: {
          fr: "Le technicien répare la machine.",
          en: "The technician repairs the machine.",
          fa: "فنی‌کار ماشین را تعمیر می‌کند."
        },
        tip: "Think of technology and repair."
      },
      {
        id: 279,
        word: "Informaticien ",
        meaning: {
          en: "Computer scientist",
          fa: "دانشجوی علوم کامپیوتر"
        },
        pronunciation: "uhn-for-mah-tee-syen",
        example: {
          fr: "L'informaticien programme une application.",
          en: "The computer scientist programs an application.",
          fa: "دانشجوی علوم کامپیوتر برنامه‌ای را طراحی می‌کند."
        },
        tip: "Linked to information and computers."
      },
      {
        id: 280,
        word: "Programmeur ",
        meaning: {
          en: "Programmer",
          fa: "برنامه‌نویس"
        },
        pronunciation: "proh-gra-meur",
        example: {
          fr: "Mon frère est programmeur.",
          en: "My brother is a programmer.",
          fa: "برادرم برنامه‌نویس است."
        },
        tip: "Think of 'program' with '-mer'."
      },
      {
        id: 281,
        word: "Journaliste ",
        meaning: {
          en: "Journalist",
          fa: "خبرنگار"
        },
        pronunciation: "zhoor-nah-leest",
        example: {
          fr: "Elle est journaliste.",
          en: "She is a journalist.",
          fa: "او خبرنگار است."
        },
        tip: "Link it to 'journal'."
      },
      {
        id: 282,
        word: "Photographe ",
        meaning: {
          en: "Photographer",
          fa: "عکاس"
        },
        pronunciation: "foh-toh-graf",
        example: {
          fr: "Il est photographe.",
          en: "He is a photographer.",
          fa: "او عکاس است."
        },
        tip: "Photo+graphy verb."
      },
      {
        id: 283,
        word: "Artiste ",
        meaning: {
          en: "Artist",
          fa: "هنرمند"
        },
        pronunciation: "ar-teest",
        example: {
          fr: "Son père est artiste.",
          en: "His father is an artist.",
          fa: "پدرش هنرمند است."
        },
        tip: "Relate to 'art'."
      },
      {
        id: 284,
        word: "Musicien ",
        meaning: {
          en: "Musician",
          fa: "موسیقیدان"
        },
        pronunciation: "mew-zee-syehn",
        example: {
          fr: "Ma sœur est musicienne.",
          en: "My sister is a musician.",
          fa: "خواهرم موسیقیدان است."
        },
        tip: "Think of 'music' with '-ian'."
      },
      {
        id: 285,
        word: "Acteur ",
        meaning: {
          en: "Actor",
          fa: "بازیگر"
        },
        pronunciation: "ak-teur",
        example: {
          fr: "Il est un acteur célèbre.",
          en: "He is a famous actor.",
          fa: "او یک بازیگر معروف است."
        },
        tip: "Think of movie star roles."
      },
      {
        id: 286,
        word: "Réalisateur ",
        meaning: {
          en: "Director",
          fa: "کارگردان"
        },
        pronunciation: "ray-ah-lees-ah-teur",
        example: {
          fr: "Le réalisateur dirige le film.",
          en: "The director directs the film.",
          fa: "کارگردان فیلم را کارگردانی می‌کند."
        },
        tip: "Leader of film creation."
      },
      {
        id: 287,
        word: "Policier ",
        meaning: {
          en: "Police officer",
          fa: "پلیس"
        },
        pronunciation: "po-lee-see-ay",
        example: {
          fr: "Le policier est en patrouille.",
          en: "The police officer is on patrol.",
          fa: "افسر پلیس در حال گشت است."
        },
        tip: "Think of law enforcement."
      },
      {
        id: 288,
        word: "Pompier ",
        meaning: {
          en: "Firefighter",
          fa: "آتش‌نشان"
        },
        pronunciation: "pom-pee-ay",
        example: {
          fr: "Le pompier éteint le feu.",
          en: "The firefighter puts out the fire.",
          fa: "آتش‌نشان آتش را خاموش می‌کند."
        },
        tip: "Think of fire emergencies."
      },
      {
        id: 289,
        word: "Militaire ",
        meaning: {
          en: "Military",
          fa: "نظامی"
        },
        pronunciation: "mee-lee-ter",
        example: {
          fr: "Le militaire travaille à la base.",
          en: "The military works at the base.",
          fa: "نظامی در پایگاه کار می‌کند."
        },
        tip: "Think of armed forces."
      },
      {
        id: 290,
        word: "Agriculteur ",
        meaning: {
          en: "Farmer",
          fa: "کشاورز"
        },
        pronunciation: "ah-gree-cool-teur",
        example: {
          fr: "L'agriculteur travaille dans le champ.",
          en: "The farmer works in the field.",
          fa: "کشاورز در مزرعه کار می‌کند."
        },
        tip: "Think agriculture."
      },
      {
        id: 291,
        word: "Chauffeur ",
        meaning: {
          en: "Driver",
          fa: "راننده"
        },
        pronunciation: "shoh-fur",
        example: {
          fr: "Le chauffeur conduit la voiture.",
          en: "The driver drives the car.",
          fa: "راننده ماشین را می‌راند."
        },
        tip: "Sounds like 'chauffeur'."
      },
      {
        id: 292,
        word: "Directeur ",
        meaning: {
          en: "Director",
          fa: "مدیر"
        },
        pronunciation: "dee-rec-teur",
        example: {
          fr: "Le directeur est au bureau.",
          en: "The director is at the office.",
          fa: "مدیر در دفتر است."
        },
        tip: "Similar to director in films."
      },
      {
        id: 293,
        word: "Gérant ",
        meaning: {
          en: "Manager",
          fa: "مدیر"
        },
        pronunciation: "zhey-ron",
        example: {
          fr: "Le gérant gère le magasin.",
          en: "The manager manages the store.",
          fa: "مدیر فروشگاه را مدیریت می‌کند."
        },
        tip: "Direct link to 'geriatric manager'."
      },
      {
        id: 294,
        word: "Recrutement ",
        meaning: {
          en: "Recruitment",
          fa: "استخدام"
        },
        pronunciation: "reh-kroo-te-mon",
        example: {
          fr: "Le recrutement est en cours.",
          en: "The recruitment is in progress.",
          fa: "فرآیند استخدام در حال انجام است."
        },
        tip: "Think 'recruitment process'."
      },
      {
        id: 295,
        word: "Entretien ",
        meaning: {
          en: "Interview",
          fa: "مصاحبه"
        },
        pronunciation: "ahn-treh-tyehn",
        example: {
          fr: "J'ai un entretien demain.",
          en: "I have an interview tomorrow.",
          fa: "من فردا مصاحبه دارم."
        },
        tip: "Think of maintaining a conversation."
      },
      {
        id: 296,
        word: "Salaire ",
        meaning: {
          en: "Salary",
          fa: "حقوق"
        },
        pronunciation: "sah-lehr",
        example: {
          fr: "Mon salaire est payé mensuellement.",
          en: "My salary is paid monthly.",
          fa: "حقوق من ماهانه پرداخت می‌شود."
        },
        tip: "Consider salary as a regular payment."
      },
      {
        id: 297,
        word: "Promotion ",
        meaning: {
          en: "Promotion",
          fa: "ارتقاء"
        },
        pronunciation: "proh-moh-syon",
        example: {
          fr: "J'ai reçu une promotion au travail.",
          en: "I got a promotion at work.",
          fa: "من در کار ارتقاء گرفتم."
        },
        tip: "Think of going forward or upward."
      },
      {
        id: 298,
        word: "Démission ",
        meaning: {
          en: "Resignation",
          fa: "استعفا"
        },
        pronunciation: "deh-mee-syon",
        example: {
          fr: "Elle a donné sa démission hier.",
          en: "She resigned yesterday.",
          fa: "او دیروز استعفا داد."
        },
        tip: "Think of quitting or leaving a job."
      },
      {
        id: 299,
        word: "Retraite ",
        meaning: {
          en: "Retirement",
          fa: "بازنشستگی"
        },
        pronunciation: "ruh-treht",
        example: {
          fr: "Il est en retraite depuis un an.",
          en: "He has been retired for a year.",
          fa: "او یک سال است که بازنشسته شده."
        },
        tip: "Think of retreating from work life."
      },
      {
        id: 300,
        word: "Stage ",
        meaning: {
          en: "Internship",
          fa: "کارآموزی"
        },
        pronunciation: "stazh",
        example: {
          fr: "Il fait un stage à l'entreprise.",
          en: "He is doing an internship at the company.",
          fa: "او در شرکت کارآموزی می‌کند."
        },
        tip: "Think of stage as a 'step' in career."
      },
      {
        id: 301,
        word: "École ",
        meaning: {
          en: "School",
          fa: "مدرسه"
        },
        pronunciation: "ay-kohl",
        example: {
          fr: "L'école commence à huit heures.",
          en: "School starts at eight o'clock.",
          fa: "مدرسه در ساعت هشت شروع می‌شود."
        },
        tip: "Think of 'école' as the start of education."
      },
      {
        id: 302,
        word: "Collège ",
        meaning: {
          en: "Middle school",
          fa: "راهنمایی"
        },
        pronunciation: "koh-lezh",
        example: {
          fr: "Le collège finit à trois heures.",
          en: "Middle school ends at three o'clock.",
          fa: "مدرسه راهنمایی در ساعت سه تمام می‌شود."
        },
        tip: "Think of 'collège' as the step before high school."
      },
      {
        id: 303,
        word: "Lycée ",
        meaning: {
          en: "High school",
          fa: "دبیرستان"
        },
        pronunciation: "lee-say",
        example: {
          fr: "Je suis au lycée maintenant.",
          en: "I am in high school now.",
          fa: "من الان در دبیرستان هستم."
        },
        tip: "Lycée is like 'license' you earn at high school."
      },
      {
        id: 304,
        word: "Université ",
        meaning: {
          en: "University",
          fa: "دانشگاه"
        },
        pronunciation: "oo-nee-vair-see-tay",
        example: {
          fr: "L'université est grande.",
          en: "The university is big.",
          fa: "دانشگاه بزرگ است."
        },
        tip: "Université sounds like 'universe' - a large place of knowledge."
      },
      {
        id: 305,
        word: "Classe ",
        meaning: {
          en: "Class",
          fa: "کلاس"
        },
        pronunciation: "klass",
        example: {
          fr: "La classe commence à neuf heures.",
          en: "The class starts at nine o'clock.",
          fa: "کلاس در ساعت نه شروع می‌شود."
        },
        tip: "Think of 'classe' as a classic part of school."
      },
      {
        id: 306,
        word: "Cours ",
        meaning: {
          en: "Course",
          fa: "دوره"
        },
        pronunciation: "koor",
        example: {
          fr: "Je vais au cours de français.",
          en: "I am going to the French course.",
          fa: "من به دوره فرانسوی می‌روم."
        },
        tip: "Think of 'course' as 'cours', similar sounding."
      },
      {
        id: 307,
        word: "Leçon ",
        meaning: {
          en: "Lesson",
          fa: "درس"
        },
        pronunciation: "leh-son",
        example: {
          fr: "La leçon commence à neuf heures.",
          en: "The lesson starts at nine o'clock.",
          fa: "درس ساعت نه شروع می‌شود."
        },
        tip: "Relate 'leçon' to 'lesson', they both start with 'le'."
      },
      {
        id: 308,
        word: "Examen ",
        meaning: {
          en: "Exam",
          fa: "آزمون"
        },
        pronunciation: "eg-zah-men",
        example: {
          fr: "Il prépare son examen final.",
          en: "He is preparing for his final exam.",
          fa: "او برای آزمون نهایی‌اش آماده می‌شود."
        },
        tip: "Both 'exam' and 'examen' start with 'exa'."
      },
      {
        id: 309,
        word: "Devoir ",
        meaning: {
          en: "Homework",
          fa: "تکالیف"
        },
        pronunciation: "duh-vwar",
        example: {
          fr: "Je dois finir mes devoirs.",
          en: "I need to finish my homework.",
          fa: "باید تکالیفم را تمام کنم."
        },
        tip: "Think of 'devoir' like doing 'duty' work."
      },
      {
        id: 310,
        word: "Livre ",
        meaning: {
          en: "Book",
          fa: "کتاب"
        },
        pronunciation: "leev-ruh",
        example: {
          fr: "J'ai acheté un nouveau livre.",
          en: "I bought a new book.",
          fa: "من یک کتاب جدید خریدم."
        },
        tip: "Think 'livre' like a 'library' full of books."
      },
      {
        id: 311,
        word: "Cahier ",
        meaning: {
          en: "Notebook",
          fa: "دفتر"
        },
        pronunciation: "kah-yay",
        example: {
          fr: "J'écris dans mon cahier.",
          en: "I write in my notebook.",
          fa: "من در دفترم می نویسم."
        },
        tip: "Think of 'carry' a notebook."
      },
      {
        id: 312,
        word: "Stylo ",
        meaning: {
          en: "Pen",
          fa: "خودکار"
        },
        pronunciation: "stee-lo",
        example: {
          fr: "J'ai besoin d'un stylo.",
          en: "I need a pen.",
          fa: "من به یک خودکار نیاز دارم."
        },
        tip: "Think of 'stylish' writing with a pen."
      },
      {
        id: 313,
        word: "Crayon ",
        meaning: {
          en: "Pencil",
          fa: "مداد"
        },
        pronunciation: "kreh-yon",
        example: {
          fr: "Je vais dessiner avec un crayon.",
          en: "I will draw with a pencil.",
          fa: "من با مداد نقاشی خواهم کرد."
        },
        tip: "Remember crayons are like colored pencils."
      },
      {
        id: 314,
        word: "Gomme ",
        meaning: {
          en: "Eraser",
          fa: "پاک‌کن"
        },
        pronunciation: "gom",
        example: {
          fr: "Je corrige avec une gomme.",
          en: "I correct with an eraser.",
          fa: "من با پاک‌کن تصحیح می‌کنم."
        },
        tip: "Gum rubs out mistakes."
      },
      {
        id: 315,
        word: "Règle ",
        meaning: {
          en: "Ruler",
          fa: "خط‌کش"
        },
        pronunciation: "reh-gl",
        example: {
          fr: "Je mesure avec une règle.",
          en: "I measure with a ruler.",
          fa: "من با خط‌کش اندازه‌گیری می‌کنم."
        },
        tip: "Rules for drawing straight lines."
      },
      {
        id: 316,
        word: "Bureau ",
        meaning: {
          en: "Desk",
          fa: "میز"
        },
        pronunciation: "byoo-roh",
        example: {
          fr: "Le bureau est en bois.",
          en: "The desk is made of wood.",
          fa: "میز از چوب ساخته شده‌ است."
        },
        tip: "Think of a 'bureau' as where business happens."
      },
      {
        id: 317,
        word: "Tableau ",
        meaning: {
          en: "Board",
          fa: "تخته"
        },
        pronunciation: "ta-blow",
        example: {
          fr: "Le tableau est blanc.",
          en: "The board is white.",
          fa: "تخته سفید است."
        },
        tip: "Imagine a 'table' showing information."
      },
      {
        id: 318,
        word: "Professeur ",
        meaning: {
          en: "Teacher",
          fa: "معلم"
        },
        pronunciation: "pro-feh-suhr",
        example: {
          fr: "Le professeur est gentil.",
          en: "The teacher is kind.",
          fa: "معلم مهربان است."
        },
        tip: "Remember 'professor' from college."
      },
      {
        id: 319,
        word: "Élève ",
        meaning: {
          en: "Student",
          fa: "دانش آموز"
        },
        pronunciation: "ay-lev",
        example: {
          fr: "L'élève étudie bien.",
          en: "The student studies well.",
          fa: "دانش آموز خوب مطالعه می‌کند."
        },
        tip: "Sounds like 'elevate' your knowledge."
      },
      {
        id: 320,
        word: "Étudiant ",
        meaning: {
          en: "Student",
          fa: "دانشجو"
        },
        pronunciation: "ay-tyoo-dyon",
        example: {
          fr: "L'étudiant lit un livre.",
          en: "The student is reading a book.",
          fa: "دانشجو در حال خواندن کتاب است."
        },
        tip: "Relate to 'study' activities."
      },
      {
        id: 321,
        word: "Savoir ",
        meaning: {
          en: "Know",
          fa: "دانستن"
        },
        pronunciation: "sah-vwar",
        example: {
          fr: "Je veux savoir la vérité.",
          en: "I want to know the truth.",
          fa: "من می‌خواهم حقیقت را بدانم."
        },
        tip: "Think of 'savoir' as 'savvy' way of knowing."
      },
      {
        id: 322,
        word: "Comprendre ",
        meaning: {
          en: "Understand",
          fa: "فهمیدن"
        },
        pronunciation: "kohm-prendre",
        example: {
          fr: "Je ne comprends pas.",
          en: "I do not understand.",
          fa: "من نمی‌فهمم."
        },
        tip: "Remember: 'Comprehend' is like comprendre."
      },
      {
        id: 323,
        word: "Étudier ",
        meaning: {
          en: "Study",
          fa: "تحصیل"
        },
        pronunciation: "eh-too-dyay",
        example: {
          fr: "J'aime étudier le français.",
          en: "I like studying French.",
          fa: "من دوست دارم فرانسوی بخوانم."
        },
        tip: "Study with enthusiasm: 'ériel'"
      },
      {
        id: 324,
        word: "Apprendre ",
        meaning: {
          en: "Learn",
          fa: "یادگیری"
        },
        pronunciation: "ah-pron-druh",
        example: {
          fr: "Il aime apprendre.",
          en: "He likes to learn.",
          fa: "او دوست دارد یاد بگیرد."
        },
        tip: "Learning is ‘applying’ knowledge."
      },
      {
        id: 325,
        word: "Enseigner ",
        meaning: {
          en: "Teach",
          fa: "آموزش دادن"
        },
        pronunciation: "ahn-sen-yay",
        example: {
          fr: "Elle enseigne bien.",
          en: "She teaches well.",
          fa: "او خوب تدریس می‌کند."
        },
        tip: "Teaching ‘ensures’ learning."
      },
      {
        id: 326,
        word: "Réviser ",
        meaning: {
          en: "Revise",
          fa: "مرور"
        },
        pronunciation: "rey-vee-zay",
        example: {
          fr: "Je dois réviser pour l'examen.",
          en: "I have to revise for the exam.",
          fa: "باید برای امتحان مرور کنم."
        },
        tip: "Think of 'revise' before an exam."
      },
      {
        id: 327,
        word: "Diplôme ",
        meaning: {
          en: "Diploma",
          fa: "مدرک"
        },
        pronunciation: "dee-plohm",
        example: {
          fr: "Il a obtenu son diplôme en juin.",
          en: "He received his diploma in June.",
          fa: "او مدرک خود را در ژوئن دریافت کرد."
        },
        tip: "Diploma as a document."
      },
      {
        id: 328,
        word: "Licence ",
        meaning: {
          en: "License",
          fa: "لیسانس"
        },
        pronunciation: "lee-sahns",
        example: {
          fr: "Elle a une licence en biologie.",
          en: "She has a degree in biology.",
          fa: "او در بیولوژی لیسانس دارد."
        },
        tip: "Think of 'license' as a degree."
      },
      {
        id: 329,
        word: "Master ",
        meaning: {
          en: "Master",
          fa: "فوق لیسانس"
        },
        pronunciation: "mah-staire",
        example: {
          fr: "Il poursuit un master en informatique.",
          en: "He is pursuing a master's in computer science.",
          fa: "او در حال تحصیل فوق لیسانس در علوم کامپیوتر است."
        },
        tip: "Master as advanced study."
      },
      {
        id: 330,
        word: "Doctorat ",
        meaning: {
          en: "Doctorate",
          fa: "دکترا"
        },
        pronunciation: "dok-tor-ah",
        example: {
          fr: "Elle a soutenu son doctorat avec succès.",
          en: "She successfully defended her doctorate.",
          fa: "او با موفقیت از پایان‌نامه دکترای خود دفاع کرد."
        },
        tip: "Doctorate is top academic degree."
      },
      {
        id: 331,
        word: "Mémoire ",
        meaning: {
          en: "Memory/Essay",
          fa: "حافظه/مقاله"
        },
        pronunciation: "meh-mwahr",
        example: {
          fr: "J'écris un mémoire pour mon cours.",
          en: "I am writing an essay for my class.",
          fa: "من برای کلاسم یک مقاله می‌نویسم."
        },
        tip: "Think of 'memoir' to remember."
      },
      {
        id: 332,
        word: "Thèse ",
        meaning: {
          en: "Thesis",
          fa: "پایان‌نامه"
        },
        pronunciation: "tez",
        example: {
          fr: "Il rédige sa thèse de doctorat.",
          en: "He is writing his doctoral thesis.",
          fa: "او پایان‌نامه دکترای خود را می‌نویسد."
        },
        tip: "Similar to 'thesis' in English."
      },
      {
        id: 333,
        word: "Recherche ",
        meaning: {
          en: "Research",
          fa: "پژوهش"
        },
        pronunciation: "ruh-sher-sh",
        example: {
          fr: "Elle fait de la recherche en biologie.",
          en: "She is doing research in biology.",
          fa: "او در حال انجام پژوهش در زیست شناسی است."
        },
        tip: "Think 'research', same context."
      },
      {
        id: 334,
        word: "Bibliothèque ",
        meaning: {
          en: "Library",
          fa: "کتابخانه"
        },
        pronunciation: "beeb-lee-oh-tek",
        example: {
          fr: "Je vais à la bibliothèque cet après-midi.",
          en: "I am going to the library this afternoon.",
          fa: "من امروز بعدازظهر به کتابخانه می‌روم."
        },
        tip: "Think 'bibliophile' for books."
      },
      {
        id: 335,
        word: "Lecture ",
        meaning: {
          en: "Reading",
          fa: "خواندن"
        },
        pronunciation: "lek-tyur",
        example: {
          fr: "J'adore la lecture de romans.",
          en: "I love reading novels.",
          fa: "من عاشق خواندن رمان‌ها هستم."
        },
        tip: "Think 'lecture' involves reading."
      },
      {
        id: 336,
        word: "Écriture ",
        meaning: {
          en: "Writing",
          fa: "نوشتن"
        },
        pronunciation: "ay-kree-tur",
        example: {
          fr: "L'écriture est importante.",
          en: "Writing is important.",
          fa: "نوشتن مهم است."
        },
        tip: "Think of script."
      },
      {
        id: 337,
        word: "Calcul ",
        meaning: {
          en: "Calculation",
          fa: "محاسبه"
        },
        pronunciation: "kal-kul",
        example: {
          fr: "Il fait un calcul rapide.",
          en: "He makes a quick calculation.",
          fa: "او محاسبه سریعی انجام می‌دهد."
        },
        tip: "Like calculator."
      },
      {
        id: 338,
        word: "Connaissance ",
        meaning: {
          en: "Knowledge",
          fa: "دانش"
        },
        pronunciation: "koh-neh-sahns",
        example: {
          fr: "La connaissance est utile.",
          en: "Knowledge is useful.",
          fa: "دانش مفید است."
        },
        tip: "Like cognizance."
      },
      {
        id: 339,
        word: "Matière ",
        meaning: {
          en: "Subject",
          fa: "موضوع"
        },
        pronunciation: "mah-tyehr",
        example: {
          fr: "La matière est intéressante.",
          en: "The subject is interesting.",
          fa: "موضوع جالب است."
        },
        tip: "Think of material."
      },
      {
        id: 340,
        word: "Histoire ",
        meaning: {
          en: "History",
          fa: "تاریخ"
        },
        pronunciation: "ees-twar",
        example: {
          fr: "L'histoire est fascinante.",
          en: "History is fascinating.",
          fa: "تاریخ جذاب است."
        },
        tip: "Story with 'hi'."
      },
      {
        id: 341,
        word: "Géographie ",
        meaning: {
          en: "Geography",
          fa: "جغرافیا"
        },
        pronunciation: "zhay-aw-gra-fee",
        example: {
          fr: "J'aime étudier la géographie.",
          en: "I like studying geography.",
          fa: "من دوست دارم جغرافیا را مطالعه کنم."
        },
        tip: "Think of maps and earth."
      },
      {
        id: 342,
        word: "Mathématiques ",
        meaning: {
          en: "Mathematics",
          fa: "ریاضی"
        },
        pronunciation: "mat-eh-mah-teeks",
        example: {
          fr: "Les mathématiques sont difficiles.",
          en: "Mathematics is difficult.",
          fa: "ریاضی سخت است."
        },
        tip: "Think of numbers and equations."
      },
      {
        id: 343,
        word: "Sciences ",
        meaning: {
          en: "Sciences",
          fa: "علوم"
        },
        pronunciation: "see-ahnse",
        example: {
          fr: "Je préfère les sciences naturelles.",
          en: "I prefer natural sciences.",
          fa: "من علوم طبیعی را ترجیح می‌دهم."
        },
        tip: "Think of experiments and research."
      },
      {
        id: 344,
        word: "Langue ",
        meaning: {
          en: "Language",
          fa: "زبان"
        },
        pronunciation: "lahng",
        example: {
          fr: "Apprendre une nouvelle langue est intéressant.",
          en: "Learning a new language is interesting.",
          fa: "یادگیری یک زبان جدید جالب است."
        },
        tip: "Think of communication and words."
      },
      {
        id: 345,
        word: "Formation ",
        meaning: {
          en: "Formation",
          fa: "تشکیل"
        },
        pronunciation: "for-mah-syon",
        example: {
          fr: "La formation professionnelle est essentielle.",
          en: "Professional training is essential.",
          fa: "آموزش حرفه‌ای ضروری است."
        },
        tip: "Think of developing skills and knowledge."
      },
      {
        id: 346,
        word: "Enseignement ",
        meaning: {
          en: "Teaching",
          fa: "تدریس"
        },
        pronunciation: "ahn-say-nyuh-mahn",
        example: {
          fr: "L'enseignement est important.",
          en: "Teaching is important.",
          fa: "تدریس مهم است."
        },
        tip: "Think of 'enseign' like 'engage'."
      },
      {
        id: 347,
        word: "Cours en ligne ",
        meaning: {
          en: "Online course",
          fa: "دوره آنلاین"
        },
        pronunciation: "koor ahn leen-yeh",
        example: {
          fr: "Je suis un cours en ligne.",
          en: "I am taking an online course.",
          fa: "من در حال گذراندن دوره آنلاین هستم."
        },
        tip: "Imagine 'course' in 'line'."
      },
      {
        id: 348,
        word: "Évaluation ",
        meaning: {
          en: "Evaluation",
          fa: "ارزیابی"
        },
        pronunciation: "ay-val-yoo-ah-syon",
        example: {
          fr: "L'évaluation est essentielle.",
          en: "The evaluation is essential.",
          fa: "ارزیابی ضروری است."
        },
        tip: "Link 'evaluate' with value."
      },
      {
        id: 349,
        word: "Résultat ",
        meaning: {
          en: "Result",
          fa: "نتیجه"
        },
        pronunciation: "ray-zool-tah",
        example: {
          fr: "Le résultat est positif.",
          en: "The result is positive.",
          fa: "نتیجه مثبت است."
        },
        tip: "Relate 'résultat' to results."
      },
      {
        id: 350,
        word: "Scolarité ",
        meaning: {
          en: "Schooling",
          fa: "تحصیلات"
        },
        pronunciation: "sko-lah-ree-tay",
        example: {
          fr: "La scolarité est gratuite en France.",
          en: "Schooling is free in France.",
          fa: "تحصیلات در فرانسه رایگان است."
        },
        tip: "Think 'scolar' like scholar."
      },
      {
        id: 351,
        word: "Santé ",
        meaning: {
          en: "Health",
          fa: "سلامتی"
        },
        pronunciation: "sahn-tay",
        example: {
          fr: "La santé est importante.",
          en: "Health is important.",
          fa: "سلامتی مهم است."
        },
        tip: "Remember 'sane' relates to health."
      },
      {
        id: 352,
        word: "Corps ",
        meaning: {
          en: "Body",
          fa: "بدن"
        },
        pronunciation: "kor",
        example: {
          fr: "Le corps humain est fascinant.",
          en: "The human body is fascinating.",
          fa: "بدن انسان جذاب است."
        },
        tip: "Think of 'core' as the main body part."
      },
      {
        id: 353,
        word: "Tête ",
        meaning: {
          en: "Head",
          fa: "سر"
        },
        pronunciation: "tet",
        example: {
          fr: "Il a mal à la tête.",
          en: "He has a headache.",
          fa: "او سردرد دارد."
        },
        tip: "Imagine a 'tat' on the head."
      },
      {
        id: 354,
        word: "Visage ",
        meaning: {
          en: "Face",
          fa: "صورت"
        },
        pronunciation: "vee-zazh",
        example: {
          fr: "Son visage est beau.",
          en: "Her face is beautiful.",
          fa: "صورتش زیبا است."
        },
        tip: "Visualize the 'face' when seeing 'visage'."
      },
      {
        id: 355,
        word: "Cheveux ",
        meaning: {
          en: "Hair",
          fa: "مو"
        },
        pronunciation: "shuh-vuh",
        example: {
          fr: "Elle a de beaux cheveux.",
          en: "She has beautiful hair.",
          fa: "او موهای زیبایی دارد."
        },
        tip: "Think 'shampoo' for hair."
      },
      {
        id: 356,
        word: "Yeux ",
        meaning: {
          en: "Eyes",
          fa: "چشمان"
        },
        pronunciation: "yuh",
        example: {
          fr: "Elle a des yeux magnifiques.",
          en: "She has beautiful eyes.",
          fa: "او چشمان زیبایی دارد."
        },
        tip: "Think of 'view' from 'eye'."
      },
      {
        id: 357,
        word: "Oreilles ",
        meaning: {
          en: "Ears",
          fa: "گوش‌ها"
        },
        pronunciation: "oh-reh",
        example: {
          fr: "Il a des grandes oreilles.",
          en: "He has big ears.",
          fa: "او گوش‌های بزرگی دارد."
        },
        tip: "Imagine 'orchestra' coming through ears."
      },
      {
        id: 358,
        word: "Nez ",
        meaning: {
          en: "Nose",
          fa: "بینی"
        },
        pronunciation: "neh",
        example: {
          fr: "Son nez est petit.",
          en: "His nose is small.",
          fa: "بینی او کوچک است."
        },
        tip: "Think 'nose' in Italian as 'naso'."
      },
      {
        id: 359,
        word: "Bouche ",
        meaning: {
          en: "Mouth",
          fa: "دهان"
        },
        pronunciation: "boosh",
        example: {
          fr: "Elle ouvre la bouche.",
          en: "She opens her mouth.",
          fa: "او دهانش را باز می‌کند."
        },
        tip: "Link with 'bouche' sounds like 'bush in the mouth'."
      },
      {
        id: 360,
        word: "Dents ",
        meaning: {
          en: "Teeth",
          fa: "دندان‌ها"
        },
        pronunciation: "dahn",
        example: {
          fr: "Il brosse ses dents.",
          en: "He brushes his teeth.",
          fa: "او دندان‌هایش را مسواک می‌زند."
        },
        tip: "Think 'dentist' for teeth."
      },
      {
        id: 361,
        word: "Lèvres ",
        meaning: {
          en: "Lips",
          fa: "لب‌ها"
        },
        pronunciation: "leh-vruh",
        example: {
          fr: "Elle a des lèvres douces.",
          en: "She has soft lips.",
          fa: "او لب‌های نرمی دارد."
        },
        tip: "Think of lip as levre when you use lipstick."
      },
      {
        id: 362,
        word: "Cou ",
        meaning: {
          en: "Neck",
          fa: "گردن"
        },
        pronunciation: "koo",
        example: {
          fr: "Il a un cou long.",
          en: "He has a long neck.",
          fa: "او گردن بلندی دارد."
        },
        tip: "Imagine tying a 'ko'nd around the neck."
      },
      {
        id: 363,
        word: "Épaule ",
        meaning: {
          en: "Shoulder",
          fa: "شانه"
        },
        pronunciation: "ay-pol",
        example: {
          fr: "Il a une douleur à l'épaule.",
          en: "He has a pain in the shoulder.",
          fa: "او در شانه درد دارد."
        },
        tip: "Think of 'pole' supporting the shoulders."
      },
      {
        id: 364,
        word: "Bras ",
        meaning: {
          en: "Arm",
          fa: "بازو"
        },
        pronunciation: "brah",
        example: {
          fr: "Son bras est fort.",
          en: "His arm is strong.",
          fa: "بازوی او قوی است."
        },
        tip: "Imagine 'bra' holding the arm in place."
      },
      {
        id: 365,
        word: "Coude ",
        meaning: {
          en: "Elbow",
          fa: "آرنج"
        },
        pronunciation: "kood",
        example: {
          fr: "Son coude est blessé.",
          en: "His elbow is injured.",
          fa: "آرنج او مجروح است."
        },
        tip: "Think 'kood' for the part that bends."
      },
      {
        id: 366,
        word: "Poignet ",
        meaning: {
          en: "Wrist",
          fa: "مچ"
        },
        pronunciation: "pwa-nyay",
        example: {
          fr: "Il a une montre à son poignet.",
          en: "He has a watch on his wrist.",
          fa: "او ساعت بر مچ خود دارد."
        },
        tip: "Think of 'point' where hand moves."
      },
      {
        id: 367,
        word: "Main ",
        meaning: {
          en: "Hand",
          fa: "دست"
        },
        pronunciation: "mah(n)",
        example: {
          fr: "Elle a dessiné sur sa main.",
          en: "She drew on her hand.",
          fa: "او روی دستش نقاشی کرد."
        },
        tip: "Remember 'main' controls many tools."
      },
      {
        id: 368,
        word: "Doigt ",
        meaning: {
          en: "Finger",
          fa: "انگشت"
        },
        pronunciation: "dwa",
        example: {
          fr: "Il a coupé son doigt.",
          en: "He cut his finger.",
          fa: "او انگشت خود را برید."
        },
        tip: "Similar to 'digit', finger movement."
      },
      {
        id: 369,
        word: "Poitrine ",
        meaning: {
          en: "Chest",
          fa: "سینه"
        },
        pronunciation: "pwah-treen",
        example: {
          fr: "Il a mal à la poitrine.",
          en: "He has a pain in the chest.",
          fa: "او در سینه درد دارد."
        },
        tip: "Think 'poise', chest stands tall."
      },
      {
        id: 370,
        word: "Dos ",
        meaning: {
          en: "Back",
          fa: "پشت"
        },
        pronunciation: "doe",
        example: {
          fr: "Il a un sac à dos.",
          en: "He has a backpack.",
          fa: "او کوله‌پشتی دارد."
        },
        tip: "Think 'dorsal', related to back."
      },
      {
        id: 371,
        word: "Ventre ",
        meaning: {
          en: "Belly",
          fa: "شکم"
        },
        pronunciation: "vohn-truh",
        example: {
          fr: "J'ai mal au ventre.",
          en: "I have a stomachache.",
          fa: "شکم‌درد دارم."
        },
        tip: "Think of 'ventre' like 'vent' where air goes in."
      },
      {
        id: 372,
        word: "Taille ",
        meaning: {
          en: "Waist",
          fa: "کمر"
        },
        pronunciation: "tahy-ee",
        example: {
          fr: "La ceinture est à ma taille.",
          en: "The belt fits my waist.",
          fa: "کمربند به کمر من می‌خورد."
        },
        tip: "It sounds like 'tie' in 'tie around the waist'."
      },
      {
        id: 373,
        word: "Hanche ",
        meaning: {
          en: "Hip",
          fa: "ران"
        },
        pronunciation: "ahnsh",
        example: {
          fr: "Elle a blessé sa hanche.",
          en: "She hurt her hip.",
          fa: "او رانش را زخمی کرد."
        },
        tip: "Think 'hanche' like 'hunch', bending by the hips."
      },
      {
        id: 374,
        word: "Jambe ",
        meaning: {
          en: "Leg",
          fa: "پا"
        },
        pronunciation: "zhahmb",
        example: {
          fr: "Il a une jambe cassée.",
          en: "He has a broken leg.",
          fa: "او پایش شکسته است."
        },
        tip: "Jambe' sounds like 'jump', done with legs."
      },
      {
        id: 375,
        word: "Genou ",
        meaning: {
          en: "Knee",
          fa: "زانو"
        },
        pronunciation: "zhuh-noo",
        example: {
          fr: "Il s'est blessé le genou.",
          en: "He hurt his knee.",
          fa: "او زانویش را زخمی کرد."
        },
        tip: "Genou' is like 'genu', a term related to knee."
      },
      {
        id: 376,
        word: "Cheville ",
        meaning: {
          en: "Ankle",
          fa: "مچ پا"
        },
        pronunciation: "shuh-vee-yuh",
        example: {
          fr: "J'ai mal à la cheville.",
          en: "My ankle hurts.",
          fa: "مچ پای من درد می کند."
        },
        tip: "Think of 'shovel' to dig with your ankle."
      },
      {
        id: 377,
        word: "Pied ",
        meaning: {
          en: "Foot",
          fa: "پا"
        },
        pronunciation: "pyeh",
        example: {
          fr: "Il a un pied blessé.",
          en: "He has an injured foot.",
          fa: "او یک پای آسیب‌دیده دارد."
        },
        tip: "Think of 'pie' stepping on a foot."
      },
      {
        id: 378,
        word: "Peau ",
        meaning: {
          en: "Skin",
          fa: "پوست"
        },
        pronunciation: "poh",
        example: {
          fr: "Elle a la peau douce.",
          en: "She has soft skin.",
          fa: "او پوستی نرم دارد."
        },
        tip: "Remember 'poem' about soft skin."
      },
      {
        id: 379,
        word: "Cœur ",
        meaning: {
          en: "Heart",
          fa: "قلب"
        },
        pronunciation: "kuhr",
        example: {
          fr: "Mon cœur bat vite.",
          en: "My heart beats fast.",
          fa: "قلب من سریع می‌زند."
        },
        tip: "Curve like the shape of a heart."
      },
      {
        id: 380,
        word: "Poumon ",
        meaning: {
          en: "Lung",
          fa: "ریه"
        },
        pronunciation: "poo-mohn",
        example: {
          fr: "Le poumon est important pour respirer.",
          en: "The lung is important for breathing.",
          fa: "ریه برای تنفس مهم است."
        },
        tip: "Think 'pull air in' using lung."
      },
      {
        id: 381,
        word: "Estomac ",
        meaning: {
          en: "Stomach",
          fa: "معده"
        },
        pronunciation: "es-toh-mak",
        example: {
          fr: "J'ai mal à l'estomac.",
          en: "I have a stomach ache.",
          fa: "دل درد دارم."
        },
        tip: "Think of 'stomach' with a French accent."
      },
      {
        id: 382,
        word: "Douleur ",
        meaning: {
          en: "Pain",
          fa: "درد"
        },
        pronunciation: "doo-lehr",
        example: {
          fr: "La douleur est intense.",
          en: "The pain is intense.",
          fa: "درد شدید است."
        },
        tip: "Dull ache leads to 'douleur'."
      },
      {
        id: 383,
        word: "Maladie ",
        meaning: {
          en: "Disease",
          fa: "بیماری"
        },
        pronunciation: "mah-lah-dee",
        example: {
          fr: "Il souffre d'une maladie rare.",
          en: "He suffers from a rare disease.",
          fa: "او از یک بیماری نادر رنج می‌برد."
        },
        tip: "Think 'malady' for sickness."
      },
      {
        id: 384,
        word: "Fièvre ",
        meaning: {
          en: "Fever",
          fa: "تب"
        },
        pronunciation: "fyeh-vr",
        example: {
          fr: "Elle a une forte fièvre.",
          en: "She has a high fever.",
          fa: "او تب شدیدی دارد."
        },
        tip: "Fiery 'fever'."
      },
      {
        id: 385,
        word: "Toux ",
        meaning: {
          en: "Cough",
          fa: "سرفه"
        },
        pronunciation: "too",
        example: {
          fr: "Il a une toux persistante.",
          en: "He has a persistent cough.",
          fa: "او سرفه‌ی مداوم دارد."
        },
        tip: "Tough to 'cough'."
      },
      {
        id: 386,
        word: "Rhume ",
        meaning: {
          en: "Cold",
          fa: "سرماخوردگی"
        },
        pronunciation: "Roohm",
        example: {
          fr: "J'ai un rhume.",
          en: "I have a cold.",
          fa: "من سرماخورده‌ام."
        },
        tip: "Think of chilly weather."
      },
      {
        id: 387,
        word: "Blessure ",
        meaning: {
          en: "Injury",
          fa: "آسیب"
        },
        pronunciation: "Bless-oor",
        example: {
          fr: "Il a une blessure au bras.",
          en: "He has an injury on his arm.",
          fa: "او به بازوی خود آسیب دیده است."
        },
        tip: "Think of being blessed despite harm."
      },
      {
        id: 388,
        word: "Urgence ",
        meaning: {
          en: "Emergency",
          fa: "اضطراری"
        },
        pronunciation: "Ur-johns",
        example: {
          fr: "C'est une urgence!",
          en: "It's an emergency!",
          fa: "این یک وضعیت اضطراری است!"
        },
        tip: "Think of urgent attention needed."
      },
      {
        id: 389,
        word: "Hôpital ",
        meaning: {
          en: "Hospital",
          fa: "بیمارستان"
        },
        pronunciation: "Oh-pee-tal",
        example: {
          fr: "Il est à l'hôpital.",
          en: "He is at the hospital.",
          fa: "او در بیمارستان است."
        },
        tip: "Remember hospitals have hospitality."
      },
      {
        id: 390,
        word: "Médecin ",
        meaning: {
          en: "Doctor",
          fa: "دکتر"
        },
        pronunciation: "Med-sann",
        example: {
          fr: "Elle est médecin.",
          en: "She is a doctor.",
          fa: "او دکتر است."
        },
        tip: "Think of medicine with a badge."
      },
      {
        id: 391,
        word: "Infirmier ",
        meaning: {
          en: "Nurse",
          fa: "پرستار"
        },
        pronunciation: "an-fear-mee-ay",
        example: {
          fr: "L'infirmier prend soin des patients.",
          en: "The nurse takes care of patients.",
          fa: "پرستار از بیماران مراقبت می‌کند."
        },
        tip: "Think of 'infirmary'."
      },
      {
        id: 392,
        word: "Pharmacie ",
        meaning: {
          en: "Pharmacy",
          fa: "داروخانه"
        },
        pronunciation: "far-ma-see",
        example: {
          fr: "Je vais à la pharmacie.",
          en: "I am going to the pharmacy.",
          fa: "من به داروخانه می‌روم."
        },
        tip: "Pharmacy sounds like 'farm-a-see'."
      },
      {
        id: 393,
        word: "Médicament ",
        meaning: {
          en: "Medicine",
          fa: "دارو"
        },
        pronunciation: "may-dee-ka-mon",
        example: {
          fr: "Il prend un médicament pour sa toux.",
          en: "He takes medicine for his cough.",
          fa: "او برای سرفه‌اش دارو می‌خورد."
        },
        tip: "Think of 'medicament' as medicine."
      },
      {
        id: 394,
        word: "Ordonnance ",
        meaning: {
          en: "Prescription",
          fa: "نسخه"
        },
        pronunciation: "or-do-nonce",
        example: {
          fr: "Le médecin écrit une ordonnance.",
          en: "The doctor writes a prescription.",
          fa: "پزشک یک نسخه می‌نویسد."
        },
        tip: "Ordonnance' sounds like 'order'."
      },
      {
        id: 395,
        word: "Vaccin ",
        meaning: {
          en: "Vaccine",
          fa: "واکسن"
        },
        pronunciation: "vah-kah-sehn",
        example: {
          fr: "Le vaccin est important pour la santé.",
          en: "The vaccine is important for health.",
          fa: "واکسن برای سلامتی مهم است."
        },
        tip: "Think 'vaccine' is like 'vaah-sehn'."
      },
      {
        id: 396,
        word: "Consultation ",
        meaning: {
          en: "Consultation",
          fa: "مشاوره"
        },
        pronunciation: "kawn-sohl-tay-syawn",
        example: {
          fr: "J'ai une consultation demain.",
          en: "I have a consultation tomorrow.",
          fa: "من فردا یک مشاوره دارم."
        },
        tip: "Think of consulting a doctor."
      },
      {
        id: 397,
        word: "Traitement ",
        meaning: {
          en: "Treatment",
          fa: "درمان"
        },
        pronunciation: "tray-teh-mawn",
        example: {
          fr: "Le traitement a commencé hier.",
          en: "The treatment started yesterday.",
          fa: "درمان دیروز شروع شد."
        },
        tip: "Relate to treating an illness."
      },
      {
        id: 398,
        word: "Guérison ",
        meaning: {
          en: "Recovery",
          fa: "بازیابی"
        },
        pronunciation: "geh-ree-zawn",
        example: {
          fr: "La guérison est lente.",
          en: "The recovery is slow.",
          fa: "بازیابی آهسته است."
        },
        tip: "Connection to 'gear' up for health."
      },
      {
        id: 399,
        word: "Repos ",
        meaning: {
          en: "Rest",
          fa: "استراحت"
        },
        pronunciation: "ruh-poh",
        example: {
          fr: "Elle a besoin de repos.",
          en: "She needs rest.",
          fa: "او به استراحت نیاز دارد."
        },
        tip: "Think of repose as rest."
      },
      {
        id: 400,
        word: "Régime ",
        meaning: {
          en: "Diet",
          fa: "رژیم"
        },
        pronunciation: "ray-zheem",
        example: {
          fr: "Je suis un régime strict.",
          en: "I am on a strict diet.",
          fa: "من در یک رژیم سخت هستم."
        },
        tip: "Relate regime to eating plan."
      },
      {
        id: 401,
        word: "Joie ",
        meaning: {
          en: "Joy",
          fa: "شادی"
        },
        pronunciation: "zhwah",
        example: {
          fr: "Elle ressent une grande joie.",
          en: "She feels great joy.",
          fa: "او شادی زیادی احساس می‌کند."
        },
        tip: "Sounds like 'joy' without the 'j'."
      },
      {
        id: 402,
        word: "Tristesse ",
        meaning: {
          en: "Sadness",
          fa: "اندوه"
        },
        pronunciation: "trees-tess",
        example: {
          fr: "Sa tristesse est évidente.",
          en: "Her sadness is evident.",
          fa: "اندوه او آشکار است."
        },
        tip: "Think of 'triste' for sad."
      },
      {
        id: 403,
        word: "Colère ",
        meaning: {
          en: "Anger",
          fa: "خشم"
        },
        pronunciation: "koh-lehr",
        example: {
          fr: "Il a exprimé sa colère.",
          en: "He expressed his anger.",
          fa: "او خشم خود را بیان کرد."
        },
        tip: "Sounds like 'collar' with rage."
      },
      {
        id: 404,
        word: "Peur ",
        meaning: {
          en: "Fear",
          fa: "ترس"
        },
        pronunciation: "puhr",
        example: {
          fr: "Elle a montré de la peur.",
          en: "She showed fear.",
          fa: "او ترس نشان داد."
        },
        tip: "Think 'purr' like a scared cat."
      },
      {
        id: 405,
        word: "Surprise ",
        meaning: {
          en: "Surprise",
          fa: "تعجب"
        },
        pronunciation: "sur-preez",
        example: {
          fr: "Sa surprise était visible.",
          en: "His surprise was visible.",
          fa: "تعجب او آشکار بود."
        },
        tip: "Similar to 'surprise' in English."
      },
      {
        id: 406,
        word: "Honte ",
        meaning: {
          en: "Shame",
          fa: "شرمندگی"
        },
        pronunciation: "ohn-t",
        example: {
          fr: "Elle ressent de la honte.",
          en: "She feels shame.",
          fa: "او احساس شرمندگی می‌کند."
        },
        tip: "Think of being 'haunted' by shame."
      },
      {
        id: 407,
        word: "Fierté ",
        meaning: {
          en: "Pride",
          fa: "غرور"
        },
        pronunciation: "fyer-teh",
        example: {
          fr: "Il montre sa fierté.",
          en: "He shows his pride.",
          fa: "او غرور خود را نشان می‌دهد."
        },
        tip: "It sounds like 'fiery' pride."
      },
      {
        id: 408,
        word: "Amour ",
        meaning: {
          en: "Love",
          fa: "عشق"
        },
        pronunciation: "ah-moor",
        example: {
          fr: "L'amour est beau.",
          en: "Love is beautiful.",
          fa: "عشق زیباست."
        },
        tip: "Amour is in 'amorous'."
      },
      {
        id: 409,
        word: "Haine ",
        meaning: {
          en: "Hatred",
          fa: "نفرت"
        },
        pronunciation: "en",
        example: {
          fr: "Elle ressent de la haine.",
          en: "She feels hatred.",
          fa: "او احساس نفرت می‌کند."
        },
        tip: "Sounds like 'heinous' hatred."
      },
      {
        id: 410,
        word: "Compassion ",
        meaning: {
          en: "Compassion",
          fa: "دلسوزی"
        },
        pronunciation: "com-pah-syon",
        example: {
          fr: "Il montre de la compassion.",
          en: "He shows compassion.",
          fa: "او دلسوزی نشان می‌دهد."
        },
        tip: "Similar to 'compassion' in English."
      },
      {
        id: 411,
        word: "Bonheur ",
        meaning: {
          en: "Happiness",
          fa: "خوشبختی"
        },
        pronunciation: "bohn-uhr",
        example: {
          fr: "Le bonheur est essentiel pour la vie.",
          en: "Happiness is essential for life.",
          fa: "خوشبختی برای زندگی ضروری است."
        },
        tip: "Bon' is 'good', 'heur' sounds like 'hour', a good hour."
      },
      {
        id: 412,
        word: "Déception ",
        meaning: {
          en: "Disappointment",
          fa: "ناامیدی"
        },
        pronunciation: "day-sep-syon",
        example: {
          fr: "La déception est difficile à gérer.",
          en: "Disappointment is hard to handle.",
          fa: "ناامیدی مدیریت کردنش سخت است."
        },
        tip: "Think of 'deceptive', something misleading."
      },
      {
        id: 413,
        word: "Stress ",
        meaning: {
          en: "Stress",
          fa: "استرس"
        },
        pronunciation: "stress",
        example: {
          fr: "Le stress peut affecter la santé.",
          en: "Stress can affect health.",
          fa: "استرس می‌تواند روی سلامت تاثیر بگذارد."
        },
        tip: "Same as in English."
      },
      {
        id: 414,
        word: "Anxiété ",
        meaning: {
          en: "Anxiety",
          fa: "اضطراب"
        },
        pronunciation: "ahng-see-ay-tay",
        example: {
          fr: "L'anxiété peut être paralysante.",
          en: "Anxiety can be paralyzing.",
          fa: "اضطراب می‌تواند فلج‌ کننده باشد."
        },
        tip: "Think 'anxious', feeling of anxiety."
      },
      {
        id: 415,
        word: "Nervosité ",
        meaning: {
          en: "Nervousness",
          fa: "عصبانیت"
        },
        pronunciation: "nair-vaw-see-tay",
        example: {
          fr: "La nervosité peut causer des erreurs.",
          en: "Nervousness can cause mistakes.",
          fa: "عصبانیت می‌تواند باعث اشتباهات شود."
        },
        tip: "Relate to 'nervous', easily worried."
      },
      {
        id: 416,
        word: "Enthousiasme ",
        meaning: {
          en: "enthusiasm",
          fa: "اشتیاق"
        },
        pronunciation: "ahn-too-zee-azm",
        example: {
          fr: "Elle a beaucoup d'enthousiasme pour le projet.",
          en: "She has a lot of enthusiasm for the project.",
          fa: "او برای پروژه خیلی اشتیاق دارد."
        },
        tip: "Think of energy and excitement together."
      },
      {
        id: 417,
        word: "Courage ",
        meaning: {
          en: "courage",
          fa: "شجاعت"
        },
        pronunciation: "koo-rahj",
        example: {
          fr: "Il a le courage de ses convictions.",
          en: "He has the courage of his convictions.",
          fa: "او شجاعت اعتقاداتش را دارد."
        },
        tip: "Sounds like the roar of a lion."
      },
      {
        id: 418,
        word: "Espoir ",
        meaning: {
          en: "hope",
          fa: "امید"
        },
        pronunciation: "es-pwahr",
        example: {
          fr: "Il garde l'espoir malgré tout.",
          en: "He keeps hope despite everything.",
          fa: "او با وجود همه چیز امید خود را حفظ می‌کند."
        },
        tip: "Sounds like 'aspire' to hope."
      },
      {
        id: 419,
        word: "Désespoir ",
        meaning: {
          en: "despair",
          fa: "ناامیدی"
        },
        pronunciation: "deh-zeh-spwahr",
        example: {
          fr: "Elle est tombée dans le désespoir.",
          en: "She fell into despair.",
          fa: "او به ناامیدی فرو رفت."
        },
        tip: "The opposite of hope."
      },
      {
        id: 420,
        word: "Pitié ",
        meaning: {
          en: "pity",
          fa: "ترحم"
        },
        pronunciation: "pee-tyay",
        example: {
          fr: "Il a montré de la pitié pour elle.",
          en: "He showed pity for her.",
          fa: "او برای او ترحم نشان داد."
        },
        tip: "Sounds like 'pity' with a twist."
      },
      {
        id: 421,
        word: "Sympathie ",
        meaning: {
          en: "Affinity",
          fa: "تمایل"
        },
        pronunciation: "sahm-pah-tee",
        example: {
          fr: "Il a beaucoup de sympathie pour elle.",
          en: "He has a lot of affection for her.",
          fa: "او نسبت به او تمایل زیادی دارد."
        },
        tip: "Think of 'sympathy' with a twist."
      },
      {
        id: 422,
        word: "Empathie ",
        meaning: {
          en: "Empathy",
          fa: "همدلی"
        },
        pronunciation: "ahm-pah-tee",
        example: {
          fr: "Elle montre de l'empathie envers ses amis.",
          en: "She shows empathy towards her friends.",
          fa: "او نسبت به دوستانش همدلی نشان می‌دهد."
        },
        tip: "Link it with understanding others' feelings."
      },
      {
        id: 423,
        word: "Attitude ",
        meaning: {
          en: "Attitude",
          fa: "نگرش"
        },
        pronunciation: "ah-tee-tewd",
        example: {
          fr: "Son attitude positive m'inspire.",
          en: "Her positive attitude inspires me.",
          fa: "نگرش مثبت او به من الهام می‌بخشد."
        },
        tip: "Picture expressions in behavior."
      },
      {
        id: 424,
        word: "Caractère ",
        meaning: {
          en: "Character",
          fa: "شخصیت"
        },
        pronunciation: "kah-rahk-tehr",
        example: {
          fr: "Il a un caractère fort.",
          en: "He has a strong character.",
          fa: "او شخصیت قوی دارد."
        },
        tip: "Think 'character' as in personal traits."
      },
      {
        id: 425,
        word: "Qualité ",
        meaning: {
          en: "Quality",
          fa: "کیفیت"
        },
        pronunciation: "kah-lee-teh",
        example: {
          fr: "La qualité des produits est excellente.",
          en: "The quality of the products is excellent.",
          fa: "کیفیت محصولات عالی است."
        },
        tip: "Relate it to 'quality' control."
      },
      {
        id: 426,
        word: "Défaut ",
        meaning: {
          en: "Flaw",
          fa: "عیب"
        },
        pronunciation: "deh-foh",
        example: {
          fr: "Il a un petit défaut.",
          en: "He has a small flaw.",
          fa: "او یک عیب کوچک دارد."
        },
        tip: "Remember default, something negative."
      },
      {
        id: 427,
        word: "Patient ",
        meaning: {
          en: "Patient",
          fa: "صبور"
        },
        pronunciation: "pah-see-ahn",
        example: {
          fr: "Soyez patient avec elle.",
          en: "Be patient with her.",
          fa: "با او صبور باشید."
        },
        tip: "Think of medical patient waiting calmly."
      },
      {
        id: 428,
        word: "Impatient ",
        meaning: {
          en: "Impatient",
          fa: "بی‌صبر"
        },
        pronunciation: "im-pah-see-ahn",
        example: {
          fr: "Il est très impatient.",
          en: "He is very impatient.",
          fa: "او بسیار بی‌صبر است."
        },
        tip: "Think of someone who can't wait."
      },
      {
        id: 429,
        word: "Timide ",
        meaning: {
          en: "Shy",
          fa: "خجالتی"
        },
        pronunciation: "tee-meed",
        example: {
          fr: "Elle est très timide.",
          en: "She is very shy.",
          fa: "او بسیار خجالتی است."
        },
        tip: "Think of timid resembling shy."
      },
      {
        id: 430,
        word: "Confiant ",
        meaning: {
          en: "Confident",
          fa: "مطمئن"
        },
        pronunciation: "kon-fee-ahn",
        example: {
          fr: "Il est confiant en lui-même.",
          en: "He is confident in himself.",
          fa: "او به خودش مطمئن است."
        },
        tip: "Similar to English confident."
      },
      {
        id: 431,
        word: "Ambitieux ",
        meaning: {
          en: "Ambitious",
          fa: "بلند پرواز"
        },
        pronunciation: "ahm-bee-shuh",
        example: {
          fr: "Il est ambitieux.",
          en: "He is ambitious.",
          fa: "او بلند پرواز است."
        },
        tip: "Think of aiming high."
      },
      {
        id: 432,
        word: "Sérieux ",
        meaning: {
          en: "Serious",
          fa: "جدی"
        },
        pronunciation: "seh-ryuh",
        example: {
          fr: "Il est sérieux.",
          en: "He is serious.",
          fa: "او جدی است."
        },
        tip: "Something important or earnest."
      },
      {
        id: 433,
        word: "Drôle ",
        meaning: {
          en: "Funny",
          fa: "خنده دار"
        },
        pronunciation: "drohl",
        example: {
          fr: "Il est drôle.",
          en: "He is funny.",
          fa: "او خنده دار است."
        },
        tip: "Think of laughter and fun."
      },
      {
        id: 434,
        word: "Gentil ",
        meaning: {
          en: "Kind",
          fa: "مهربان"
        },
        pronunciation: "zhawn-tee",
        example: {
          fr: "Elle est gentille.",
          en: "She is kind.",
          fa: "او مهربان است."
        },
        tip: "Think of gentle and nice."
      },
      {
        id: 435,
        word: "Méchant ",
        meaning: {
          en: "Mean",
          fa: "بدجنس"
        },
        pronunciation: "meh-shahn",
        example: {
          fr: "Il est méchant.",
          en: "He is mean.",
          fa: "او بدجنس است."
        },
        tip: "Opposite of kind."
      },
      {
        id: 436,
        word: "Généreux ",
        meaning: {
          en: "Generous",
          fa: "سخاوتمند"
        },
        pronunciation: "zhen-ay-ruh",
        example: {
          fr: "Il est très généreux avec ses amis.",
          en: "He is very generous with his friends.",
          fa: "او با دوستانش بسیار سخاوتمند است."
        },
        tip: "Generosity is grand."
      },
      {
        id: 437,
        word: "Égoïste ",
        meaning: {
          en: "Selfish",
          fa: "خودخواه"
        },
        pronunciation: "ay-goh-east",
        example: {
          fr: "Elle est égoïste.",
          en: "She is selfish.",
          fa: "او خودخواه است."
        },
        tip: "Think ego is self."
      },
      {
        id: 438,
        word: "Curieux ",
        meaning: {
          en: "Curious",
          fa: "کنجکاو"
        },
        pronunciation: "kyur-ee-uh",
        example: {
          fr: "Il est curieux de tout.",
          en: "He is curious about everything.",
          fa: "او در مورد همه چیز کنجکاو است."
        },
        tip: "Curious cats."
      },
      {
        id: 439,
        word: "Jaloux ",
        meaning: {
          en: "Jealous",
          fa: "حسود"
        },
        pronunciation: "zhah-loo",
        example: {
          fr: "Il est jaloux de son frère.",
          en: "He is jealous of his brother.",
          fa: "او به برادرش حسود است."
        },
        tip: "Jealousies jab."
      },
      {
        id: 440,
        word: "Sensible ",
        meaning: {
          en: "Sensitive",
          fa: "حساس"
        },
        pronunciation: "sahn-see-bluh",
        example: {
          fr: "Elle est très sensible.",
          en: "She is very sensitive.",
          fa: "او بسیار حساس است."
        },
        tip: "Senses feel everything."
      },
      {
        id: 441,
        word: "Calme ",
        meaning: {
          en: "Calm",
          fa: "آرام"
        },
        pronunciation: "kalm",
        example: {
          fr: "Il est calme aujourd'hui.",
          en: "He is calm today.",
          fa: "او امروز آرام است."
        },
        tip: "Think of calm seas."
      },
      {
        id: 442,
        word: "Agité ",
        meaning: {
          en: "Agitated",
          fa: "پریشان"
        },
        pronunciation: "a-zhee-tay",
        example: {
          fr: "L'enfant est agité ce soir.",
          en: "The child is agitated tonight.",
          fa: "کودک امشب پریشان است."
        },
        tip: "Agitated air creates wind."
      },
      {
        id: 443,
        word: "Motivé ",
        meaning: {
          en: "Motivated",
          fa: "با انگیزه"
        },
        pronunciation: "mo-tee-vay",
        example: {
          fr: "Elle est très motivée pour réussir.",
          en: "She is very motivated to succeed.",
          fa: "او بسیار برای موفقیت با انگیزه است."
        },
        tip: "Think of motivation."
      },
      {
        id: 444,
        word: "Fatigué ",
        meaning: {
          en: "Tired",
          fa: "خسته"
        },
        pronunciation: "fa-tee-gay",
        example: {
          fr: "Je suis fatigué après le travail.",
          en: "I am tired after work.",
          fa: "بعد از کار خسته هستم."
        },
        tip: "Fatigue leads to tiredness."
      },
      {
        id: 445,
        word: "Heureux ",
        meaning: {
          en: "Happy",
          fa: "خوشحال"
        },
        pronunciation: "uh-ruh",
        example: {
          fr: "Nous sommes heureux ensemble.",
          en: "We are happy together.",
          fa: "ما با هم خوشحال هستیم."
        },
        tip: "Happiness brings joy."
      },
      {
        id: 446,
        word: "Malheureux ",
        meaning: {
          en: "Unhappy",
          fa: "ناراحت"
        },
        pronunciation: "mal-uh-roo",
        example: {
          fr: "Il est malheureux aujourd'hui.",
          en: "He is unhappy today.",
          fa: "او امروز ناراحت است."
        },
        tip: "Think of 'mal' as bad."
      },
      {
        id: 447,
        word: "Poli ",
        meaning: {
          en: "Polite",
          fa: "مودب"
        },
        pronunciation: "po-lee",
        example: {
          fr: "Elle est très polie.",
          en: "She is very polite.",
          fa: "او بسیار مودب است."
        },
        tip: "Polite sounds like 'poli'."
      },
      {
        id: 448,
        word: "Impoli ",
        meaning: {
          en: "Rude",
          fa: "بی ادب"
        },
        pronunciation: "im-po-lee",
        example: {
          fr: "Il est impoli avec elle.",
          en: "He is rude to her.",
          fa: "او با او بی ادب است."
        },
        tip: "Impolite' minus -te is 'impoli'."
      },
      {
        id: 449,
        word: "Optimiste ",
        meaning: {
          en: "Optimistic",
          fa: "خوش بین"
        },
        pronunciation: "op-tee-meest",
        example: {
          fr: "Il est toujours optimiste.",
          en: "He is always optimistic.",
          fa: "او همیشه خوش بین است."
        },
        tip: "Opt for the best, be optimistic."
      },
      {
        id: 450,
        word: "Pessimiste ",
        meaning: {
          en: "Pessimistic",
          fa: "بدبین"
        },
        pronunciation: "pes-see-meest",
        example: {
          fr: "Elle est souvent pessimiste.",
          en: "She is often pessimistic.",
          fa: "او اغلب بدبین است."
        },
        tip: "Pessimistic starts with 'pes'."
      },
      {
        id: 451,
        word: "Maison ",
        meaning: {
          en: "House",
          fa: "خانه"
        },
        pronunciation: "may-zon",
        example: {
          fr: "La maison est grande.",
          en: "The house is big.",
          fa: "خانه بزرگ است."
        },
        tip: "Think of a massive mansion."
      },
      {
        id: 452,
        word: "Appartement ",
        meaning: {
          en: "Apartment",
          fa: "آپارتمان"
        },
        pronunciation: "a-par-tuh-mohn",
        example: {
          fr: "L'appartement est petit.",
          en: "The apartment is small.",
          fa: "آپارتمان کوچک است."
        },
        tip: "Similar to 'apartment' with 't' sound."
      },
      {
        id: 453,
        word: "Studio ",
        meaning: {
          en: "Studio",
          fa: "استودیو"
        },
        pronunciation: "stoo-dyo",
        example: {
          fr: "J'habite dans un studio.",
          en: "I live in a studio.",
          fa: "من در یک استودیو زندگی می‌کنم."
        },
        tip: "Think of a small studio apartment."
      },
      {
        id: 454,
        word: "Salon ",
        meaning: {
          en: "Living room",
          fa: "اتاق نشیمن"
        },
        pronunciation: "sah-lohn",
        example: {
          fr: "Le salon est confortable.",
          en: "The living room is comfortable.",
          fa: "اتاق نشیمن راحت است."
        },
        tip: "Think of 'salon' where people gather."
      },
      {
        id: 455,
        word: "Chambre ",
        meaning: {
          en: "Bedroom",
          fa: "اتاق خواب"
        },
        pronunciation: "shahm-bruh",
        example: {
          fr: "La chambre est propre.",
          en: "The bedroom is clean.",
          fa: "اتاق خواب تمیز است."
        },
        tip: "Think of charm in your bedroom."
      },
      {
        id: 456,
        word: "Salle de bain ",
        meaning: {
          en: "Bathroom",
          fa: "حمام"
        },
        pronunciation: "sal duh ban",
        example: {
          fr: "J'ai nettoyé la salle de bain.",
          en: "I cleaned the bathroom.",
          fa: "من حمام را تمیز کردم."
        },
        tip: "Imagine bathing in a ban."
      },
      {
        id: 457,
        word: "Cuisine ",
        meaning: {
          en: "Kitchen",
          fa: "آشپزخانه"
        },
        pronunciation: "kwee-zeen",
        example: {
          fr: "La cuisine est grande.",
          en: "The kitchen is big.",
          fa: "آشپزخانه بزرگ است."
        },
        tip: "Cuisine is where you cook."
      },
      {
        id: 458,
        word: "Couloir ",
        meaning: {
          en: "Corridor",
          fa: "راهرو"
        },
        pronunciation: "koo-lwar",
        example: {
          fr: "Le couloir est étroit.",
          en: "The corridor is narrow.",
          fa: "راهرو تنگ است."
        },
        tip: "Think of a corridor full of 'cool air'."
      },
      {
        id: 459,
        word: "Terrasse ",
        meaning: {
          en: "Terrace",
          fa: "تراس"
        },
        pronunciation: "teh-rass",
        example: {
          fr: "Nous mangeons sur la terrasse.",
          en: "We eat on the terrace.",
          fa: "ما روی تراس غذا می خوریم."
        },
        tip: "Enjoy tea on the terrace."
      },
      {
        id: 460,
        word: "Balcon ",
        meaning: {
          en: "Balcony",
          fa: "بالکن"
        },
        pronunciation: "bal-kon",
        example: {
          fr: "J'aime lire sur le balcon.",
          en: "I like reading on the balcony.",
          fa: "من دوست دارم روی بالکن مطالعه کنم."
        },
        tip: "Picture a calm view from a balcony."
      },
      {
        id: 461,
        word: "Jardin ",
        meaning: {
          en: "Garden",
          fa: "باغ"
        },
        pronunciation: "zhar-dan",
        example: {
          fr: "Elle aime se reposer dans le jardin.",
          en: "She likes to relax in the garden.",
          fa: "او دوست دارد در باغ استراحت کند."
        },
        tip: "Think of 'jungle' starting with 'jar'."
      },
      {
        id: 462,
        word: "Garage ",
        meaning: {
          en: "Garage",
          fa: "گاراژ"
        },
        pronunciation: "gah-rahzh",
        example: {
          fr: "Il gare sa voiture dans le garage.",
          en: "He parks his car in the garage.",
          fa: "او ماشینش را در گاراژ پارک می‌کند."
        },
        tip: "Similar to the word 'garage' in English."
      },
      {
        id: 463,
        word: "Porte ",
        meaning: {
          en: "Door",
          fa: "در"
        },
        pronunciation: "port",
        example: {
          fr: "Fermez la porte, s'il vous plaît.",
          en: "Close the door, please.",
          fa: "لطفاً در را ببندید."
        },
        tip: "Think of 'portal' as an entrance."
      },
      {
        id: 464,
        word: "Fenêtre ",
        meaning: {
          en: "Window",
          fa: "پنجره"
        },
        pronunciation: "feh-netr",
        example: {
          fr: "Elle regarde par la fenêtre.",
          en: "She looks through the window.",
          fa: "او از پنجره نگاه می‌کند."
        },
        tip: "Relate 'fenestration' in architecture."
      },
      {
        id: 465,
        word: "Muret ",
        meaning: {
          en: "Low wall",
          fa: "دیوار کوتاه"
        },
        pronunciation: "myur-ay",
        example: {
          fr: "Les enfants jouent près du muret.",
          en: "The children play near the low wall.",
          fa: "بچه‌ها نزدیک دیوار کوتاه بازی می‌کنند."
        },
        tip: "Think of 'mural' as a wall artwork."
      },
      {
        id: 466,
        word: "Clôture ",
        meaning: {
          en: "Fence",
          fa: "حصار"
        },
        pronunciation: "klaw-toor",
        example: {
          fr: "Nous avons construit une clôture.",
          en: "We built a fence.",
          fa: "ما یک حصار ساختیم."
        },
        tip: "Imagine a fence closing off an area."
      },
      {
        id: 467,
        word: "Toit ",
        meaning: {
          en: "Roof",
          fa: "سقف"
        },
        pronunciation: "twa",
        example: {
          fr: "Le toit est rouge.",
          en: "The roof is red.",
          fa: "سقف قرمز است."
        },
        tip: "The roof keeps you dry from rain."
      },
      {
        id: 468,
        word: "Grenier ",
        meaning: {
          en: "Attic",
          fa: "اتاق زیر شیروانی"
        },
        pronunciation: "gruh-nyay",
        example: {
          fr: "Le grenier est plein.",
          en: "The attic is full.",
          fa: "اتاق زیر شیروانی پر است."
        },
        tip: "Attics are gray, dusty, and full of old things."
      },
      {
        id: 469,
        word: "Cave ",
        meaning: {
          en: "Cellar",
          fa: "زیرزمین"
        },
        pronunciation: "kav",
        example: {
          fr: "La cave est humide.",
          en: "The cellar is damp.",
          fa: "زیرزمین نمناک است."
        },
        tip: "Like a cave, dark and cool."
      },
      {
        id: 470,
        word: "Sous-sol ",
        meaning: {
          en: "Basement",
          fa: "طبقه زیرین"
        },
        pronunciation: "soo-sol",
        example: {
          fr: "Le sous-sol est vaste.",
          en: "The basement is spacious.",
          fa: "طبقه زیرین وسیع است."
        },
        tip: "Think of it as the soul under the main floor."
      },
      {
        id: 471,
        word: "Meuble ",
        meaning: {
          en: "Furniture",
          fa: "مبلمان"
        },
        pronunciation: "möb-luh",
        example: {
          fr: "Le meuble est beau.",
          en: "The furniture is beautiful.",
          fa: "این مبلمان زیبا است."
        },
        tip: "Think of 'mobile' as movable furniture."
      },
      {
        id: 472,
        word: "Canapé ",
        meaning: {
          en: "Sofa",
          fa: "مبل"
        },
        pronunciation: "ka-na-pay",
        example: {
          fr: "J'aime le canapé comfortable.",
          en: "I like the comfortable sofa.",
          fa: "من مبل راحت را دوست دارم."
        },
        tip: "Think of 'canopy' as a covered sofa."
      },
      {
        id: 473,
        word: "Fauteuil ",
        meaning: {
          en: "Armchair",
          fa: "صندلی راحتی"
        },
        pronunciation: "foh-tœ-yuh",
        example: {
          fr: "Le fauteuil est ancien.",
          en: "The armchair is ancient.",
          fa: "این صندلی راحتی قدیمی است."
        },
        tip: "Think of a 'foot' resting on an armchair."
      },
      {
        id: 474,
        word: "Chaise ",
        meaning: {
          en: "Chair",
          fa: "صندلی"
        },
        pronunciation: "shæz",
        example: {
          fr: "La chaise est haute.",
          en: "The chair is high.",
          fa: "این صندلی بلند است."
        },
        tip: "Think of 'chasing' to sit on a chair."
      },
      {
        id: 475,
        word: "Table ",
        meaning: {
          en: "Table",
          fa: "میز"
        },
        pronunciation: "ta-bluh",
        example: {
          fr: "Je mets le livre sur la table.",
          en: "I put the book on the table.",
          fa: "کتاب را روی میز گذاشتم."
        },
        tip: "Tables have 'legs' like a stool."
      },
      {
        id: 476,
        word: "Bureau ",
        meaning: {
          en: "Desk",
          fa: "میز"
        },
        pronunciation: "byoo-roh",
        example: {
          fr: "Le bureau est dans le coin.",
          en: "The desk is in the corner.",
          fa: "میز در گوشه است."
        },
        tip: "Think of an office desk."
      },
      {
        id: 477,
        word: "Armoire ",
        meaning: {
          en: "Wardrobe",
          fa: "کمد لباس"
        },
        pronunciation: "ahr-mwahr",
        example: {
          fr: "Elle a une armoire en bois.",
          en: "She has a wooden wardrobe.",
          fa: "او یک کمد لباس چوبی دارد."
        },
        tip: "Imagine storing clothes."
      },
      {
        id: 478,
        word: "Placard ",
        meaning: {
          en: "Cupboard",
          fa: "کابینت"
        },
        pronunciation: "pla-kard",
        example: {
          fr: "Il a caché les bonbons dans le placard.",
          en: "He hid the candies in the cupboard.",
          fa: "او آب نبات‌ها را در کابینت پنهان کرد."
        },
        tip: "Think of a storage cabinet."
      },
      {
        id: 479,
        word: "Étagère ",
        meaning: {
          en: "Shelf",
          fa: "قفسه"
        },
        pronunciation: "eh-ta-zher",
        example: {
          fr: "Les livres sont sur l'étagère.",
          en: "The books are on the shelf.",
          fa: "کتاب‌ها روی قفسه هستند."
        },
        tip: "Picture a bookcase."
      },
      {
        id: 480,
        word: "Lit ",
        meaning: {
          en: "Bed",
          fa: "تخت خواب"
        },
        pronunciation: "lee",
        example: {
          fr: "Je vais me coucher dans le lit.",
          en: "I'm going to lie down in the bed.",
          fa: "می‌خواهم روی تخت خواب دراز بکشم."
        },
        tip: "A place to sleep."
      },
      {
        id: 481,
        word: "Matelas ",
        meaning: {
          en: "Mattress",
          fa: "تشک"
        },
        pronunciation: "mah-te-lah",
        example: {
          fr: "Je dors sur un matelas confortable.",
          en: "I sleep on a comfortable mattress.",
          fa: "من بر روی یک تشک راحت می‌خوابم."
        },
        tip: "Think of 'mat' for a mattress."
      },
      {
        id: 482,
        word: "Couvre-lit ",
        meaning: {
          en: "Bedspread",
          fa: "روتختی"
        },
        pronunciation: "koo-vruh-lee",
        example: {
          fr: "Le couvre-lit est très joli.",
          en: "The bedspread is very pretty.",
          fa: "روتختی خیلی زیبا است."
        },
        tip: "Cover your bed with 'couvre-lit'."
      },
      {
        id: 483,
        word: "Rideau ",
        meaning: {
          en: "Curtain",
          fa: "پرده"
        },
        pronunciation: "ree-doh",
        example: {
          fr: "Je ferme le rideau le soir.",
          en: "I close the curtain in the evening.",
          fa: "شب پرده را می‌بندم."
        },
        tip: "Think of 'hide' with a rideau."
      },
      {
        id: 484,
        word: "Tapis ",
        meaning: {
          en: "Rug",
          fa: "فرش"
        },
        pronunciation: "tah-pee",
        example: {
          fr: "Il y a un tapis sous la table.",
          en: "There is a rug under the table.",
          fa: "یک فرش زیر میز وجود دارد."
        },
        tip: "A 'tap' on the tapis."
      },
      {
        id: 485,
        word: "Décoration ",
        meaning: {
          en: "Decoration",
          fa: "تزئین"
        },
        pronunciation: "day-koh-rah-syon",
        example: {
          fr: "La décoration de la chambre est belle.",
          en: "The room's decoration is beautiful.",
          fa: "تزئین اتاق زیبا است."
        },
        tip: "Think of 'decorate' as a décoration."
      },
      {
        id: 486,
        word: "Lampe ",
        meaning: {
          en: "Lamp",
          fa: "چراغ"
        },
        pronunciation: "lahmp",
        example: {
          fr: "J'ai besoin d'une lampe pour lire.",
          en: "I need a lamp to read.",
          fa: "من به یک چراغ برای خواندن نیاز دارم."
        },
        tip: "Think of a light source."
      },
      {
        id: 487,
        word: "Ampoule ",
        meaning: {
          en: "Bulb",
          fa: "لامپ"
        },
        pronunciation: "ahm-pool",
        example: {
          fr: "L'ampoule est grillée.",
          en: "The bulb is burnt out.",
          fa: "لامپ سوخته است."
        },
        tip: "Think of a glass bulb."
      },
      {
        id: 488,
        word: "Lumière ",
        meaning: {
          en: "Light",
          fa: "نور"
        },
        pronunciation: "loo-mee-air",
        example: {
          fr: "La lumière est vive.",
          en: "The light is bright.",
          fa: "نور روشن است."
        },
        tip: "Lumière sounds like luminous."
      },
      {
        id: 489,
        word: "Chaleur ",
        meaning: {
          en: "Heat",
          fa: "گرما"
        },
        pronunciation: "sha-leur",
        example: {
          fr: "Je ressens la chaleur du soleil.",
          en: "I feel the heat of the sun.",
          fa: "من گرمای خورشید را حس می‌کنم."
        },
        tip: "Think warmth and heat."
      },
      {
        id: 490,
        word: "Radiateur ",
        meaning: {
          en: "Radiator",
          fa: "رادیاتور"
        },
        pronunciation: "ra-dyah-teur",
        example: {
          fr: "Le radiateur réchauffe la pièce.",
          en: "The radiator heats the room.",
          fa: "رادیاتور اتاق را گرم می‌کند."
        },
        tip: "Think of a heat radiator."
      },
      {
        id: 491,
        word: "Chauffage ",
        meaning: {
          en: "Heating",
          fa: "گرمایش"
        },
        pronunciation: "sho-fazh",
        example: {
          fr: "Le chauffage est en panne.",
          en: "The heating is broken.",
          fa: "گرمایش خراب است."
        },
        tip: "Think of 'chauffeur' who drives your heated car."
      },
      {
        id: 492,
        word: "Climatisation ",
        meaning: {
          en: "Air conditioning",
          fa: "تهویه مطبوع"
        },
        pronunciation: "klee-ma-tee-sa-syon",
        example: {
          fr: "La climatisation est allumée.",
          en: "The air conditioning is on.",
          fa: "تهویه مطبوع روشن است."
        },
        tip: "Think of 'climate' to cool the environment."
      },
      {
        id: 493,
        word: "Ventilateur ",
        meaning: {
          en: "Fan",
          fa: "پنکه"
        },
        pronunciation: "von-tee-la-tur",
        example: {
          fr: "Le ventilateur tourne rapidement.",
          en: "The fan spins quickly.",
          fa: "پنکه سریع می‌چرخد."
        },
        tip: "Think of 'vent' creating air flow."
      },
      {
        id: 494,
        word: "Électricité ",
        meaning: {
          en: "Electricity",
          fa: "برق"
        },
        pronunciation: "ay-lek-tree-see-tay",
        example: {
          fr: "L'électricité a été coupée.",
          en: "The electricity was cut off.",
          fa: "برق قطع شده بود."
        },
        tip: "Sounds like 'electricity'."
      },
      {
        id: 495,
        word: "Eau courante ",
        meaning: {
          en: "Running water",
          fa: "آب جاری"
        },
        pronunciation: "oh koo-ront",
        example: {
          fr: "Nous n'avons pas d'eau courante.",
          en: "We don't have running water.",
          fa: "ما آب جاری نداریم."
        },
        tip: "Think of 'current water'."
      },
      {
        id: 496,
        word: "Robinet ",
        meaning: {
          en: "Faucet",
          fa: "شیر آب"
        },
        pronunciation: "ro-bee-neh",
        example: {
          fr: "Je ferme le robinet après avoir lavé mes mains.",
          en: "I turn off the faucet after washing my hands.",
          fa: "من شیر آب را بعد از شستن دست‌هایم می‌بندم."
        },
        tip: "Think of 'Robin' turning a tap."
      },
      {
        id: 497,
        word: "Douche ",
        meaning: {
          en: "Shower",
          fa: "دوش"
        },
        pronunciation: "doosh",
        example: {
          fr: "Je prends une douche tous les matins.",
          en: "I take a shower every morning.",
          fa: "من هر صبح دوش می‌گیرم."
        },
        tip: "Imagine standing under a 'downpour'."
      },
      {
        id: 498,
        word: "Baignoire ",
        meaning: {
          en: "Bathtub",
          fa: "وان"
        },
        pronunciation: "ben-war",
        example: {
          fr: "Ma baignoire est pleine d'eau.",
          en: "My bathtub is full of water.",
          fa: "وان من پر از آب است."
        },
        tip: "Picture 'Ben in a tub'."
      },
      {
        id: 499,
        word: "Toilette ",
        meaning: {
          en: "Toilet",
          fa: "توالت"
        },
        pronunciation: "twa-let",
        example: {
          fr: "La toilette est au bout du couloir.",
          en: "The toilet is at the end of the hallway.",
          fa: "توالت در انتهای راهرو است."
        },
        tip: "Sounds like 'toilet'."
      },
      {
        id: 500,
        word: "Plomberie ",
        meaning: {
          en: "Plumbing",
          fa: "لوله‌کشی"
        },
        pronunciation: "plom-ree",
        example: {
          fr: "La plomberie de la maison est ancienne.",
          en: "The plumbing in the house is old.",
          fa: "لوله‌کشی خانه قدیمی است."
        },
        tip: "Think of 'plumb' for pipes."
      },
      {
        id: 501,
        word: "Nature ",
        meaning: {
          en: "Nature",
          fa: "طبیعت"
        },
        pronunciation: "na-ture",
        example: {
          fr: "La nature est belle.",
          en: "Nature is beautiful.",
          fa: "طبیعت زیباست."
        },
        tip: "Think of the word 'natural'."
      },
      {
        id: 502,
        word: "Environnement ",
        meaning: {
          en: "Environment",
          fa: "محیط زیست"
        },
        pronunciation: "on-vi-ron-mon",
        example: {
          fr: "Nous devons protéger l'environnement.",
          en: "We must protect the environment.",
          fa: "ما باید از محیط زیست محافظت کنیم."
        },
        tip: "Relate to 'environmental'."
      },
      {
        id: 503,
        word: "Forêt ",
        meaning: {
          en: "Forest",
          fa: "جنگل"
        },
        pronunciation: "fo-ray",
        example: {
          fr: "La forêt est dense.",
          en: "The forest is dense.",
          fa: "جنگل متراکم است."
        },
        tip: "Think of 'forestry'."
      },
      {
        id: 504,
        word: "Bois ",
        meaning: {
          en: "Wood",
          fa: "چوب"
        },
        pronunciation: "bwah",
        example: {
          fr: "Il coupe du bois.",
          en: "He is cutting wood.",
          fa: "او در حال بریدن چوب است."
        },
        tip: "Rhymes with 'choice'."
      },
      {
        id: 505,
        word: "Arbre ",
        meaning: {
          en: "Tree",
          fa: "درخت"
        },
        pronunciation: "arbr",
        example: {
          fr: "L'arbre est grand.",
          en: "The tree is tall.",
          fa: "درخت بلند است."
        },
        tip: "Think 'arbor'."
      },
      {
        id: 506,
        word: "Fleur ",
        meaning: {
          en: "Flower",
          fa: "گل"
        },
        pronunciation: "flur",
        example: {
          fr: "La fleur est belle.",
          en: "The flower is beautiful.",
          fa: "گل زیبا است."
        },
        tip: "Think of 'floral'."
      },
      {
        id: 507,
        word: "Plante ",
        meaning: {
          en: "Plant",
          fa: "گیاه"
        },
        pronunciation: "plahnt",
        example: {
          fr: "La plante pousse vite.",
          en: "The plant grows fast.",
          fa: "گیاه سریع رشد می‌کند."
        },
        tip: "Similar to 'plant'."
      },
      {
        id: 508,
        word: "Herbe ",
        meaning: {
          en: "Herb",
          fa: "علف"
        },
        pronunciation: "er-b",
        example: {
          fr: "L'herbe est verte.",
          en: "The grass is green.",
          fa: "چمن سبز است."
        },
        tip: "Think 'herbal'."
      },
      {
        id: 509,
        word: "Champ ",
        meaning: {
          en: "Field",
          fa: "مزرعه"
        },
        pronunciation: "shah(n)",
        example: {
          fr: "Les vaches sont dans le champ.",
          en: "The cows are in the field.",
          fa: "گاوها در مزرعه هستند."
        },
        tip: "Think of 'champion' in a field."
      },
      {
        id: 510,
        word: "Prairie ",
        meaning: {
          en: "Meadow",
          fa: "چمنزار"
        },
        pronunciation: "preh-ree",
        example: {
          fr: "La prairie est vaste.",
          en: "The meadow is vast.",
          fa: "چمنزار وسیع است."
        },
        tip: "Sounds like 'prairie'."
      },
      {
        id: 511,
        word: "Montagne ",
        meaning: {
          en: "Mountain",
          fa: "کوه"
        },
        pronunciation: "mohn-tayn",
        example: {
          fr: "La montagne est belle.",
          en: "The mountain is beautiful.",
          fa: "کوه زیباست."
        },
        tip: "Think of Mount-tayne."
      },
      {
        id: 512,
        word: "Colline ",
        meaning: {
          en: "Hill",
          fa: "تپه"
        },
        pronunciation: "koh-leen",
        example: {
          fr: "Nous marchons sur la colline.",
          en: "We walk on the hill.",
          fa: "ما روی تپه قدم می‌زنیم."
        },
        tip: "Colline is a small climb."
      },
      {
        id: 513,
        word: "Vallée ",
        meaning: {
          en: "Valley",
          fa: "دره"
        },
        pronunciation: "vah-lay",
        example: {
          fr: "La vallée est profonde.",
          en: "The valley is deep.",
          fa: "دره عمیق است."
        },
        tip: "A valley is low like a v."
      },
      {
        id: 514,
        word: "Rivière ",
        meaning: {
          en: "River",
          fa: "رودخانه"
        },
        pronunciation: "ree-vee-air",
        example: {
          fr: "La rivière coule vite.",
          en: "The river flows fast.",
          fa: "رودخانه سریع جریان دارد."
        },
        tip: "Rivière sounds like river."
      },
      {
        id: 515,
        word: "Fleuve ",
        meaning: {
          en: "River",
          fa: "رود"
        },
        pronunciation: "fluh-v",
        example: {
          fr: "Le fleuve est large.",
          en: "The river is wide.",
          fa: "رود پهن است."
        },
        tip: "Fleuve means a flowing waterbody."
      },
      {
        id: 516,
        word: "Lac ",
        meaning: {
          en: "Lake",
          fa: "دریاچه"
        },
        pronunciation: "lak",
        example: {
          fr: "Le lac est paisible.",
          en: "The lake is peaceful.",
          fa: "دریاچه آرام است."
        },
        tip: "Think of a large body of fresh water."
      },
      {
        id: 517,
        word: "Mer ",
        meaning: {
          en: "Sea",
          fa: "دریا"
        },
        pronunciation: "mehr",
        example: {
          fr: "La mer est vaste.",
          en: "The sea is vast.",
          fa: "دریا پهناور است."
        },
        tip: "Imagine saltwater blanket."
      },
      {
        id: 518,
        word: "Océan ",
        meaning: {
          en: "Ocean",
          fa: "اقیانوس"
        },
        pronunciation: "oh-say-ahn",
        example: {
          fr: "L'océan est profond.",
          en: "The ocean is deep.",
          fa: "اقیانوس عمیق است."
        },
        tip: "Think of the largest body of water."
      },
      {
        id: 519,
        word: "Plage ",
        meaning: {
          en: "Beach",
          fa: "ساحل"
        },
        pronunciation: "plazh",
        example: {
          fr: "Nous marchons sur la plage.",
          en: "We walk on the beach.",
          fa: "ما در ساحل قدم می‌زنیم."
        },
        tip: "Remember sand and sea meet here."
      },
      {
        id: 520,
        word: "Côte ",
        meaning: {
          en: "Coast",
          fa: "ساحل"
        },
        pronunciation: "koht",
        example: {
          fr: "La côte est belle.",
          en: "The coast is beautiful.",
          fa: "ساحل زیبا است."
        },
        tip: "Think of where land meets sea."
      },
      {
        id: 521,
        word: "Rocher ",
        meaning: {
          en: "Rock",
          fa: "سنگ"
        },
        pronunciation: "roh-shey",
        example: {
          fr: "Le rocher est énorme.",
          en: "The rock is huge.",
          fa: "سنگ بزرگ است."
        },
        tip: "Think of rock climbing spots."
      },
      {
        id: 522,
        word: "Terre ",
        meaning: {
          en: "Earth",
          fa: "زمین"
        },
        pronunciation: "tehr",
        example: {
          fr: "La terre est ronde.",
          en: "The Earth is round.",
          fa: "زمین گرد است."
        },
        tip: "Think 'terra' like terrain."
      },
      {
        id: 523,
        word: "Sol ",
        meaning: {
          en: "Ground",
          fa: "زمین"
        },
        pronunciation: "sohl",
        example: {
          fr: "Il est assis sur le sol.",
          en: "He is sitting on the ground.",
          fa: "او روی زمین نشسته است."
        },
        tip: "Remember 'sole' of the foot to the ground."
      },
      {
        id: 524,
        word: "Ciel ",
        meaning: {
          en: "Sky",
          fa: "آسمان"
        },
        pronunciation: "syel",
        example: {
          fr: "Le ciel est bleu.",
          en: "The sky is blue.",
          fa: "آسمان آبی است."
        },
        tip: "Think of celestial events."
      },
      {
        id: 525,
        word: "Nuage ",
        meaning: {
          en: "Cloud",
          fa: "ابر"
        },
        pronunciation: "nwahzh",
        example: {
          fr: "Le nuage est blanc.",
          en: "The cloud is white.",
          fa: "ابر سفید است."
        },
        tip: "Imagine 'nuances' in the sky."
      },
      {
        id: 526,
        word: "Soleil ",
        meaning: {
          en: "Sun",
          fa: "خورشید"
        },
        pronunciation: "so-lay",
        example: {
          fr: "Le soleil brille.",
          en: "The sun shines.",
          fa: "خورشید می‌درخشد."
        },
        tip: "Think of 'solar' energy."
      },
      {
        id: 527,
        word: "Lune ",
        meaning: {
          en: "Moon",
          fa: "ماه"
        },
        pronunciation: "loon",
        example: {
          fr: "La lune est belle.",
          en: "The moon is beautiful.",
          fa: "ماه زیباست."
        },
        tip: "Think of 'lunar' phases."
      },
      {
        id: 528,
        word: "Étoile ",
        meaning: {
          en: "Star",
          fa: "ستاره"
        },
        pronunciation: "ay-twal",
        example: {
          fr: "Une étoile brille dans le ciel.",
          en: "A star shines in the sky.",
          fa: "ستاره‌ای در آسمان می‌درخشد."
        },
        tip: "Think of 'twinkle' as in twinkle twinkle little star."
      },
      {
        id: 529,
        word: "Vent ",
        meaning: {
          en: "Wind",
          fa: "باد"
        },
        pronunciation: "vahnt",
        example: {
          fr: "Le vent souffle fort.",
          en: "The wind blows strongly.",
          fa: "باد شدیداً می‌وزد."
        },
        tip: "Think of 'vent' openings that let air flow."
      },
      {
        id: 530,
        word: "Pluie ",
        meaning: {
          en: "Rain",
          fa: "باران"
        },
        pronunciation: "plwee",
        example: {
          fr: "La pluie tombe doucement.",
          en: "The rain falls gently.",
          fa: "باران آرام می‌بارد."
        },
        tip: "Think of 'plumbing' for handling water."
      },
      {
        id: 531,
        word: "Neige ",
        meaning: {
          en: "Snow",
          fa: "برف"
        },
        pronunciation: "neh-j",
        example: {
          fr: "La neige est blanche.",
          en: "The snow is white.",
          fa: "برف سفید است."
        },
        tip: "It sounds like 'nudge' with an 's'."
      },
      {
        id: 532,
        word: "Grêle ",
        meaning: {
          en: "Hail",
          fa: "تگرگ"
        },
        pronunciation: "grehl",
        example: {
          fr: "Il y a de la grêle aujourd'hui.",
          en: "There is hail today.",
          fa: "امروز تگرگ است."
        },
        tip: "Imagine tiny 'grains' falling."
      },
      {
        id: 533,
        word: "Brouillard ",
        meaning: {
          en: "Fog",
          fa: "مه"
        },
        pronunciation: "broo-yar",
        example: {
          fr: "Le brouillard est dense ce matin.",
          en: "The fog is dense this morning.",
          fa: "امروز صبح مه غلیظ است."
        },
        tip: "Think of 'brewing' dense air."
      },
      {
        id: 534,
        word: "Orage ",
        meaning: {
          en: "Storm",
          fa: "طوفان"
        },
        pronunciation: "oh-raj",
        example: {
          fr: "Un orage se prépare.",
          en: "A storm is brewing.",
          fa: "طوفانی در حال وقوع است."
        },
        tip: "Rage' of the weather."
      },
      {
        id: 535,
        word: "Éclair ",
        meaning: {
          en: "Lightning",
          fa: "رعد و برق"
        },
        pronunciation: "e-clair",
        example: {
          fr: "L'éclair a illuminé le ciel.",
          en: "The lightning lit up the sky.",
          fa: "رعد و برق آسمان را روشن کرد."
        },
        tip: "Like a 'flash' of eclair pastry."
      },
      {
        id: 536,
        word: "Tonnerre ",
        meaning: {
          en: "Thunder",
          fa: "رعد"
        },
        pronunciation: "to-nair",
        example: {
          fr: "Le tonnerre gronde.",
          en: "The thunder rumbles.",
          fa: "رعد می‌غرد."
        },
        tip: "Sounds like thunder"
      },
      {
        id: 537,
        word: "Arc-en-ciel ",
        meaning: {
          en: "Rainbow",
          fa: "رنگین‌کمان"
        },
        pronunciation: "arc-on-ciel",
        example: {
          fr: "Un arc-en-ciel apparaît.",
          en: "A rainbow appears.",
          fa: "یک رنگین‌کمان ظاهر می‌شود."
        },
        tip: "Arc of the sky"
      },
      {
        id: 538,
        word: "Climat ",
        meaning: {
          en: "Climate",
          fa: "آب‌وهوا"
        },
        pronunciation: "klee-ma",
        example: {
          fr: "Le climat change.",
          en: "The climate is changing.",
          fa: "آب‌وهوا در حال تغییر است."
        },
        tip: "Sounds like climate"
      },
      {
        id: 539,
        word: "Saison ",
        meaning: {
          en: "Season",
          fa: "فصل"
        },
        pronunciation: "say-zon",
        example: {
          fr: "C'est la saison des pluies.",
          en: "It's the rainy season.",
          fa: "این فصل باران است."
        },
        tip: "Think of seasons in sports"
      },
      {
        id: 540,
        word: "Printemps ",
        meaning: {
          en: "Spring",
          fa: "بهار"
        },
        pronunciation: "pran-tom",
        example: {
          fr: "Le printemps est coloré.",
          en: "Spring is colorful.",
          fa: "بهار رنگارنگ است."
        },
        tip: "Printemps begins with 'pri' like 'primavera'"
      },
      {
        id: 541,
        word: "Été ",
        meaning: {
          en: "Summer",
          fa: "تابستان"
        },
        pronunciation: "ay-tay",
        example: {
          fr: "J'aime l'été.",
          en: "I love summer.",
          fa: "من تابستان را دوست دارم."
        },
        tip: "Remember sunny days."
      },
      {
        id: 542,
        word: "Automne ",
        meaning: {
          en: "Autumn",
          fa: "پاییز"
        },
        pronunciation: "o-tum",
        example: {
          fr: "L'automne est agréable.",
          en: "Autumn is pleasant.",
          fa: "پاییز دلپذیر است."
        },
        tip: "Think of falling leaves."
      },
      {
        id: 543,
        word: "Hiver ",
        meaning: {
          en: "Winter",
          fa: "زمستان"
        },
        pronunciation: "ee-vair",
        example: {
          fr: "L'hiver est froid.",
          en: "Winter is cold.",
          fa: "زمستان سرد است."
        },
        tip: "Imagine snow."
      },
      {
        id: 544,
        word: "Écologie ",
        meaning: {
          en: "Ecology",
          fa: "بوم‌شناسی"
        },
        pronunciation: "ay-ko-lo-jee",
        example: {
          fr: "L'écologie est importante.",
          en: "Ecology is important.",
          fa: "بوم‌شناسی مهم است."
        },
        tip: "Think of nature's balance."
      },
      {
        id: 545,
        word: "Pollution ",
        meaning: {
          en: "Pollution",
          fa: "آلودگی"
        },
        pronunciation: "po-loo-syon",
        example: {
          fr: "La pollution est nocive.",
          en: "Pollution is harmful.",
          fa: "آلودگی مضر است."
        },
        tip: "Relate to smoke and waste."
      },
      {
        id: 546,
        word: "Recyclage ",
        meaning: {
          en: "Recycling",
          fa: "بازیافت"
        },
        pronunciation: "rey-see-klazh",
        example: {
          fr: "Le recyclage est important.",
          en: "Recycling is important.",
          fa: "بازیافت مهم است."
        },
        tip: "Think 'cycle' with 're' for repeatedly."
      },
      {
        id: 547,
        word: "Protection ",
        meaning: {
          en: "Protection",
          fa: "حفاظت"
        },
        pronunciation: "proh-tehk-syon",
        example: {
          fr: "La protection de la nature est essentielle.",
          en: "The protection of nature is essential.",
          fa: "حفاظت از طبیعت اساسی است."
        },
        tip: "Think 'protect' with 'tion' for the act."
      },
      {
        id: 548,
        word: "Animal ",
        meaning: {
          en: "Animal",
          fa: "حیوان"
        },
        pronunciation: "ah-nee-mal",
        example: {
          fr: "J'aime cet animal.",
          en: "I like this animal.",
          fa: "من این حیوان را دوست دارم."
        },
        tip: "Same spelling as English; think zoo!"
      },
      {
        id: 549,
        word: "Oiseau ",
        meaning: {
          en: "Bird",
          fa: "پرنده"
        },
        pronunciation: "wah-zoh",
        example: {
          fr: "Regarde l'oiseau là-bas.",
          en: "Look at the bird over there.",
          fa: "به آن پرنده آنجا نگاه کن."
        },
        tip: "The 'wa' sound is like 'wasp' without 'sp'."
      },
      {
        id: 550,
        word: "Poisson ",
        meaning: {
          en: "Fish",
          fa: "ماهی"
        },
        pronunciation: "pwah-soh(n)",
        example: {
          fr: "Le poisson nage dans l'eau.",
          en: "The fish swims in the water.",
          fa: "ماهی در آب شنا می‌کند."
        },
        tip: "Think of 'poisson' as 'sea poison'."
      },
      {
        id: 551,
        word: "Ordinateur ",
        meaning: {
          en: "Computer",
          fa: "رایانه"
        },
        pronunciation: "or-dee-na-tur",
        example: {
          fr: "J'utilise un ordinateur pour travailler.",
          en: "I use a computer to work.",
          fa: "من از رایانه برای کار استفاده می‌کنم."
        },
        tip: "Think of 'order' to remember 'ordinateur'."
      },
      {
        id: 552,
        word: "Portable ",
        meaning: {
          en: "Laptop",
          fa: "کامپیوتر قابل حمل"
        },
        pronunciation: "por-ta-bl",
        example: {
          fr: "Mon portable est très léger.",
          en: "My laptop is very light.",
          fa: "لپ‌تاپ من بسیار سبک است."
        },
        tip: "Think 'portable' like a 'laptop'."
      },
      {
        id: 553,
        word: "Téléphone ",
        meaning: {
          en: "Telephone",
          fa: "تلفن"
        },
        pronunciation: "teh-leh-fohn",
        example: {
          fr: "Je vais appeler avec mon téléphone.",
          en: "I will call with my telephone.",
          fa: "من با تلفن خود تماس خواهم گرفت."
        },
        tip: "Reminds you of 'telephone' in English."
      },
      {
        id: 554,
        word: "Smartphone ",
        meaning: {
          en: "Smartphone",
          fa: "گوشی هوشمند"
        },
        pronunciation: "smart-fone",
        example: {
          fr: "J'ai acheté un nouveau smartphone.",
          en: "I bought a new smartphone.",
          fa: "من گوشی هوشمند جدیدی خریدم."
        },
        tip: "Think 'smart' and 'phone'."
      },
      {
        id: 555,
        word: "Tablette ",
        meaning: {
          en: "Tablet",
          fa: "تبلت"
        },
        pronunciation: "tab-let",
        example: {
          fr: "Elle lit un livre sur sa tablette.",
          en: "She reads a book on her tablet.",
          fa: "او بر روی تبلت خود کتاب می‌خواند."
        },
        tip: "Tablet sounds like 'tablette'."
      },
      {
        id: 556,
        word: "Internet ",
        meaning: {
          en: "Internet",
          fa: "اینترنت"
        },
        pronunciation: "in-ter-net",
        example: {
          fr: "J'utilise Internet chaque jour.",
          en: "I use the Internet every day.",
          fa: "من هر روز از اینترنت استفاده می‌کنم."
        },
        tip: "Think of the global web."
      },
      {
        id: 557,
        word: "Réseau ",
        meaning: {
          en: "Network",
          fa: "شبکه"
        },
        pronunciation: "ray-zoh",
        example: {
          fr: "Le réseau est lent aujourd'hui.",
          en: "The network is slow today.",
          fa: "شبکه امروز کند است."
        },
        tip: "Connect to net."
      },
      {
        id: 558,
        word: "Wifi ",
        meaning: {
          en: "Wifi",
          fa: "وای‌فای"
        },
        pronunciation: "wee-fee",
        example: {
          fr: "Où est le mot de passe du Wifi?",
          en: "Where is the Wifi password?",
          fa: "کلمه عبور وای‌فای کجاست؟"
        },
        tip: "Think of wireless internet."
      },
      {
        id: 559,
        word: "Courriel ",
        meaning: {
          en: "Email",
          fa: "ایمیل"
        },
        pronunciation: "coor-ree-el",
        example: {
          fr: "J'ai envoyé un courriel important.",
          en: "I sent an important email.",
          fa: "یک ایمیل مهم فرستادم."
        },
        tip: "Courrier + électronique."
      },
      {
        id: 560,
        word: "Messagerie ",
        meaning: {
          en: "Messaging",
          fa: "پیام‌رسانی"
        },
        pronunciation: "meh-sa-zhuh-ree",
        example: {
          fr: "La messagerie est rapide.",
          en: "The messaging is fast.",
          fa: "پیام‌رسانی سریع است."
        },
        tip: "Think of message delivery."
      },
      {
        id: 561,
        word: "SMS ",
        meaning: {
          en: "Text message",
          fa: "پیامک"
        },
        pronunciation: "es-em-es",
        example: {
          fr: "Je t'envoie un SMS.",
          en: "I am sending you a text message.",
          fa: "دارم برایت پیامک می‌فرستم."
        },
        tip: "Think of your phone's messaging app."
      },
      {
        id: 562,
        word: "Appel ",
        meaning: {
          en: "Call",
          fa: "تماس"
        },
        pronunciation: "ah-pel",
        example: {
          fr: "Je fais un appel.",
          en: "I am making a call.",
          fa: "دارم تماس می‌گیرم."
        },
        tip: "Dial to connect."
      },
      {
        id: 563,
        word: "Sonnerie ",
        meaning: {
          en: "Ringtone",
          fa: "زنگ"
        },
        pronunciation: "son-ree",
        example: {
          fr: "Change ta sonnerie.",
          en: "Change your ringtone.",
          fa: "زنگ تلفنت را عوض کن."
        },
        tip: "Think of your phone's sound."
      },
      {
        id: 564,
        word: "Écran ",
        meaning: {
          en: "Screen",
          fa: "صفحه نمایش"
        },
        pronunciation: "ay-krahn",
        example: {
          fr: "Regarde l'écran.",
          en: "Look at the screen.",
          fa: "به صفحه نمایش نگاه کن."
        },
        tip: "Think of TV or computer displays."
      },
      {
        id: 565,
        word: "Clavier ",
        meaning: {
          en: "Keyboard",
          fa: "صفحه کلید"
        },
        pronunciation: "kla-vyay",
        example: {
          fr: "Tape sur le clavier.",
          en: "Type on the keyboard.",
          fa: "روی صفحه کلید تایپ کن."
        },
        tip: "Where your fingers type."
      },
      {
        id: 566,
        word: "Souris ",
        meaning: {
          en: "Mouse",
          fa: "موش"
        },
        pronunciation: "soo-ree",
        example: {
          fr: "J'ai acheté une nouvelle souris.",
          en: "I bought a new mouse.",
          fa: "من یک موش جدید خریدم."
        },
        tip: "Think of a small mouse for a computer."
      },
      {
        id: 567,
        word: "Imprimante ",
        meaning: {
          en: "Printer",
          fa: "چاپگر"
        },
        pronunciation: "am-pree-mont",
        example: {
          fr: "L'imprimante est en panne.",
          en: "The printer is broken.",
          fa: "چاپگر خراب است."
        },
        tip: "Think of 'imprint' for printing on paper."
      },
      {
        id: 568,
        word: "Scanner ",
        meaning: {
          en: "Scanner",
          fa: "اسکنر"
        },
        pronunciation: "skan-er",
        example: {
          fr: "J'utilise le scanner pour numériser le document.",
          en: "I use the scanner to digitize the document.",
          fa: "از اسکنر برای دیجیتالی کردن سند استفاده می‌کنم."
        },
        tip: "Think of scanning barcodes at a store."
      },
      {
        id: 569,
        word: "Logiciel ",
        meaning: {
          en: "Software",
          fa: "نرم‌افزار"
        },
        pronunciation: "lo-zhee-el",
        example: {
          fr: "Ce logiciel est très utile.",
          en: "This software is very useful.",
          fa: "این نرم‌افزار بسیار مفید است."
        },
        tip: "Relate it to logical software operations."
      },
      {
        id: 570,
        word: "Application ",
        meaning: {
          en: "Application",
          fa: "برنامه"
        },
        pronunciation: "ap-lee-ka-syon",
        example: {
          fr: "J'ai téléchargé une nouvelle application.",
          en: "I downloaded a new application.",
          fa: "یک برنامه جدید دانلود کردم."
        },
        tip: "Apps are short for applications."
      },
      {
        id: 571,
        word: "Programme ",
        meaning: {
          en: "Program",
          fa: "برنامه"
        },
        pronunciation: "proh-gram",
        example: {
          fr: "J'ai installé un nouveau programme.",
          en: "I installed a new program.",
          fa: "من یک برنامه جدید نصب کردم."
        },
        tip: "Think of TV programs."
      },
      {
        id: 572,
        word: "Site web ",
        meaning: {
          en: "Website",
          fa: "وب سایت"
        },
        pronunciation: "seet web",
        example: {
          fr: "Je visite souvent ce site web.",
          en: "I often visit this website.",
          fa: "من اغلب به این وب سایت سر می زنم."
        },
        tip: "Remember browsing web pages."
      },
      {
        id: 573,
        word: "Navigateur ",
        meaning: {
          en: "Browser",
          fa: "مرورگر"
        },
        pronunciation: "nah-vee-gah-tur",
        example: {
          fr: "Utilisez un navigateur sécurisé.",
          en: "Use a secure browser.",
          fa: "از یک مرورگر امن استفاده کنید."
        },
        tip: "Relate to surfing the web."
      },
      {
        id: 574,
        word: "Moteur de recherche ",
        meaning: {
          en: "Search engine",
          fa: "موتور جستجو"
        },
        pronunciation: "moh-teur duh reh-shersh",
        example: {
          fr: "Google est un moteur de recherche populaire.",
          en: "Google is a popular search engine.",
          fa: "گوگل یک موتور جستجوی محبوب است."
        },
        tip: "Think of Google or Bing."
      },
      {
        id: 575,
        word: "Téléchargement ",
        meaning: {
          en: "Download",
          fa: "دانلود"
        },
        pronunciation: "teh-leh-sharj-mahn",
        example: {
          fr: "Je fais un téléchargement de musique.",
          en: "I'm downloading music.",
          fa: "من دارم موسیقی دانلود می کنم."
        },
        tip: "Often used for files."
      },
      {
        id: 576,
        word: "Fichier ",
        meaning: {
          en: "File",
          fa: "پرونده"
        },
        pronunciation: "fee-shee-ay",
        example: {
          fr: "Le fichier est corrompu.",
          en: "The file is corrupted.",
          fa: "پرونده خراب است."
        },
        tip: "Think of 'file cabinet'."
      },
      {
        id: 577,
        word: "Dossier ",
        meaning: {
          en: "Folder",
          fa: "پوشه"
        },
        pronunciation: "doh-see-ay",
        example: {
          fr: "J'ai créé un dossier.",
          en: "I created a folder.",
          fa: "من یک پوشه ایجاد کردم."
        },
        tip: "Like a 'dossier of documents'."
      },
      {
        id: 578,
        word: "Sauvegarde ",
        meaning: {
          en: "Backup",
          fa: "پشتیبان"
        },
        pronunciation: "soh-vuh-gard",
        example: {
          fr: "La sauvegarde est importante.",
          en: "The backup is important.",
          fa: "پشتیبان مهم است."
        },
        tip: "Think 'save guard'."
      },
      {
        id: 579,
        word: "Donnée ",
        meaning: {
          en: "Data",
          fa: "داده"
        },
        pronunciation: "doh-nay",
        example: {
          fr: "Les données sont sécurisées.",
          en: "The data is secure.",
          fa: "داده‌ها ایمن هستند."
        },
        tip: "Relate to 'donation of data'."
      },
      {
        id: 580,
        word: "Sécurité ",
        meaning: {
          en: "Security",
          fa: "امنیت"
        },
        pronunciation: "say-kyoor-ee-tay",
        example: {
          fr: "La sécurité est cruciale.",
          en: "Security is crucial.",
          fa: "امنیت مهم است."
        },
        tip: "Think 'secure it'."
      },
      {
        id: 581,
        word: "Antivirus ",
        meaning: {
          en: "Antivirus",
          fa: "آنتی‌ویروس"
        },
        pronunciation: "an-tee-vy-roos",
        example: {
          fr: "L'antivirus protège mon ordinateur.",
          en: "The antivirus protects my computer.",
          fa: "آنتی‌ویروس از کامپیوتر من محافظت می‌کند."
        },
        tip: "Think of it as anti-virus software."
      },
      {
        id: 582,
        word: "Confidentiel ",
        meaning: {
          en: "Confidential",
          fa: "محرمانه"
        },
        pronunciation: "kon-fee-den-see-el",
        example: {
          fr: "Ce document est confidentiel.",
          en: "This document is confidential.",
          fa: "این سند محرمانه است."
        },
        tip: "Think of confidence in a secret context."
      },
      {
        id: 583,
        word: "Mot de passe ",
        meaning: {
          en: "Password",
          fa: "رمزعبور"
        },
        pronunciation: "moh də pass",
        example: {
          fr: "N'oubliez pas votre mot de passe.",
          en: "Don't forget your password.",
          fa: "رمزعبور خود را فراموش نکنید."
        },
        tip: "Think pass at the end, like password."
      },
      {
        id: 584,
        word: "Identifiant ",
        meaning: {
          en: "Identifier",
          fa: "شناسایی"
        },
        pronunciation: "ee-den-tee-fy-ahn",
        example: {
          fr: "Mon identifiant est unique.",
          en: "My identifier is unique.",
          fa: "شناسه من منحصر به فرد است."
        },
        tip: "Think of identity."
      },
      {
        id: 585,
        word: "Compte ",
        meaning: {
          en: "Account",
          fa: "حساب"
        },
        pronunciation: "kohmpte",
        example: {
          fr: "J'ai ouvert un nouveau compte.",
          en: "I opened a new account.",
          fa: "یک حساب جدید باز کردم."
        },
        tip: "Think of counting money in an account."
      },
      {
        id: 586,
        word: "Mise à jour ",
        meaning: {
          en: "Update",
          fa: "به‌روزرسانی"
        },
        pronunciation: "meez ah zhoor",
        example: {
          fr: "La mise à jour est terminée.",
          en: "The update is complete.",
          fa: "به‌روزرسانی به پایان رسیده است."
        },
        tip: "Think of 'mise' as 'setting' which is updated."
      },
      {
        id: 587,
        word: "Paramètre ",
        meaning: {
          en: "Setting",
          fa: "تنظیمات"
        },
        pronunciation: "pah-rah-metruh",
        example: {
          fr: "Vérifiez vos paramètres.",
          en: "Check your settings.",
          fa: "تنظیمات خود را بررسی کنید."
        },
        tip: "Sounds like 'parameter' for settings."
      },
      {
        id: 588,
        word: "Webcam ",
        meaning: {
          en: "Webcam",
          fa: "وبکم"
        },
        pronunciation: "web-kam",
        example: {
          fr: "La webcam est active.",
          en: "The webcam is active.",
          fa: "وبکم فعال است."
        },
        tip: "Same as English, 'web cam' for video calls."
      },
      {
        id: 589,
        word: "Micro ",
        meaning: {
          en: "Microphone",
          fa: "میکروفون"
        },
        pronunciation: "mee-kroh",
        example: {
          fr: "Le micro est éteint.",
          en: "The microphone is off.",
          fa: "میکروفون خاموش است."
        },
        tip: "Think 'micro' for speaking."
      },
      {
        id: 590,
        word: "Casque ",
        meaning: {
          en: "Headset",
          fa: "هدست"
        },
        pronunciation: "kask",
        example: {
          fr: "Je porte un casque.",
          en: "I am wearing a headset.",
          fa: "من هدست پوشیده‌ام."
        },
        tip: "Think 'mask' for sound."
      },
      {
        id: 591,
        word: "Réseaux sociaux ",
        meaning: {
          en: "Social networks",
          fa: "شبکه‌های اجتماعی"
        },
        pronunciation: "ray-zoh soh-see-oh",
        example: {
          fr: "Je passe beaucoup de temps sur les réseaux sociaux.",
          en: "I spend a lot of time on social networks.",
          fa: "من زمان زیادی را در شبکه‌های اجتماعی می‌گذرانم."
        },
        tip: "Think of 'networking' in 'social circles'."
      },
      {
        id: 592,
        word: "Publication ",
        meaning: {
          en: "Publication",
          fa: "انتشار"
        },
        pronunciation: "pyoo-blih-kay-shon",
        example: {
          fr: "J'ai lu votre dernière publication.",
          en: "I read your latest publication.",
          fa: "آخرین انتشار شما را خواندم."
        },
        tip: "Think of 'public' as making something known."
      },
      {
        id: 593,
        word: "Écran tactile ",
        meaning: {
          en: "Touchscreen",
          fa: "صفحه‌نمایش لمسی"
        },
        pronunciation: "ayk-rahn tak-teel",
        example: {
          fr: "Mon téléphone a un écran tactile.",
          en: "My phone has a touchscreen.",
          fa: "تلفن من صفحه‌نمایش لمسی دارد."
        },
        tip: "Remember 'tactile' as touching."
      },
      {
        id: 594,
        word: "Carte SIM ",
        meaning: {
          en: "SIM card",
          fa: "کارت سیم"
        },
        pronunciation: "kart sehm",
        example: {
          fr: "J'ai besoin d'une nouvelle carte SIM.",
          en: "I need a new SIM card.",
          fa: "من به یک کارت سیم جدید نیاز دارم."
        },
        tip: "Remember 'SIM' as Subscriber Identity Module."
      },
      {
        id: 595,
        word: "Bluetooth ",
        meaning: {
          en: "Bluetooth",
          fa: "بلوتوث"
        },
        pronunciation: "bloo-tooth",
        example: {
          fr: "La connexion Bluetooth est activée.",
          en: "The Bluetooth connection is enabled.",
          fa: "اتصال بلوتوث فعال است."
        },
        tip: "Link 'blue' with wireless technology."
      },
      {
        id: 596,
        word: "USB ",
        meaning: {
          en: "USB",
          fa: "یو‌اس‌بی"
        },
        pronunciation: "yoo-es-bee",
        example: {
          fr: "J'ai besoin d'un câble USB.",
          en: "I need a USB cable.",
          fa: "من به یک کابل یو‌اس‌بی نیاز دارم."
        },
        tip: "Universal connection for devices."
      },
      {
        id: 597,
        word: "Batterie ",
        meaning: {
          en: "Battery",
          fa: "باتری"
        },
        pronunciation: "ba-tuh-ree",
        example: {
          fr: "La batterie est faible.",
          en: "The battery is low.",
          fa: "باتری ضعیف است."
        },
        tip: "Stores energy for use."
      },
      {
        id: 598,
        word: "Charger ",
        meaning: {
          en: "Charger",
          fa: "شارژر"
        },
        pronunciation: "shar-zhey",
        example: {
          fr: "Je dois acheter un nouveau chargeur.",
          en: "I need to buy a new charger.",
          fa: "من باید یک شارژر جدید بخرم."
        },
        tip: "Powers your devices."
      },
      {
        id: 599,
        word: "Déconnecter ",
        meaning: {
          en: "Disconnect",
          fa: "قطع کردن"
        },
        pronunciation: "day-koh-nekt-ay",
        example: {
          fr: "Il faut déconnecter le câble.",
          en: "You need to disconnect the cable.",
          fa: "باید کابل را قطع کنید."
        },
        tip: "Break a connection."
      },
      {
        id: 600,
        word: "Configuration ",
        meaning: {
          en: "Configuration",
          fa: "پیکربندی"
        },
        pronunciation: "kon-fi-gyu-ray-shon",
        example: {
          fr: "La configuration est terminée.",
          en: "The configuration is complete.",
          fa: "پیکربندی کامل شد."
        },
        tip: "Setup and arrangement."
      },
      {
        id: 601,
        word: "Sport ",
        meaning: {
          en: "Sport",
          fa: "ورزش"
        },
        pronunciation: "spor",
        example: {
          fr: "Le sport est amusant.",
          en: "Sport is fun.",
          fa: "ورزش سرگرم کننده است."
        },
        tip: "Think of sporty activities."
      },
      {
        id: 602,
        word: "Football ",
        meaning: {
          en: "Rugby",
          fa: "فوتبال"
        },
        pronunciation: "foo-tball",
        example: {
          fr: "Le football est populaire.",
          en: "Football is popular.",
          fa: "فوتبال محبوب است."
        },
        tip: "Think of a football match."
      },
      {
        id: 603,
        word: "Basketball ",
        meaning: {
          en: "Basketball",
          fa: "بسکتبال"
        },
        pronunciation: "ba-sket-ball",
        example: {
          fr: "Il joue au basketball.",
          en: "He plays basketball.",
          fa: "او بسکتبال بازی می‌کند."
        },
        tip: "Imagine shooting hoops."
      },
      {
        id: 604,
        word: "Tennis ",
        meaning: {
          en: "Tennis",
          fa: "تنیس"
        },
        pronunciation: "te-nis",
        example: {
          fr: "Elle aime le tennis.",
          en: "She likes tennis.",
          fa: "او تنیس را دوست دارد."
        },
        tip: "Visualize a tennis match."
      },
      {
        id: 605,
        word: "Natation ",
        meaning: {
          en: "Swimming",
          fa: "شنا"
        },
        pronunciation: "na-ta-syon",
        example: {
          fr: "La natation est relaxante.",
          en: "Swimming is relaxing.",
          fa: "شنا آرامش‌بخش است."
        },
        tip: "Think of a swimming pool."
      },
      {
        id: 606,
        word: "Course ",
        meaning: {
          en: "Running",
          fa: "دویدن"
        },
        pronunciation: "koorss",
        example: {
          fr: "Je fais de la course tous les matins.",
          en: "I run every morning.",
          fa: "من هر صبح می‌دوم."
        },
        tip: "Think of a track course."
      },
      {
        id: 607,
        word: "Cyclisme ",
        meaning: {
          en: "Cycling",
          fa: "دوچرخه‌سواری"
        },
        pronunciation: "see-kleesm",
        example: {
          fr: "Le cyclisme est un bon exercice.",
          en: "Cycling is good exercise.",
          fa: "دوچرخه‌سواری ورزش خوبی است."
        },
        tip: "Think of a bicycle."
      },
      {
        id: 608,
        word: "Gymnastique ",
        meaning: {
          en: "Gymnastics",
          fa: "ژیمناستیک"
        },
        pronunciation: "jeem-nas-teek",
        example: {
          fr: "Elle fait de la gymnastique tous les samedis.",
          en: "She does gymnastics every Saturday.",
          fa: "او هر شنبه ژیمناستیک کار می‌کند."
        },
        tip: "Think of gym and athletic moves."
      },
      {
        id: 609,
        word: "Danse ",
        meaning: {
          en: "Dance",
          fa: "رقص"
        },
        pronunciation: "dahns",
        example: {
          fr: "La danse est sa passion.",
          en: "Dance is her passion.",
          fa: "رقص اشتیاق اوست."
        },
        tip: "Think of dancing feet."
      },
      {
        id: 610,
        word: "Yoga ",
        meaning: {
          en: "Yoga",
          fa: "یوگا"
        },
        pronunciation: "yoh-gah",
        example: {
          fr: "Le yoga aide à se détendre.",
          en: "Yoga helps to relax.",
          fa: "یوگا به آرامش کمک می‌کند."
        },
        tip: "Picture meditation poses."
      },
      {
        id: 611,
        word: "Musculation ",
        meaning: {
          en: "Bodybuilding",
          fa: "بدنسازی"
        },
        pronunciation: "myoo-skuh-lay-shun",
        example: {
          fr: "Je fais de la musculation trois fois par semaine.",
          en: "I do bodybuilding three times a week.",
          fa: "هفته‌ای سه بار بدنسازی می‌کنم."
        },
        tip: "Muscles grow with musculation."
      },
      {
        id: 612,
        word: "Randonnée ",
        meaning: {
          en: "Hiking",
          fa: "پیاده‌روی"
        },
        pronunciation: "rahn-doh-nay",
        example: {
          fr: "Nous faisons une randonnée en montagne.",
          en: "We are hiking in the mountains.",
          fa: "ما در کوه‌ها پیاده‌روی می‌کنیم."
        },
        tip: "Random trails for randonnée."
      },
      {
        id: 613,
        word: "Escalade ",
        meaning: {
          en: "Climbing",
          fa: "صخره‌نوردی"
        },
        pronunciation: "es-kah-lahd",
        example: {
          fr: "Il aime l'escalade en plein air.",
          en: "He likes outdoor climbing.",
          fa: "او صخره‌نوردی در فضای باز را دوست دارد."
        },
        tip: "Scale the wall with escalade."
      },
      {
        id: 614,
        word: "Ski ",
        meaning: {
          en: "Ski",
          fa: "اسکی"
        },
        pronunciation: "skee",
        example: {
          fr: "Elle va faire du ski cet hiver.",
          en: "She is going to ski this winter.",
          fa: "او در این زمستان اسکی می‌کند."
        },
        tip: "Ski down the snowy slope."
      },
      {
        id: 615,
        word: "Surf ",
        meaning: {
          en: "Surf",
          fa: "موج‌سواری"
        },
        pronunciation: "surf",
        example: {
          fr: "Il apprend à faire du surf.",
          en: "He is learning to surf.",
          fa: "او در حال یادگیری موج‌سواری است."
        },
        tip: "Surf the internet or the waves."
      },
      {
        id: 616,
        word: "Voile ",
        meaning: {
          en: "Sailing",
          fa: "قايقرانی"
        },
        pronunciation: "vwah-leh",
        example: {
          fr: "La voile est un sport relaxant.",
          en: "Sailing is a relaxing sport.",
          fa: "قايقرانی ورزشی آرامش‌بخش است."
        },
        tip: "Think of 'veil' in the wind."
      },
      {
        id: 617,
        word: "Équipe ",
        meaning: {
          en: "Team",
          fa: "تیم"
        },
        pronunciation: "ay-keep",
        example: {
          fr: "Notre équipe a gagné le match.",
          en: "Our team won the match.",
          fa: "تیم ما مسابقه را برد."
        },
        tip: "Team up with 'equip' for success."
      },
      {
        id: 618,
        word: "Joueur ",
        meaning: {
          en: "Player",
          fa: "بازیکن"
        },
        pronunciation: "zhwair",
        example: {
          fr: "Il est un bon joueur de tennis.",
          en: "He is a good tennis player.",
          fa: "او بازیکن خوب تنیس است."
        },
        tip: "Remember 'jouer' means 'to play'."
      },
      {
        id: 619,
        word: "Match ",
        meaning: {
          en: "Match",
          fa: "مسابقه"
        },
        pronunciation: "mathch",
        example: {
          fr: "Le match commence à huit heures.",
          en: "The match starts at eight o'clock.",
          fa: "مسابقه در ساعت هشت شروع می‌شود."
        },
        tip: "Matches ignite competition."
      },
      {
        id: 620,
        word: "Tournoi ",
        meaning: {
          en: "Tournament",
          fa: "مسابقات"
        },
        pronunciation: "toor-nwah",
        example: {
          fr: "Le tournoi commence demain.",
          en: "The tournament starts tomorrow.",
          fa: "مسابقات از فردا شروع می‌شود."
        },
        tip: "Imagine a tour of competitions."
      },
      {
        id: 621,
        word: "Championnat ",
        meaning: {
          en: "Championship",
          fa: "قهرمانی"
        },
        pronunciation: "shahm-pee-oh-nah",
        example: {
          fr: "Il a gagné le championnat.",
          en: "He won the championship.",
          fa: "او قهرمانی را برد."
        },
        tip: "Think of a champion in a contest."
      },
      {
        id: 622,
        word: "Entraînement ",
        meaning: {
          en: "Training",
          fa: "آموزش"
        },
        pronunciation: "on-treh-ne-mon",
        example: {
          fr: "L'entraînement est important.",
          en: "Training is important.",
          fa: "آموزش مهم است."
        },
        tip: "Think of entering to train."
      },
      {
        id: 623,
        word: "Score ",
        meaning: {
          en: "Score",
          fa: "امتیاز"
        },
        pronunciation: "skor",
        example: {
          fr: "Le score est de deux à un.",
          en: "The score is two to one.",
          fa: "امتیاز دو به یک است."
        },
        tip: "Score sounds the same."
      },
      {
        id: 624,
        word: "Victoire ",
        meaning: {
          en: "Victory",
          fa: "پیروزی"
        },
        pronunciation: "veek-twahr",
        example: {
          fr: "La victoire est douce.",
          en: "Victory is sweet.",
          fa: "پیروزی شیرین است."
        },
        tip: "Think of victory in sports."
      },
      {
        id: 625,
        word: "Défaite ",
        meaning: {
          en: "Defeat",
          fa: "شکست"
        },
        pronunciation: "day-feht",
        example: {
          fr: "La défaite est amère.",
          en: "Defeat is bitter.",
          fa: "شکست تلخ است."
        },
        tip: "Sounds like 'defeat' with a twist."
      },
      {
        id: 626,
        word: "Égalité ",
        meaning: {
          en: "Equality",
          fa: "برابری"
        },
        pronunciation: "ay-gah-lee-tay",
        example: {
          fr: "Nous demandons l'égalité.",
          en: "We demand equality.",
          fa: "ما برابری می‌خواهیم."
        },
        tip: "Think of equal rights."
      },
      {
        id: 627,
        word: "Loisirs ",
        meaning: {
          en: "Leisure",
          fa: "فراغت"
        },
        pronunciation: "lwa-zeer",
        example: {
          fr: "J'aime passer mes loisirs à lire.",
          en: "I like to spend my leisure time reading.",
          fa: "دوست دارم وقتم را در فراغت به خواندن بگذرانم."
        },
        tip: "Think of the word 'leisure'."
      },
      {
        id: 628,
        word: "Passe-temps ",
        meaning: {
          en: "Hobby",
          fa: "سرگرمی"
        },
        pronunciation: "pass-tahmp",
        example: {
          fr: "La peinture est mon passe-temps favori.",
          en: "Painting is my favorite hobby.",
          fa: "نقاشی سرگرمی مورد علاقه من است."
        },
        tip: "Think of passing time with fun."
      },
      {
        id: 629,
        word: "Jeu ",
        meaning: {
          en: "Game",
          fa: "بازی"
        },
        pronunciation: "zhuh",
        example: {
          fr: "Nous jouons à un jeu de société.",
          en: "We are playing a board game.",
          fa: "ما در حال بازی یک بازی رومیزی هستیم."
        },
        tip: "Think of the joy in playing."
      },
      {
        id: 630,
        word: "Jouet ",
        meaning: {
          en: "Toy",
          fa: "اسباب‌بازی"
        },
        pronunciation: "zhw-ay",
        example: {
          fr: "L'enfant joue avec son jouet préféré.",
          en: "The child is playing with his favorite toy.",
          fa: "کودک با اسباب‌بازی مورد علاقه‌اش بازی می‌کند."
        },
        tip: "Think of joy in toys."
      },
      {
        id: 631,
        word: "Carte ",
        meaning: {
          en: "Card",
          fa: "کارت"
        },
        pronunciation: "kart",
        example: {
          fr: "J'ai une carte de crédit.",
          en: "I have a credit card.",
          fa: "من یک کارت اعتباری دارم."
        },
        tip: "Think of 'cart' with an 'e'."
      },
      {
        id: 632,
        word: "Échecs ",
        meaning: {
          en: "Chess",
          fa: "شطرنج"
        },
        pronunciation: "ay-shek",
        example: {
          fr: "Les échecs sont un jeu de stratégie.",
          en: "Chess is a strategy game.",
          fa: "شطرنج یک بازی استراتژی است."
        },
        tip: "Sounds like 'a check' on your moves."
      },
      {
        id: 633,
        word: "Puzzle ",
        meaning: {
          en: "Puzzle",
          fa: "پازل"
        },
        pronunciation: "puh-zuhl",
        example: {
          fr: "J'aime faire des puzzles le week-end.",
          en: "I like doing puzzles on weekends.",
          fa: "من دوست دارم در آخر هفته پازل درست کنم."
        },
        tip: "Same as English 'puzzle'."
      },
      {
        id: 634,
        word: "Lecture ",
        meaning: {
          en: "Reading",
          fa: "مطالعه"
        },
        pronunciation: "lek-tyur",
        example: {
          fr: "La lecture est ma passion.",
          en: "Reading is my passion.",
          fa: "مطالعه علاقه مندی من است."
        },
        tip: "Think of 'lecturing' to a book."
      },
      {
        id: 635,
        word: "Cinéma ",
        meaning: {
          en: "Cinema",
          fa: "سینما"
        },
        pronunciation: "see-neh-mah",
        example: {
          fr: "Nous allons au cinéma ce soir.",
          en: "We are going to the cinema tonight.",
          fa: "ما امشب به سینما می رویم."
        },
        tip: "Same root as 'cinema' in English."
      },
      {
        id: 636,
        word: "Film ",
        meaning: {
          en: "Film",
          fa: "فیلم"
        },
        pronunciation: "feelm",
        example: {
          fr: "J'ai regardé un film.",
          en: "I watched a film.",
          fa: "من یک فیلم تماشا کردم."
        },
        tip: "Think of the cinema."
      },
      {
        id: 637,
        word: "Musique ",
        meaning: {
          en: "Music",
          fa: "موسیقی"
        },
        pronunciation: "myoo-zeek",
        example: {
          fr: "Elle aime la musique.",
          en: "She loves music.",
          fa: "او موسیقی دوست دارد."
        },
        tip: "Sounds like 'music'."
      },
      {
        id: 638,
        word: "Chanson ",
        meaning: {
          en: "Song",
          fa: "آهنگ"
        },
        pronunciation: "shahn-sohn",
        example: {
          fr: "Cette chanson est belle.",
          en: "This song is beautiful.",
          fa: "این آهنگ زیباست."
        },
        tip: "Think of 'chanson d'amour'."
      },
      {
        id: 639,
        word: "Instrument ",
        meaning: {
          en: "Instrument",
          fa: "ابزار"
        },
        pronunciation: "an-stroo-mahn",
        example: {
          fr: "Il joue d'un instrument.",
          en: "He plays an instrument.",
          fa: "او از یک ابزار موسیقی استفاده می‌کند."
        },
        tip: "Think of musical equipment."
      },
      {
        id: 640,
        word: "Guitare ",
        meaning: {
          en: "Guitar",
          fa: "گیتار"
        },
        pronunciation: "gee-tahr",
        example: {
          fr: "Je joue de la guitare.",
          en: "I play the guitar.",
          fa: "من گیتار می‌زنم."
        },
        tip: "Think of strings."
      },
      {
        id: 641,
        word: "Piano ",
        meaning: {
          en: "Piano",
          fa: "پیانو"
        },
        pronunciation: "pee-ah-noh",
        example: {
          fr: "Je joue du piano.",
          en: "I play the piano.",
          fa: "من پیانو می‌نوازم."
        },
        tip: "Think of the musical instrument."
      },
      {
        id: 642,
        word: "Concert ",
        meaning: {
          en: "Concert",
          fa: "کنسرت"
        },
        pronunciation: "kon-sairt",
        example: {
          fr: "Nous allons au concert ce soir.",
          en: "We are going to the concert tonight.",
          fa: "ما امشب به کنسرت می‌رویم."
        },
        tip: "Remember live music events."
      },
      {
        id: 643,
        word: "Spectacle ",
        meaning: {
          en: "Show",
          fa: "نمایش"
        },
        pronunciation: "spehk-tac-luh",
        example: {
          fr: "Le spectacle était incroyable.",
          en: "The show was amazing.",
          fa: "نمایش فوق‌العاده بود."
        },
        tip: "Think of entertainment."
      },
      {
        id: 644,
        word: "Théâtre ",
        meaning: {
          en: "Theater",
          fa: "تئاتر"
        },
        pronunciation: "tay-ah-truh",
        example: {
          fr: "Nous aimons le théâtre.",
          en: "We love the theater.",
          fa: "ما تئاتر را دوست داریم."
        },
        tip: "Think of plays and performances."
      },
      {
        id: 645,
        word: "Sortie ",
        meaning: {
          en: "Outing",
          fa: "گردش"
        },
        pronunciation: "sohr-tee",
        example: {
          fr: "Nous avons une sortie scolaire demain.",
          en: "We have a school outing tomorrow.",
          fa: "ما فردا گردش مدرسه‌ای داریم."
        },
        tip: "Think of going out for leisure."
      },
      {
        id: 646,
        word: "Distraction ",
        meaning: {
          en: "Distraction",
          fa: "حواس‌پرتی"
        },
        pronunciation: "dee-strak-shun",
        example: {
          fr: "La distraction peut être dangereuse.",
          en: "Distraction can be dangerous.",
          fa: "حواس‌پرتی می‌تواند خطرناک باشد."
        },
        tip: "Think of 'distraction' as diverting attention."
      },
      {
        id: 647,
        word: "Fête ",
        meaning: {
          en: "Party",
          fa: "مهمانی"
        },
        pronunciation: "fet",
        example: {
          fr: "Nous allons à la fête ce soir.",
          en: "We are going to the party tonight.",
          fa: "امشب به مهمانی می‌رویم."
        },
        tip: "Imagine a festive gathering."
      },
      {
        id: 648,
        word: "Invitation ",
        meaning: {
          en: "Invitation",
          fa: "دعوتنامه"
        },
        pronunciation: "in-vi-tay-shun",
        example: {
          fr: "J'ai reçu une invitation pour le mariage.",
          en: "I received an invitation for the wedding.",
          fa: "دعوتنامه‌ای برای عروسی دریافت کردم."
        },
        tip: "Relate to inviting someone."
      },
      {
        id: 649,
        word: "Détente ",
        meaning: {
          en: "Relaxation",
          fa: "آرامش"
        },
        pronunciation: "day-tont",
        example: {
          fr: "La détente est importante après le travail.",
          en: "Relaxation is important after work.",
          fa: "آرامش بعد از کار مهم است."
        },
        tip: "Think of 'detention from stress'."
      },
      {
        id: 650,
        word: "Adversaire ",
        meaning: {
          en: "Opponent",
          fa: "حریف"
        },
        pronunciation: "ad-ver-ser",
        example: {
          fr: "Mon adversaire est très fort.",
          en: "My opponent is very strong.",
          fa: "حریف من بسیار قوی است."
        },
        tip: "Link it to 'advice versus opposition'."
      },
      {
        id: 651,
        word: "Art ",
        meaning: {
          en: "Art",
          fa: "هنر"
        },
        pronunciation: "ahr",
        example: {
          fr: "L'art est partout.",
          en: "Art is everywhere.",
          fa: "هنر همه جا هست."
        },
        tip: "Think of a painting."
      },
      {
        id: 652,
        word: "Peinture ",
        meaning: {
          en: "Painting",
          fa: "نقاشی"
        },
        pronunciation: "pahn-tyur",
        example: {
          fr: "J'aime la peinture.",
          en: "I like painting.",
          fa: "من نقاشی را دوست دارم."
        },
        tip: "Think of a painter's canvas."
      },
      {
        id: 653,
        word: "Sculpture ",
        meaning: {
          en: "Sculpture",
          fa: "مجسمه‌سازی"
        },
        pronunciation: "skuhlp-chur",
        example: {
          fr: "La sculpture est belle.",
          en: "The sculpture is beautiful.",
          fa: "مجسمه زیبا است."
        },
        tip: "Picture a stone statue."
      },
      {
        id: 654,
        word: "Photographie ",
        meaning: {
          en: "Photography",
          fa: "عکاسی"
        },
        pronunciation: "foh-tog-ruh-fee",
        example: {
          fr: "La photographie est un art.",
          en: "Photography is an art.",
          fa: "عکاسی یک هنر است."
        },
        tip: "Capture moments with a camera."
      },
      {
        id: 655,
        word: "Galerie ",
        meaning: {
          en: "Gallery",
          fa: "گالری"
        },
        pronunciation: "gah-luh-ree",
        example: {
          fr: "Je visite la galerie.",
          en: "I visit the gallery.",
          fa: "من از گالری بازدید می‌کنم."
        },
        tip: "Think of a room full of art."
      },
      {
        id: 656,
        word: "Musée ",
        meaning: {
          en: "Museum",
          fa: "موزه"
        },
        pronunciation: "myoo-zay",
        example: {
          fr: "Le musée est fermé le lundi.",
          en: "The museum is closed on Monday.",
          fa: "موزه در روز دوشنبه بسته است."
        },
        tip: "Remember 'museum' in French."
      },
      {
        id: 657,
        word: "Exposition ",
        meaning: {
          en: "Exhibition",
          fa: "نمایشگاه"
        },
        pronunciation: "ex-poh-zee-see-ohn",
        example: {
          fr: "L'exposition d'art commence demain.",
          en: "The art exhibition starts tomorrow.",
          fa: "نمایشگاه هنر فردا شروع می‌شود."
        },
        tip: "Think of 'expose' in English."
      },
      {
        id: 658,
        word: "Chef-d’œuvre ",
        meaning: {
          en: "Masterpiece",
          fa: "شاهکار"
        },
        pronunciation: "shef-d'oeuvre",
        example: {
          fr: "Ce tableau est un chef-d’œuvre.",
          en: "This painting is a masterpiece.",
          fa: "این تابلو یک شاهکار است."
        },
        tip: "Chef creates a masterpiece."
      },
      {
        id: 659,
        word: "Tableau ",
        meaning: {
          en: "Painting",
          fa: "تابلو"
        },
        pronunciation: "tab-loh",
        example: {
          fr: "Regardez ce beau tableau.",
          en: "Look at this beautiful painting.",
          fa: "به این تابلو زیبا نگاه کنید."
        },
        tip: "Table with a view means painting."
      },
      {
        id: 660,
        word: "Couleur ",
        meaning: {
          en: "Color",
          fa: "رنگ"
        },
        pronunciation: "koo-luhr",
        example: {
          fr: "J'aime cette couleur vive.",
          en: "I like this bright color.",
          fa: "من این رنگ روشن را دوست دارم."
        },
        tip: "Colors make a cooler scene."
      },
      {
        id: 661,
        word: "Création ",
        meaning: {
          en: "Creation",
          fa: "ایجاد"
        },
        pronunciation: "kray-ah-syon",
        example: {
          fr: "La création de l'artiste est magnifique.",
          en: "The artist's creation is magnificent.",
          fa: "خلق هنرمند فوق‌العاده است."
        },
        tip: "Think of creative art."
      },
      {
        id: 662,
        word: "Dessin ",
        meaning: {
          en: "Drawing",
          fa: "نقاشی"
        },
        pronunciation: "deh-san",
        example: {
          fr: "Elle fait un dessin de sa maison.",
          en: "She is making a drawing of her house.",
          fa: "او یک نقاشی از خانه‌اش می‌کشد."
        },
        tip: "It's like design without the 'g'."
      },
      {
        id: 663,
        word: "Croquis ",
        meaning: {
          en: "Sketch",
          fa: "طرح"
        },
        pronunciation: "kro-kee",
        example: {
          fr: "Il a fait un croquis rapide du paysage.",
          en: "He made a quick sketch of the landscape.",
          fa: "او یک طرح سریع از منظره کشید."
        },
        tip: "Think 'croqui' sounds like 'cookie'—quickly sketch your snack!"
      },
      {
        id: 664,
        word: "Style ",
        meaning: {
          en: "Style",
          fa: "سبک"
        },
        pronunciation: "steel",
        example: {
          fr: "Son style est très unique.",
          en: "His style is very unique.",
          fa: "سبک او بسیار منحصر به فرد است."
        },
        tip: "Similar to English, stylish and unique."
      },
      {
        id: 665,
        word: "Mouvement ",
        meaning: {
          en: "Movement",
          fa: "حرکت"
        },
        pronunciation: "moov-mohn",
        example: {
          fr: "Le mouvement du danseur est gracieux.",
          en: "The dancer's movement is graceful.",
          fa: "حرکت رقصنده با وقار است."
        },
        tip: "Think about dance moves."
      },
      {
        id: 666,
        word: "Inspiration ",
        meaning: {
          en: "Inspiration",
          fa: "الهام"
        },
        pronunciation: "in-spuh-rey-shuhn",
        example: {
          fr: "L'inspiration est précieuse.",
          en: "Inspiration is precious.",
          fa: "الهام ارزشمند است."
        },
        tip: "Think of the muse guiding creativity."
      },
      {
        id: 667,
        word: "Artiste ",
        meaning: {
          en: "Artist",
          fa: "هنرمند"
        },
        pronunciation: "ahr-teest",
        example: {
          fr: "L'artiste peint un tableau.",
          en: "The artist paints a picture.",
          fa: "هنرمند یک تابلو نقاشی می‌کند."
        },
        tip: "Artists create art pieces."
      },
      {
        id: 668,
        word: "Culture ",
        meaning: {
          en: "Culture",
          fa: "فرهنگ"
        },
        pronunciation: "kuhl-cher",
        example: {
          fr: "La culture française est riche.",
          en: "French culture is rich.",
          fa: "فرهنگ فرانسوی غنی است."
        },
        tip: "Culture encompasses customs and traditions."
      },
      {
        id: 669,
        word: "Patrimoine ",
        meaning: {
          en: "Heritage",
          fa: "میراث"
        },
        pronunciation: "pa-tree-mwan",
        example: {
          fr: "Notre patrimoine est important.",
          en: "Our heritage is important.",
          fa: "میراث ما مهم است."
        },
        tip: "Heritage is what we inherit culturally."
      },
      {
        id: 670,
        word: "Histoire ",
        meaning: {
          en: "History",
          fa: "تاریخ"
        },
        pronunciation: "ee-stwahr",
        example: {
          fr: "L'histoire du pays est fascinante.",
          en: "The country's history is fascinating.",
          fa: "تاریخ کشور جذاب است."
        },
        tip: "History is a story of the past."
      },
      {
        id: 671,
        word: "Tradition ",
        meaning: {
          en: "Tradition",
          fa: "سنت"
        },
        pronunciation: "tra-di-sion",
        example: {
          fr: "La tradition familiale est importante.",
          en: "Family tradition is important.",
          fa: "سنت خانوادگی مهم است."
        },
        tip: "Think of passing customs."
      },
      {
        id: 672,
        word: "Coutume ",
        meaning: {
          en: "Custom",
          fa: "رسم"
        },
        pronunciation: "koo-toom",
        example: {
          fr: "Il est coutume de saluer en arrivant.",
          en: "It's custom to greet upon arrival.",
          fa: "این رسم است که هنگام ورود سلام کنیم."
        },
        tip: "Relate it to usual habits."
      },
      {
        id: 673,
        word: "Légende ",
        meaning: {
          en: "Legend",
          fa: "افسانه"
        },
        pronunciation: "lay-jond",
        example: {
          fr: "La légende du roi Arthur est célèbre.",
          en: "The legend of King Arthur is famous.",
          fa: "افسانه شاه آرتور مشهور است."
        },
        tip: "Think of mythical stories."
      },
      {
        id: 674,
        word: "Mythe ",
        meaning: {
          en: "Myth",
          fa: "اسطوره"
        },
        pronunciation: "meet",
        example: {
          fr: "Le mythe d'Icare est fascinant.",
          en: "The myth of Icarus is fascinating.",
          fa: "اسطوره ایکاروس جذاب است."
        },
        tip: "Linked to fictional tales."
      },
      {
        id: 675,
        word: "Folklore ",
        meaning: {
          en: "Folklore",
          fa: "فولکلور"
        },
        pronunciation: "fol-klore",
        example: {
          fr: "Le folklore de chaque région est unique.",
          en: "The folklore of each region is unique.",
          fa: "فولکلور هر منطقه منحصر به فرد است."
        },
        tip: "Think of cultural traditions."
      },
      {
        id: 676,
        word: "Festival ",
        meaning: {
          en: "Festival",
          fa: "جشنواره"
        },
        pronunciation: "festival",
        example: {
          fr: "Le festival a lieu chaque année.",
          en: "The festival takes place every year.",
          fa: "جشنواره هر سال برگزار می‌شود."
        },
        tip: "Think of music and food events."
      },
      {
        id: 677,
        word: "Fête ",
        meaning: {
          en: "Party",
          fa: "مهمانی"
        },
        pronunciation: "fet",
        example: {
          fr: "Nous allons à la fête ce soir.",
          en: "We are going to the party tonight.",
          fa: "ما امشب به مهمانی می‌رویم."
        },
        tip: "Fête sounds like fete, which means celebration."
      },
      {
        id: 678,
        word: "Danse ",
        meaning: {
          en: "Dance",
          fa: "رقص"
        },
        pronunciation: "dahnss",
        example: {
          fr: "Elle aime la danse classique.",
          en: "She loves classical dance.",
          fa: "او عاشق رقص کلاسیک است."
        },
        tip: "Think of dancing motions."
      },
      {
        id: 679,
        word: "Chorégraphie ",
        meaning: {
          en: "Choreography",
          fa: "حرکات نمایشی"
        },
        pronunciation: "kor-ay-gra-fee",
        example: {
          fr: "La chorégraphie était impressionnante.",
          en: "The choreography was impressive.",
          fa: "حرکات نمایشی چشمگیر بود."
        },
        tip: "Chorégraphie is about dance routine steps."
      },
      {
        id: 680,
        word: "Poésie ",
        meaning: {
          en: "Poetry",
          fa: "شعر"
        },
        pronunciation: "pwah-zee",
        example: {
          fr: "Il écrit de la poésie chaque soir.",
          en: "He writes poetry every evening.",
          fa: "او هر شب شعر می‌نویسد."
        },
        tip: "Poésie sounds like 'poise' with creative words."
      },
      {
        id: 681,
        word: "Roman ",
        meaning: {
          en: "Novel",
          fa: "رمان"
        },
        pronunciation: "roh-mahn",
        example: {
          fr: "J'aime lire un roman chaque mois.",
          en: "I like to read a novel every month.",
          fa: "دوست دارم هر ماه یک رمان بخوانم."
        },
        tip: "Think of a 'romantic' story."
      },
      {
        id: 682,
        word: "Nouvelle ",
        meaning: {
          en: "News",
          fa: "خبر"
        },
        pronunciation: "noo-vehl",
        example: {
          fr: "J'ai entendu une nouvelle intéressante.",
          en: "I heard an interesting news.",
          fa: "یک خبر جالب شنیدم."
        },
        tip: "New things are 'novel'."
      },
      {
        id: 683,
        word: "Littérature ",
        meaning: {
          en: "Literature",
          fa: "ادبیات"
        },
        pronunciation: "lee-teh-rah-toor",
        example: {
          fr: "La littérature française est fascinante.",
          en: "French literature is fascinating.",
          fa: "ادبیات فرانسه جذاب است."
        },
        tip: "Think of 'literature' class."
      },
      {
        id: 684,
        word: "Lecture ",
        meaning: {
          en: "Reading",
          fa: "خواندن"
        },
        pronunciation: "leh-ktyoor",
        example: {
          fr: "La lecture est mon passe-temps favori.",
          en: "Reading is my favorite hobby.",
          fa: "مطالعه سرگرمی مورد علاقه من است."
        },
        tip: "Think of 'lecturing' through reading."
      },
      {
        id: 685,
        word: "Bibliothèque ",
        meaning: {
          en: "Library",
          fa: "کتابخانه"
        },
        pronunciation: "bee-blee-oh-tehk",
        example: {
          fr: "Je vais à la bibliothèque pour étudier.",
          en: "I go to the library to study.",
          fa: "به کتابخانه می‌روم تا درس بخوانم."
        },
        tip: "A 'bibliophile' loves libraries."
      },
      {
        id: 686,
        word: "Auteur ",
        meaning: {
          en: "Author",
          fa: "نویسنده"
        },
        pronunciation: "oh-ter",
        example: {
          fr: "L'auteur a écrit un livre.",
          en: "The author wrote a book.",
          fa: "نویسنده کتابی نوشت."
        },
        tip: "Think of 'autor' with a French twist."
      },
      {
        id: 687,
        word: "Écrivain ",
        meaning: {
          en: "Writer",
          fa: "نویسنده"
        },
        pronunciation: "ay-kree-vain",
        example: {
          fr: "C'est un écrivain célèbre.",
          en: "He is a famous writer.",
          fa: "او نویسنده مشهور است."
        },
        tip: "Associate with 'scribe' for writing."
      },
      {
        id: 688,
        word: "Éditeur ",
        meaning: {
          en: "Publisher",
          fa: "ناشر"
        },
        pronunciation: "ay-dee-tour",
        example: {
          fr: "L'éditeur a corrigé le manuscrit.",
          en: "The editor corrected the manuscript.",
          fa: "ناشر نسخه خطی را ویرایش کرد."
        },
        tip: "Relate to 'edit' with a publishing role."
      },
      {
        id: 689,
        word: "Livre ",
        meaning: {
          en: "Book",
          fa: "کتاب"
        },
        pronunciation: "lee-vruh",
        example: {
          fr: "J'ai acheté un livre hier.",
          en: "I bought a book yesterday.",
          fa: "من دیروز کتابی خریدم."
        },
        tip: "Think of 'library' for books."
      },
      {
        id: 690,
        word: "Langue ",
        meaning: {
          en: "Language",
          fa: "زبان"
        },
        pronunciation: "long",
        example: {
          fr: "Il parle trois langues.",
          en: "He speaks three languages.",
          fa: "او به سه زبان صحبت می‌کند."
        },
        tip: "Like 'language' minus 'age'."
      },
      {
        id: 691,
        word: "Théâtre ",
        meaning: {
          en: "Theater",
          fa: "تئاتر"
        },
        pronunciation: "teh-ah-tr",
        example: {
          fr: "Je vais au théâtre ce soir.",
          en: "I am going to the theater tonight.",
          fa: "امشب به تئاتر می‌روم."
        },
        tip: "Think of dramatic arts."
      },
      {
        id: 692,
        word: "Scène ",
        meaning: {
          en: "Scene",
          fa: "صحنه"
        },
        pronunciation: "seh-n",
        example: {
          fr: "La scène était magnifique.",
          en: "The scene was beautiful.",
          fa: "صحنه زیبا بود."
        },
        tip: "Think of movie scenes."
      },
      {
        id: 693,
        word: "Acteur ",
        meaning: {
          en: "Actor",
          fa: "بازیگر مرد"
        },
        pronunciation: "ahk-tuhr",
        example: {
          fr: "L'acteur a joué brillamment.",
          en: "The actor performed brilliantly.",
          fa: "بازیگر به طور درخشانی بازی کرد."
        },
        tip: "Associated with movies."
      },
      {
        id: 694,
        word: "Actrice ",
        meaning: {
          en: "Actress",
          fa: "بازیگر زن"
        },
        pronunciation: "ahk-trees",
        example: {
          fr: "L'actrice était très talentueuse.",
          en: "The actress was very talented.",
          fa: "بازیگر زن بسیار با استعداد بود."
        },
        tip: "Female movie stars."
      },
      {
        id: 695,
        word: "Costumes ",
        meaning: {
          en: "Costumes",
          fa: "لباس‌ها"
        },
        pronunciation: "koh-stoom",
        example: {
          fr: "Les costumes étaient colorés.",
          en: "The costumes were colorful.",
          fa: "لباس‌ها رنگارنگ بودند."
        },
        tip: "Think dress-up for plays."
      },
      {
        id: 696,
        word: "Décor ",
        meaning: {
          en: "Decor",
          fa: "دکور"
        },
        pronunciation: "day-kor",
        example: {
          fr: "Le décor est magnifique.",
          en: "The decor is beautiful.",
          fa: "دکور زیبا است."
        },
        tip: "Think of decorative settings."
      },
      {
        id: 697,
        word: "Répétition ",
        meaning: {
          en: "Repetition",
          fa: "تکرار"
        },
        pronunciation: "ray-pe-ti-syon",
        example: {
          fr: "La répétition est importante.",
          en: "Repetition is important.",
          fa: "تکرار مهم است."
        },
        tip: "Consider repeating tasks."
      },
      {
        id: 698,
        word: "Cinéma ",
        meaning: {
          en: "Cinema",
          fa: "سینما"
        },
        pronunciation: "see-ne-mah",
        example: {
          fr: "J'aime aller au cinéma.",
          en: "I like going to the cinema.",
          fa: "من دوست دارم به سینما بروم."
        },
        tip: "Think of big screens."
      },
      {
        id: 699,
        word: "Documentaire ",
        meaning: {
          en: "Documentary",
          fa: "مستند"
        },
        pronunciation: "do-koo-mon-ter",
        example: {
          fr: "Je regarde un documentaire.",
          en: "I'm watching a documentary.",
          fa: "دارم یک مستند می‌بینم."
        },
        tip: "Relate to factual films."
      },
      {
        id: 700,
        word: "Version originale ",
        meaning: {
          en: "Original version",
          fa: "نسخه اصلی"
        },
        pronunciation: "ver-syon oh-ree-jee-nal",
        example: {
          fr: "Je préfère regarder les films en version originale.",
          en: "I prefer watching movies in the original version.",
          fa: "من فیلم‌ها را به زبان نسخه اصلی ترجیح می‌دهم."
        },
        tip: "Version is similar to English."
      },
      {
        id: 701,
        word: "Magasin ",
        meaning: {
          en: "Store",
          fa: "فروشگاه"
        },
        pronunciation: "mag-a-zan",
        example: {
          fr: "Je vais au magasin pour acheter du pain.",
          en: "I am going to the store to buy bread.",
          fa: "من به فروشگاه می‌روم تا نان بخرم."
        },
        tip: "Sounds like magazine but means store."
      },
      {
        id: 702,
        word: "Boutique ",
        meaning: {
          en: "Shop",
          fa: "بوتیک"
        },
        pronunciation: "boo-teek",
        example: {
          fr: "Cette boutique vend des vêtements de luxe.",
          en: "This shop sells luxury clothes.",
          fa: "این بوتیک لباس‌های لوکس می‌فروشد."
        },
        tip: "Boutique is a small shop."
      },
      {
        id: 703,
        word: "Marché ",
        meaning: {
          en: "Market",
          fa: "بازار"
        },
        pronunciation: "mar-shay",
        example: {
          fr: "Le marché est ouvert tous les dimanches.",
          en: "The market is open every Sunday.",
          fa: "بازار هر یکشنبه باز است."
        },
        tip: "Marché is similar to market."
      },
      {
        id: 704,
        word: "Supermarché ",
        meaning: {
          en: "Supermarket",
          fa: "سوپرمارکت"
        },
        pronunciation: "soo-per-mar-shay",
        example: {
          fr: "Je fais mes courses au supermarché.",
          en: "I do my shopping at the supermarket.",
          fa: "من خریدهایم را از سوپرمارکت انجام می‌دهم."
        },
        tip: "Supermarché is a large market."
      },
      {
        id: 705,
        word: "Centre commercial ",
        meaning: {
          en: "Shopping center",
          fa: "مرکز خرید"
        },
        pronunciation: "son-truh koh-mair-see-al",
        example: {
          fr: "Je vais au centre commercial.",
          en: "I am going to the shopping center.",
          fa: "من دارم به مرکز خرید می‌روم."
        },
        tip: "Think of a central place for commerce."
      },
      {
        id: 706,
        word: "Étal ",
        meaning: {
          en: "Stall",
          fa: "دکه"
        },
        pronunciation: "ay-tal",
        example: {
          fr: "Le marché a beaucoup d'étals.",
          en: "The market has many stalls.",
          fa: "بازار دکه های زیادی دارد."
        },
        tip: "Imagine a table full of items."
      },
      {
        id: 707,
        word: "Caisse ",
        meaning: {
          en: "Cash register",
          fa: "صندوق"
        },
        pronunciation: "kess",
        example: {
          fr: "Je paye à la caisse.",
          en: "I pay at the cash register.",
          fa: "من در صندوق پرداخت می‌کنم."
        },
        tip: "Think of cash as essential to shop."
      },
      {
        id: 708,
        word: "Panier ",
        meaning: {
          en: "Basket",
          fa: "سبد"
        },
        pronunciation: "pah-nyay",
        example: {
          fr: "Je remplis le panier.",
          en: "I fill the basket.",
          fa: "من سبد را پر می‌کنم."
        },
        tip: "Picture a picnic basket."
      },
      {
        id: 709,
        word: "Sac ",
        meaning: {
          en: "Bag",
          fa: "کیسه"
        },
        pronunciation: "sak",
        example: {
          fr: "Je transporte mes affaires dans un sac.",
          en: "I carry my things in a bag.",
          fa: "من وسایلم را در یک کیسه حمل می‌کنم."
        },
        tip: "Think of a sack for carrying items."
      },
      {
        id: 710,
        word: "Prix ",
        meaning: {
          en: "Price",
          fa: "قیمت"
        },
        pronunciation: "pree",
        example: {
          fr: "Le prix est élevé.",
          en: "The price is high.",
          fa: ".قیمت بالا است"
        },
        tip: "Think of prize but replace ‘ze’ with ‘ce’ for price."
      },
      {
        id: 711,
        word: "Ticket ",
        meaning: {
          en: "Ticket",
          fa: "بلیط"
        },
        pronunciation: "tee-kay",
        example: {
          fr: "J'ai un ticket pour le concert.",
          en: "I have a ticket for the concert.",
          fa: ".من بلیط برای کنسرت دارم"
        },
        tip: "Like the English word ticket."
      },
      {
        id: 712,
        word: "Facture ",
        meaning: {
          en: "Invoice",
          fa: "صورتحساب"
        },
        pronunciation: "fahk-toor",
        example: {
          fr: "Je dois payer la facture.",
          en: "I have to pay the invoice.",
          fa: ".باید صورتحساب را پرداخت کنم"
        },
        tip: "Think of financial document."
      },
      {
        id: 713,
        word: "Réduction ",
        meaning: {
          en: "Discount",
          fa: "تخفیف"
        },
        pronunciation: "ray-doock-see-awn",
        example: {
          fr: "Il y a une réduction sur ces chaussures.",
          en: "There is a discount on these shoes.",
          fa: ".تخفیف بر روی این کفش‌ها وجود دارد"
        },
        tip: "Reduction sounds like reduce price."
      },
      {
        id: 714,
        word: "Promotion ",
        meaning: {
          en: "Promotion",
          fa: "ارتقا"
        },
        pronunciation: "proh-mo-syon",
        example: {
          fr: "Il a eu une promotion au travail.",
          en: "He got a promotion at work.",
          fa: ".او در محل کار ارتقا گرفت"
        },
        tip: "Think of promotional offer."
      },
      {
        id: 715,
        word: "Solde ",
        meaning: {
          en: "Sale",
          fa: "حراج"
        },
        pronunciation: "sold",
        example: {
          fr: "Les soldes sont en janvier.",
          en: "The sales are in January.",
          fa: "حراج‌ها در ژانویه هستند."
        },
        tip: "Think of clearance sales."
      },
      {
        id: 716,
        word: "Vente ",
        meaning: {
          en: "Sale",
          fa: "فروش"
        },
        pronunciation: "vont",
        example: {
          fr: "Il y a une vente de garage.",
          en: "There is a garage sale.",
          fa: "یک فروش گاراژ وجود دارد."
        },
        tip: "Think of vendor sales."
      },
      {
        id: 717,
        word: "Achat ",
        meaning: {
          en: "Purchase",
          fa: "خرید"
        },
        pronunciation: "ah-shah",
        example: {
          fr: "L'achat est important.",
          en: "The purchase is important.",
          fa: "خرید مهم است."
        },
        tip: "Associate with shopping."
      },
      {
        id: 718,
        word: "Produit ",
        meaning: {
          en: "Product",
          fa: "محصول"
        },
        pronunciation: "pro-dwee",
        example: {
          fr: "Ce produit est nouveau.",
          en: "This product is new.",
          fa: "این محصول جدید است."
        },
        tip: "Think of production lines."
      },
      {
        id: 719,
        word: "Choix ",
        meaning: {
          en: "Choice",
          fa: "انتخاب"
        },
        pronunciation: "shwah",
        example: {
          fr: "C'est son choix.",
          en: "It's his choice.",
          fa: "این انتخاب اوست."
        },
        tip: "Link to decision-making."
      },
      {
        id: 720,
        word: "Rayon ",
        meaning: {
          en: "Department",
          fa: "بخش"
        },
        pronunciation: "ray-awn",
        example: {
          fr: "Je cherche un livre dans le rayon.",
          en: "I am looking for a book in the department.",
          fa: "دنبال کتابی در بخش هستم."
        },
        tip: "Think of a ray of categories."
      },
      {
        id: 721,
        word: "Catalogue ",
        meaning: {
          en: "Catalog",
          fa: "فهرست"
        },
        pronunciation: "kat-uh-log",
        example: {
          fr: "Elle regarde le catalogue de vêtements.",
          en: "She is looking at the clothing catalog.",
          fa: "او به فهرست لباس‌ها نگاه می‌کند."
        },
        tip: "Remember it with 'log' of categories."
      },
      {
        id: 722,
        word: "Marque ",
        meaning: {
          en: "Brand",
          fa: "برند"
        },
        pronunciation: "mark",
        example: {
          fr: "C'est une nouvelle marque de voiture.",
          en: "It's a new car brand.",
          fa: "این یک برند جدید خودرو است."
        },
        tip: "Think of the mark of a brand."
      },
      {
        id: 723,
        word: "Client ",
        meaning: {
          en: "Customer",
          fa: "مشتری"
        },
        pronunciation: "klee-ahnt",
        example: {
          fr: "Le client achète des légumes.",
          en: "The customer buys vegetables.",
          fa: "مشتری سبزیجات می‌خرد."
        },
        tip: "Clients have client needs."
      },
      {
        id: 724,
        word: "Caissier ",
        meaning: {
          en: "Cashier",
          fa: "صندوقدار"
        },
        pronunciation: "kes-yer",
        example: {
          fr: "Le caissier donne la monnaie.",
          en: "The cashier gives change.",
          fa: "صندوقدار پول خرد می‌دهد."
        },
        tip: "Cashier handles the 'cash'."
      },
      {
        id: 725,
        word: "Monnaie ",
        meaning: {
          en: "Coin",
          fa: "سکه"
        },
        pronunciation: "moh-neh",
        example: {
          fr: "J'ai besoin de la monnaie pour le distributeur.",
          en: "I need coins for the vending machine.",
          fa: "من برای دستگاه فروش سکه نیاز دارم."
        },
        tip: "Think of monopoly money."
      },
      {
        id: 726,
        word: "Argent ",
        meaning: {
          en: "Money",
          fa: "پول"
        },
        pronunciation: "ar-zhahn",
        example: {
          fr: "Il a beaucoup d'argent.",
          en: "He has a lot of money.",
          fa: "او پول زیادی دارد."
        },
        tip: "Think of Argentine currency."
      },
      {
        id: 727,
        word: "Billet ",
        meaning: {
          en: "Ticket",
          fa: "بلیط"
        },
        pronunciation: "bee-yay",
        example: {
          fr: "Voici ton billet pour le concert.",
          en: "Here is your ticket for the concert.",
          fa: "این بلیط کنسرت شماست."
        },
        tip: "Think of a ticket stub."
      },
      {
        id: 728,
        word: "Pièce ",
        meaning: {
          en: "Piece",
          fa: "قطعه"
        },
        pronunciation: "pyehs",
        example: {
          fr: "J'ai trouvé une pièce de monnaie.",
          en: "I found a coin.",
          fa: "یک سکه پیدا کردم."
        },
        tip: "Think of a piece of a puzzle."
      },
      {
        id: 729,
        word: "Carte bancaire ",
        meaning: {
          en: "Bank card",
          fa: "کارت بانکی"
        },
        pronunciation: "kart bahn-kair",
        example: {
          fr: "J'ai payé avec ma carte bancaire.",
          en: "I paid with my bank card.",
          fa: "با کارت بانکی خود پرداخت کردم."
        },
        tip: "Think of credit transactions."
      },
      {
        id: 730,
        word: "Compte ",
        meaning: {
          en: "Account",
          fa: "حساب"
        },
        pronunciation: "kohmp-t",
        example: {
          fr: "J'ai ouvert un compte.",
          en: "I opened an account.",
          fa: "من حسابی باز کردم."
        },
        tip: "Think of computer account."
      },
      {
        id: 731,
        word: "Banquier ",
        meaning: {
          en: "Banker",
          fa: "بانکدار"
        },
        pronunciation: "bahn-kee-ey",
        example: {
          fr: "Le banquier est gentil.",
          en: "The banker is kind.",
          fa: "بانکدار مهربان است."
        },
        tip: "Think of money and queue in bank."
      },
      {
        id: 732,
        word: "Banque ",
        meaning: {
          en: "Bank",
          fa: "بانک"
        },
        pronunciation: "bahnk",
        example: {
          fr: "Je vais à la banque.",
          en: "I am going to the bank.",
          fa: "من به بانک می‌روم."
        },
        tip: "Sounds like bank in English."
      },
      {
        id: 733,
        word: "DAB (Distributeur automatique) ",
        meaning: {
          en: "ATM",
          fa: "دستگاه خودپرداز"
        },
        pronunciation: "dee-s-tree-bu-tuhr oh-toh-ma-teek",
        example: {
          fr: "J'ai retiré de l'argent au DAB.",
          en: "I withdrew money from the ATM.",
          fa: "پول از دستگاه خودپرداز گرفتم."
        },
        tip: "Think of ATM machine."
      },
      {
        id: 734,
        word: "Dépôt ",
        meaning: {
          en: "Deposit",
          fa: "سپرده"
        },
        pronunciation: "dey-poh",
        example: {
          fr: "J'ai fait un dépôt à la banque.",
          en: "I made a deposit at the bank.",
          fa: "سپرده‌ای در بانک ‌گذاشتم."
        },
        tip: "Think of deposit in a pot."
      },
      {
        id: 735,
        word: "Retrait ",
        meaning: {
          en: "Withdrawal",
          fa: "برداشت"
        },
        pronunciation: "rəh-tre",
        example: {
          fr: "J'ai fait un retrait d'argent.",
          en: "I made a withdrawal of money.",
          fa: "من برداشت پول کردم."
        },
        tip: "Think of retracting, to take out."
      },
      {
        id: 736,
        word: "Virement ",
        meaning: {
          en: "Transfer",
          fa: "انتقال"
        },
        pronunciation: "veer-mon",
        example: {
          fr: "Elle a effectué un virement bancaire.",
          en: "She made a bank transfer.",
          fa: "او انتقال بانکی انجام داد."
        },
        tip: "Link it with 'veer' money."
      },
      {
        id: 737,
        word: "Chèque ",
        meaning: {
          en: "Check",
          fa: "چک"
        },
        pronunciation: "shek",
        example: {
          fr: "Il a signé un chèque.",
          en: "He signed a check.",
          fa: "او یک چک امضا کرد."
        },
        tip: "Like checking an account."
      },
      {
        id: 738,
        word: "Crédit ",
        meaning: {
          en: "Credit",
          fa: "اعتبار"
        },
        pronunciation: "kray-dee",
        example: {
          fr: "Nous avons obtenu un crédit.",
          en: "We obtained a credit.",
          fa: "ما اعتبار دریافت کردیم."
        },
        tip: "Think of borrowing ability."
      },
      {
        id: 739,
        word: "Dette ",
        meaning: {
          en: "Debt",
          fa: "بدهی"
        },
        pronunciation: "det",
        example: {
          fr: "Il a remboursé sa dette.",
          en: "He repaid his debt.",
          fa: "او بدهی خود را پرداخت کرد."
        },
        tip: "Remember 'due'."
      },
      {
        id: 740,
        word: "Investissement ",
        meaning: {
          en: "Investment",
          fa: "سرمایه‌گذاری"
        },
        pronunciation: "in-vest-ees-mahn",
        example: {
          fr: "L'investissement est important.",
          en: "Investment is important.",
          fa: "سرمایه‌گذاری مهم است."
        },
        tip: "Think of 'invest' plus 'ment'."
      },
      {
        id: 741,
        word: "Économie ",
        meaning: {
          en: "Economy",
          fa: "اقتصاد"
        },
        pronunciation: "ay-ko-no-mee",
        example: {
          fr: "L'économie est stable.",
          en: "The economy is stable.",
          fa: "اقتصاد پایدار است."
        },
        tip: "Sounds like 'economy' with a French accent."
      },
      {
        id: 742,
        word: "Budget ",
        meaning: {
          en: "Budget",
          fa: "بودجه"
        },
        pronunciation: "boo-zhay",
        example: {
          fr: "Le budget est serré.",
          en: "The budget is tight.",
          fa: "بودجه فشرده است."
        },
        tip: "Think 'boo' plus 'zhay'."
      },
      {
        id: 743,
        word: "Dépense ",
        meaning: {
          en: "Expense",
          fa: "هزینه"
        },
        pronunciation: "day-pans",
        example: {
          fr: "La dépense est élevée.",
          en: "The expense is high.",
          fa: "هزینه زیاد است."
        },
        tip: "Think of 'de' and 'pense'."
      },
      {
        id: 744,
        word: "Revenu ",
        meaning: {
          en: "Revenue",
          fa: "درآمد"
        },
        pronunciation: "ruh-vuh-nyoo",
        example: {
          fr: "Le revenu augmente.",
          en: "The revenue is increasing.",
          fa: "درآمد افزایش می‌یابد."
        },
        tip: "Sounds like 'revenue'."
      },
      {
        id: 745,
        word: "Intérêt ",
        meaning: {
          en: "Interest",
          fa: "علاقه"
        },
        pronunciation: "ahn-teh-ray",
        example: {
          fr: "J'ai un intérêt pour la musique.",
          en: "I have an interest in music.",
          fa: "من به موسیقی علاقه دارم."
        },
        tip: "Interest in things is common."
      },
      {
        id: 746,
        word: "Impôt ",
        meaning: {
          en: "Tax",
          fa: "مالیات"
        },
        pronunciation: "ahm-poh",
        example: {
          fr: "Je dois payer des impôts.",
          en: "I have to pay taxes.",
          fa: "من باید مالیات بپردازم."
        },
        tip: "Think of tax season."
      },
      {
        id: 747,
        word: "Facture ",
        meaning: {
          en: "Bill",
          fa: "صورتحساب"
        },
        pronunciation: "fahk-tur",
        example: {
          fr: "J'ai reçu ma facture d'électricité.",
          en: "I received my electricity bill.",
          fa: "من صورتحساب برق خود را دریافت کردم."
        },
        tip: "Factures are due monthly."
      },
      {
        id: 748,
        word: "Facturer ",
        meaning: {
          en: "Bill",
          fa: "صورتحساب‌دادن"
        },
        pronunciation: "fahk-tur-ay",
        example: {
          fr: "Je vais facturer le client.",
          en: "I will bill the client.",
          fa: "من به مشتری صورتحساب ارائه خواهم کرد."
        },
        tip: "Remember to bill promptly."
      },
      {
        id: 749,
        word: "Commander ",
        meaning: {
          en: "Order",
          fa: "سفارش‌دادن"
        },
        pronunciation: "koh-mahn-day",
        example: {
          fr: "Je vais commander une pizza.",
          en: "I will order a pizza.",
          fa: "من یک پیتزا سفارش خواهم داد."
        },
        tip: "Command an order in a restaurant."
      },
      {
        id: 750,
        word: "Livrer ",
        meaning: {
          en: "Deliver",
          fa: "تحویل دادن"
        },
        pronunciation: "lee-vray",
        example: {
          fr: "Je vais livrer le colis.",
          en: "I will deliver the package.",
          fa: "من بسته را تحویل خواهم داد."
        },
        tip: "Think of 'deliver' minus the 'de'"
      },
      {
        id: 751,
        word: "Temps ",
        meaning: {
          en: "Time",
          fa: "زمان"
        },
        pronunciation: "tahm",
        example: {
          fr: "Je n'ai pas de temps.",
          en: "I don't have time.",
          fa: "من زمان ندارم."
        },
        tip: "Temps sounds like 'tempo'"
      },
      {
        id: 752,
        word: "Heure ",
        meaning: {
          en: "Hour",
          fa: "ساعت"
        },
        pronunciation: "ehr",
        example: {
          fr: "Il est une heure.",
          en: "It is one o'clock.",
          fa: "ساعت یک است."
        },
        tip: "Heure' sounds like 'hour'"
      },
      {
        id: 753,
        word: "Minute ",
        meaning: {
          en: "Minute",
          fa: "دقیقه"
        },
        pronunciation: "mee-newt",
        example: {
          fr: "Attendez une minute.",
          en: "Wait a minute.",
          fa: "یک دقیقه صبر کنید."
        },
        tip: "Minutes are finite, so is 'minute'"
      },
      {
        id: 754,
        word: "Seconde ",
        meaning: {
          en: "Second",
          fa: "ثانیه"
        },
        pronunciation: "seh-cond",
        example: {
          fr: "C'est une question de seconde.",
          en: "It's a matter of seconds.",
          fa: "این یک موضوع چند ثانیه‌ای است."
        },
        tip: "Think of 'second' as in 'moment'"
      },
      {
        id: 755,
        word: "Horloge ",
        meaning: {
          en: "Clock",
          fa: "ساعة دیواری"
        },
        pronunciation: "or-lozh",
        example: {
          fr: "L'horloge sonne à midi.",
          en: "The clock chimes at noon.",
          fa: "ساعت دیواری در ظهر به صدا درمی‌آید."
        },
        tip: "Picture a clock ticking in a hallway."
      },
      {
        id: 756,
        word: "Montre ",
        meaning: {
          en: "Watch",
          fa: "ساعت مچی"
        },
        pronunciation: "mohn-truh",
        example: {
          fr: "Je porte une montre chère.",
          en: "I wear an expensive watch.",
          fa: "من یک ساعت گرانقیمت به دست دارم."
        },
        tip: "Remember, you 'moun' (mount) it on your wrist."
      },
      {
        id: 757,
        word: "Calendrier ",
        meaning: {
          en: "Calendar",
          fa: "تقویم"
        },
        pronunciation: "kah-lon-dree-yay",
        example: {
          fr: "Mon calendrier est plein ce mois-ci.",
          en: "My calendar is full this month.",
          fa: "تقویم من این ماه پر است."
        },
        tip: "Think of 'calender' plans the year."
      },
      {
        id: 758,
        word: "Jour ",
        meaning: {
          en: "Day",
          fa: "روز"
        },
        pronunciation: "zhoor",
        example: {
          fr: "Chaque jour est un nouveau départ.",
          en: "Every day is a new beginning.",
          fa: "هر روز یک شروع جدید است."
        },
        tip: "Jour rhymes with 'tour', like a daily tour."
      },
      {
        id: 759,
        word: "Semaine ",
        meaning: {
          en: "Week",
          fa: "هفته"
        },
        pronunciation: "suh-mehn",
        example: {
          fr: "La semaine commence lundi.",
          en: "The week starts on Monday.",
          fa: "هفته از دوشنبه شروع می‌شود."
        },
        tip: "Remember, a 'se' of 'manes', 7 days."
      },
      {
        id: 760,
        word: "Mois ",
        meaning: {
          en: "Month",
          fa: "ماه"
        },
        pronunciation: "mwah",
        example: {
          fr: "Le mois de janvier est froid.",
          en: "The month of January is cold.",
          fa: "ماه ژانویه سرد است."
        },
        tip: "Think of moon cycles."
      },
      {
        id: 761,
        word: "Année ",
        meaning: {
          en: "Year",
          fa: "سال"
        },
        pronunciation: "an-neh",
        example: {
          fr: "Une année a douze mois.",
          en: "A year has twelve months.",
          fa: "یک سال دوازده ماه دارد."
        },
        tip: "Annie for annual."
      },
      {
        id: 762,
        word: "Lundi ",
        meaning: {
          en: "Monday",
          fa: "دوشنبه"
        },
        pronunciation: "lun-dee",
        example: {
          fr: "Je vais au travail lundi.",
          en: "I go to work on Monday.",
          fa: "من دوشنبه به سر کار می‌روم."
        },
        tip: "Start your week with 'lun'."
      },
      {
        id: 763,
        word: "Mardi ",
        meaning: {
          en: "Tuesday",
          fa: "سه‌شنبه"
        },
        pronunciation: "mar-dee",
        example: {
          fr: "Nous avons une réunion mardi.",
          en: "We have a meeting on Tuesday.",
          fa: "ما سه‌شنبه جلسه‌ای داریم."
        },
        tip: "Think of 'Mars' for Tuesday."
      },
      {
        id: 764,
        word: "Mercredi ",
        meaning: {
          en: "Wednesday",
          fa: "چهارشنبه"
        },
        pronunciation: "mehr-kruh-dee",
        example: {
          fr: "Le magasin est fermé mercredi.",
          en: "The store is closed on Wednesday.",
          fa: "فروشگاه چهارشنبه تعطیل است."
        },
        tip: "Middle of the week."
      },
      {
        id: 765,
        word: "Jeudi ",
        meaning: {
          en: "Thursday",
          fa: "پنج‌شنبه"
        },
        pronunciation: "zhuh-dee",
        example: {
          fr: "Je vais à l'école jeudi.",
          en: "I go to school on Thursday.",
          fa: "من پنج‌شنبه به مدرسه می‌روم."
        },
        tip: "Think of 'Judy' as a friend you meet on Thursday."
      },
      {
        id: 766,
        word: "Vendredi ",
        meaning: {
          en: "Friday",
          fa: "جمعه"
        },
        pronunciation: "von-druh-dee",
        example: {
          fr: "Nous dînons ensemble vendredi.",
          en: "We dine together on Friday.",
          fa: "ما جمعه با هم شام می‌خوریم."
        },
        tip: "Imagine a 'vendor' who visits every Friday."
      },
      {
        id: 767,
        word: "Samedi ",
        meaning: {
          en: "Saturday",
          fa: "شنبه"
        },
        pronunciation: "sahm-dee",
        example: {
          fr: "Je vais au marché samedi.",
          en: "I go to the market on Saturday.",
          fa: "من شنبه به بازار می‌روم."
        },
        tip: "Think of 'Sam' having a party on Saturday."
      },
      {
        id: 768,
        word: "Dimanche ",
        meaning: {
          en: "Sunday",
          fa: "یک‌شنبه"
        },
        pronunciation: "dee-mahnsh",
        example: {
          fr: "Nous reposons dimanche.",
          en: "We rest on Sunday.",
          fa: "ما یک‌شنبه استراحت می‌کنیم."
        },
        tip: "Visualize a day of 'diminishing' work: Sunday."
      },
      {
        id: 769,
        word: "Matin ",
        meaning: {
          en: "Morning",
          fa: "صبح"
        },
        pronunciation: "mah-tan",
        example: {
          fr: "Je bois du café le matin.",
          en: "I drink coffee in the morning.",
          fa: "من صبح قهوه می‌نوشم."
        },
        tip: "Imagine the morning fog as 'matting'."
      },
      {
        id: 770,
        word: "Midi ",
        meaning: {
          en: "Noon",
          fa: "ظهر"
        },
        pronunciation: "mee-dee",
        example: {
          fr: "Nous mangeons à midi.",
          en: "We eat at noon.",
          fa: "ما ظهر غذا می‌خوریم."
        },
        tip: "Remember 'mi-day'."
      },
      {
        id: 771,
        word: "Après-midi ",
        meaning: {
          en: "Afternoon",
          fa: "بعدازظهر"
        },
        pronunciation: "ah-preh-mee-dee",
        example: {
          fr: "Je fais du sport l'après-midi.",
          en: "I exercise in the afternoon.",
          fa: "من بعدازظهر ورزش می‌کنم."
        },
        tip: "After' sounds like 'après'."
      },
      {
        id: 772,
        word: "Soir ",
        meaning: {
          en: "Evening",
          fa: "عصر"
        },
        pronunciation: "swahr",
        example: {
          fr: "Nous sortons le soir.",
          en: "We go out in the evening.",
          fa: "ما عصر بیرون می‌رویم."
        },
        tip: "Think of 'soirée'."
      },
      {
        id: 773,
        word: "Nuit ",
        meaning: {
          en: "Night",
          fa: "شب"
        },
        pronunciation: "nwee",
        example: {
          fr: "La nuit est calme.",
          en: "The night is calm.",
          fa: "شب آرام است."
        },
        tip: "Think 'night is new'."
      },
      {
        id: 774,
        word: "Week-end ",
        meaning: {
          en: "Weekend",
          fa: "آخر هفته"
        },
        pronunciation: "weh-kend",
        example: {
          fr: "Nous partons en week-end.",
          en: "We are going away for the weekend.",
          fa: "ما برای آخر هفته می‌رویم."
        },
        tip: "Sounds like English 'weekend'."
      },
      {
        id: 775,
        word: "Férié ",
        meaning: {
          en: "Holiday",
          fa: "تعطیل"
        },
        pronunciation: "feh-ree-ay",
        example: {
          fr: "Le 1er mai est un jour férié.",
          en: "May 1st is a holiday.",
          fa: "اول مه یک روز تعطیل است."
        },
        tip: "Sounds like 'fairy' but a holiday."
      },
      {
        id: 776,
        word: "Vacances ",
        meaning: {
          en: "Vacation",
          fa: "مرخصی"
        },
        pronunciation: "va-kahn-s",
        example: {
          fr: "Je pars en vacances demain.",
          en: "I'm going on vacation tomorrow.",
          fa: "فردا به تعطیلات می‌روم."
        },
        tip: "Sounds like 'vacancy' for free time."
      },
      {
        id: 777,
        word: "Rendez-vous ",
        meaning: {
          en: "Appointment",
          fa: "قرار ملاقات"
        },
        pronunciation: "ron-day-voo",
        example: {
          fr: "J'ai un rendez-vous à midi.",
          en: "I have an appointment at noon.",
          fa: "من یک قرار ملاقات ظهر دارم."
        },
        tip: "Think of 'Ron' on a date."
      },
      {
        id: 778,
        word: "Retard ",
        meaning: {
          en: "Delay",
          fa: "تاخیر"
        },
        pronunciation: "ruh-tard",
        example: {
          fr: "Le train est en retard.",
          en: "The train is delayed.",
          fa: "قطار با تأخیر مواجه است."
        },
        tip: "Think 'retard' like a 'slowdown.'"
      },
      {
        id: 779,
        word: "Punctualité ",
        meaning: {
          en: "Punctuality",
          fa: "وقت‌شناسی"
        },
        pronunciation: "punk-twa-lee-tay",
        example: {
          fr: "Il est reconnu pour sa ponctualité.",
          en: "He is known for his punctuality.",
          fa: "او به خاطر وقت‌شناسی‌اش شناخته شده‌است."
        },
        tip: "Punk on time is punctual."
      },
      {
        id: 780,
        word: "Urgence ",
        meaning: {
          en: "Emergency",
          fa: "فوریت"
        },
        pronunciation: "ur-johns",
        example: {
          fr: "J'ai besoin d'une ambulance en urgence.",
          en: "I need an ambulance urgently.",
          fa: "من فوراً به آمبولانس نیاز دارم."
        },
        tip: "U for urgent situations."
      },
      {
        id: 781,
        word: "Hier ",
        meaning: {
          en: "Yesterday",
          fa: "دیروز"
        },
        pronunciation: "yehr",
        example: {
          fr: "Hier, nous sommes allés au parc.",
          en: "Yesterday, we went to the park.",
          fa: "دیروز، ما به پارک رفتیم."
        },
        tip: "Hier is history."
      },
      {
        id: 782,
        word: "Aujourd’hui ",
        meaning: {
          en: "Today",
          fa: "امروز"
        },
        pronunciation: "oh-zhoor-dwee",
        example: {
          fr: "Aujourd’hui, il fait beau.",
          en: "Today, the weather is nice.",
          fa: "امروز، هوا خوب است."
        },
        tip: "au-jour' sounds like 'our day'."
      },
      {
        id: 783,
        word: "Demain ",
        meaning: {
          en: "Tomorrow",
          fa: "فردا"
        },
        pronunciation: "duh-mun",
        example: {
          fr: "Nous partirons demain matin.",
          en: "We will leave tomorrow morning.",
          fa: "ما فردا صبح می‌رویم."
        },
        tip: "Demain sounds like 'dawn'."
      },
      {
        id: 784,
        word: "Agenda ",
        meaning: {
          en: "Agenda",
          fa: "دستور کار"
        },
        pronunciation: "ah-zhan-dah",
        example: {
          fr: "L'agenda est plein pour la semaine.",
          en: "The agenda is full for the week.",
          fa: "دستور کار برای این هفته پر است."
        },
        tip: "Agenda is like a planner."
      },
      {
        id: 785,
        word: "Programme ",
        meaning: {
          en: "Program",
          fa: "برنامه"
        },
        pronunciation: "proh-gram",
        example: {
          fr: "Le programme de ce soir est intéressant.",
          en: "Tonight's program is interesting.",
          fa: "برنامه امشب جالب است."
        },
        tip: "Think of a TV program."
      },
      {
        id: 786,
        word: "Planning ",
        meaning: {
          en: "Planning",
          fa: "برنامه‌ریزی"
        },
        pronunciation: "plan-ing",
        example: {
          fr: "Nous travaillons sur le planning de la semaine.",
          en: "We are working on the week's planning.",
          fa: "ما روی برنامه‌ریزی هفته کار می‌کنیم."
        },
        tip: "Relate to making plans."
      },
      {
        id: 787,
        word: "Décennie ",
        meaning: {
          en: "Decade",
          fa: "دهه"
        },
        pronunciation: "day-seh-nee",
        example: {
          fr: "Ils ont vécu là-bas pendant une décennie.",
          en: "They lived there for a decade.",
          fa: "آنها به مدت یک دهه در آنجا زندگی کردند."
        },
        tip: "Think of ten years."
      },
      {
        id: 788,
        word: "Siècle ",
        meaning: {
          en: "Century",
          fa: "قرن"
        },
        pronunciation: "see-eh-kl",
        example: {
          fr: "Nous sommes au XXIe siècle.",
          en: "We are in the 21st century.",
          fa: "ما در قرن بیست و یکم هستیم."
        },
        tip: "Think of one hundred years."
      },
      {
        id: 789,
        word: "Époque ",
        meaning: {
          en: "Era",
          fa: "دوران"
        },
        pronunciation: "ay-pok",
        example: {
          fr: "C'était une époque de grands changements.",
          en: "It was an era of great changes.",
          fa: "این دوران تغییرات بزرگی بود."
        },
        tip: "Recall historical eras."
      },
      {
        id: 790,
        word: "Période ",
        meaning: {
          en: "Period",
          fa: "دوره"
        },
        pronunciation: "peh-ree-ohd",
        example: {
          fr: "La période d'examens est stressante.",
          en: "The exam period is stressful.",
          fa: "دوره امتحانات پر استرس است."
        },
        tip: "Think of a block of time."
      },
      {
        id: 791,
        word: "Saison ",
        meaning: {
          en: "Season",
          fa: "فصل"
        },
        pronunciation: "say-zawn",
        example: {
          fr: "L'été est ma saison préférée.",
          en: "Summer is my favorite season.",
          fa: "تابستان فصل مورد علاقه من است."
        },
        tip: "Each year has four."
      },
      {
        id: 792,
        word: "Événement ",
        meaning: {
          en: "Event",
          fa: "رویداد"
        },
        pronunciation: "ay-vay-nuh-mawn",
        example: {
          fr: "L'événement a été un grand succès.",
          en: "The event was a great success.",
          fa: "رویداد بسیار موفق بود."
        },
        tip: "Something that happens."
      },
      {
        id: 793,
        word: "Occasion ",
        meaning: {
          en: "Occasion",
          fa: "فرصت"
        },
        pronunciation: "oh-kah-zyawn",
        example: {
          fr: "Nous célébrons l'occasion spéciale.",
          en: "We are celebrating the special occasion.",
          fa: "ما فرصت ویژه را جشن می‌گیریم."
        },
        tip: "A particular time."
      },
      {
        id: 794,
        word: "Futur ",
        meaning: {
          en: "Future",
          fa: "آینده"
        },
        pronunciation: "fyoo-toor",
        example: {
          fr: "Je pense à mon futur.",
          en: "I think about my future.",
          fa: "به آینده‌ام فکر می‌کنم."
        },
        tip: "What is to come."
      },
      {
        id: 795,
        word: "Présent ",
        meaning: {
          en: "Present",
          fa: "حاضر"
        },
        pronunciation: "pray-zahnt",
        example: {
          fr: "Je suis présent.",
          en: "I am present.",
          fa: "من حاضرم."
        },
        tip: "Think of being in the moment."
      },
      {
        id: 796,
        word: "Passé ",
        meaning: {
          en: "Past",
          fa: "گذشته"
        },
        pronunciation: "pah-say",
        example: {
          fr: "Le temps passé est parti.",
          en: "The past time is gone.",
          fa: "زمان گذشته رفته است."
        },
        tip: "Think of the word 'pass away'."
      },
      {
        id: 797,
        word: "Délais ",
        meaning: {
          en: "Delay",
          fa: "تاخیر"
        },
        pronunciation: "deh-lay",
        example: {
          fr: "Il y a un délai dans le projet.",
          en: "There is a delay in the project.",
          fa: "در پروژه تاخیر هست."
        },
        tip: "Sounds like 'delay'."
      },
      {
        id: 798,
        word: "Minuit ",
        meaning: {
          en: "Midnight",
          fa: "نیمه شب"
        },
        pronunciation: "mee-nwee",
        example: {
          fr: "Il est minuit.",
          en: "It is midnight.",
          fa: "نیمه شب است."
        },
        tip: "Think of 'minute' and 'night'."
      },
      {
        id: 799,
        word: "Horaires ",
        meaning: {
          en: "Schedules",
          fa: "برنامه‌ زمانی"
        },
        pronunciation: "or-air",
        example: {
          fr: "Les horaires sont affichés.",
          en: "The schedules are displayed.",
          fa: "برنامه‌ زمانی نمایش داده شده است."
        },
        tip: "Connect 'hour' with 'arrangement'."
      },
      {
        id: 800,
        word: "Minuterie ",
        meaning: {
          en: "Timer",
          fa: "تایمر"
        },
        pronunciation: "mee-new-tree",
        example: {
          fr: "La minuterie est réglée.",
          en: "The timer is set.",
          fa: "تایمر تنظیم شده است."
        },
        tip: "Relate to 'minute' for timing."
      },
      {
        id: 801,
        word: "Grand ",
        meaning: {
          en: "Big",
          fa: "بزرگ"
        },
        pronunciation: "grahn",
        example: {
          fr: "Il a une grande maison.",
          en: "He has a big house.",
          fa: "او یک خانه بزرگ دارد."
        },
        tip: "Similar to 'grand' in English."
      },
      {
        id: 802,
        word: "Petit ",
        meaning: {
          en: "Small",
          fa: "کوچک"
        },
        pronunciation: "puh-tee",
        example: {
          fr: "C'est un petit chat.",
          en: "It's a small cat.",
          fa: "این یک گربه کوچک است."
        },
        tip: "Petite size is small."
      },
      {
        id: 803,
        word: "Long ",
        meaning: {
          en: "Long",
          fa: "بلند"
        },
        pronunciation: "lohng",
        example: {
          fr: "Le chemin est long.",
          en: "The path is long.",
          fa: "راه بلند است."
        },
        tip: "Similar to the English word ‘long’."
      },
      {
        id: 804,
        word: "Court ",
        meaning: {
          en: "Short",
          fa: "کوتاه"
        },
        pronunciation: "koor",
        example: {
          fr: "La jupe est courte.",
          en: "The skirt is short.",
          fa: "دامن کوتاه است."
        },
        tip: "Think of a court case, which can be short."
      },
      {
        id: 805,
        word: "Large ",
        meaning: {
          en: "Wide",
          fa: "وسیع"
        },
        pronunciation: "lah-rzh",
        example: {
          fr: "La rue est large.",
          en: "The street is wide.",
          fa: "خیابان وسیع است."
        },
        tip: "Sounds like ‘large’ but means wide."
      },
      {
        id: 806,
        word: "Étroit ",
        meaning: {
          en: "Narrow",
          fa: "باریک"
        },
        pronunciation: "ay-twah",
        example: {
          fr: "Le passage est étroit.",
          en: "The passage is narrow.",
          fa: "گذرگاه باریک است."
        },
        tip: "Think of 'a tight' fit."
      },
      {
        id: 807,
        word: "Gros ",
        meaning: {
          en: "Big",
          fa: "بزرگ"
        },
        pronunciation: "groh",
        example: {
          fr: "Le chat est gros.",
          en: "The cat is big.",
          fa: "گربه بزرگ است."
        },
        tip: "Gros rhymes with ‘grow’."
      },
      {
        id: 808,
        word: "Mince ",
        meaning: {
          en: "Thin",
          fa: "نازک"
        },
        pronunciation: "maanss",
        example: {
          fr: "Ce livre est mince.",
          en: "This book is thin.",
          fa: "این کتاب نازک است."
        },
        tip: "Think of 'mince' as something slim."
      },
      {
        id: 809,
        word: "Épais ",
        meaning: {
          en: "Thick",
          fa: "ضخیم"
        },
        pronunciation: "eh-peh",
        example: {
          fr: "Le mur est épais.",
          en: "The wall is thick.",
          fa: "دیوار ضخیم است."
        },
        tip: "E-peh 'sounds like' a thick sound."
      },
      {
        id: 810,
        word: "Léger ",
        meaning: {
          en: "Light",
          fa: "سبک"
        },
        pronunciation: "leh-zhehr",
        example: {
          fr: "La boîte est légère.",
          en: "The box is light.",
          fa: "جعبه سبک است."
        },
        tip: "Léger is like 'lighter'."
      },
      {
        id: 811,
        word: "Lourd ",
        meaning: {
          en: "Heavy",
          fa: "سنگین"
        },
        pronunciation: "loord",
        example: {
          fr: "Le sac est lourd.",
          en: "The bag is heavy.",
          fa: "کیف سنگین است."
        },
        tip: "Lourd 'sounds like' load."
      },
      {
        id: 812,
        word: "Doux ",
        meaning: {
          en: "Soft",
          fa: "نرم"
        },
        pronunciation: "doo",
        example: {
          fr: "Ce tissu est doux.",
          en: "This fabric is soft.",
          fa: "این پارچه نرم است."
        },
        tip: "Think of 'doux' as gentle."
      },
      {
        id: 813,
        word: "Dur ",
        meaning: {
          en: "Hard",
          fa: "سخت"
        },
        pronunciation: "dur",
        example: {
          fr: "La table est très dure.",
          en: "The table is very hard.",
          fa: "میز خیلی سخت است."
        },
        tip: "Think of 'durable'."
      },
      {
        id: 814,
        word: "Chaud ",
        meaning: {
          en: "Hot",
          fa: "داغ"
        },
        pronunciation: "shoh",
        example: {
          fr: "Le café est chaud.",
          en: "The coffee is hot.",
          fa: "قهوه داغ است."
        },
        tip: "Think of 'chowder'."
      },
      {
        id: 815,
        word: "Froid ",
        meaning: {
          en: "Cold",
          fa: "سرد"
        },
        pronunciation: "frwah",
        example: {
          fr: "L'hiver est très froid.",
          en: "The winter is very cold.",
          fa: "زمستان خیلی سرد است."
        },
        tip: "Think of 'freezing'."
      },
      {
        id: 816,
        word: "Tiède ",
        meaning: {
          en: "Lukewarm",
          fa: "ملایم"
        },
        pronunciation: "tyed",
        example: {
          fr: "L'eau est tiède.",
          en: "The water is lukewarm.",
          fa: "آب ملایم است."
        },
        tip: "Think of 'tepid'."
      },
      {
        id: 817,
        word: "Rapide ",
        meaning: {
          en: "Fast",
          fa: "سریع"
        },
        pronunciation: "rah-pead",
        example: {
          fr: "Le train est rapide.",
          en: "The train is fast.",
          fa: "قطار سریع است."
        },
        tip: "Think of 'rapid'."
      },
      {
        id: 818,
        word: "Lent ",
        meaning: {
          en: "Slow",
          fa: "آهسته"
        },
        pronunciation: "lohng",
        example: {
          fr: "Il est lent à répondre.",
          en: "He is slow to respond.",
          fa: "او به آرامی پاسخ می‌دهد."
        },
        tip: "Think of a long process."
      },
      {
        id: 819,
        word: "Beau ",
        meaning: {
          en: "Beautiful",
          fa: "زیبا"
        },
        pronunciation: "boh",
        example: {
          fr: "C'est un beau jardin.",
          en: "It's a beautiful garden.",
          fa: "این یک باغ زیباست."
        },
        tip: "Beauty is short like 'beau'."
      },
      {
        id: 820,
        word: "Joli ",
        meaning: {
          en: "Pretty",
          fa: "خوشگل"
        },
        pronunciation: "zho-lee",
        example: {
          fr: "Elle a une jolie maison.",
          en: "She has a pretty house.",
          fa: "او خانه خوشگلی دارد."
        },
        tip: "Jolly things are usually pretty."
      },
      {
        id: 821,
        word: "Moche ",
        meaning: {
          en: "Ugly",
          fa: "زشت"
        },
        pronunciation: "mohsh",
        example: {
          fr: "Le bâtiment est moche.",
          en: "The building is ugly.",
          fa: "ساختمان زشت است."
        },
        tip: "Sounds like 'mash', which can be messy."
      },
      {
        id: 822,
        word: "Laid ",
        meaning: {
          en: "Ugly",
          fa: "زشت"
        },
        pronunciation: "leh",
        example: {
          fr: "Le tableau est laid.",
          en: "The painting is ugly.",
          fa: "تابلو زشت است."
        },
        tip: "Think of 'laid low' for something not appealing."
      },
      {
        id: 823,
        word: "Propre ",
        meaning: {
          en: "Clean",
          fa: "تمیز"
        },
        pronunciation: "pro-pruh",
        example: {
          fr: "La maison est propre.",
          en: "The house is clean.",
          fa: "خانه تمیز است."
        },
        tip: "Think of 'proper' as clean and neat."
      },
      {
        id: 824,
        word: "Sale ",
        meaning: {
          en: "Dirty",
          fa: "کثیف"
        },
        pronunciation: "sal",
        example: {
          fr: "Le sol est sale.",
          en: "The floor is dirty.",
          fa: "کف کثیف است."
        },
        tip: "A 'sale' of dirt makes it dirty."
      },
      {
        id: 825,
        word: "Proche ",
        meaning: {
          en: "Near",
          fa: "نزدیک"
        },
        pronunciation: "prosh",
        example: {
          fr: "L'école est proche.",
          en: "The school is near.",
          fa: "مدرسه نزدیک است."
        },
        tip: "Approach to be near."
      },
      {
        id: 826,
        word: "Lointain ",
        meaning: {
          en: "Distant",
          fa: "دور"
        },
        pronunciation: "lwa-tan",
        example: {
          fr: "La station est lointaine.",
          en: "The station is distant.",
          fa: "ایستگاه دور است."
        },
        tip: "Think of 'long' distance for lointain."
      },
      {
        id: 827,
        word: "Facile ",
        meaning: {
          en: "Easy",
          fa: "آسان"
        },
        pronunciation: "fa-seel",
        example: {
          fr: "Le test est facile.",
          en: "The test is easy.",
          fa: "آزمون آسان است."
        },
        tip: "Facile makes the task feel easy."
      },
      {
        id: 828,
        word: "Difficile ",
        meaning: {
          en: "Difficult",
          fa: "سخت"
        },
        pronunciation: "dee-fee-seel",
        example: {
          fr: "C'est très difficile.",
          en: "It's very difficult.",
          fa: "این خیلی سخت است."
        },
        tip: "Think of 'difficult' with a soft 'C'."
      },
      {
        id: 829,
        word: "Possible ",
        meaning: {
          en: "Possible",
          fa: "ممکن"
        },
        pronunciation: "pos-ee-bluh",
        example: {
          fr: "C'est possible.",
          en: "It's possible.",
          fa: "این ممکن است."
        },
        tip: "Sounds like 'possible' in English."
      },
      {
        id: 830,
        word: "Impossible ",
        meaning: {
          en: "Impossible",
          fa: "غیرممکن"
        },
        pronunciation: "ahn-poh-see-bluh",
        example: {
          fr: "C'est impossible.",
          en: "It's impossible.",
          fa: "این غیرممکن است."
        },
        tip: "Prefix 'im-' means 'not,' so not possible."
      },
      {
        id: 831,
        word: "Nécessaire ",
        meaning: {
          en: "Necessary",
          fa: "ضروری"
        },
        pronunciation: "neh-seh-sehr",
        example: {
          fr: "C'est nécessaire.",
          en: "It's necessary.",
          fa: "این ضروری است."
        },
        tip: "Think of 'necessary' with a rolling 'r'."
      },
      {
        id: 832,
        word: "Inutile ",
        meaning: {
          en: "Useless",
          fa: "بی‌فایده"
        },
        pronunciation: "ee-nyoo-teel",
        example: {
          fr: "C'est inutile.",
          en: "It's useless.",
          fa: "این بی‌فایده است."
        },
        tip: "The prefix 'in-' negates, so not useful."
      },
      {
        id: 833,
        word: "Cher ",
        meaning: {
          en: "Expensive",
          fa: "گران"
        },
        pronunciation: "sher",
        example: {
          fr: "Cet appartement est cher.",
          en: "This apartment is expensive.",
          fa: "این آپارتمان گران است."
        },
        tip: "Think of 'cherish', something valued."
      },
      {
        id: 834,
        word: "Bon marché ",
        meaning: {
          en: "Cheap",
          fa: "ارزان"
        },
        pronunciation: "bohn mar-shay",
        example: {
          fr: "Ce produit est bon marché.",
          en: "This product is cheap.",
          fa: "این محصول ارزان است."
        },
        tip: "Good market deals are cheap."
      },
      {
        id: 835,
        word: "Pauvre ",
        meaning: {
          en: "Poor",
          fa: "فقیر"
        },
        pronunciation: "pov-ruh",
        example: {
          fr: "Il est pauvre mais heureux.",
          en: "He is poor but happy.",
          fa: "او فقیر ولی خوشحال است."
        },
        tip: "Sounds like 'poverty'."
      },
      {
        id: 836,
        word: "Riche ",
        meaning: {
          en: "Rich",
          fa: "ثروتمند"
        },
        pronunciation: "reesh",
        example: {
          fr: "Elle est riche et célèbre.",
          en: "She is rich and famous.",
          fa: "او ثروتمند و مشهور است."
        },
        tip: "Almost same as 'rich'."
      },
      {
        id: 837,
        word: "Heureux ",
        meaning: {
          en: "Happy",
          fa: "خوشحال"
        },
        pronunciation: "uh-reuh",
        example: {
          fr: "Ils sont toujours heureux.",
          en: "They are always happy.",
          fa: "آنها همیشه خوشحال هستند."
        },
        tip: "Sounds like 'hero', heroes are happy."
      },
      {
        id: 838,
        word: "Malheureux ",
        meaning: {
          en: "Unhappy",
          fa: "ناراضی"
        },
        pronunciation: "mal-er-uh",
        example: {
          fr: "Il est malheureux ici.",
          en: "He is unhappy here.",
          fa: "او اینجا ناراضی است."
        },
        tip: "Think of 'mal' as bad."
      },
      {
        id: 839,
        word: "Satisfait ",
        meaning: {
          en: "Satisfied",
          fa: "راضی"
        },
        pronunciation: "sat-is-fay",
        example: {
          fr: "Elle est satisfaite de son travail.",
          en: "She is satisfied with her work.",
          fa: "او از کارش راضی است."
        },
        tip: "Similar to 'satisfy'."
      },
      {
        id: 840,
        word: "Insatisfait ",
        meaning: {
          en: "Unsatisfied",
          fa: "ناخوشنود"
        },
        pronunciation: "in-sat-is-fay",
        example: {
          fr: "Il est insatisfait du résultat.",
          en: "He is unsatisfied with the result.",
          fa: "او از نتیجه ناخوشنود است."
        },
        tip: "Think of 'in' as not."
      },
      {
        id: 841,
        word: "Intelligent ",
        meaning: {
          en: "Smart",
          fa: "هوشمند"
        },
        pronunciation: "an-tel-ee-janh",
        example: {
          fr: "C'est un élève intelligent.",
          en: "He is a smart student.",
          fa: "او دانش‌آموزی هوشمند است."
        },
        tip: "Sounds like 'intelligent'."
      },
      {
        id: 842,
        word: "Stupide ",
        meaning: {
          en: "Stupid",
          fa: "احمق"
        },
        pronunciation: "stoo-pead",
        example: {
          fr: "C'était une erreur stupide.",
          en: "That was a stupid mistake.",
          fa: "این یک اشتباه احمقانه بود."
        },
        tip: "Sounds like 'stupid'."
      },
      {
        id: 843,
        word: "Sérieux ",
        meaning: {
          en: "Serious",
          fa: "جدی"
        },
        pronunciation: "seh-ree-uhs",
        example: {
          fr: "Il est très sérieux.",
          en: "He is very serious.",
          fa: "او بسیار جدی است."
        },
        tip: "Think of 'serious' situations."
      },
      {
        id: 844,
        word: "Drôle ",
        meaning: {
          en: "Funny",
          fa: "خنده‌دار"
        },
        pronunciation: "drohl",
        example: {
          fr: "Elle est très drôle.",
          en: "She is very funny.",
          fa: "او بسیار خنده‌دار است."
        },
        tip: "Sounds like 'droll', which can mean humorous."
      },
      {
        id: 845,
        word: "Neuf ",
        meaning: {
          en: "New",
          fa: "جدید"
        },
        pronunciation: "nuhf",
        example: {
          fr: "Ce livre est neuf.",
          en: "This book is new.",
          fa: "این کتاب جدید است."
        },
        tip: "Remember 'neuf' as in 'new fabric'."
      },
      {
        id: 846,
        word: "Vieux ",
        meaning: {
          en: "Old",
          fa: "قدیمی"
        },
        pronunciation: "vyuh",
        example: {
          fr: "C'est un vieil ami.",
          en: "This is an old friend.",
          fa: "این یک دوست قدیمی است."
        },
        tip: "Think 'vieux age' for old."
      },
      {
        id: 847,
        word: "Ancien ",
        meaning: {
          en: "Ancient",
          fa: "باستانی"
        },
        pronunciation: "ahn-syen",
        example: {
          fr: "C'est un monument ancien.",
          en: "It's an ancient monument.",
          fa: "این یک بنای باستانی است."
        },
        tip: "Think 'ancient' for 'ancien'."
      },
      {
        id: 848,
        word: "Moderne ",
        meaning: {
          en: "Modern",
          fa: "مدرن"
        },
        pronunciation: "moh-DERN",
        example: {
          fr: "Cet immeuble est très moderne.",
          en: "This building is very modern.",
          fa: "این ساختمان بسیار مدرن است."
        },
        tip: "Sounds like 'modern' in English."
      },
      {
        id: 849,
        word: "Complet ",
        meaning: {
          en: "Complete",
          fa: "کامل"
        },
        pronunciation: "kohm-PLAY",
        example: {
          fr: "Le rapport est complet.",
          en: "The report is complete.",
          fa: "گزارش کامل است."
        },
        tip: "Think of 'complete'."
      },
      {
        id: 850,
        word: "Vide ",
        meaning: {
          en: "Empty",
          fa: "خالی"
        },
        pronunciation: "veed",
        example: {
          fr: "La bouteille est vide.",
          en: "The bottle is empty.",
          fa: "بطری خالی است."
        },
        tip: "Think of 'void'."
      },
      {
        id: 851,
        word: "Être ",
        meaning: {
          en: "To be",
          fa: "بودن"
        },
        pronunciation: "EHT-reh",
        example: {
          fr: "Je veux être médecin.",
          en: "I want to be a doctor.",
          fa: "می‌خواهم دکتر باشم."
        },
        tip: "Think of 'existence'."
      },
      {
        id: 852,
        word: "Avoir ",
        meaning: {
          en: "To have",
          fa: "داشتن"
        },
        pronunciation: "ah-VWAR",
        example: {
          fr: "J'ai besoin d'avoir du repos.",
          en: "I need to have some rest.",
          fa: "نیاز دارم کمی استراحت داشته باشم."
        },
        tip: "Think of 'acquire'."
      },
      {
        id: 853,
        word: "Faire ",
        meaning: {
          en: "Do",
          fa: "انجام دادن"
        },
        pronunciation: "fehr",
        example: {
          fr: "Je vais faire mes devoirs.",
          en: "I will do my homework.",
          fa: "من کارهای خانه‌ام را انجام خواهم داد."
        },
        tip: "Think of 'fair' without the 'i'."
      },
      {
        id: 854,
        word: "Dire ",
        meaning: {
          en: "Say",
          fa: "گفتن"
        },
        pronunciation: "deer",
        example: {
          fr: "Il va dire la vérité.",
          en: "He is going to say the truth.",
          fa: "او قرار است حقیقت را بگوید."
        },
        tip: "Sounds like 'deer'."
      },
      {
        id: 855,
        word: "Pouvoir ",
        meaning: {
          en: "Can",
          fa: "توانستن"
        },
        pronunciation: "poo-vwar",
        example: {
          fr: "Je peux pouvoir bien chanter.",
          en: "I can sing well.",
          fa: "می‌توانم خوب بخوانم."
        },
        tip: "Think of 'power' with a slight twist."
      },
      {
        id: 856,
        word: "Aller ",
        meaning: {
          en: "Go",
          fa: "رفتن"
        },
        pronunciation: "ah-leh",
        example: {
          fr: "Nous allons au cinéma.",
          en: "We are going to the cinema.",
          fa: "ما به سینما می‌رویم."
        },
        tip: "Think of 'alley' and you'll 'go'."
      },
      {
        id: 857,
        word: "Voir ",
        meaning: {
          en: "See",
          fa: "دیدن"
        },
        pronunciation: "vwahr",
        example: {
          fr: "Je veux voir le film.",
          en: "I want to see the movie.",
          fa: "می‌خواهم فیلم را ببینم."
        },
        tip: "Think of 'voyeur' to remember."
      },
      {
        id: 858,
        word: "Savoir ",
        meaning: {
          en: "Know",
          fa: "دانستن"
        },
        pronunciation: "sa-vwar",
        example: {
          fr: "Je veux savoir la vérité.",
          en: "I want to know the truth.",
          fa: "من می‌خواهم حقیقت را بدانم."
        },
        tip: "Think of 'savvy' as knowing."
      },
      {
        id: 859,
        word: "Vouloir ",
        meaning: {
          en: "Want",
          fa: "خواستن"
        },
        pronunciation: "voo-lwar",
        example: {
          fr: "Je veux aller au cinéma.",
          en: "I want to go to the cinema.",
          fa: "من می‌خواهم به سینما بروم."
        },
        tip: "Sounds like 'volition', meaning will."
      },
      {
        id: 860,
        word: "Venir ",
        meaning: {
          en: "Come",
          fa: "آمدن"
        },
        pronunciation: "veh-neer",
        example: {
          fr: "Il aime venir ici.",
          en: "He likes to come here.",
          fa: "او دوست دارد به اینجا بیاید."
        },
        tip: "Think of 'venue', a place you come to."
      },
      {
        id: 861,
        word: "Devoir ",
        meaning: {
          en: "Need",
          fa: "باید"
        },
        pronunciation: "duh-vwar",
        example: {
          fr: "Je dois partir maintenant.",
          en: "I need to leave now.",
          fa: "من باید اکنون بروم."
        },
        tip: "Duty sounds similar; a need to act."
      },
      {
        id: 862,
        word: "Prendre ",
        meaning: {
          en: "Take",
          fa: "گرفتن"
        },
        pronunciation: "prahndr",
        example: {
          fr: "Je vais prendre le bus.",
          en: "I will take the bus.",
          fa: "من اتوبوس را خواهم گرفت."
        },
        tip: "Remember 'apprehend', to seize."
      },
      {
        id: 863,
        word: "Mettre ",
        meaning: {
          en: "Put",
          fa: "گذاشتن"
        },
        pronunciation: "meh-tr",
        example: {
          fr: "Il va mettre son livre sur la table.",
          en: "He will put his book on the table.",
          fa: "او کتابش را روی میز می‌گذارد."
        },
        tip: "Think of 'met' as placing items you 'met'."
      },
      {
        id: 864,
        word: "Rester ",
        meaning: {
          en: "Stay",
          fa: "ماندن"
        },
        pronunciation: "re-stay",
        example: {
          fr: "Elle veut rester à la maison.",
          en: "She wants to stay at home.",
          fa: "او می‌خواهد در خانه بماند."
        },
        tip: "Rester sounds like 'rest', which involves staying put."
      },
      {
        id: 865,
        word: "Parler ",
        meaning: {
          en: "Talk",
          fa: "صحبت کردن"
        },
        pronunciation: "par-lay",
        example: {
          fr: "Il aime parler avec ses amis.",
          en: "He likes to talk with his friends.",
          fa: "او دوست دارد با دوستانش صحبت کند."
        },
        tip: "Remember the 'par' in parrot; parrots talk."
      },
      {
        id: 866,
        word: "Donner ",
        meaning: {
          en: "Give",
          fa: "دادن"
        },
        pronunciation: "doh-nay",
        example: {
          fr: "Je vais donner un cadeau.",
          en: "I will give a gift.",
          fa: "من یک هدیه خواهم داد."
        },
        tip: "Think of 'donate', which involves giving."
      },
      {
        id: 867,
        word: "Passer ",
        meaning: {
          en: "Pass",
          fa: "عبور کردن"
        },
        pronunciation: "pass-ay",
        example: {
          fr: "Nous allons passer par le parc.",
          en: "We are going to pass through the park.",
          fa: "ما از پارک عبور خواهیم کرد."
        },
        tip: "It sounds like 'pass', as in passing an object."
      },
      {
        id: 868,
        word: "Arriver ",
        meaning: {
          en: "Arrive",
          fa: "رسیدن"
        },
        pronunciation: "ah-ree-vay",
        example: {
          fr: "Je vais arriver demain.",
          en: "I will arrive tomorrow.",
          fa: "من فردا خواهم رسید."
        },
        tip: "Think of 'arrival'."
      },
      {
        id: 869,
        word: "Tenir ",
        meaning: {
          en: "Hold",
          fa: "نگه داشتن"
        },
        pronunciation: "tuh-neer",
        example: {
          fr: "Peux-tu tenir ce sac?",
          en: "Can you hold this bag?",
          fa: "می‌توانی این کیف را نگه داری؟"
        },
        tip: "Think of 'tenant' holding rent."
      },
      {
        id: 870,
        word: "Porter ",
        meaning: {
          en: "Carry",
          fa: "حمل کردن"
        },
        pronunciation: "por-tay",
        example: {
          fr: "Je vais porter la valise.",
          en: "I am going to carry the suitcase.",
          fa: "من قصد دارم چمدان را حمل کنم."
        },
        tip: "Think of 'porter' who carries luggage."
      },
      {
        id: 871,
        word: "Aimer ",
        meaning: {
          en: "Love",
          fa: "دوست داشتن"
        },
        pronunciation: "eh-may",
        example: {
          fr: "J'aime le chocolat.",
          en: "I love chocolate.",
          fa: "من شکلات دوست دارم."
        },
        tip: "Sounds like 'amour'."
      },
      {
        id: 872,
        word: "Détester ",
        meaning: {
          en: "Hate",
          fa: "متنفر بودن"
        },
        pronunciation: "day-tess-tay",
        example: {
          fr: "Je déteste les araignées.",
          en: "I hate spiders.",
          fa: "من از عنکبوت‌ها متنفرم."
        },
        tip: "Similar to 'detest'."
      },
      {
        id: 873,
        word: "Chercher ",
        meaning: {
          en: "Search",
          fa: "جستجو"
        },
        pronunciation: "sher-shay",
        example: {
          fr: "Je vais chercher mes clés.",
          en: "I am going to search for my keys.",
          fa: "من می‌خواهم دنبال کلیدهایم بگردم."
        },
        tip: "Think of 'search' and 'cher' as sounds."
      },
      {
        id: 874,
        word: "Trouver ",
        meaning: {
          en: "Find",
          fa: "یافتن"
        },
        pronunciation: "troo-vay",
        example: {
          fr: "Il peut trouver un emploi.",
          en: "He can find a job.",
          fa: "او می‌تواند شغلی پیدا کند."
        },
        tip: "Remember 'trouver' as 'to discover'."
      },
      {
        id: 875,
        word: "Comprendre ",
        meaning: {
          en: "Understand",
          fa: "فهمیدن"
        },
        pronunciation: "kohm-pron-druh",
        example: {
          fr: "Je veux comprendre cette leçon.",
          en: "I want to understand this lesson.",
          fa: "می‌خواهم این درس را بفهمم."
        },
        tip: "Link 'comprendre' to 'comprehend'."
      },
      {
        id: 876,
        word: "Croire ",
        meaning: {
          en: "Believe",
          fa: "ایمان داشتن"
        },
        pronunciation: "kroy-r",
        example: {
          fr: "Elle veut croire en lui.",
          en: "She wants to believe in him.",
          fa: "او می‌خواهد به او ایمان داشته باشد."
        },
        tip: "Think of 'croire' as 'credible'."
      },
      {
        id: 877,
        word: "Demander ",
        meaning: {
          en: "Ask",
          fa: "پرسیدن"
        },
        pronunciation: "duh-mahn-day",
        example: {
          fr: "Je vais demander une question.",
          en: "I will ask a question.",
          fa: "من می‌خواهم یک سوال بپرسم."
        },
        tip: "Link 'demander' with 'demand'."
      },
      {
        id: 878,
        word: "Répondre ",
        meaning: {
          en: "Reply",
          fa: "پاسخ"
        },
        pronunciation: "ray-pond",
        example: {
          fr: "Je vais répondre à la question.",
          en: "I will reply to the question.",
          fa: "من به سوال پاسخ خواهم داد."
        },
        tip: "Think of 'respond' with a French twist."
      },
      {
        id: 879,
        word: "Penser ",
        meaning: {
          en: "Think",
          fa: "فکر کردن"
        },
        pronunciation: "pon-say",
        example: {
          fr: "Je pense à toi.",
          en: "I think of you.",
          fa: "به تو فکر می‌کنم."
        },
        tip: "Sounds like 'pensive' which means thoughtful."
      },
      {
        id: 880,
        word: "Connaître ",
        meaning: {
          en: "Know",
          fa: "دانستن"
        },
        pronunciation: "kuh-netr",
        example: {
          fr: "Je connais ce livre.",
          en: "I know this book.",
          fa: "من این کتاب را می‌شناسم."
        },
        tip: "Sounds like 'connect' for knowing people."
      },
      {
        id: 881,
        word: "Sentir ",
        meaning: {
          en: "Feel",
          fa: "احساس کردن"
        },
        pronunciation: "son-teer",
        example: {
          fr: "Je sens le parfum.",
          en: "I smell the perfume.",
          fa: "من بوی عطر را حس می‌کنم."
        },
        tip: "Think of 'scent' for feeling smells."
      },
      {
        id: 882,
        word: "Suivre ",
        meaning: {
          en: "Follow",
          fa: "دنبال کردن"
        },
        pronunciation: "swee-vr",
        example: {
          fr: "Je vais suivre le guide.",
          en: "I will follow the guide.",
          fa: "من راهنما را دنبال خواهم کرد."
        },
        tip: "Sounds like 'swift' as followers are quick."
      },
      {
        id: 883,
        word: "Sortir ",
        meaning: {
          en: "Exit",
          fa: "خروج"
        },
        pronunciation: "sohr-teer",
        example: {
          fr: "Je vais sortir ce soir.",
          en: "I am going out tonight.",
          fa: "امشب می‌روم بیرون."
        },
        tip: "Think of 'sortie' as an exit."
      },
      {
        id: 884,
        word: "Partir ",
        meaning: {
          en: "Leave",
          fa: "ترک کردن"
        },
        pronunciation: "pahr-teer",
        example: {
          fr: "Je dois partir maintenant.",
          en: "I have to leave now.",
          fa: "باید الان بروم."
        },
        tip: "Parting for departure."
      },
      {
        id: 885,
        word: "Ouvrir ",
        meaning: {
          en: "Open",
          fa: "باز کردن"
        },
        pronunciation: "oo-vreer",
        example: {
          fr: "Je vais ouvrir la porte.",
          en: "I will open the door.",
          fa: "در را باز خواهم کرد."
        },
        tip: "Oven's door opens."
      },
      {
        id: 886,
        word: "Fermer ",
        meaning: {
          en: "Close",
          fa: "بستن"
        },
        pronunciation: "fehr-may",
        example: {
          fr: "Je vais fermer la fenêtre.",
          en: "I will close the window.",
          fa: "پنجره را خواهم بست."
        },
        tip: "Firmly shut."
      },
      {
        id: 887,
        word: "Commencer ",
        meaning: {
          en: "Start",
          fa: "شروع کردن"
        },
        pronunciation: "koh-mohn-say",
        example: {
          fr: "Le cours va commencer.",
          en: "The class will start.",
          fa: "کلاس شروع خواهد شد."
        },
        tip: "Commence to begin."
      },
      {
        id: 888,
        word: "Finir ",
        meaning: {
          en: "Finish",
          fa: "تمام کردن"
        },
        pronunciation: "fee-neer",
        example: {
          fr: "Je vais finir mon travail.",
          en: "I will finish my work.",
          fa: "من کارم را تمام خواهم کرد."
        },
        tip: "Think of 'finalize'."
      },
      {
        id: 889,
        word: "Manger ",
        meaning: {
          en: "Eat",
          fa: "خوردن"
        },
        pronunciation: "mahn-zhe",
        example: {
          fr: "Je vais manger une pomme.",
          en: "I am going to eat an apple.",
          fa: "من می‌خواهم یک سیب بخورم."
        },
        tip: "Think of 'munch'."
      },
      {
        id: 890,
        word: "Boire ",
        meaning: {
          en: "Drink",
          fa: "نوشیدن"
        },
        pronunciation: "bwar",
        example: {
          fr: "Elle aime boire de l'eau.",
          en: "She likes to drink water.",
          fa: "او دوست دارد آب بنوشد."
        },
        tip: "Think of 'brew'."
      },
      {
        id: 891,
        word: "Écouter ",
        meaning: {
          en: "Listen",
          fa: "گوش کردن"
        },
        pronunciation: "ay-koo-tay",
        example: {
          fr: "Il aime écouter de la musique.",
          en: "He likes to listen to music.",
          fa: "او دوست دارد به موسیقی گوش کند."
        },
        tip: "Think of 'ear'."
      },
      {
        id: 892,
        word: "Entendre ",
        meaning: {
          en: "Hear",
          fa: "شنیدن"
        },
        pronunciation: "ahn-tahn-druh",
        example: {
          fr: "Nous pouvons entendre la mer.",
          en: "We can hear the sea.",
          fa: "ما می‌توانیم صدای دریا را بشنویم."
        },
        tip: "Think of 'antenna'."
      },
      {
        id: 893,
        word: "Lire ",
        meaning: {
          en: "Read",
          fa: "خواندن"
        },
        pronunciation: "leer",
        example: {
          fr: "Je veux lire ce livre.",
          en: "I want to read this book.",
          fa: "من می‌خواهم این کتاب را بخوانم."
        },
        tip: "Sounds like 'leer', which means to read intensely."
      },
      {
        id: 894,
        word: "Écrire ",
        meaning: {
          en: "Write",
          fa: "نوشتن"
        },
        pronunciation: "eh-kreer",
        example: {
          fr: "J'aime écrire des lettres.",
          en: "I like to write letters.",
          fa: "من دوست دارم نامه بنویسم."
        },
        tip: "Think 'scribe' which relates to writing."
      },
      {
        id: 895,
        word: "Marcher ",
        meaning: {
          en: "Walk",
          fa: "راه رفتن"
        },
        pronunciation: "mar-shay",
        example: {
          fr: "Je vais marcher dans le parc.",
          en: "I will walk in the park.",
          fa: "من در پارک راه خواهم رفت."
        },
        tip: "Think 'march' as a type of walking."
      },
      {
        id: 896,
        word: "Courir ",
        meaning: {
          en: "Run",
          fa: "دویدن"
        },
        pronunciation: "koo-reer",
        example: {
          fr: "Je vais courir chaque matin.",
          en: "I will run every morning.",
          fa: "من هر صبح خواهم دوید."
        },
        tip: "Similar to 'courier' who runs to deliver."
      },
      {
        id: 897,
        word: "Jouer ",
        meaning: {
          en: "Play",
          fa: "بازی کردن"
        },
        pronunciation: "zhoo-ay",
        example: {
          fr: "Les enfants aiment jouer.",
          en: "The children like to play.",
          fa: "بچه‌ها دوست دارند بازی کنند."
        },
        tip: "Think of 'joust' as a type of play."
      },
      {
        id: 898,
        word: "Travailler ",
        meaning: {
          en: "To work",
          fa: "کار کردن"
        },
        pronunciation: "trah-vai-yeh",
        example: {
          fr: "Je dois travailler aujourd'hui.",
          en: "I have to work today.",
          fa: "من باید امروز کار کنم."
        },
        tip: "Think of 'travail' as 'travel with work'."
      },
      {
        id: 899,
        word: "Étudier ",
        meaning: {
          en: "To study",
          fa: "مطالعه کردن"
        },
        pronunciation: "eh-tu-dee-yeh",
        example: {
          fr: "Elle aime étudier le français.",
          en: "She likes studying French.",
          fa: "او دوست دارد فرانسوی مطالعه کند."
        },
        tip: "Think of 'étudier as 'education' in study."
      },
      {
        id: 900,
        word: "Dormir ",
        meaning: {
          en: "To sleep",
          fa: "خوابیدن"
        },
        pronunciation: "dor-meer",
        example: {
          fr: "Je vais dormir tôt ce soir.",
          en: "I am going to sleep early tonight.",
          fa: "امشب زود می‌خوابم."
        },
        tip: "Think of 'dormitory' as where you sleep."
      },
      {
        id: 901,
        word: "Chose ",
        meaning: {
          en: "Thing",
          fa: "چیز"
        },
        pronunciation: "shoz",
        example: {
          fr: "Quelle est cette chose?",
          en: "What is this thing?",
          fa: "این چیز چیست؟"
        },
        tip: "Think of 'chose' as already chosen things."
      },
      {
        id: 902,
        word: "Objet ",
        meaning: {
          en: "Object",
          fa: "شیء"
        },
        pronunciation: "ob-zhay",
        example: {
          fr: "Cet objet est très ancien.",
          en: "This object is very old.",
          fa: "این شیء بسیار قدیمی است."
        },
        tip: "Relate 'objet' to 'object' you see."
      },
      {
        id: 903,
        word: "Idée ",
        meaning: {
          en: "Idea",
          fa: "ایده"
        },
        pronunciation: "ee-day",
        example: {
          fr: "J'ai une idée.",
          en: "I have an idea.",
          fa: "من یک ایده دارم."
        },
        tip: "Think of 'ideal' without 'l'."
      },
      {
        id: 904,
        word: "Projet ",
        meaning: {
          en: "Project",
          fa: "پروژه"
        },
        pronunciation: "proh-zheh",
        example: {
          fr: "Nous travaillons sur un projet.",
          en: "We are working on a project.",
          fa: "ما روی یک پروژه کار می‌کنیم."
        },
        tip: "Sounds like 'project'."
      },
      {
        id: 905,
        word: "Question ",
        meaning: {
          en: "Question",
          fa: "سوال"
        },
        pronunciation: "kes-tyon",
        example: {
          fr: "Je pose une question.",
          en: "I am asking a question.",
          fa: "من یک سوال می‌پرسم."
        },
        tip: "Think of 'question'."
      },
      {
        id: 906,
        word: "Réponse ",
        meaning: {
          en: "Answer",
          fa: "پاسخ"
        },
        pronunciation: "ray-ponse",
        example: {
          fr: "Il donne une réponse.",
          en: "He gives an answer.",
          fa: "او یک پاسخ می‌دهد."
        },
        tip: "Think 're-position'."
      },
      {
        id: 907,
        word: "Mot ",
        meaning: {
          en: "Word",
          fa: "کلمه"
        },
        pronunciation: "mo",
        example: {
          fr: "Chaque mot a un sens.",
          en: "Every word has a meaning.",
          fa: "هر کلمه‌ای‌ یک معنا دارد."
        },
        tip: "Think 'motivation'."
      },
      {
        id: 908,
        word: "Phrase ",
        meaning: {
          en: "Sentence",
          fa: "جمله"
        },
        pronunciation: "frayz",
        example: {
          fr: "Cette phrase est courte.",
          en: "This sentence is short.",
          fa: "این جمله کوتاه است."
        },
        tip: "Think of a 'phrase' as a segment of speech."
      },
      {
        id: 909,
        word: "Langue ",
        meaning: {
          en: "Language",
          fa: "زبان"
        },
        pronunciation: "lahng",
        example: {
          fr: "La langue française est belle.",
          en: "The French language is beautiful.",
          fa: "زبان فرانسوی زیبا است."
        },
        tip: "Link 'langue' with linguistics."
      },
      {
        id: 910,
        word: "Histoire ",
        meaning: {
          en: "History",
          fa: "تاریخ"
        },
        pronunciation: "ees-twahr",
        example: {
          fr: "L'histoire est fascinante.",
          en: "History is fascinating.",
          fa: "تاریخ جالب است."
        },
        tip: "Relate 'histoire' to 'historic tales'."
      },
      {
        id: 911,
        word: "Monde ",
        meaning: {
          en: "World",
          fa: "جهان"
        },
        pronunciation: "mohnd",
        example: {
          fr: "Le monde est grand.",
          en: "The world is big.",
          fa: "جهان بزرگ است."
        },
        tip: "Connect 'monde' with 'mundane' matters of the world."
      },
      {
        id: 912,
        word: "Pays ",
        meaning: {
          en: "Country",
          fa: "کشور"
        },
        pronunciation: "pay-ee",
        example: {
          fr: "Mon pays est magnifique.",
          en: "My country is beautiful.",
          fa: "کشور من زیبا است."
        },
        tip: "Remember 'pays' like 'place of allegiance'."
      },
      {
        id: 913,
        word: "Ville ",
        meaning: {
          en: "City",
          fa: "شهر"
        },
        pronunciation: "veel",
        example: {
          fr: "La ville est magnifique.",
          en: "The city is beautiful.",
          fa: "شهر زیبا است."
        },
        tip: "Think of 'villa' as a fancy city home."
      },
      {
        id: 914,
        word: "Village ",
        meaning: {
          en: "Village",
          fa: "روستا"
        },
        pronunciation: "vee-lazh",
        example: {
          fr: "Le village est calme.",
          en: "The village is quiet.",
          fa: "روستا آرام است."
        },
        tip: "Villages are small and quaint."
      },
      {
        id: 915,
        word: "Région ",
        meaning: {
          en: "Region",
          fa: "منطقه"
        },
        pronunciation: "ray-zhi-on",
        example: {
          fr: "Cette région est connue pour ses vins.",
          en: "This region is known for its wines.",
          fa: "این منطقه به خاطر شراب‌هایش معروف است."
        },
        tip: "Regions have boundaries like 'lines.'"
      },
      {
        id: 916,
        word: "Campagne ",
        meaning: {
          en: "Countryside",
          fa: "حومه"
        },
        pronunciation: "kom-pah-nye",
        example: {
          fr: "Je préfère la vie à la campagne.",
          en: "I prefer life in the countryside.",
          fa: "من زندگی در حومه را ترجیح می‌دهم."
        },
        tip: "Similar to 'campaign', an open land."
      },
      {
        id: 917,
        word: "Centre ",
        meaning: {
          en: "Center",
          fa: "مرکز"
        },
        pronunciation: "son-truh",
        example: {
          fr: "Le centre-ville est animé.",
          en: "The city center is lively.",
          fa: "مرکز شهر پرجنب‌وجوش است."
        },
        tip: "Centre' has the 'core'."
      },
      {
        id: 918,
        word: "Banlieue ",
        meaning: {
          en: "Suburb",
          fa: "حومه"
        },
        pronunciation: "bahn-lyuh",
        example: {
          fr: "Il habite en banlieue.",
          en: "He lives in the suburb.",
          fa: "او در حومه زندگی می‌کند."
        },
        tip: "Think of 'beyond' the 'limits'."
      },
      {
        id: 919,
        word: "Quartier ",
        meaning: {
          en: "District",
          fa: "منطقه"
        },
        pronunciation: "kar-tyay",
        example: {
          fr: "C'est un quartier animé.",
          en: "It's a lively district.",
          fa: "این یک منطقه پر جنب و جوش است."
        },
        tip: "Think 'quarter' of a city."
      },
      {
        id: 920,
        word: "Adresse ",
        meaning: {
          en: "Address",
          fa: "نشانی"
        },
        pronunciation: "ah-dress",
        example: {
          fr: "J'ai changé mon adresse.",
          en: "I changed my address.",
          fa: "آدرس خود را تغییر دادم."
        },
        tip: "Think 'addressing' a letter."
      },
      {
        id: 921,
        word: "Numéro ",
        meaning: {
          en: "Number",
          fa: "شماره"
        },
        pronunciation: "nyoo-meh-roh",
        example: {
          fr: "Quel est ton numéro?",
          en: "What is your number?",
          fa: "شماره تو چیست؟"
        },
        tip: "Sounds like 'numerical'."
      },
      {
        id: 922,
        word: "Rue ",
        meaning: {
          en: "Street",
          fa: "خیابان"
        },
        pronunciation: "roo",
        example: {
          fr: "Ma maison est dans cette rue.",
          en: "My house is on this street.",
          fa: "خانه من در این خیابان است."
        },
        tip: "Imagine 'route' for road."
      },
      {
        id: 923,
        word: "Place ",
        meaning: {
          en: "Square",
          fa: "میدان"
        },
        pronunciation: "plahs",
        example: {
          fr: "Nous sommes à la place du marché.",
          en: "We are at the market square.",
          fa: "ما در میدان بازار هستیم."
        },
        tip: "Think of a central spot, like Times Square."
      },
      {
        id: 924,
        word: "Route ",
        meaning: {
          en: "Route",
          fa: "مسیر"
        },
        pronunciation: "root",
        example: {
          fr: "La route vers Paris est longue.",
          en: "The route to Paris is long.",
          fa: "مسیر به پاریس طولانی است."
        },
        tip: "Imagine taking a specific path to travel."
      },
      {
        id: 925,
        word: "Chemin ",
        meaning: {
          en: "Path",
          fa: "راه"
        },
        pronunciation: "shuh-mahn",
        example: {
          fr: "Le chemin est couvert de neige.",
          en: "The path is covered with snow.",
          fa: "راه با برف پوشیده شده است."
        },
        tip: "Visualize walking a forest path."
      },
      {
        id: 926,
        word: "Destination ",
        meaning: {
          en: "Destination",
          fa: "مقصد"
        },
        pronunciation: "des-tee-nay-shuh",
        example: {
          fr: "Notre destination est la plage.",
          en: "Our destination is the beach.",
          fa: "مقصد ما ساحل است."
        },
        tip: "Think of where you want to end up."
      },
      {
        id: 927,
        word: "Source ",
        meaning: {
          en: "Source",
          fa: "منبع"
        },
        pronunciation: "sohrs",
        example: {
          fr: "La source de la rivière est ici.",
          en: "The source of the river is here.",
          fa: "منبع رودخانه اینجاست."
        },
        tip: "Relate it to the origin or starting point."
      },
      {
        id: 928,
        word: "But ",
        meaning: {
          en: "Goal",
          fa: "هدف"
        },
        pronunciation: "boo",
        example: {
          fr: "Le but du jeu est de marquer.",
          en: "The goal of the game is to score.",
          fa: "هدف بازی گل زدن است."
        },
        tip: "Think of it as the aim."
      },
      {
        id: 929,
        word: "Base ",
        meaning: {
          en: "Base",
          fa: "پایه"
        },
        pronunciation: "bahs",
        example: {
          fr: "La base de la tour est solide.",
          en: "The base of the tower is solid.",
          fa: "پایه برج محکم است."
        },
        tip: "Think of baseball base."
      },
      {
        id: 930,
        word: "Fait ",
        meaning: {
          en: "Fact",
          fa: "حقیقت"
        },
        pronunciation: "feh",
        example: {
          fr: "C'est un fait évident.",
          en: "It's an obvious fact.",
          fa: "این یک حقیقت آشکار است."
        },
        tip: "Similar to 'fait accompli'."
      },
      {
        id: 931,
        word: "Situation ",
        meaning: {
          en: "Situation",
          fa: "وضعیت"
        },
        pronunciation: "see-too-ah-syon",
        example: {
          fr: "La situation est difficile.",
          en: "The situation is difficult.",
          fa: "وضعیت دشوار است."
        },
        tip: "Think of 'situational'."
      },
      {
        id: 932,
        word: "Problème ",
        meaning: {
          en: "Problem",
          fa: "مشکل"
        },
        pronunciation: "pro-blehm",
        example: {
          fr: "Nous avons un problème à résoudre.",
          en: "We have a problem to solve.",
          fa: "ما مشکلی برای حل کردن داریم."
        },
        tip: "Similar to 'problem'."
      },
      {
        id: 933,
        word: "Cause ",
        meaning: {
          en: "Reason",
          fa: "دلیل"
        },
        pronunciation: "koze",
        example: {
          fr: "La cause de l'accident est inconnue.",
          en: "The cause of the accident is unknown.",
          fa: "علت تصادف ناشناخته است."
        },
        tip: "Think of 'cause and effect'."
      },
      {
        id: 934,
        word: "Conséquence ",
        meaning: {
          en: "Result",
          fa: "نتیجه"
        },
        pronunciation: "kohn-say-kwahns",
        example: {
          fr: "Il faut assumer les conséquences.",
          en: "One must assume the consequences.",
          fa: "باید نتایج را پذیرفت."
        },
        tip: "Linked with 'consequence' in English."
      },
      {
        id: 935,
        word: "Possibilité ",
        meaning: {
          en: "Possibility",
          fa: "امکان"
        },
        pronunciation: "poh-see-blee-tay",
        example: {
          fr: "Il y a une possibilité de succès.",
          en: "There is a possibility of success.",
          fa: "امکان موفقیت وجود دارد."
        },
        tip: "Sounds like 'possibility' in English."
      },
      {
        id: 936,
        word: "Résultat ",
        meaning: {
          en: "Outcome",
          fa: "نتیجه"
        },
        pronunciation: "ray-zool-tah",
        example: {
          fr: "Le résultat est satisfaisant.",
          en: "The result is satisfactory.",
          fa: "نتیجه رضایت‌بخش است."
        },
        tip: "Think of 'resulting in'."
      },
      {
        id: 937,
        word: "Fin ",
        meaning: {
          en: "End",
          fa: "پایان"
        },
        pronunciation: "fan",
        example: {
          fr: "La fin du film approche.",
          en: "The end of the movie is approaching.",
          fa: "پایان فیلم نزدیک است."
        },
        tip: "Think of 'final'."
      },
      {
        id: 938,
        word: "Début ",
        meaning: {
          en: "Start",
          fa: "شروع"
        },
        pronunciation: "day-boo",
        example: {
          fr: "Le début du film était impressionnant.",
          en: "The start of the movie was impressive.",
          fa: "شروع فیلم خیره‌کننده بود."
        },
        tip: "Think of 'debut' as the beginning."
      },
      {
        id: 939,
        word: "Sens ",
        meaning: {
          en: "Sense",
          fa: "حس"
        },
        pronunciation: "sans",
        example: {
          fr: "Cela a un sens pour moi.",
          en: "That makes sense to me.",
          fa: "این برای من منطقی است."
        },
        tip: "Connect 'sens' with sensation."
      },
      {
        id: 940,
        word: "Direction ",
        meaning: {
          en: "Direction",
          fa: "جهت"
        },
        pronunciation: "dee-reck-shun",
        example: {
          fr: "Quelle est la direction de l’hôtel?",
          en: "What is the direction to the hotel?",
          fa: "جهت هتل کدام است؟"
        },
        tip: "Direction is guidance like a director."
      },
      {
        id: 941,
        word: "Erreur ",
        meaning: {
          en: "Error",
          fa: "خطا"
        },
        pronunciation: "eh-ruh",
        example: {
          fr: "Il y a une erreur dans le document.",
          en: "There is an error in the document.",
          fa: "در سند خطا وجود دارد."
        },
        tip: "Mistake like an error code."
      },
      {
        id: 942,
        word: "Vérité ",
        meaning: {
          en: "Truth",
          fa: "حقیقت"
        },
        pronunciation: "ve-ray-tay",
        example: {
          fr: "La vérité est importante.",
          en: "The truth is important.",
          fa: "حقیقت مهم است."
        },
        tip: "Vérité is truth, like verify."
      },
      {
        id: 943,
        word: "Mensonge ",
        meaning: {
          en: "Lie",
          fa: "دروغ"
        },
        pronunciation: "Mon-sohn-j",
        example: {
          fr: "C'est un mensonge.",
          en: "This is a lie.",
          fa: "این یک دروغ است."
        },
        tip: "Think 'men's song' can sometimes deceive."
      },
      {
        id: 944,
        word: "Raison ",
        meaning: {
          en: "Reason",
          fa: "دلیل"
        },
        pronunciation: "Reh-zohn",
        example: {
          fr: "Quelle est la raison?",
          en: "What is the reason?",
          fa: "دلیل چیست؟"
        },
        tip: "Raisons aren't always reasonable."
      },
      {
        id: 945,
        word: "Moyen ",
        meaning: {
          en: "Way",
          fa: "راه"
        },
        pronunciation: "Mwah-yen",
        example: {
          fr: "C'est le meilleur moyen.",
          en: "This is the best way.",
          fa: "این بهترین راه است."
        },
        tip: "Remember 'my yen' currency is a way of paying."
      },
      {
        id: 946,
        word: "Méthode ",
        meaning: {
          en: "Method",
          fa: "روش"
        },
        pronunciation: "Meh-tod",
        example: {
          fr: "Nous avons une nouvelle méthode.",
          en: "We have a new method.",
          fa: "ما روش جدیدی داریم."
        },
        tip: "Methods can be 'meticulously' followed."
      },
      {
        id: 947,
        word: "Manière ",
        meaning: {
          en: "Manner",
          fa: "شیوه"
        },
        pronunciation: "Mah-nyehr",
        example: {
          fr: "Il a une manière étrange.",
          en: "He has a strange manner.",
          fa: "او شیوه عجیبی دارد."
        },
        tip: "Mind your manners with 'manière'."
      },
      {
        id: 948,
        word: "Occurrence ",
        meaning: {
          en: "Happening",
          fa: "رخداد"
        },
        pronunciation: "o-kuh-ren[s]",
        example: {
          fr: "C'est une occurrence rare.",
          en: "It's a rare occurrence.",
          fa: "این یک رخداد نادر است."
        },
        tip: "Remember it as an event happening."
      },
      {
        id: 949,
        word: "Type ",
        meaning: {
          en: "Kind",
          fa: "نوع"
        },
        pronunciation: "tah-eep",
        example: {
          fr: "Quel type de film préfères-tu?",
          en: "What kind of movie do you prefer?",
          fa: "چه نوع فیلمی را ترجیح می‌دهی؟"
        },
        tip: "Think of a category or kind."
      },
      {
        id: 950,
        word: "Genre ",
        meaning: {
          en: "Category",
          fa: "ژانر"
        },
        pronunciation: "zhahn-ruh",
        example: {
          fr: "Le genre de ce livre est la fiction.",
          en: "The genre of this book is fiction.",
          fa: "ژانر این کتاب داستان است."
        },
        tip: "Think of genres in movies or books."
      },
      {
        id: 951,
        word: "Premier ",
        meaning: {
          en: "First",
          fa: "اولین"
        },
        pronunciation: "pruh-me-yay",
        example: {
          fr: "C'est son premier voyage à Paris.",
          en: "This is his first trip to Paris.",
          fa: "این اولین سفر او به پاریس است."
        },
        tip: "Link it to being the first in a series."
      },
      {
        id: 952,
        word: "Dernier ",
        meaning: {
          en: "Last",
          fa: "آخرین"
        },
        pronunciation: "dair-nee-air",
        example: {
          fr: "C'était le dernier jour des vacances.",
          en: "It was the last day of vacation.",
          fa: "این آخرین روز تعطیلات بود."
        },
        tip: "Relate it to the end of something."
      },
      {
        id: 953,
        word: "Différent ",
        meaning: {
          en: "Different",
          fa: "متفاوت"
        },
        pronunciation: "Dee-feh-ront",
        example: {
          fr: "Chaque personne est différente.",
          en: "Each person is different.",
          fa: "هر شخص متفاوت است."
        },
        tip: "Different sounds like 'different'."
      },
      {
        id: 954,
        word: "Mêmes ",
        meaning: {
          en: "Same",
          fa: "یکسان"
        },
        pronunciation: "Mem",
        example: {
          fr: "Nous lisons les mêmes livres.",
          en: "We read the same books.",
          fa: "ما کتاب‌های یکسانی می‌خوانیم."
        },
        tip: "Mêmes' is similar to 'sames'."
      },
      {
        id: 955,
        word: "Selon ",
        meaning: {
          en: "According",
          fa: "مطابق"
        },
        pronunciation: "Su-lohn",
        example: {
          fr: "Selon le professeur, c'est correct.",
          en: "According to the teacher, it is correct.",
          fa: "مطابق معلم، درست است."
        },
        tip: "Selon' sounds like 'salon', place for agreements."
      },
      {
        id: 956,
        word: "Exemple ",
        meaning: {
          en: "Example",
          fa: "مثال"
        },
        pronunciation: "Eg-zahmp",
        example: {
          fr: "Peux-tu donner un exemple?",
          en: "Can you give an example?",
          fa: "آیا می‌توانید یک مثال بدهید؟"
        },
        tip: "Exemple' almost matches with 'example'."
      },
      {
        id: 957,
        word: "Condition ",
        meaning: {
          en: "Condition",
          fa: "شرط"
        },
        pronunciation: "Kon-dee-syohn",
        example: {
          fr: "La condition est claire pour tous.",
          en: "The condition is clear for everyone.",
          fa: "شرط برای همه واضح است."
        },
        tip: "Condition' is exactly like 'condition'."
      },
      {
        id: 958,
        word: "Cas ",
        meaning: {
          en: "Case",
          fa: "مورد"
        },
        pronunciation: "ka",
        example: {
          fr: "En cas d'urgence, appelez le 911.",
          en: "In an emergency, call 911.",
          fa: "در صورت اضطرار، ۹۱۱ را بگیرید."
        },
        tip: "Think of 'case study'."
      },
      {
        id: 959,
        word: "Niveau ",
        meaning: {
          en: "Level",
          fa: "سطح"
        },
        pronunciation: "nee-voh",
        example: {
          fr: "Son niveau de français est avancé.",
          en: "His French level is advanced.",
          fa: "سطح زبان فرانسوی‌اش پیشرفته است."
        },
        tip: "Sounds like 'knee-voh'."
      },
      {
        id: 960,
        word: "Dehors ",
        meaning: {
          en: "Outside",
          fa: "بیرون"
        },
        pronunciation: "duhr",
        example: {
          fr: "Il fait froid dehors.",
          en: "It's cold outside.",
          fa: "بیرون سرد است."
        },
        tip: "Think 'day-whore'."
      },
      {
        id: 961,
        word: "Dedans ",
        meaning: {
          en: "Inside",
          fa: "داخل"
        },
        pronunciation: "duh-dahn",
        example: {
          fr: "Il est chaud dedans.",
          en: "It's warm inside.",
          fa: "داخل گرم است."
        },
        tip: "Sounds like 'duh-donn'."
      },
      {
        id: 962,
        word: "Dessus ",
        meaning: {
          en: "Above",
          fa: "بالا"
        },
        pronunciation: "deh-sue",
        example: {
          fr: "Le livre est dessus l'étagère.",
          en: "The book is above the shelf.",
          fa: "کتاب بالای قفسه است."
        },
        tip: "Sounds like 'da-sue'."
      },
      {
        id: 963,
        word: "Dessous ",
        meaning: {
          en: "Underneath",
          fa: "زیر"
        },
        pronunciation: "deh-soo",
        example: {
          fr: "Le livre est dessous la table.",
          en: "The book is underneath the table.",
          fa: "کتاب زیر میز است."
        },
        tip: "Think of de sous (from below)."
      },
      {
        id: 964,
        word: "Devant ",
        meaning: {
          en: "In front",
          fa: "مقابل"
        },
        pronunciation: "duh-vahn",
        example: {
          fr: "Elle se tient devant la maison.",
          en: "She stands in front of the house.",
          fa: "او مقابل خانه ایستاده است."
        },
        tip: "Devant sounds like advance, think in front."
      },
      {
        id: 965,
        word: "Derrière ",
        meaning: {
          en: "Behind",
          fa: "پشت"
        },
        pronunciation: "deh-ryair",
        example: {
          fr: "Il est derrière la porte.",
          en: "He is behind the door.",
          fa: "او پشت در است."
        },
        tip: "Derrière sounds like rear, think back or behind."
      },
      {
        id: 966,
        word: "Ensemble ",
        meaning: {
          en: "Together",
          fa: "با هم"
        },
        pronunciation: "ahn-sahmbl",
        example: {
          fr: "Nous allons ensemble au cinéma.",
          en: "We go together to the cinema.",
          fa: "ما با هم به سینما می‌رویم."
        },
        tip: "Think of ensemble cast, meaning together."
      },
      {
        id: 967,
        word: "Séparé ",
        meaning: {
          en: "Separated",
          fa: "جدا"
        },
        pronunciation: "seh-pah-ray",
        example: {
          fr: "Ils sont séparés maintenant.",
          en: "They are separated now.",
          fa: "آنها اکنون جدا هستند."
        },
        tip: "Think separate, as in apart."
      },
      {
        id: 968,
        word: "Groupe ",
        meaning: {
          en: "Group",
          fa: "گروه"
        },
        pronunciation: "groop",
        example: {
          fr: "Le groupe travaille ensemble.",
          en: "The group works together.",
          fa: "گروه با هم کار می‌کنند."
        },
        tip: "Think of group projects."
      },
      {
        id: 969,
        word: "Foule ",
        meaning: {
          en: "Crowd",
          fa: "جمعیت"
        },
        pronunciation: "fool",
        example: {
          fr: "La foule est immense.",
          en: "The crowd is huge.",
          fa: "جمعیت عظیم است."
        },
        tip: "Crowds are full."
      },
      {
        id: 970,
        word: "Sujets ",
        meaning: {
          en: "Subjects",
          fa: "موضوعات"
        },
        pronunciation: "sujay",
        example: {
          fr: "Les sujets sont intéressants.",
          en: "The subjects are interesting.",
          fa: "موضوعات جالب هستند."
        },
        tip: "Similar to 'subjects' in school."
      },
      {
        id: 971,
        word: "Thème ",
        meaning: {
          en: "Theme",
          fa: "موضوع اصلی"
        },
        pronunciation: "tem",
        example: {
          fr: "Le thème du livre est fascinant.",
          en: "The theme of the book is fascinating.",
          fa: "موضوع اصلی کتاب جذاب است."
        },
        tip: "Theme is the underlying idea."
      },
      {
        id: 972,
        word: "Opinion ",
        meaning: {
          en: "Opinion",
          fa: "نظر"
        },
        pronunciation: "opinyon",
        example: {
          fr: "Votre opinion compte.",
          en: "Your opinion matters.",
          fa: "نظر شما مهم است."
        },
        tip: "Everyone has an opinion."
      },
      {
        id: 973,
        word: "Avis ",
        meaning: {
          en: "Opinion",
          fa: "نظر"
        },
        pronunciation: "ah-vee",
        example: {
          fr: "J'aimerais connaître votre avis.",
          en: "I would like to know your opinion.",
          fa: "من دوست دارم نظر شما را بدانم."
        },
        tip: "Think of 'advice' to remember 'avis'."
      },
      {
        id: 974,
        word: "Mémoire ",
        meaning: {
          en: "Memory",
          fa: "حافظه"
        },
        pronunciation: "meh-mwar",
        example: {
          fr: "J'ai une bonne mémoire pour les noms.",
          en: "I have a good memory for names.",
          fa: "من حافظه خوبی برای نام‌ها دارم."
        },
        tip: "Relate 'mémoire' to 'memory' directly."
      },
      {
        id: 975,
        word: "Souvenir ",
        meaning: {
          en: "Memory",
          fa: "خاطره"
        },
        pronunciation: "soo-veh-neer",
        example: {
          fr: "Ce souvenir me rend heureux.",
          en: "This memory makes me happy.",
          fa: "این خاطره مرا خوشحال می‌کند."
        },
        tip: "Souvenir is not just a trinket; it's a memory."
      },
      {
        id: 976,
        word: "Défi ",
        meaning: {
          en: "Challenge",
          fa: "چالش"
        },
        pronunciation: "deh-fee",
        example: {
          fr: "Ce projet est un défi pour moi.",
          en: "This project is a challenge for me.",
          fa: "این پروژه برای من یک چالش است."
        },
        tip: "Défi sounds like 'defy', often linked to challenges."
      },
      {
        id: 977,
        word: "Opportunité ",
        meaning: {
          en: "Opportunity",
          fa: "فرصت"
        },
        pronunciation: "oh-por-too-nee-tay",
        example: {
          fr: "C'est une grande opportunité pour nous.",
          en: "This is a great opportunity for us.",
          fa: "این یک فرصت عالی برای ما است."
        },
        tip: "Opportunité is like 'opportunity', offer a chance."
      },
      {
        id: 978,
        word: "Étranger ",
        meaning: {
          en: "foreigner",
          fa: "بیگانه"
        },
        pronunciation: "ay-tran-jay",
        example: {
          fr: "Il est un étranger ici.",
          en: "He is a foreigner here.",
          fa: "او اینجا بیگانه است."
        },
        tip: "Stranger sounds like étranger."
      },
      {
        id: 979,
        word: "Étrangère ",
        meaning: {
          en: "foreign",
          fa: "بیگانه"
        },
        pronunciation: "ay-tran-jayr",
        example: {
          fr: "Elle est une étrangère.",
          en: "She is a foreigner.",
          fa: "او یک بیگانه است."
        },
        tip: "Stranger with a twist."
      },
      {
        id: 980,
        word: "Accueil ",
        meaning: {
          en: "welcome",
          fa: "خوش‌آمد"
        },
        pronunciation: "ah-kuhl",
        example: {
          fr: "L'accueil était chaleureux.",
          en: "The welcome was warm.",
          fa: "خوش آمد گویی گرم بود."
        },
        tip: "Think of 'a cool' welcome."
      },
      {
        id: 981,
        word: "Service ",
        meaning: {
          en: "service",
          fa: "خدمت"
        },
        pronunciation: "ser-vees",
        example: {
          fr: "Le service est excellent.",
          en: "The service is excellent.",
          fa: "خدمات عالی است."
        },
        tip: "Sounds like 'serve is'."
      },
      {
        id: 982,
        word: "Demande ",
        meaning: {
          en: "request",
          fa: "درخواست"
        },
        pronunciation: "duh-mahnd",
        example: {
          fr: "J'ai une demande à faire.",
          en: "I have a request to make.",
          fa: "درخواستی برای انجام دادن دارم."
        },
        tip: "Demand looks like demande."
      },
      {
        id: 983,
        word: "Offre ",
        meaning: {
          en: "Offer",
          fa: "پیشنهاد"
        },
        pronunciation: "oh-fruh",
        example: {
          fr: "L'offre est intéressante.",
          en: "The offer is interesting.",
          fa: "پیشنهاد جالب است."
        },
        tip: "Think of offering someone something."
      },
      {
        id: 984,
        word: "Distribution ",
        meaning: {
          en: "Distribution",
          fa: "توزیع"
        },
        pronunciation: "dis-tree-bu-shyon",
        example: {
          fr: "La distribution est rapide.",
          en: "The distribution is fast.",
          fa: "توزیع سریع است."
        },
        tip: "Relate it to the distribution of goods."
      },
      {
        id: 985,
        word: "Production ",
        meaning: {
          en: "Production",
          fa: "تولید"
        },
        pronunciation: "pro-duk-syon",
        example: {
          fr: "La production est élevée.",
          en: "The production is high.",
          fa: "تولید زیاد است."
        },
        tip: "Think of producing goods or content."
      },
      {
        id: 986,
        word: "Organisation ",
        meaning: {
          en: "Organization",
          fa: "سازمان"
        },
        pronunciation: "or-ga-nee-za-syon",
        example: {
          fr: "L'organisation est importante.",
          en: "The organization is important.",
          fa: "سازمان مهم است."
        },
        tip: "Think of how things are organized."
      },
      {
        id: 987,
        word: "Ordre ",
        meaning: {
          en: "Order",
          fa: "سفارش"
        },
        pronunciation: "or-druh",
        example: {
          fr: "L'ordre est prêt.",
          en: "The order is ready.",
          fa: "سفارش آماده است."
        },
        tip: "Recall the importance of orderliness."
      },
      {
        id: 988,
        word: "Désordre ",
        meaning: {
          en: "Disorder",
          fa: "بینظمی"
        },
        pronunciation: "day-zor-druh",
        example: {
          fr: "Il y a beaucoup de désordre dans la maison.",
          en: "There is a lot of disorder in the house.",
          fa: "در خانه بینظمی زیادی وجود دارد."
        },
        tip: "Think of 'disorder' in a room."
      },
      {
        id: 989,
        word: "Loi ",
        meaning: {
          en: "Law",
          fa: "قانون"
        },
        pronunciation: "lwah",
        example: {
          fr: "La loi protège les citoyens.",
          en: "The law protects the citizens.",
          fa: "قانون از شهروندان محافظت می‌کند."
        },
        tip: "Sounds like 'law' in English."
      },
      {
        id: 990,
        word: "Règle ",
        meaning: {
          en: "Rule",
          fa: "قانون"
        },
        pronunciation: "reh-gluh",
        example: {
          fr: "Il faut suivre la règle.",
          en: "One must follow the rule.",
          fa: "باید از قانون تبعیت کرد."
        },
        tip: "Like 'regulate' a rule."
      },
      {
        id: 991,
        word: "Gouvernement ",
        meaning: {
          en: "Government",
          fa: "دولت"
        },
        pronunciation: "goo-vair-ne-mon",
        example: {
          fr: "Le gouvernement décide des lois.",
          en: "The government decides the laws.",
          fa: "دولت قوانین را تعیین می‌کند."
        },
        tip: "Think 'govern' the country."
      },
      {
        id: 992,
        word: "Politique ",
        meaning: {
          en: "Politics",
          fa: "سیاست"
        },
        pronunciation: "po-lee-teek",
        example: {
          fr: "La politique peut être complexe.",
          en: "Politics can be complex.",
          fa: "سیاست می‌تواند پیچیده باشد."
        },
        tip: "Think of a political 'tick'."
      },
      {
        id: 993,
        word: "Économie ",
        meaning: {
          en: "Economy",
          fa: "اقتصاد"
        },
        pronunciation: "ay-koh-no-mee",
        example: {
          fr: "L'économie est en pleine croissance.",
          en: "The economy is growing rapidly.",
          fa: "اقتصاد به سرعت در حال رشد است."
        },
        tip: "Think 'economic system'."
      },
      {
        id: 994,
        word: "Société ",
        meaning: {
          en: "Society",
          fa: "جامعه"
        },
        pronunciation: "soh-syay-tay",
        example: {
          fr: "La société évolue constamment.",
          en: "Society is constantly evolving.",
          fa: "جامعه به طور مداوم در حال تغییر است."
        },
        tip: "Relate it to 'social'."
      },
      {
        id: 995,
        word: "Secteur ",
        meaning: {
          en: "Sector",
          fa: "بخش"
        },
        pronunciation: "sek-ter",
        example: {
          fr: "Le secteur industriel est crucial.",
          en: "The industrial sector is crucial.",
          fa: "بخش صنعتی حیاتی است."
        },
        tip: "Think of 'section' in an industry."
      },
      {
        id: 996,
        word: "Marché ",
        meaning: {
          en: "Market",
          fa: "بازار"
        },
        pronunciation: "mar-shay",
        example: {
          fr: "Le marché est très compétitif.",
          en: "The market is very competitive.",
          fa: "بازار بسیار رقابتی است."
        },
        tip: "Remember 'shopping market'."
      },
      {
        id: 997,
        word: "Public ",
        meaning: {
          en: "Public",
          fa: "عمومی"
        },
        pronunciation: "pue-bleek",
        example: {
          fr: "Le service public est important.",
          en: "Public service is important.",
          fa: "خدمات عمومی مهم است."
        },
        tip: "Think of 'public space'."
      },
      {
        id: 998,
        word: "Privé ",
        meaning: {
          en: "Private",
          fa: "خصوصی"
        },
        pronunciation: "pree-vay",
        example: {
          fr: "C'est une conversation privée.",
          en: "This is a private conversation.",
          fa: "این یک گفتگوی خصوصی است."
        },
        tip: "Think of 'private' areas."
      },
      {
        id: 999,
        word: "Intérêt ",
        meaning: {
          en: "Interest",
          fa: "علاقه"
        },
        pronunciation: "an-teh-reh",
        example: {
          fr: "J'ai un grand intérêt pour l'art.",
          en: "I have a great interest in art.",
          fa: "من علاقه زیادی به هنر دارم."
        },
        tip: "Remember 'interest' in banks."
      },
      {
        id: 1000,
        word: "Sécurité ",
        meaning: {
          en: "Security",
          fa: "امنیت"
        },
        pronunciation: "seh-kew-ree-tay",
        example: {
          fr: "La sécurité est importante.",
          en: "Security is important.",
          fa: "امنیت مهم است."
        },
        tip: "Security guard at the gate."
      }
    ]
  }
};

// Export the raw words directly
export const words = wordSets.french.words
