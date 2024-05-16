import { client, getMaticPrice } from '@/shared/api'
import { cache } from 'react'
import { Address, formatEther } from 'viem'

export const getBalance = cache(async (address: Address) => client.getBalance({ address }))

export const getUSDBalance = cache(async (address: Address): Promise<number> => {
  const amount = await getBalance(address)
  const exhangeRate = await getMaticPrice()

  return +formatEther(amount) * exhangeRate
})
