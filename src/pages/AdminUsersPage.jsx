// src/pages/AdminUsersPage.jsx
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, onSnapshot, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'

function AdminUsersPage({ currentUser }) {
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState([])
  const [userToDelete, setUserToDelete] = useState(null)
  const [deleteError, setDeleteError] = useState(null)

  useEffect(() => {
    if (!currentUser) {
      setLoading(false)
      return
    }

    // 1) Check admin status in user doc
    const userDocRef = doc(db, 'users', currentUser.uid)
    const unsubAdminCheck = onSnapshot(userDocRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        setIsAdmin(!!data.isAdmin)
      }
    })

    // 2) Load the list of all user docs once
    async function fetchUsers() {
      try {
        const usersSnap = await getDocs(collection(db, 'users'))
        const arr = []
        usersSnap.forEach((docSnap) => {
          arr.push({
            uid: docSnap.id,
            ...docSnap.data()
          })
        })
        setUsers(arr)
      } catch (err) {
        console.error('Error fetching user list:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()

    return () => unsubAdminCheck()
  }, [currentUser])

  const handleDeleteClick = (user) => {
    setUserToDelete(user)
    setDeleteError(null)
  }

  const handleCancelDelete = () => {
    setUserToDelete(null)
    setDeleteError(null)
  }

  const handleConfirmDelete = async () => {
    if (!userToDelete) return

    try {
      await deleteDoc(doc(db, 'users', userToDelete.uid))
      setUsers(users.filter(u => u.uid !== userToDelete.uid))
      setUserToDelete(null)
    } catch (err) {
      console.error('Error deleting user:', err)
      setDeleteError('Failed to delete user. Please try again.')
    }
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please <strong>login</strong> as an admin to view user info.</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading user data...</p>
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

  // Admin view
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pt-20">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="border-b border-gray-200 mb-8 pb-4">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            All Users
            <span className="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-md">
              Admin
            </span>
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage all registered users
          </p>
        </div>

        {/* Summary / Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-100 rounded-xl shadow p-4">
            <div className="text-sm font-medium text-gray-500">Total Users</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">
              {users.length}
            </div>
          </div>
          {/* Add more summary cards if needed */}
        </div>

        {/* Users Table/List */}
        <div className="bg-white border border-gray-100 rounded-xl shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                    UID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                    Email (If Stored)
                  </th>
                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-600 uppercase tracking-wider">
                    isAdmin
                  </th>
                  <th scope="col" className="px-6 py-3 text-right font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((u) => (
                  <tr key={u.uid} className="hover:bg-gray-50">
                    <td className="px-6 py-3 whitespace-nowrap text-gray-900 font-mono">
                      {u.uid}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-700">
                      {u.firstName || '(No name)'}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-gray-600">
                      {/* If you stored user’s email in Firestore, show it; 
                          otherwise, you might rely on auth for email. */}
                      {u.email || '(unknown)'}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-center">
                      {u.isAdmin ? 'Yes' : 'No'}
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleDeleteClick(u)}
                        disabled={u.uid === currentUser.uid}
                        className={`px-3 py-1 rounded-lg text-sm font-medium
                          ${u.uid === currentUser.uid
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-red-50 text-red-600 hover:bg-red-100'
                          }`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {users.length === 0 && (
            <p className="p-4 text-sm text-gray-500">
              No users found.
            </p>
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {userToDelete && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Delete User
              </h3>
              <p className="text-gray-600 mb-2">
                Are you sure you want to delete this user?
              </p>
              <p className="text-sm text-gray-500 mb-6">
                <strong>Name:</strong> {userToDelete.firstName || '(No name)'}<br />
                <strong>Email:</strong> {userToDelete.email || '(unknown)'}
              </p>
              
              {deleteError && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                  {deleteError}
                </div>
              )}

              <div className="flex justify-end gap-3">
                <button
                  onClick={handleCancelDelete}
                  className="px-4 py-2 text-sm font-medium rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="px-4 py-2 text-sm font-medium rounded-xl text-white bg-red-600 hover:bg-red-700"
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminUsersPage
