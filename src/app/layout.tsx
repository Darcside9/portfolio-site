import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

// Font import using next/font for performance optimization
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', // Add font-display swap for better performance
})

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'UI/UX Designer, Web Developer, and Ethical Hacker',
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'UI/UX Designer, Web Developer, and Ethical Hacker',
    url: 'https://your-website.com',
    images: [
      {
        url: 'https://your-website.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name - Portfolio',
      },
    ],
    site_name: 'Your Name - Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourTwitterHandle',
    creator: '@yourTwitterHandle',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add any additional meta tags or links you might need */}
      </head>
      <body className={`${spaceGrotesk.className} bg-black text-white`}>
        {/* Global wrapper for your content */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
