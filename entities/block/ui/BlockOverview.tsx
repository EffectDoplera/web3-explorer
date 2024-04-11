import { Button } from '@/shared/ui/button'
import { Details, DetailsRow, DetailsRowInfo, DetailsRowLabel } from '@/shared/ui/details'
import { ChevronLeftIcon, ChevronRightIcon, CubeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { FC } from 'react'
import { getBlockDetails } from '../api'
import { formatBaseFeePerGas, formatBurntFees, formatGasLimit, formatGasUsed, formatTimestamp } from '../lib'

interface BlockNavigationButtonsProps {
  currentBlockNumberber: number
}

const BlockNavigationButtons: FC<BlockNavigationButtonsProps> = ({ currentBlockNumberber }) => (
  <div className="flex gap-2 flex-nowrap">
    <Button
      asChild={currentBlockNumberber !== 0}
      variant="outline"
      size="icon"
      className="h-6 w-6"
      disabled={currentBlockNumberber === 0}
    >
      <Link href={`/block/${currentBlockNumberber - 1}`}>
        <ChevronLeftIcon className="h-4 w-4" />
      </Link>
    </Button>
    <Button asChild variant="outline" size="icon" className="h-6 w-6">
      <Link href={`/block/${currentBlockNumberber + 1}`}>
        <ChevronRightIcon className="h-4 w-4" />
      </Link>
    </Button>
  </div>
)

interface BlockOverviewProps {
  number: string
}

export const BlockOverview: FC<BlockOverviewProps> = async ({ number }) => {
  const block = await getBlockDetails(number)

  return (
    <Details image={<CubeIcon width={20} height={20} />} title="block details">
      <DetailsRow className="grid md:grid-cols-[minmax(0,25%),1fr] gap-x-4 items-center">
        <DetailsRowLabel>Block Height</DetailsRowLabel>
        <DetailsRowInfo className="flex gap-4 items-center">
          <p>{block.number.toString()}</p>
          <BlockNavigationButtons currentBlockNumberber={+number} />
        </DetailsRowInfo>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>Timestamp</DetailsRowLabel>
        <DetailsRowInfo>{formatTimestamp(block)}</DetailsRowInfo>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>Gas Limit</DetailsRowLabel>
        <DetailsRowInfo>{formatGasLimit(block)} Gwei</DetailsRowInfo>
      </DetailsRow>

      <DetailsRow>
        <DetailsRowLabel>Gas Used</DetailsRowLabel>
        <DetailsRowInfo>{formatGasUsed(block)}</DetailsRowInfo>
      </DetailsRow>

      {!!block.baseFeePerGas && (
        <DetailsRow>
          <DetailsRowLabel>Base Fee Per Gas</DetailsRowLabel>
          <DetailsRowInfo>{formatBaseFeePerGas(block)}</DetailsRowInfo>
        </DetailsRow>
      )}

      {!!block.baseFeePerGas && (
        <DetailsRow>
          <DetailsRowLabel>Burnt fees</DetailsRowLabel>
          <DetailsRowInfo>{formatBurntFees(block)}</DetailsRowInfo>
        </DetailsRow>
      )}
    </Details>
  )
}
