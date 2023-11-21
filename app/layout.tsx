import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My APIs',
  description: 'This is an app with all the free APIs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <nav className="bg-gradient-to-r from-indigo-800 to-teal-700 p-4">
            <Navbar />
          </nav>

          {/* Page content */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex items-center justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
