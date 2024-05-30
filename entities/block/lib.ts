import { gasUsedPercentFormatter } from '@/entities/gas'
import { Block, formatEther, formatGwei, formatUnits } from 'viem'

export const formatGasUsed = ({ gasUsed, gasLimit }: Block) =>
  `${gasUsed.toLocaleString()} (${gasUsedPercentFormatter(gasUsed, gasLimit)})`

export const formatBaseFeePerGas = ({ baseFeePerGas }: Block) =>
  `${new Intl.NumberFormat('en', {
    minimumFractionDigits: 2,
  }).format(baseFeePerGas!)} wei`

export const formatBurntFees = ({ baseFeePerGas, gasUsed }: Block) =>
  `🔥 ${new Intl.NumberFormat('en', {
    minimumFractionDigits: 9,
  }).format(+formatEther(baseFeePerGas! * gasUsed))} MATIC`

export const formatGasLimit = ({ gasLimit }: Block) =>
  `${new Intl.NumberFormat('en', {
    minimumFractionDigits: 0,
  }).format(gasLimit!)}`

export const formatTimestamp = ({ timestamp }: Block) =>
  new Intl.DateTimeFormat('en', {
    dateStyle: 'long',
    timeStyle: 'long',
    timeZone: 'UTC',
  }).format(new Date(+timestamp.toString() * 1000))
