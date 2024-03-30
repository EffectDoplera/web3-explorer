import { getTransaction } from "./api"
import { Hash } from "viem"
import { FC } from "react"

interface TransactionProps {
  hash: Hash
}

export const Transaction: FC<TransactionProps> = async ({ hash }) => {
  const transaction = await getTransaction(hash)

  return (
    <div>
      <div>Transaction</div>
      {transaction.hash}
    </div>
  )
}