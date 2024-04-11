import { cropFormatAddress } from '@/entities/address'
import { CopyToClipboardButton } from '@/features/copy-to-clipboard'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Details } from '@/shared/ui/details'
import { Row } from '@/shared/ui/row'
import { TimerIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Hash } from 'viem'
import { getTransaction, getTransactionReceipt } from '../api'
import { formatGasPrice, formatTransactionValue } from '../lib'
import { TransactionStatusBadge } from './transaction-status-badge'

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
          <div>
            <span className="break-all">{transaction.hash}</span>
            <CopyToClipboardButton text={transaction.hash} className="align-text-bottom ml-2" />
          </div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Status</div>
          <TransactionStatusBadge variant={transactionReceipt.status}>
            {transactionReceipt.status}
          </TransactionStatusBadge>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Block</div>
          <div>
            <Link
              className="text-primary font-semibold text-sm hover:underline focus:underline truncate"
              href={`/block/${transaction.blockNumber}`}
            >
              {transaction.blockNumber.toString()}
            </Link>
          </div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">From</div>
          <div className="flex items-center gap-2">
            <Link
              className="text-primary font-semibold text-sm hover:underline focus:underline truncate"
              href={`/address/${transaction.from}`}
            >
              {cropFormatAddress(transaction.from)}
            </Link>
            <CopyToClipboardButton text={transaction.from} />
          </div>
        </Row>

        {!!transaction.to && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">To</div>
            <div className="flex items-center gap-2">
              <Link
                className="text-primary font-semibold text-sm hover:underline focus:underline truncate"
                href={`/address/${transaction.to}`}
              >
                {cropFormatAddress(transaction.to)}
              </Link>
              <CopyToClipboardButton text={transaction.to} />
            </div>
          </Row>
        )}

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Value</div>
          <div className="flex gap-1 items-center">
            <Image width={20} height={20} alt="polygon  icon" src="/icons/polygon.svg" />
            <p>{formatTransactionValue(transaction)} MATIC</p>
          </div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Transaction Fees</div>
          <div>0.013013802095944151 MATIC ($0.01) ????</div>
        </Row>

        {!!transaction.gasPrice && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div className="text-gray-500 md:text-black md:font-medium dark:md:text-white">Gas Price</div>
            <div>{formatGasPrice(transaction)}</div>
          </Row>
        )}
      </div>
    </Details>
  )
}
