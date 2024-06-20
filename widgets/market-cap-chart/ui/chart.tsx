'use client'

import { Details } from '@/shared/ui/details'
import { CalendarIcon } from '@radix-ui/react-icons'
import { LineChart } from '@tremor/react'
import { FC } from 'react'
import { formatValue } from '../lib'

interface ChartProps {
  data: {
    date: string
    matic: number
  }[]
}

export const Chart: FC<ChartProps> = ({ data }) => (
  <Details image={<CalendarIcon width={20} height={20} />} title="matic market cap history in 30 days">
    <LineChart
      data={data}
      index="date"
      categories={['matic']}
      colors={['fuchsia']}
      valueFormatter={formatValue}
      yAxisWidth={60}
      className="h-96 sm:block"
      autoMinValue
      showAnimation
    />
  </Details>
)
