'use client'

import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { CheckIcon, ClipboardCopyIcon } from '@radix-ui/react-icons'
import { FC, useEffect, useState } from 'react'
import { copyContent } from './lib'

interface CopyToClipboardButtonProps {
  text: string
  className?: string
}

export const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = ({ text, className }) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setIsCopied(false)
    }, 3_000)

    return () => clearTimeout(id)
  }, [isCopied])

  return (
    <Button
      onClick={() => {
        copyContent(text)
        setIsCopied(true)
      }}
      variant="ghost"
      size="icon"
      className={cn('w-5 h-5', className)}
      disabled={isCopied}
    >
      {isCopied ? (
        <CheckIcon width={16} height={16} className="stroke-green-500" />
      ) : (
        <ClipboardCopyIcon width={16} height={16} />
      )}
    </Button>
  )
}
