import { Transaction } from '@/entities/transaction'
import { Suspense } from 'react'
import { Hash } from 'viem'

interface TransactionPageProps {
  params: {
    hash: Hash
  }
}

export default async function TransactionPage({ params }: TransactionPageProps) {
  const { hash } = params
  return (
    <div className="flex flex-1 justify-center flex-col gap-4">
      <div className="flex flex-wrap items-center gap-1">
        <h3 className="text-xl font-medium">Transaction</h3>
        <div className="text-gray-500">{hash.substring(0, 16)}</div>
      </div>

      <Transaction hash={hash} />
    </div>
  )
}
