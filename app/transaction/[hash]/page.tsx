import { Transaction } from '@/entities/transaction'
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
      <h3 className="text-xl font-medium">Transaction</h3>

      <Transaction hash={hash} />
    </div>
  )
}
