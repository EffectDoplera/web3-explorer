import { LatestBlockNumberOverview, LatestBlockTransactionSizeOverview } from '@/entities/block'
import { CurrentMarketCapOverview, CurrentPriceOverview } from '@/entities/price'
import { Skeleton } from '@/shared/ui/skeleton'
import { MarketCapChart } from '@/widgets/market-cap-chart'
import { Suspense } from 'react'
import { Refresh } from './refresh'

export const revalidate = 60

export default async function Home() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] sm:grid-cols-1 md:grid-cols-2 xl:md:grid-cols-4 gap-4">
        <Suspense fallback={<Skeleton className="h-[100px] w-full" />}>
          <LatestBlockNumberOverview />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[100px] w-full" />}>
          <LatestBlockTransactionSizeOverview />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[100px] w-full" />}>
          <CurrentPriceOverview />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[100px] w-full" />}>
          <CurrentMarketCapOverview />
        </Suspense>
      </div>
      <Suspense fallback={<Skeleton className="h-[460px] w-full" />}>
        <MarketCapChart />
      </Suspense>
      <Refresh />
    </>
  )
}
