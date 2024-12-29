import React from 'react'

function LoadingState({ type = 'default' }) {
  if (type === 'cards') {
    return (
      <div className="max-w-4xl mx-auto pb-32">
        {/* Header Skeleton */}
        <div className="text-center mb-8 animate-pulse">
          <div className="inline-flex items-center justify-center gap-2 bg-gray-200 rounded-full w-20 h-6 mb-4" />
          <div className="h-8 bg-gray-200 rounded-lg w-48 mx-auto mb-2" />
          <div className="h-4 bg-gray-200 rounded w-72 mx-auto" />
        </div>

        {/* Progress Bar Skeleton */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="flex justify-between items-center mb-2">
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-300 w-1/3 animate-pulse" />
          </div>
        </div>

        {/* Card Skeleton */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-[400px] animate-pulse">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'boxes') {
    return (
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-12 animate-pulse">
          <div className="h-12 bg-gray-200 rounded-lg w-64 mx-auto mb-4" />
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto" />
        </div>

        {/* Stats Grid Skeleton */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center p-4 animate-pulse">
                <div className="h-10 bg-gray-200 rounded-lg w-16 mx-auto mb-2" />
                <div className="h-4 bg-gray-200 rounded w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Boxes Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative animate-pulse">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-8 bg-gray-200 rounded w-16" />
                  <div className="h-8 bg-gray-200 rounded w-8" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full" />
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-20" />
                    <div className="h-4 bg-gray-200 rounded w-16" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section Skeleton */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'leitner') {
    return (
      <>
        {/* Hero Section Skeleton */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center space-y-4 animate-pulse">
            <div className="h-12 bg-gray-200 rounded-lg w-3/4 max-w-lg" />
            <div className="h-4 bg-gray-200 rounded w-2/3 max-w-md" />
          </div>
        </div>

        {/* Reset Button Skeleton */}
        <div className="flex justify-end mb-8 animate-pulse">
          <div className="h-10 bg-gray-200 rounded-xl w-32" />
        </div>

        {/* Stats Cards Skeleton */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center p-4 animate-pulse">
                <div className="h-12 bg-gray-200 rounded-lg w-16 mx-auto mb-2" />
                <div className="h-4 bg-gray-200 rounded w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Leitner Boxes Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative group animate-pulse">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 opacity-75" />
              <div className="relative bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-8 bg-gray-200 rounded w-20" />
                  <div className="h-10 bg-gray-200 rounded w-10" />
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full" />
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-4 bg-gray-200 rounded w-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Tips Skeleton */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div className="h-4 bg-gray-200 rounded w-32" />
                </div>
                <div className="h-4 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  // Default loading state
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
        <p className="mt-4 text-gray-600">Loading your progress...</p>
      </div>
    </div>
  )
}

export default LoadingState 