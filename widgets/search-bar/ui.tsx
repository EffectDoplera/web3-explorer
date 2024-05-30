'use client'

import { useServerActionMutation } from '@/shared/hooks'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { searchBy } from './api'
import { SearchBySchema } from './schema'

type FormData = z.infer<typeof SearchBySchema>

export const SearchBar = () => {
  const form = useForm<FormData>({
    defaultValues: {
      block: '',
    },
  })

  const { mutate, error } = useServerActionMutation(searchBy, {
    mutationKey: ['searchBy'],
  })

  const onSubmit = (input: FormData) => {
    mutate(input, {
      onError(error) {
        Object.entries(error.fieldErrors).forEach(([key, value]) =>
          form.setError(key, {
            message: value[0],
          }),
        )
      },
    })

    if (!error) form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="block"
          render={({ field }) => (
            <FormItem className="space-y-0 relative">
              <MagnifyingGlassIcon className="h-4 w-4 absolute top-3 left-3 text-muted-foreground" />
              <FormControl>
                <Input
                  placeholder="Search by address / Txn Hash / Block"
                  className="placeholder-shown:truncate pl-9"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
