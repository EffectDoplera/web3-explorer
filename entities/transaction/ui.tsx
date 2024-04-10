import { cropFormatAddress } from '@/entities/address'
import { Badge } from '@/shared/ui/badge'
import { Details } from '@/shared/ui/details'
import { Row } from '@/shared/ui/row'
import Image from 'next/image'
import { FC } from 'react'
import { formatEther, formatGwei, Hash } from 'viem'
import { getTransaction, getTransactionReceipt } from './api'
import { TimerIcon } from '@radix-ui/react-icons'

interface TransactionProps {
  hash: Hash
}

export const Transaction: FC<TransactionProps> = async ({ hash }) => {
  const [transaction, transactionReceipt] = await Promise.all([getTransaction(hash), getTransactionReceipt(hash)])

  return (
    <Details title="transaction details" image={<TimerIcon width={20} height={20} />}>
      <div className="flex flex-1 flex-col gap-4">
        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4 items-center">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Transaction Hash</div>
          <p className="break-all">{transaction.hash}</p>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Status</div>
          <Badge variant="outline" className="justify-self-start">
            {transactionReceipt.status}
          </Badge>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Block</div>
          <div>{transaction.blockNumber.toString()}</div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">From</div>
          <div>{cropFormatAddress(transaction.from)}</div>
        </Row>

        {!!transaction.to && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">To</div>
            <div>{cropFormatAddress(transaction.to)}</div>
          </Row>
        )}

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Value</div>
          <div className="flex gap-1 items-center">
            <Image width={20} height={20} alt="polygon  icon" src="/icons/polygon.svg" />
            <p>{transaction.value.toString()} MATIC</p>
          </div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Transaction Fees</div>
          <div>0.013013802095944151 MATIC ($0.01) ????</div>
        </Row>

        {!!transaction.gasPrice && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Gas Price</div>
            <div>
              {formatGwei(transaction.gasPrice)} Gwei ({formatEther(transaction.gasPrice)}) MATIC
            </div>
          </Row>
        )}
      </div>
    </Details>
  )
}
