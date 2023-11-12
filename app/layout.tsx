import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'

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
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <nav className="bg-gradient-to-r from-indigo-800 to-teal-700 p-4">
            <ul>
              <li className="flex space-x-4 text-white">Navbar</li>
            </ul>
          </nav>

          {/* Page content */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen flex items-center justify-center">
            {children}
          </div>
        </main>
      </div>
    </html>
  )
}
