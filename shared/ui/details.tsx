import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'

interface DetailsProps {
  title: string
  link?: {
    href: string
    text: string
  }
}

export const Details: FC<PropsWithChildren<DetailsProps>> = ({ children, title, link }) => (
  <Card className="flex-1 basis-48 overflow-hidden">
    <CardHeader className="flex p-3 items-center gap-2 border-b-2 border-purple-100 flex-row">
      <Image width={20} height={20} alt="" src={`/icons/polygon.svg`} />
      <CardTitle className="font-semibold first-letter:uppercase truncate">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex p-3 items-center justify-between bg-white-cream-100 font-semibold">
      {children}
      {link && (
        <Link className="text-blue-300 font-semibold text-sm hover:underline focus:underline truncate" href={link.href}>
          {link.text}
        </Link>
      )}
    </CardContent>
  </Card>
)
