import { Details } from '@/shared/ui/details'
import { FC } from 'react'
import { formatGwei } from 'viem'
import { getBlockDetails, getLatestBlock } from './api'
import { formatBaseFeePerGas, formatBurntFees, formatGasUsed } from './lib'
import { Row } from '@/shared/ui/row'

export const LatestBlockNumberOverview = async () => {
  const latestBlock = await getLatestBlock()

  return (
    <Details
      title="latest block number"
      link={{
        text: 'view block',
        href: `/block/${latestBlock.number}`,
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
        href: `/block/${latestBlock.transactions[0]}`,
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
    <Details title="block details">
      <div className="flex flex-1 flex-col gap-4">
        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">Block Height</div>
          <div>{block.number.toLocaleString()}</div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div>Timestamp</div>
          <div>
            {new Intl.DateTimeFormat('en', {
              dateStyle: 'long',
              timeStyle: 'long',
              timeZone: 'UTC',
            }).format(new Date(+block.timestamp.toString() * 1000))}
          </div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div>Gas Limit</div>
          <div>{formatGwei(block.gasLimit)} Gwei</div>
        </Row>
        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div>Gas Used</div>
          <div>{formatGasUsed(block)}</div>
        </Row>

        {!!block.baseFeePerGas && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div>Base Fee Per Gas</div>
            <div>{formatBaseFeePerGas(block)}</div>
          </Row>
        )}

        {!!block.baseFeePerGas && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div>Burnt fees</div>
            <div>{formatBurntFees(block)}</div>
          </Row>
        )}
      </div>
    </Details>
  )
}
