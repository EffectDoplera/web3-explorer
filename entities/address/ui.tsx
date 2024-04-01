import { FC } from 'react'

interface AddressProps {
  hash: string
}

export const Address: FC<AddressProps> = ({ hash }) => (
  <>
    <div>Address</div>
    <div>{hash}</div>
  </>
)
