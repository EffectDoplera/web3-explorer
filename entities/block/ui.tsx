import { Details } from "@/shared/ui/details"
import { getLatestBlock } from "./api"

export const LatestBlockNumberOverview = async () => {
  const latestBlock = await getLatestBlock()

  return (
    <Details
      title="latest block number"
      link={{
        text: 'view block',
        href: `/block/${latestBlock.number}`
      }}
    >
      {latestBlock.number.toLocaleString()}
    </Details>
  )
}

export const LatestBlockTransactionSizeOverview = async () => {
  const latestBlock = await getLatestBlock()

  return (
    <Details
      title="latest block transactions count"
      link={{
        text: 'view transaction',
        href: `/block/${latestBlock.transactions[0]}`
      }}
    >
      {latestBlock.transactions.length}
    </Details>
  )
}