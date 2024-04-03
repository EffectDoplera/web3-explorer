import { LatestBlockNumberOverview, LatestBlockTransactionSizeOverview } from '@/entities/block'
import { CurrentMarketCapOverview, CurrentPriceOverview } from '@/entities/price'
import { Chart } from '@/widgets/chart'

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] sm:grid-cols-1 md:grid-cols-2 xl:md:grid-cols-4 gap-4">
        <LatestBlockNumberOverview />
        <LatestBlockTransactionSizeOverview />
        <CurrentPriceOverview />
        <CurrentMarketCapOverview />
      </div>
      <Chart />
    </>
  )
}
