import { formatEther, formatGwei } from 'viem/utils'

export const gasUsedPercentFormatter = (gasUsed: bigint, gasLimit: bigint) =>
  new Intl.NumberFormat('en', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(+formatGwei(gasUsed) / +formatGwei(gasLimit))

export const gasBurnetFormatter = (gasUsed: bigint, baseFeePerGas: bigint) => formatEther(baseFeePerGas * gasUsed)
