import { Details, DetailsRow, DetailsRowInfo, DetailsRowLabel } from '@/shared/ui/details'
import { BackpackIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { FC } from 'react'
import { Hash } from 'viem'
import { getBalance, getUSDBalance } from './api'
import { formatMaticBalance, formatUSD } from './lib'

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
          {formatMaticBalance(balance)}
        </DetailsRowInfo>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>Matic Value</DetailsRowLabel>
        <DetailsRowInfo>{formatUSD(usdBalance)}</DetailsRowInfo>
      </DetailsRow>
    </Details>
  )
}
