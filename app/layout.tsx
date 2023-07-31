import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import siteMetadata from '@/siteMetadata'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="antialiased min-h-screen bg-white">
        <Navbar />
          {children}
        <Footer />
      </body>
      
      
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default:  siteMetadata.title,
    template: `%s - ${siteMetadata.title}`,
  },
  icons: {
    shortcut: siteMetadata.siteLogo,
  }
};
