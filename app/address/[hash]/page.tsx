import { Address } from '@/entities/address'
import { Suspense } from 'react'

interface AddressPageProps {
  params: {
    hash: string
  }
}

export default async function AddressPage({ params }: AddressPageProps) {
  const { hash } = params
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Address hash={hash} />
      </Suspense>
    </>
  )
}
