import { Block, formatEther, formatGwei } from 'viem'

export const formatGasUsed = (block: Block) =>
  `${block.gasUsed.toLocaleString()} (${new Intl.NumberFormat('en', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(+formatGwei(block.gasUsed) / +formatGwei(block.gasLimit))})`

export const formatBaseFeePerGas = (block: Block) =>
  `${formatEther(block.baseFeePerGas!)} MATIC (${formatGwei(block.baseFeePerGas!)} Gwei)`

export const formatBurntFees = (block: Block) => `🔥 ${formatEther(block.baseFeePerGas! * block.gasUsed)} MATIC`
