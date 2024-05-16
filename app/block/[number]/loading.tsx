import { Skeleton } from '@/shared/ui/skeleton'

const Loading = () => (
  <div className="flex flex-1 justify-center flex-col gap-4">
    <Skeleton className="h-[30px] w-[120px]" />
    <Skeleton className="h-[300px] w-full" />
  </div>
)

export default Loading
