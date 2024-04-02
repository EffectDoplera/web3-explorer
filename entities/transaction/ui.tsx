import { FC } from 'react'
import { Hash } from 'viem'
import { getTransaction } from './api'

interface TransactionProps {
  hash: Hash
}

export const Transaction: FC<TransactionProps> = async ({ hash }) => {
  const transaction = await getTransaction(hash)

  return (
    <div>
      <div>INFO</div>
      {transaction.hash.substring(0, 16)}
    </div>
  )
}
