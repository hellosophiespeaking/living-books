import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Living Books Archive',
  description: 'A global community where books live full lives — read, experienced and released.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}