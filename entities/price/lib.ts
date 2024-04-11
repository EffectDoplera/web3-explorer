export const formatUSD = (price: number) =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
