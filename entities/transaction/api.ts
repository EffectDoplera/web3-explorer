import { client } from '@/shared/api'
import type { Hash } from 'viem'

export const getTransaction = async (transactionHash: Hash) => client.getTransaction({ hash: transactionHash })
