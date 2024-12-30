import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { ACHIEVEMENTS } from '../data/achievements'

export async function checkAndUpdateAchievements(user, userRef) {
  if (!user) return

  const userAchievements = user.achievements || {}
  const updatedAchievements = { ...userAchievements }
  let hasNewAchievements = false

  // Check each achievement
  for (const achievement of ACHIEVEMENTS) {
    // Skip if already earned
    if (userAchievements[achievement.id] === true) continue

    // Check if requirement is met
    if (achievement.checkFn(user)) {
      updatedAchievements[achievement.id] = true
      hasNewAchievements = true
    }
  }

  // Only update if there are new achievements
  if (hasNewAchievements) {
    try {
      await setDoc(
        userRef,
        { achievements: updatedAchievements },
        { merge: true }
      )
      return updatedAchievements
    } catch (err) {
      console.error('Error updating achievements:', err)
    }
  }

  return null
} 