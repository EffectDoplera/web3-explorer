interface CoinGeckoResponse {
  'matic-network': {
    usd: number
  }
}

export async function getMaticPrice(): Promise<number> {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd',
    { next: { revalidate: 60 } }
  ) // revalidate every 60 seconds
  const data: CoinGeckoResponse = await response.json()
  return data['matic-network'].usd
}
