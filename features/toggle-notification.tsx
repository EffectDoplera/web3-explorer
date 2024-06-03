'use client'

import { Button } from '@/shared/ui/button'
import { Toggle } from '@/shared/ui/toggle'
import { BellIcon, BellOffIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ToggleNotification = () => {
  const [allow, setAllow] = useState(false)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setAllow(Notification.permission === 'granted')
    setDisabled(Notification.permission === 'denied')
  }, [])

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission()
      setDisabled(permission === 'denied')
      setAllow(permission === 'granted')
    } catch (e) {
      console.error(e)
      // TODO: handle error
    }
  }

  return (
    <Toggle asChild pressed={allow} disabled={disabled} onPressedChange={requestNotificationPermission}>
      <Button variant="outline" size="icon" aria-label="Toggle notification" className="group">
        <BellOffIcon className="h-5 w-5 absolute rotate-0 scale-100 transition-all group-data-[state=on]:-rotate-90 group-data-[state=on]:scale-0" />
        <BellIcon className="h-5 w-5 absolute rotate-90 scale-0 transition-all group-data-[state=on]:rotate-0 group-data-[state=on]:scale-100" />
      </Button>
    </Toggle>
  )
}
