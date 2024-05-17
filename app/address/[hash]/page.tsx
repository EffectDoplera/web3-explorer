import { Address, cropFormatAddress } from '@/entities/address'
import { CopyToClipboardButton } from '@/features/copy-to-clipboard'
import { AvatarPixel } from '@/features/generate-avatar-image'
import { ShowQRCodeButton } from '@/features/show-qr-code'
import { Avatar } from '@/shared/ui/avatar'
import { Hash } from 'viem'

interface AddressPageProps {
  params: {
    hash: Hash
  }
}

export default async function AddressPage({ params }: AddressPageProps) {
  const { hash } = params
  return (
    <div className="flex flex-1 justify-center flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Avatar>
          <AvatarPixel name={hash} size={40} />
        </Avatar>
        <h3 className="text-xl font-medium">Address</h3>
        <p>{cropFormatAddress(hash)}</p>
        <CopyToClipboardButton text={hash} />
        <ShowQRCodeButton text={hash} />
      </div>

      <Address hash={hash} />
    </div>
  )
}
