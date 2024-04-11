import { cropFormatAddress } from '@/entities/address'
import { CopyToClipboardButton } from '@/features/copy-to-clipboard'
import { Details, DetailsRow, DetailsRowInfo, DetailsRowLabel } from '@/shared/ui/details'
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
      <DetailsRow>
        <DetailsRowLabel>Transaction Hash</DetailsRowLabel>
        <DetailsRowInfo>
          <span className="break-all">{transaction.hash}</span>
          <CopyToClipboardButton text={transaction.hash} className="align-text-bottom ml-2" />
        </DetailsRowInfo>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>Status</DetailsRowLabel>
        <TransactionStatusBadge variant={transactionReceipt.status}>{transactionReceipt.status}</TransactionStatusBadge>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>Block</DetailsRowLabel>
        <DetailsRowInfo>
          <Link
            className="text-primary font-semibold text-sm hover:underline focus:underline truncate"
            href={`/block/${transaction.blockNumber}`}
          >
            {transaction.blockNumber.toString()}
          </Link>
        </DetailsRowInfo>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>From</DetailsRowLabel>
        <DetailsRowInfo className="flex items-center gap-2">
          <Link
            className="text-primary font-semibold text-sm hover:underline focus:underline truncate"
            href={`/address/${transaction.from}`}
          >
            {cropFormatAddress(transaction.from)}
          </Link>
          <CopyToClipboardButton text={transaction.from} />
        </DetailsRowInfo>
      </DetailsRow>

      {!!transaction.to && (
        <DetailsRow>
          <DetailsRowLabel>To</DetailsRowLabel>
          <DetailsRowInfo className="flex items-center gap-2">
            <Link
              className="text-primary font-semibold text-sm hover:underline focus:underline truncate"
              href={`/address/${transaction.to}`}
            >
              {cropFormatAddress(transaction.to)}
            </Link>
            <CopyToClipboardButton text={transaction.to} />
          </DetailsRowInfo>
        </DetailsRow>
      )}

      <DetailsRow>
        <DetailsRowLabel>Value</DetailsRowLabel>
        <DetailsRowInfo className="flex gap-1 items-center">
          <Image width={20} height={20} alt="polygon  icon" src="/icons/polygon.svg" />
          <p>{formatTransactionValue(transaction)} MATIC</p>
        </DetailsRowInfo>
      </DetailsRow>

      {!!transaction.gasPrice && (
        <DetailsRow>
          <DetailsRowLabel>Gas Price</DetailsRowLabel>
          <DetailsRowInfo>{formatGasPrice(transaction)}</DetailsRowInfo>
        </DetailsRow>
      )}
    </Details>
  )
}
