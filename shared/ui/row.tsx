import { cn } from '@/shared/lib'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const rowVariants = cva('text-md font-medium')

const Row = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof rowVariants>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(rowVariants(), className)} {...props} />
))
Row.displayName = 'Row'

export { Row }
