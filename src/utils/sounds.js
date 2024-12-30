const successSound = new Audio('/sounds/success.mp3')
const flagSound = new Audio('/sounds/flag.mp3')

export const playSuccess = () => {
  successSound.currentTime = 0
  successSound.play().catch(err => console.log('Audio play failed:', err))
}

export const playFlag = () => {
  flagSound.currentTime = 0
  flagSound.play().catch(err => console.log('Audio play failed:', err))
} 