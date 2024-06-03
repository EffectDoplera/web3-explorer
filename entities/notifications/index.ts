export async function registerPushNotifications() {
  const registration = await navigator.serviceWorker.getRegistration()
  const subscribed = await registration?.pushManager.getSubscription()

  if (subscribed) {
    console.info('User is already subscribed.')
    return
  }

  const subscription = await registration?.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  })

  fetch('/api/register-push', {
    method: 'POST',
    body: JSON.stringify(subscription),
  })
}

export async function sendPushSubscriptionToServer(subscription: PushSubscription) {
  console.log('Sending push subscription to server', subscription)
}

export async function deletePushSubscriptionFromServer(subscription: PushSubscription) {
  console.log('Deleting push subscription from server', subscription)
}
