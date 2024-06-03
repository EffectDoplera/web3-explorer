self.addEventListener('push', async (event) => {
  const data = await event.data.json()
  event.waitUntil(
    self.registration.showNotification('Polygon', {
      body: data.title,
      icon: '/icons/maskable_icon_x192.png',
    }),
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (clientList.length > 0) {
        let client = clientList[0]
        for (let i = 0; i < clientList.length; i++) {
          if (clientList[i].focused) {
            client = clientList[i]
          }
        }
        return client.focus()
      }
      return clients.openWindow('/')
    }),
  )
})
