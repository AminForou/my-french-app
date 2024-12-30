// src/pages/FlaggedCardsPage.jsx
import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy, doc, updateDoc, getDocs, writeBatch } from 'firebase/firestore'
import { db } from '../firebase'
import LoadingState from '../components/LoadingState'  // optional

function FlaggedCardsPage({ currentUser }) {
  const [loading, setLoading] = useState(true)
  const [flags, setFlags] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (!currentUser) {
      setLoading(false)
      return
    }

    // 1) Check if user doc has isAdmin == true
    //    This is optional; if you prefer custom claims or other approach,
    //    do that. We'll just assume we have "isAdmin" in user doc for now.
    const userDocRef = doc(db, 'users', currentUser.uid)
    onSnapshot(userDocRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        setIsAdmin(!!data.isAdmin)
      }
    })
  }, [currentUser])

  useEffect(() => {
    if (!currentUser) return

    const flagsRef = collection(db, 'flags')
    const baseQuery = query(flagsRef, orderBy('flaggedAt', 'desc'))
    
    const unsubscribe = onSnapshot(baseQuery, (snap) => {
      const items = []
      const groupedFlags = {}

      // Group flags by cardId
      snap.forEach((docSnap) => {
        const flag = { id: docSnap.id, ...docSnap.data() }
        const cardId = flag.cardId

        if (!groupedFlags[cardId]) {
          groupedFlags[cardId] = {
            cardId,
            flags: [],
            flagCount: 0,
            latestFlag: null,
            status: flag.status
          }
        }

        groupedFlags[cardId].flags.push(flag)
        groupedFlags[cardId].flagCount++
        
        // Keep track of the latest flag
        if (!groupedFlags[cardId].latestFlag || 
            flag.flaggedAt?.toDate() > groupedFlags[cardId].latestFlag.flaggedAt?.toDate()) {
          groupedFlags[cardId].latestFlag = flag
        }

        // If any flag is pending, mark the group as pending
        if (!flag.status || flag.status === 'pending') {
          groupedFlags[cardId].status = 'pending'
        }
      })

      setFlags(Object.values(groupedFlags))
      setLoading(false)
    })
    
    return () => unsubscribe()
  }, [currentUser])

  const handleResolve = async (cardId) => {
    try {
      // Get all flags for this card
      const flagsRef = collection(db, 'flags')
      const q = query(flagsRef)
      const snapshot = await getDocs(q)
      
      // Update all flags for this card
      const batch = writeBatch(db)
      snapshot.docs.forEach(doc => {
        if (doc.data().cardId === cardId) {
          batch.update(doc.ref, {
            status: 'resolved',
            resolvedAt: new Date(),
            resolvedBy: currentUser.uid
          })
        }
      })
      await batch.commit()
    } catch (e) {
      console.error('Error resolving flags:', e)
    }
  }

  const filteredFlags = flags.filter(group => {
    if (filter === 'pending') return group.status === 'pending'
    if (filter === 'resolved') return group.status === 'resolved'
    return true
  })

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please <strong>login</strong> as an admin to view flagged cards.</p>
      </div>
    )
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Sorry, you do not have admin privileges.</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 flex flex-col items-center justify-center">
        <LoadingState type="leitner" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pt-20">
      {/* Header Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                Flagged Cards
                <span className="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-md">
                  Admin
                </span>
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Review and manage reported card issues
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-white/50 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-gray-200">
              {['all', 'pending', 'resolved'].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all
                    ${filter === filterType 
                      ? 'bg-white text-blue-700 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {filterType}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-sm font-medium text-gray-500">Total Flags</div>
              <div className="mt-1 text-2xl font-semibold text-gray-900">
                {flags.reduce((acc, group) => acc + group.flagCount, 0)}
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-sm font-medium text-gray-500">Pending</div>
              <div className="mt-1 text-2xl font-semibold text-yellow-600">
                {flags.filter(group => group.status === 'pending').length}
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <div className="text-sm font-medium text-gray-500">Resolved</div>
              <div className="mt-1 text-2xl font-semibold text-green-600">
                {flags.filter(group => group.status === 'resolved').length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {filteredFlags.length === 0 ? (
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">All Clear!</h3>
              <p className="text-gray-500">No flags found matching your filter.</p>
            </div>
          ) : (
            filteredFlags.map((group) => (
              <div
                key={group.cardId}
                className="bg-white border border-gray-100 rounded-xl shadow p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-gray-500">
                        Card ID: <span className="font-mono">{group.cardId}</span>
                      </p>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${group.status === 'resolved' 
                          ? 'bg-green-50 text-green-700' 
                          : 'bg-yellow-50 text-yellow-700'}`}
                      >
                        {group.status || 'Pending'}
                      </span>
                      <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {group.flagCount} {group.flagCount === 1 ? 'flag' : 'flags'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Latest report by {group.latestFlag.flaggedByName} • {
                        group.latestFlag.flaggedAt?.toDate().toLocaleString()
                      }
                    </p>
                  </div>
                  {group.status === 'pending' && (
                    <button
                      onClick={() => handleResolve(group.cardId)}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg text-green-700 
                               bg-green-50 hover:bg-green-100 transition-colors"
                    >
                      Mark Resolved
                    </button>
                  )}
                </div>

                <div className="mt-2 space-y-2">
                  {group.flags.map((flag, index) => (
                    <p key={flag.id} className="text-gray-700 text-sm">
                      <span className="font-medium">Report {index + 1}: </span>
                      {flag.reason || 'No reason provided'}
                    </p>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default FlaggedCardsPage
