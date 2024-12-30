import React from 'react'

const BADGE_STYLES = {
  'Rookie Learner': {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    colors: 'from-green-400 to-green-500'
  },
  'Marathoner': {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    colors: 'from-purple-500 to-purple-600'
  },
  'Vocabulary Connoisseur': {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    colors: 'from-yellow-500 to-yellow-600'
  },
  'Weekly Warrior': {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    colors: 'from-red-500 to-red-600'
  }
}

function UserBadge({ achievement }) {
  const style = BADGE_STYLES[achievement.name]
  if (!style) return null

  return (
    <div className="group relative inline-block">
      <div className={`
        h-6 w-6 rounded-full bg-gradient-to-r ${style.colors} 
        flex items-center justify-center shadow-sm
        hover:scale-110 transform transition-all duration-200
      `}>
        <div className="text-white">
          {style.icon}
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    absolute -top-10 left-1/2 transform -translate-x-1/2
                    bg-gray-900 text-white text-xs rounded-lg py-1 px-2 whitespace-nowrap">
        {achievement.name}
      </div>
    </div>
  )
}

export default UserBadge 