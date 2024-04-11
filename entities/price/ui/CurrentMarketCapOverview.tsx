import { getMaticPrice } from '@/shared/api'
import { Details } from '@/shared/ui/details'
import { GlobeIcon } from '@radix-ui/react-icons'
import { MATIC_TOTAL_COUNT } from '../const'
import { formatUSD } from '../lib'

export const CurrentMarketCapOverview = async () => {
  const price = await getMaticPrice()

  return (
    <Details image={<GlobeIcon width={20} height={20} />} title="matic market cap on polygon">
      {formatUSD(price * MATIC_TOTAL_COUNT)}
    </Details>
  )
}
