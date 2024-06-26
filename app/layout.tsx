import './globals.css'
import { cn } from '@/shared/lib'
import { SearchBar } from '@/widgets/search-bar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Footer } from './footer'
import { Header } from './header'
import { Providers } from './providers'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const APP_NAME = 'Polygon Explorer'
const APP_DEFAULT_TITLE = 'Polygon Explorer'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'Explore matic transactions'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: './manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/icons/maskable_icon_x192.png' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', poppins.className)}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen max-h-screen flex">
            <div className="grid grid-rows-[auto_1fr_auto] gap-4 w-full">
              <Header />
              <main className="flex flex-col gap-4 mx-4">
                <SearchBar />
                <div className="flex flex-col gap-4">{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
