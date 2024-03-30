import { Hash, isAddress, isHex } from 'viem'

export const getHashType = (hash: Hash | string) => {
  if (isAddress(hash)) return 'address'
  if (isHex(hash)) return 'transaction'
  // A block number is a positive integer
  if (Number.isInteger(Number(hash)) && Number(hash) >= 0) return 'block'
  return 'unknown'
}
