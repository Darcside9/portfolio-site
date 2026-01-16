import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Font import using next/font for performance optimization
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', // Add font-display swap for better performance
})

export const metadata: Metadata = {
  title: "D∆RC - Portfolio",
  description: 'UI/UX Designer, Web Developer, and Ethical Hacker',
  openGraph: {
    title: "D∆RC - Portfolio",
    description: 'UI/UX Designer, Web Developer, and Ethical Hacker',
    url: 'https://your-website.com',
    images: [
      {
        url: 'https://your-website.com/og-image.jpg',
        // width: 'auto',
        // height: 630,
        alt: "D∆RC - Portfolio",
      },
    ],
    siteName: "D∆RC - Portfolio",
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
          <Analytics/>
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
