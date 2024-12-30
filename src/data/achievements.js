// src/data/achievements.js

/**
 * Example Achievements Config
 * 
 * Each achievement object has:
 *   - id:          Unique string identifier
 *   - name:        Display title
 *   - description: Short explanation or tooltip text
 *   - isBadge:     Boolean, if it grants a special badge to the user
 *   - checkFn:     Function that checks if user meets the requirement
 *
 * Example user doc fields:
 *   user.totalTimeSpent   -> total seconds spent
 *   user.wordsMastered    -> how many words they've fully mastered
 *   user.streak           -> current daily streak
 *   user.leitnerBoxes     -> an object of wordID -> boxNumber
 *   user.achievements     -> object with achievementID -> boolean
 */

export const ACHIEVEMENTS = [
    {
      id: 'time_10min',
      name: 'Rookie Learner',
      description: 'Spend at least 10 minutes total learning.',
      isBadge: true,
      checkFn: (user) => user.totalTimeSpent >= 10 * 60, // 600 seconds
    },
    {
      id: 'time_1hr',
      name: 'Committed',
      description: 'Spend at least 1 hour total learning. Congrats on leveling up!',
      isBadge: false, // This might display a badge next to the user's name
      checkFn: (user) => user.totalTimeSpent >= 60 * 60, // 3600 seconds
    },
    {
      id: 'time_5hr',
      name: 'Marathoner',
      description: 'Spend at least 5 hours total learning—true dedication!',
      isBadge: true,
      checkFn: (user) => user.totalTimeSpent >= 5 * 3600,
    },
    {
      id: 'words_first10',
      name: 'First 10 Words',
      description: 'Fully master your first 10 words.',
      isBadge: false,
      checkFn: (user) => user.wordsMastered >= 10,
    },
    {
      id: 'words_100',
      name: 'Vocabulary Explorer',
      description: 'Master 100 words. Keep it up!',
      isBadge: false,
      checkFn: (user) => user.wordsMastered >= 100,
    },
    {
      id: 'words_500',
      name: 'Vocabulary Connoisseur',
      description: 'Master 500 words. Fantastic progress!',
      isBadge: true,
      checkFn: (user) => user.wordsMastered >= 500,
    },
    {
      id: 'streak_3day',
      name: '3-Day Streak',
      description: 'Study on 3 consecutive days.',
      isBadge: false,
      checkFn: (user) => user.streak >= 3,
    },
    {
      id: 'streak_7day',
      name: 'Weekly Warrior',
      description: 'Study on 7 consecutive days. You’re unstoppable!',
      isBadge: true,
      checkFn: (user) => user.streak >= 7,
    },
    {
      id: 'reached_box5',
      name: 'Box #5 Champion',
      description: 'Have some words in Box #5—almost all mastered!',
      isBadge: false,
      checkFn: (user) => {
        // If user.leitnerBoxes is an object of wordId -> boxNumber,
        // check if at least one word is in box #5
        if (!user.leitnerBoxes) return false
        return Object.values(user.leitnerBoxes).some((boxNum) => boxNum === 5)
      },
    },
    {
      id: 'box1_clear',
      name: 'Box #1 Clear',
      description: 'Clear all words from Box #1 (nothing left to practice today).',
      isBadge: false,
      checkFn: (user) => {
        // If user.leitnerBoxes has no word with boxNumber 1
        if (!user.leitnerBoxes) return false
        return !Object.values(user.leitnerBoxes).includes(1)
      },
    },
    {
      id: 'night_owl',
      name: 'Night Owl',
      description: 'Study after midnight. Burning that midnight oil?',
      isBadge: false,
      checkFn: (user) => {
        // Potential logic if you store user’s lastStudyTime or something
        // For now, pseudo-check: user has "lastStudyHour" field, etc.
        if (!user.lastStudyHour) return false
        return user.lastStudyHour >= 0 && user.lastStudyHour < 5
      },
    },
    {
      id: 'come_back',
      name: 'Comeback Kid',
      description: 'Return after at least 7 days of inactivity.',
      isBadge: false,
      checkFn: (user) => {
        // Example logic if you store user.lastActive at times
        // Suppose user.inactiveDays might store the # of days since last login
        if (!('inactiveDays' in user)) return false
        return user.inactiveDays >= 7
      },
    }
  ]
  