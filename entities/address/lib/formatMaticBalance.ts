import { formatEther } from 'viem'

export const formatMaticBalance = (balance: bigint) =>
  new Intl.NumberFormat('en', {
    minimumFractionDigits: 10,
  }).format(+formatEther(balance))
