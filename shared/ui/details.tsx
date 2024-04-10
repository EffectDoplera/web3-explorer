import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'

interface DetailsProps {
  title: string
  image?: ReactNode
  link?: {
    href: string
    text: string
  }
}

export const Details: FC<PropsWithChildren<DetailsProps>> = ({ children, title, link, image }) => (
  <Card className="flex-1">
    <CardHeader className="flex p-3 items-center gap-2 border-b-2 border-purple-100 flex-row space-y-0">
      {image}
      <CardTitle className="leading-normal first-letter:uppercase truncate">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex p-3 items-center justify-between bg-white-cream-100 font-semibold">
      {children}
      {link && (
        <Link className="text-primary font-semibold text-sm hover:underline focus:underline truncate" href={link.href}>
          {link.text}
        </Link>
      )}
    </CardContent>
  </Card>
)
