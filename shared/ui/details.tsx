import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { cn } from '../lib'
import { Card, CardContent, CardHeader, CardTitle } from './card'

interface DetailsProps {
  className?: string
  title: string
  image?: ReactNode
  link?: {
    href: string
    text: string
  }
}

export const Details: FC<PropsWithChildren<DetailsProps>> = ({ children, title, link, image, className }) => (
  <Card className="flex-1">
    <CardHeader className="flex p-3 items-center gap-2 border-b-2 flex-row space-y-0">
      {image}
      <CardTitle className="leading-normal first-letter:uppercase truncate">{title}</CardTitle>
    </CardHeader>
    <CardContent className={cn('flex flex-1 flex-col gap-4 p-3 bg-white-cream-100 font-semibold', className)}>
      {children}
      {link && (
        <Link className="text-primary font-semibold text-sm hover:underline focus:underline truncate" href={link.href}>
          {link.text}
        </Link>
      )}
    </CardContent>
  </Card>
)

const rowVariants = cva('text-base font-medium', {
  variants: {
    variant: {
      default: 'grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4 items-center',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const DetailsRow = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof rowVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(rowVariants({ variant, className }))} {...props} />
))

DetailsRow.displayName = 'DetailsRow'

export const DetailsRowLabel = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('text-muted-foreground md:text-black md:font-medium dark:md:text-white', className)}
      {...props}
    />
  ),
)

DetailsRowLabel.displayName = 'DetailsRowLabel'

export const DetailsRowInfo = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />,
)

DetailsRowInfo.displayName = 'DetailsRowInfo'
