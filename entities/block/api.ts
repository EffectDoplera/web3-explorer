import { client } from '@/shared/api'

export const getLatestBlock = async () => client.getBlock()

export const getBlockDetails = async (number: string) => client.getBlock({ blockNumber: BigInt(number || 0) })
