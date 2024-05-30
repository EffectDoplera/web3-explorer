'use server'

import { getHashType } from '@/shared/lib'
import { redirect } from 'next/navigation'
import { createServerAction } from 'zsa'
import { SearchBySchema } from './schema'

export const searchBy = createServerAction()
  .input(SearchBySchema)
  .onInputParseError(async (error) => {
    return error
  })
  .handler(async ({ input: { block } }) => {
    const hashType = getHashType(block)
    // TODO: add error
    if (hashType === 'unknown') return
    redirect(`/${hashType}/${block}`)
  })
