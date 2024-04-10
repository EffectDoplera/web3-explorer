import { Transaction } from 'viem'
import { formatEther, formatGwei } from 'viem/utils'

export const formatGasPrice = ({ gasPrice }: Transaction) =>
  `${formatGwei(gasPrice!)} Gwei (${formatEther(gasPrice!)}) MATIC`
