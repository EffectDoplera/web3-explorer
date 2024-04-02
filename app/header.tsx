import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
  <header className="flex items-center gap-4 py-2">
    <Link href="/">
      <Image width={40} height={40} alt="main app icon" src={`/icons/matic.svg`} />
    </Link>
    <h2 className="font-medium text-2xl">Polygon explorer</h2>
  </header>
)