import { gasUsedPercentFormatter } from '@/entities/gas'
import { Block, formatEther, formatGwei } from 'viem'

export const formatGasUsed = ({ gasUsed, gasLimit }: Block) =>
  `${gasUsed.toLocaleString()} (${gasUsedPercentFormatter(gasUsed, gasLimit)})`

export const formatBaseFeePerGas = (block: Block) =>
  `${formatEther(block.baseFeePerGas!)} MATIC (${formatGwei(block.baseFeePerGas!)} Gwei)`

export const formatBurntFees = ({ baseFeePerGas, gasUsed }: Block) =>
  `🔥 ${formatEther(baseFeePerGas! * gasUsed)} MATIC`
