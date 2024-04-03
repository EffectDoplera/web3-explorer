'use client'

import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { DashboardIcon } from '@radix-ui/react-icons'
import { QRCodeCanvas } from 'qrcode.react'
import { FC } from 'react'

interface ShowQRCodeButtonProps {
  text: string
}

export const ShowQRCodeButton: FC<ShowQRCodeButtonProps> = ({ text }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="w-5 h-5">
          <DashboardIcon hanging={16} width={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[375px]">
        <DialogHeader>
          <DialogTitle>Address QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center">
          <QRCodeCanvas level="H" size={256} value={text} />
        </div>
        <span className="truncate">{text}</span>
      </DialogContent>
    </Dialog>
  )
}
