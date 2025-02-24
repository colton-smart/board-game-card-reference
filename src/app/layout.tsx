import NavBar from '../components/NavBar'
import type { Metadata } from 'next'
import './globals.css' // Make sure to import your Tailwind CSS

export const metadata: Metadata = {
  title: 'Board Game Card Reference',
  description: 'Your board game card reference app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
