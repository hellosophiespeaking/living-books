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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}