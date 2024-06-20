import { validateRequest } from '@/shared/auth'
import { Avatar, AvatarFallback } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'
import { AvatarPixel } from '../generate-avatar-image'

export const SignInWithGithubButton = async () => {
  const { user } = await validateRequest()

  if (user) {
    return (
      <Avatar>
        <AvatarFallback asChild>
          <AvatarPixel name={user.username} />
        </AvatarFallback>
      </Avatar>
    )
  }

  return (
    <Button asChild variant="outline">
      <Link href="/api/auth/github">
        <GithubIcon className="w-4 h-4 mr-2" />
        Sign in
      </Link>
    </Button>
  )
}
