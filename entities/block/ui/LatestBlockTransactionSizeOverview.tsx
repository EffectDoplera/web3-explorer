import { Details } from '@/shared/ui/details'
import { TimerIcon } from '@radix-ui/react-icons'
import { getLatestBlock } from '../api'

export const LatestBlockTransactionSizeOverview = async () => {
  const latestBlock = await getLatestBlock()

  return (
    <Details
      title="latest block transactions count"
      image={<TimerIcon width={20} height={20} />}
      link={{
        text: 'view transaction',
        href: `/transaction/${latestBlock.transactions[0]}`,
      }}
      className="flex-row justify-between items-center"
    >
      {latestBlock.transactions.length}
    </Details>
  )
}
