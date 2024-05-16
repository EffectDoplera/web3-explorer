import { Skeleton } from '@/shared/ui/skeleton'

const Loading = () => (
  <div className="flex flex-1 justify-center flex-col gap-4">
    <Skeleton className="h-[30px] w-[100px]" />
    <Skeleton className="h-[312px] w-full" />
  </div>
)

export default Loading
