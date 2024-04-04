import { getMonthMarketCap } from '../api'
import { Chart } from './chart'

export const MarketCapChart = async () => {
  const data = await getMonthMarketCap()

  return <Chart data={data} />
}
