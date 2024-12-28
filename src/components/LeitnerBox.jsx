// src/components/LeitnerBox.js
import React from 'react'
import Card from './Card'

function LeitnerBox({ words, leitnerBoxes, moveToNextBox, moveToBoxOne }) {
  // Optionally, you could filter words by box number
  // e.g., only show words in box 1 (or the due box)
  // For now, let's just show them all in one list.

  return (
    <div style={styles.container}>
      {words.map(word => (
        <Card
          key={word.id}
          wordData={word}
          boxNumber={leitnerBoxes[word.id]}
          moveToNextBox={moveToNextBox}
          moveToBoxOne={moveToBoxOne}
        />
      ))}
    </div>
  )
}

const styles = {
  container: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    marginTop: '2rem'
  }
}

export default LeitnerBox
