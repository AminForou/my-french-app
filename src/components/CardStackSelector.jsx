import React from 'react'

function CardStackSelector({ value, onChange, max }) {
  // Preset values, but ensure we don't exceed max
  const presets = [10, 15, 20, 30].filter(n => n <= max)

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <span className="text-sm font-medium text-gray-600">Cards per session</span>
      <div className="flex justify-center gap-4">
        {presets.map((preset) => (
          <button
            key={preset}
            onClick={() => onChange({ target: { value: preset } })}
            className={`relative group ${
              value === preset 
                ? 'scale-105 transform transition-transform' 
                : 'hover:scale-105 transform transition-transform'
            }`}
          >
            {/* Stack of cards visual effect */}
            <div className="relative w-16 h-20">
              {/* Background cards */}
              <div className="absolute bottom-0 right-0 w-14 h-16 bg-gray-100 rounded-lg transform rotate-6" />
              <div className="absolute bottom-0 right-1 w-14 h-16 bg-gray-50 rounded-lg transform rotate-3" />
              {/* Main card */}
              <div 
                className={`absolute bottom-0 right-2 w-14 h-16 rounded-lg shadow-sm 
                  flex items-center justify-center font-bold text-lg
                  ${value === preset 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                  } transition-colors duration-200`}
              >
                {preset}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CardStackSelector 