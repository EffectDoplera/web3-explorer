import { BlockOverview } from '@/entities/block'

interface BlockPageProps {
  params: {
    number: string
  }
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { number } = params

  return (
    <div className="flex flex-1 justify-center flex-col gap-4">
      <div className="flex flex-wrap items-center gap-1">
        <h3 className="text-xl font-medium">Block</h3>
        <div className="text-gray-500">#{number}</div>
      </div>

      <BlockOverview number={number} />
    </div>
  )
}
