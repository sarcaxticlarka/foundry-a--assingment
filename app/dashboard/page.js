 'use client'

import { useSession } from "next-auth/react"
import Navbar from "@/components/navbar"
import ProtectedRoute from "@/components/protectedRoute"

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Hello, {session?.user?.name}!
            </h1>
            <p className="text-gray-600 mb-4">
              Welcome to your dashboard. Here you can manage your pizza orders and view your account information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">User Profile</h3>
                <p className="text-blue-700">Name: {session?.user?.name}</p>
                <p className="text-blue-700">Email: {session?.user?.email}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Quick Stats</h3>
                <p className="text-green-700">Total Orders: 5</p>
                <p className="text-green-700">Active Orders: 2</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Recent Activity</h3>
                <p className="text-yellow-700">Last order: Today</p>
                <p className="text-yellow-700">Status: Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}