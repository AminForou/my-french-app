import React from 'react'
import UserBadge from './UserBadge'
import { ACHIEVEMENTS } from '../data/achievements'

function UserBadges({ user }) {
  if (!user || !user.achievements) return null

  const earnedBadges = ACHIEVEMENTS.filter(achievement => 
    achievement.isBadge && user.achievements[achievement.id] === true
  )

  if (!earnedBadges.length) return null

  return (
    <div className="flex -space-x-1">
      {earnedBadges.map(badge => (
        <UserBadge key={badge.id} achievement={badge} />
      ))}
    </div>
  )
}

export default UserBadges 