import { cache } from 'react'

interface MarketCapResponse {
  prices: [[number, number]]
  market_caps: [[number, number]]
  total_volumes: [[number, number]]
}

export const getMonthMarketCap = cache(async () => {
  const from = new Date()
    .setMonth(new Date().getMonth() - 1)
    .toString()
    .substring(0, 10)
  const to = Date.now().toString().substring(0, 10)
  const response = await fetch(
    `https://pro-api.coingecko.com/api/v3/coins/matic-network/market_chart/range?vs_currency=usd&from=${from}&to=${to}&x_cg_pro_api_key=CG-UoA6PMzX1NVNWVnseK3Soy8T`,
  )
  const { market_caps }: MarketCapResponse = await response.json()
  return market_caps.map(([date, price]) => ({
    date: new Intl.DateTimeFormat('en', {
      dateStyle: 'medium',
      timeZone: 'UTC',
    }).format(date),
    matic: price,
  }))
})
