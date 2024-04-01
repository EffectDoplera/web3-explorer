import { cache } from 'react'

interface CoinGeckoResponse {
  'matic-network': {
    usd: number
  }
}

export const getMaticPrice = cache(async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd', {
    next: { revalidate: 60 },
  }) // revalidate every 60 seconds
  const data: CoinGeckoResponse = await response.json()
  return data['matic-network'].usd
})
