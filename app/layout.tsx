import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js TypeScript Tailwind',
  description: 'A Next.js project with TypeScript and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="scroll-smooth bg-black text-white">
        {children}
      </body>
    </html>
  )
}
