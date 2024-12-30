import React, { useState } from 'react'
import { ACHIEVEMENTS } from '../data/achievements'
import confetti from 'canvas-confetti'

function AchievementsGallery({ user }) {
  const [selectedAchievement, setSelectedAchievement] = useState(null)

  if (!user) return null

  const userAchievements = user.achievements || {}
  
  const isAchievementUnlocked = (achievement) => {
    const docUnlocked = (userAchievements[achievement.id] === true)
    const meetsRequirement = achievement.checkFn(user)
    return docUnlocked || meetsRequirement
  }

  const unlockedCount = ACHIEVEMENTS.filter(ach => isAchievementUnlocked(ach)).length

  const handleAchievementClick = (ach) => {
    setSelectedAchievement(ach)
    if (isAchievementUnlocked(ach)) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
  }

  // Group achievements by category
  const categories = {
    time: ACHIEVEMENTS.filter(ach => ach.id.startsWith('time_')),
    words: ACHIEVEMENTS.filter(ach => ach.id.startsWith('words_')),
    streak: ACHIEVEMENTS.filter(ach => ach.id.startsWith('streak_')),
    other: ACHIEVEMENTS.filter(ach => !['time_', 'words_', 'streak_'].some(prefix => ach.id.startsWith(prefix)))
  }

  const achievementIcons = {
    time_10min: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    time_1hr: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    words_first10: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    streak_3day: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    )
  }

  const getDefaultIcon = (category) => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

  // Enhanced category icons
  const categoryIcons = {
    time: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    words: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    streak: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    )
  }

  return (
    <div className="mt-12 relative">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          Achievements
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
              {unlockedCount} / {ACHIEVEMENTS.length}
            </span>
            <div className="h-2 w-32 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${(unlockedCount / ACHIEVEMENTS.length) * 100}%` }}
              />
            </div>
          </div>
        </h3>
      </div>

      {Object.entries(categories).map(([category, achievements]) => (
        <div key={category} className="mb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              {categoryIcons[category]}
            </div>
            <h4 className="text-lg font-semibold text-gray-700 capitalize">
              {category} Achievements
            </h4>
            <span className="text-sm text-gray-500">
              ({achievements.filter(ach => isAchievementUnlocked(ach)).length}/{achievements.length})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach) => {
              const unlocked = isAchievementUnlocked(ach)
              
              return (
                <div
                  key={ach.id}
                  onClick={() => handleAchievementClick(ach)}
                  className={`
                    relative p-4 rounded-xl cursor-pointer
                    transition-all duration-200 transform hover:scale-102
                    ${unlocked 
                      ? 'bg-white border-2 border-blue-100 shadow-sm hover:shadow-md' 
                      : 'bg-gray-50 border border-gray-200 opacity-75 hover:opacity-100'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center 
                        transition-colors duration-200 flex-shrink-0
                        ${unlocked 
                          ? 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600' 
                          : 'bg-gray-100 text-gray-400'
                        }
                      `}
                    >
                      {achievementIcons[ach.id] || getDefaultIcon(category)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-sm font-bold mb-1 pr-6">
                        {ach.name}
                      </div>
                      <div className={`
                        text-xs leading-relaxed
                        ${unlocked ? 'text-gray-600' : 'text-gray-400'}
                      `}>
                        {unlocked ? ach.description : 'Keep practicing to unlock!'}
                      </div>
                    </div>
                  </div>

                  {ach.isBadge && (
                    <div className={`
                      absolute top-2 right-2 px-2 py-0.5 text-xs font-medium 
                      rounded-full transition-colors duration-200
                      ${unlocked 
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-400'
                      }
                    `}>
                      Badge
                    </div>
                  )}

                  {unlocked && (
                    <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center transform translate-x-1/4 -translate-y-1/4 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Enhanced Modal */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedAchievement(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`
                w-16 h-16 rounded-xl flex items-center justify-center
                ${isAchievementUnlocked(selectedAchievement) 
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600' 
                  : 'bg-gray-100 text-gray-400'
                }
              `}>
                {achievementIcons[selectedAchievement.id] || getDefaultIcon()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {selectedAchievement.name}
                </h3>
                <p className="text-gray-600">
                  {selectedAchievement.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedAchievement(null)}
              className="w-full px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AchievementsGallery
