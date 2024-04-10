import { getMaticPrice } from '@/shared/api'
import { Details } from '@/shared/ui/details'
import { GlobeIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

export const CurrentPriceOverview = async () => {
  const price = await getMaticPrice()

  return (
    <Details title="matic price" image={<Image width={20} height={20} alt="" src="/icons/polygon.svg" />}>
      {new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
      }).format(price)}
    </Details>
  )
}

export const CurrentMarketCapOverview = async () => {
  const price = await getMaticPrice()

  return (
    <Details image={<GlobeIcon width={20} height={20} />} title="matic market cap on polygon">
      {new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
      }).format(price * 9_908_000_000)}
    </Details>
  )
}
