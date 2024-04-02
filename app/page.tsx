import { LatestBlockNumberOverview, LatestBlockTransactionSizeOverview } from '@/entities/block'
import { CurrentMarketCapOverview, CurrentPriceOverview } from '@/entities/price'
import { SearchBar } from '@/widgets/search-bar'

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <main className="flex flex-1 justify-center flex-col gap-4">
      <SearchBar />

      <div className="flex flex-wrap gap-4">
        <LatestBlockNumberOverview />
        <LatestBlockTransactionSizeOverview />
        <CurrentPriceOverview />
        <CurrentMarketCapOverview />
      </div>
    </main>
  )
}
