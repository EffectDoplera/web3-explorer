import { client } from '@/shared/api'
import { cache } from 'react'
import 'server-only'

export const getLatestBlock = cache(async () => client.getBlock())

export const latestBlockPreload = () => {
  void getLatestBlock()
}

export const getBlockDetails = cache(async (number: string) => client.getBlock({ blockNumber: BigInt(number || 0) }))
