import { client } from '@/shared/api'

export const getLatestBlock = async () => client.getBlock()
