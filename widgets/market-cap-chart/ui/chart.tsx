'use client'

import { Details } from '@/shared/ui/details'
import { LineChart } from '@tremor/react'
import { FC } from 'react'

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'long',
  })
    .format(number)
    .toString()}`

interface ChartProps {
  data: {
    date: string
    matic: number
  }[]
}

export const Chart: FC<ChartProps> = async ({ data }) => {
  return (
    <Details title="matic market cap history in 30 days">
      <LineChart
        data={data}
        index="date"
        categories={['matic']}
        colors={['fuchsia']}
        valueFormatter={valueFormatter}
        yAxisWidth={55}
        className="h-96 sm:block"
        autoMinValue
      />
    </Details>
  )
}
