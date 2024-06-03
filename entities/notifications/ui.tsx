'use client'

import { useEffect } from 'react'

const setupNotifications = async () => {
  const registration = await navigator.serviceWorker.getRegistration()
  const subscribed = await registration?.pushManager.getSubscription()

  console.log('User is subscribed:', subscribed)

  if (subscribed && !(subscribed.expirationTime && Date.now() > subscribed.expirationTime - 5 * 60 * 1000)) {
    // fetch('/api/push-webhook', {
    //   method: 'POST',
    //   body: JSON.stringify(subscribed),
    // })
  } else {
    const subscription = await registration?.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    })

    console.log('User is subscribed:', subscription)
    fetch('/api/register-push', {
      method: 'POST',
      body: JSON.stringify(subscription),
    })
  }
}

export const Notifications = () => {
  useEffect(() => {
    try {
      setupNotifications()
    } catch (error) {
      console.error(error)
    }
  }, [])
  return null
}
