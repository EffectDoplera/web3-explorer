import { BlockOverview } from "@/entities/block"

interface BlockPageProps {
  params: {
    number: string
  }
}

export default async function BlockPage({ params }: BlockPageProps) {
  const { number } = params

  return (<>
    <div className="flex gap-1">
      <h3>Block</h3>
      <div>#{number}</div>
    </div>
    <BlockOverview number={number} />
  </>)
}