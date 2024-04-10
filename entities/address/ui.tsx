import { Details } from '@/shared/ui/details'
import { Row } from '@/shared/ui/row'
import { BackpackIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { FC } from 'react'
import { formatEther, Hash } from 'viem'
import { getBalance, getUSDBalance } from './api'

interface AddressProps {
  hash: Hash
}

export const Address: FC<AddressProps> = async ({ hash }) => {
  const [balance, usdBalance] = await Promise.all([getBalance(hash), getUSDBalance(hash)])

  return (
    <Details image={<BackpackIcon width={20} height={20} />} title="overview">
      <div className="flex flex-1 flex-col gap-4">
        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">Matic Balance</div>
          <div className="flex items-center gap-1">
            <Image width={20} height={20} alt="polygon token icon" src="/icons/polygon.svg" />
            <p>
              {new Intl.NumberFormat('en', {
                minimumFractionDigits: 10,
              }).format(+formatEther(balance))}
            </p>
            <p className="uppercase">matic</p>
          </div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">Matic Value</div>
          <p>
            {new Intl.NumberFormat('en', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
            }).format(usdBalance)}
          </p>
        </Row>
      </div>
    </Details>
  )
}
