import { SignInWithGithubButton } from '@/features/login'
import { ThemeSwitcher } from '@/features/theme-switcher'
import { ToggleNotification } from '@/features/toggle-notification'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
  <header className="flex items-center justify-between gap-4 py-2 px-4 border-b">
    <div className="flex items-center gap-2 md:gap-4">
      <Link href="/">
        <Image width={36} height={36} alt="main app icon" src={`/icons/polygon.svg`} />
      </Link>
      <h2 className="font-medium capitalize text-lg sm:text-2xl">Polygon explorer</h2>
    </div>
    <div className="flex items-center gap-2 md:gap4">
      <ToggleNotification />
      <ThemeSwitcher />
      <SignInWithGithubButton />
    </div>
  </header>
)
