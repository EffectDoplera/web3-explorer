import { Address } from 'viem'

export const cropFormatAddress = (address: Address) =>
  `${address.substring(0, 8)}...${address.substring(address.length - 8, address.length)}`
