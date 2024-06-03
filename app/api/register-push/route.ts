import { NextResponse } from 'next/server'
import webPush, { PushSubscription, WebPushError } from 'web-push'

export async function POST(req: Request) {
  try {
    const newSubscription: PushSubscription | undefined = await req.json()

    if (!newSubscription) {
      return NextResponse.json({ error: 'Missing push subscription in body' }, { status: 400 })
    }

    console.log('Received push subscription to add: ', newSubscription)

    const notification = JSON.stringify({
      title: 'Hello, Notifications!',
      options: {
        body: `ID: ${Math.floor(Math.random() * 100)}`,
      },
    })

    const options = {
      TTL: 10000,
      vapidDetails: {
        subject: process.env.VAPID_SUBJECT as string,
        publicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY as string,
        privateKey: process.env.VAPID_PRIVATE_KEY as string,
      },
    }

    const endpoint = newSubscription.endpoint
    const id = endpoint.substr(endpoint.length - 8, endpoint.length)

    webPush
      .sendNotification(newSubscription, notification, options)
      .then((result) => {
        console.log(`Endpoint ID: ${id}`)
        console.log(`Result: ${result.statusCode}`)
      })
      .catch((error) => {
        console.log(`Endpoint ID: ${id}`)
        console.log(`Error: ${error} `)
      })

    // const user = await currentUser()
    // const { sessionId } = auth()

    // if (!user || !sessionId) {
    //   return NextResponse.json({ error: 'User not authenticated' }, { status: 401 })
    // }

    // const userSubscriptions = user.privateMetadata.subscriptions || []

    // const updatedSubscriptions = userSubscriptions.filter(
    //   (subscription) => subscription.endpoint !== newSubscription.endpoint,
    // )

    // updatedSubscriptions.push({ ...newSubscription, sessionId })

    // await clerkClient.users.updateUser(user.id, {
    //   privateMetadata: { subscriptions: updatedSubscriptions },
    // })

    return NextResponse.json({ message: 'Push subscription saved' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// export async function DELETE(req: Request) {
//   try {
//     const subscriptionToDelete: PushSubscription | undefined = await req.json()

//     if (!subscriptionToDelete) {
//       return NextResponse.json({ error: 'Missing push subscription in body' }, { status: 400 })
//     }

//     console.log('Received push subscription to delete: ', subscriptionToDelete)

//     const user = await currentUser()

//     if (!user) {
//       return NextResponse.json({ error: 'User not authenticated' }, { status: 401 })
//     }

//     const userSubscriptions = user.privateMetadata.subscriptions || []

//     const updatedSubscriptions = userSubscriptions.filter(
//       (subscription) => subscription.endpoint !== subscriptionToDelete.endpoint,
//     )

//     await clerkClient.users.updateUser(user.id, {
//       privateMetadata: { subscriptions: updatedSubscriptions },
//     })

//     return NextResponse.json({ message: 'Push subscription deleted' }, { status: 200 })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
//   }
// }
