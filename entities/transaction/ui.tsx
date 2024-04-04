import { Details } from '@/shared/ui/details'
import { Row } from '@/shared/ui/row'
import { FC } from 'react'
import { Hash } from 'viem'
import { getTransaction, getTransactionReceipt } from './api'

interface TransactionProps {
  hash: Hash
}

export const Transaction: FC<TransactionProps> = async ({ hash }) => {
  const [transaction, transactionReceipt] = await Promise.all([getTransaction(hash), getTransactionReceipt(hash)])

  return (
    <Details title="transaction details">
      <div className="flex flex-1 flex-col gap-4">
        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4 items-center">
          <div className="text-gray-500 md:text-black md:font-medium">Transaction Hash</div>
          <div className="flex gap-4 items-center">
            <p>{transaction.hash}</p>
          </div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">Status</div>
          <div>{transactionReceipt.status}</div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">Block</div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">Timestamp</div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">From</div>
        </Row>

        <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
          <div className="text-gray-500 md:text-black md:font-medium">To</div>
        </Row>

        {!!transaction.gas && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div className="text-gray-500 md:text-black md:font-medium">Value</div>
            <div>0</div>
          </Row>
        )}

        {!!transaction.gas && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div className="text-gray-500 md:text-black md:font-medium">Transaction Fees</div>
            <div>0</div>
          </Row>
        )}

        {!!transaction.gas && (
          <Row className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4">
            <div className="text-gray-500 md:text-black md:font-medium">Gas Price</div>
            <div>0</div>
          </Row>
        )}
      </div>
    </Details>
  )
}
