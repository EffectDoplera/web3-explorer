import { z } from 'zod'

export const SearchBySchema = z.object({
  // TODO: Add validation
  block: z.string().min(5, {
    message: 'Too short',
  }),
})
