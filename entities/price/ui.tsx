import { Details } from "@/shared/ui/details"
import { getMaticPrice } from "./api"

export const CurrentPriceOverview = async () => {
  const price = await getMaticPrice()

  return (
    <Details
      title="matic price"
    >
      {new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)}
    </Details>
  )
}