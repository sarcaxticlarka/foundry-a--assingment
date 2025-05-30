import './globals.css'
import AuthProvider from '../components/authProvider'
import { icons } from 'lucide-react'

export const metadata = {
  title: 'Pizza Dashboard App',
  description: 'Next.js Dashboard with Google OAuth',
  icons: {
    icon: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}