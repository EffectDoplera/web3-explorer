import { Details, DetailsRow } from '@/shared/ui/details'
import { CubeIcon } from '@radix-ui/react-icons'
import { getLatestBlock } from '../api'

export const LatestBlockNumberOverview = async () => {
  const latestBlock = await getLatestBlock()

  return (
    <Details
      image={<CubeIcon width={20} height={20} />}
      title="latest block number"
      link={{
        text: 'view block',
        href: `/block/${latestBlock.number}`,
      }}
      className="flex-row justify-between items-center"
    >
      {latestBlock.number.toLocaleString()}
    </Details>
  )
}
