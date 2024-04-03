'use client'

import { Button } from '@/shared/ui/button'
import { CheckIcon, ClipboardCopyIcon } from '@radix-ui/react-icons'
import { FC, useEffect, useState } from 'react'
import { copyContent } from './lib'

interface CopyToClipboardButtonProps {
  text: string
}

export const CopyToClipboardButton: FC<CopyToClipboardButtonProps> = ({ text }) => {
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
      className="w-5 h-5"
      disabled={isCopied}
    >
      {isCopied ? <CheckIcon width={16} height={16} className="stroke-green-500" /> : <ClipboardCopyIcon width={16} height={16} />}
    </Button>
  )
}
