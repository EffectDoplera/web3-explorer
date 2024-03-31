import { Details } from "@/shared/ui/details"
import { getLatestBlock, getBlockDetails } from "./api"
import { formatGwei } from "viem"
import { FC } from "react"
import Link from "next/link"
import { formatBaseFeePerGas, formatBurntFees, formatGasUsed } from "./lib"

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

interface BlockOverviewProps {
  number: string
}

export const BlockOverview: FC<BlockOverviewProps> = async ({ number }) => {
  const block = await getBlockDetails(number)
  return (
    <Details
      title="block details"
    >
      <div className="flex flex-col">
        <div className="flex gap-4">
          <div>Block Height</div>
          <div>{block.number.toLocaleString()}</div>
        </div>

        <div className="flex gap-4">
          <div>Timestamp</div>
          <div>{new Intl.DateTimeFormat('en', {
            dateStyle: 'long',
            timeStyle: 'long',
            timeZone: 'UTC',
          }).format(new Date(+block.timestamp.toString() * 1000))}</div>
        </div>

        <div className="flex gap-4">
          <div>Gas Limit</div>
          <div>{formatGwei(block.gasLimit)} Gwei</div>
        </div>
        <div className="flex gap-4">
          <div>Gas Used</div>
          <div>
            {formatGasUsed(block)}
          </div>
        </div>

        {!!block.baseFeePerGas && (
          <div className="flex gap-4">
            <div>Base Fee Per Gas</div>
            <div>
              {formatBaseFeePerGas(block)}
            </div>
          </div>
        )}

        {!!block.baseFeePerGas && (
          <div className="flex gap-4">
            <div>Burnt fees</div>
            <div>
              {formatBurntFees(block)}
            </div>
          </div>
        )}
      </div>
    </Details>
  )
}