export const formatValue = (number: number) =>
  `${Intl.NumberFormat('us', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'long',
  })
    .format(number)
    .toString()}`
