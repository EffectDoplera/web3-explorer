'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { useState } from 'react'

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
  const [client] = useState(new QueryClient())
  return (
    <QueryClientProvider client={client}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </QueryClientProvider>
  )
}
