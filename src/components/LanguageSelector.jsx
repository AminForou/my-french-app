import React from 'react'

function LanguageSelector({ selectedLanguages, onChange }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="text-sm font-medium text-gray-600">Show meanings in:</span>
      <div className="inline-flex items-center p-1 bg-gray-100 rounded-xl">
        <button
          onClick={() => onChange(['en'])}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            selectedLanguages.length === 1 && selectedLanguages[0] === 'en'
              ? 'bg-white text-blue-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          English
        </button>
        <button
          onClick={() => onChange(['fa'])}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            selectedLanguages.length === 1 && selectedLanguages[0] === 'fa'
              ? 'bg-white text-blue-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          فارسی
        </button>
        <button
          onClick={() => onChange(['en', 'fa'])}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            selectedLanguages.length === 2
              ? 'bg-white text-blue-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Both
        </button>
      </div>
    </div>
  )
}

export default LanguageSelector 