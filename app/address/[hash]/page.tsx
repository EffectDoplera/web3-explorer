import { Address } from '@/entities/address'
import { Avatar, AvatarFallback } from '@/shared/ui/avatar'
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
        <h3 className="text-xl font-medium">Address</h3>
        <div className="text-gray-500">
          <div className="flex items-center gap-1">
            <Avatar>
              {/* TODO: Add Image */}
              <AvatarFallback>{hash.substring(hash.length - 3, hash.length)}</AvatarFallback>
            </Avatar>
            <span>{hash}</span>
          </div>
        </div>
      </div>

      <Address hash={hash} />
    </div>
  )
}
