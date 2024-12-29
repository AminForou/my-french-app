// src/components/LanguageSelector.jsx
import React from 'react'
import styles from './LanguageSelector.module.css'

function LanguageSelector({ onChange, value }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Display translations in:</div>
      <div className={styles.options}>
        <button 
          className={`${styles.option} ${value === 'en' ? styles.active : ''}`}
          onClick={() => onChange('en')}
        >
          English
        </button>
        <button 
          className={`${styles.option} ${value === 'fa' ? styles.active : ''}`}
          onClick={() => onChange('fa')}
        >
          Farsi
        </button>
        <button 
          className={`${styles.option} ${value === 'both' ? styles.active : ''}`}
          onClick={() => onChange('both')}
        >
          Both
        </button>
      </div>
    </div>
  )
}

export default LanguageSelector
