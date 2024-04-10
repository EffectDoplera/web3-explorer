import { cn } from '@/shared/lib'
import { Badge } from '@/shared/ui/badge'
import { cva, VariantProps } from 'class-variance-authority'
import { FC } from 'react'

const badgeVariants = cva('justify-self-start', {
  variants: {
    variant: {
      success: '',
      reverted: 'bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
})

interface TransactionStatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const TransactionStatusBadge: FC<TransactionStatusBadgeProps> = ({ className, variant, ...props }) => (
  <Badge className={cn(badgeVariants({ variant }), className)} {...props} />
)
