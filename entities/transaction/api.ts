import { client } from '@/shared/api'
import { cache } from 'react'
import type { Hash } from 'viem'

export const getTransaction = cache(async (transactionHash: Hash) => client.getTransaction({ hash: transactionHash }))

export const getTransactionReceipt = cache(async (transactionHash: Hash) =>
  client.getTransactionReceipt({ hash: transactionHash }),
)
