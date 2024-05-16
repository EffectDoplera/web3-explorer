import { Skeleton } from '@/shared/ui/skeleton'

const Loading = () => (
  <div className="flex flex-1 justify-center flex-col gap-4">
    <Skeleton className="h-[40px] w-1/2" />
    <Skeleton className="h-[140px] w-full" />
  </div>
)

export default Loading
