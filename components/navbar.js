'use client'

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  if (!session) return null

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/dashboard' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/dashboard/pizza-orders"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/dashboard/pizza-orders' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Pizza Orders
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hello, {session.user.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}