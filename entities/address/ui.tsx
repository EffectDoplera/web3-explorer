import { Details, DetailsRow, DetailsRowInfo, DetailsRowLabel } from '@/shared/ui/details'
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
      <DetailsRow>
        <DetailsRowLabel>Matic Balance</DetailsRowLabel>
        <DetailsRowInfo className="flex items-center gap-1">
          <Image width={20} height={20} alt="polygon token icon" src="/icons/polygon.svg" />
          {new Intl.NumberFormat('en', {
            minimumFractionDigits: 10,
          }).format(+formatEther(balance))}
        </DetailsRowInfo>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>Matic Value</DetailsRowLabel>
        <DetailsRowInfo>
          {new Intl.NumberFormat('en', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
          }).format(usdBalance)}
        </DetailsRowInfo>
      </DetailsRow>
    </Details>
  )
}
