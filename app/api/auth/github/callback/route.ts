import { github, lucia } from '@/shared/auth'
import { db } from '@/shared/database/provider'
import { users } from '@/shared/database/schema'
import { OAuth2RequestError } from 'arctic'
import { generateId } from 'lucia'
import { cookies } from 'next/headers'

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const storedState = cookies().get('github_oauth_state')?.value ?? null

  if (!code || !state || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400,
    })
  }

  try {
    const tokens = await github.validateAuthorizationCode(code)
    const githubUserResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    })
    const githubUser: GitHubUser = await githubUserResponse.json()

    const existingUser = await db.query.users.findFirst({
      where: ({ githubId }, { eq }) => eq(githubId, githubUser.id),
      columns: { id: true },
    })

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {})
      const sessionCookie = lucia.createSessionCookie(session.id)

      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

      return new Response(null, {
        status: 302,
        headers: {
          Location: '/',
        },
      })
    }

    const userId = generateId(15)

    const insert = await db.insert(users).values({
      id: userId,
      githubId: githubUser.id,
      username: githubUser.login,
    })

    const session = await lucia.createSession(userId, {})
    const sessionCookie = lucia.createSessionCookie(session.id)

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
      },
    })
  } catch (e) {
    console.error(e)
    if (e instanceof OAuth2RequestError && e.message === 'bad_verification_code') {
      // invalid code
      return new Response(null, {
        status: 400,
      })
    }

    return new Response(null, {
      status: 500,
    })
  }
}

interface GitHubUser {
  id: number
  login: string
}
