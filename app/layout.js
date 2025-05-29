import './globals.css'
import AuthProvider from '../components/authProvider'

export const metadata = {
  title: 'Dashboard App',
  description: 'Next.js Dashboard with Google OAuth',
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