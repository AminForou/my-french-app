import React from 'react'

function Toast({ message, type = 'success', onClose }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className={`rounded-xl shadow-lg border px-4 py-3 flex items-center gap-3
        ${type === 'success' 
          ? 'bg-white border-green-100 text-green-700' 
          : 'bg-white border-red-100 text-red-700'}`}
      >
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
          ${type === 'success' ? 'bg-green-50' : 'bg-red-50'}`}
        >
          {type === 'success' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          )}
        </div>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  )
}

export default Toast 