import './globals.css'
import { cn } from '@/shared/lib'
import { SearchBar } from '@/widgets/search-bar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from './footer'
import { Header } from './header'
import { ThemeProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export const metadata: Metadata = {
  title: 'Polygon explorer',
  description: 'Explore matic transactions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-full max-h-screen flex">
            <div className="grid grid-rows-[auto_1fr_auto] gap-4 w-full">
              <Header />
              <main className="flex flex-col gap-4 mx-4">
                <SearchBar />
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
