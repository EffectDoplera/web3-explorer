import { getMaticPrice } from '@/shared/api'
import { Details } from '@/shared/ui/details'
import Image from 'next/image'
import { formatUSD } from '../lib'

export const CurrentPriceOverview = async () => {
  const price = await getMaticPrice()

  return (
    <Details title="matic price" image={<Image width={20} height={20} alt="" src="/icons/polygon.svg" />}>
      {formatUSD(price)}
    </Details>
  )
}
