import { createPublicClient, http } from 'viem'
import { polygon } from 'viem/chains'

const client = createPublicClient({
  chain: polygon,
  transport: http(
    `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
  ),
})

export const getLatestBlock = async () => client.getBlock()
