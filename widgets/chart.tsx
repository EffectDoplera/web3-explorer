'use client'

import { Details } from '@/shared/ui/details';
import { LineChart } from '@tremor/react'

const data = [
  {
    date: 'Aug 01',
    'MATIC': 7943.2,
  },
  {
    date: 'Aug 02',
    'MATIC': 8954.1,
  },
  {
    date: 'Aug 03',
    'MATIC': 9123.7,
  },
  {
    date: 'Aug 04',
    'MATIC': 7478.4,
  },
  {
    date: 'Aug 05',
    'MATIC': 9504.3,
  },
  {
    date: 'Aug 06',
    'MATIC': 9943.4,
  },
  {
    date: 'Aug 07',
    'MATIC': 10112.2,
  },
  {
    date: 'Aug 08',
    'MATIC': 10290.2,
  },
  {
    date: 'Aug 09',
    'MATIC': 10349.6,
  },
  {
    date: 'Aug 10',
    'MATIC': 10415.4,
  },
  {
    date: 'Aug 11',
    'MATIC': 10636.3,
  },
  {
    date: 'Aug 12',
    'MATIC': 10900.5,
  },
  {
    date: 'Aug 13',
    'MATIC': 11040.4,
  },
  {
    date: 'Aug 14',
    'MATIC': 11390.5,
  },
  {
    date: 'Aug 15',
    'MATIC': 11423.1,
  },
  {
    date: 'Aug 16',
    'MATIC': 12134.4,
  },
  {
    date: 'Aug 17',
    'MATIC': 12034.4,
  },
  {
    date: 'Aug 18',
    'MATIC': 11011.7,
  },
  {
    date: 'Aug 19',
    'MATIC': 11834.8,
  },
  {
    date: 'Aug 20',
    'MATIC': 12387.1,
  },
  {
    date: 'Aug 21',
    'MATIC': 11032.2,
  },
  {
    date: 'Aug 22',
    'MATIC': 10134.2,
  },
  {
    date: 'Aug 23',
    'MATIC': 9921.2,
  },
  {
    date: 'Aug 24',
    'MATIC': 10549.8,
  },
  {
    date: 'Aug 25',
    'MATIC': 10968.4,
  },
  {
    date: 'Aug 26',
    'MATIC': 11059.1,
  },
  {
    date: 'Aug 27',
    'MATIC': 11903.6,
  },
  {
    date: 'Aug 28',
    'MATIC': 12143.3,
  },
  {
    date: 'Aug 29',
    'MATIC': 12930.1,
  },
  {
    date: 'Aug 30',
    'MATIC': 13420.5,
  },
  {
    date: 'Aug 31',
    'MATIC': 14443.2,
  },
]

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export const Chart = () => (
  <Details title="matic market cap history in 30 days">
    <LineChart
      data={data}
      index="date"
      categories={[
        'MATIC',
      ]}
      colors={['fuchsia']}
      valueFormatter={valueFormatter}
      yAxisWidth={55}
      className="h-96 sm:block"
    />
  </Details>
)