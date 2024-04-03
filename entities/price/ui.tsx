import { Details } from '@/shared/ui/details'
import { getMaticPrice } from '@/shared/api'

export const CurrentPriceOverview = async () => {
  const price = await getMaticPrice()

  return (
    <Details title="matic price">
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
    <Details title="matic market cap on polygon">
      {new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
      }).format(price * 9_908_000_000)}
    </Details>
  )
}
