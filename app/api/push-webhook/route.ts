import { NextResponse } from 'next/server'
import webPush, { PushSubscription, WebPushError } from 'web-push'

export async function POST(req: Request) {
  try {
    const subscrition: PushSubscription = await req.json()

    console.log('Push web hook body: ', subscrition)

    const options = {
      TTL: 10000,
      vapidDetails: {
        subject: process.env.VAPID_SUBJECT as string,
        publicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY as string,
        privateKey: process.env.VAPID_PRIVATE_KEY as string,
      },
    }

    const notification = JSON.stringify({
      title: 'Hello, Notifications!',
      options: {
        body: `ID: ${Math.floor(Math.random() * 100)}`,
      },
    })

    webPush.sendNotification(subscrition, notification, options).catch((error) => {
      console.error('Error sending push notification: ', error)
      if (error instanceof WebPushError && error.statusCode === 410) {
        console.log('Push subscription expired, deleting...')
      }
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
