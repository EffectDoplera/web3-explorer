'use client'

import { useEffect } from 'react'
import { refresh } from './actions'

export const Refresh = () => {
  useEffect(() => {
    const id = setInterval(refresh, 60_000)
    return () => clearInterval(id)
  }, [])

  return null
}
