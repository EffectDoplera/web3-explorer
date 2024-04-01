'use client'

import { getHashType } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  block: z.string().min(2, {
    message: 'must be at least 2 characters.',
  }),
})

type FormData = z.infer<typeof FormSchema>

export const SearchBar = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      block: '',
    },
  })

  const router = useRouter()

  const onSubmit = ({ block }: FormData) => {
    const hashType = getHashType(block)
    if (hashType === 'unknown') return
    router.push(`/${hashType}/${block}`)
  }

  return (
    <Form {...form}>
      <form action="" method="POST" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="block"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center overflow-hidden shadow-warning border-2 border-dark-100">
                  <Input
                    placeholder="Search for an address, transaction hash, or block number"
                    className="rounded-none border-r-2 placeholder-shown:truncate"
                    {...field}
                  />
                  <Button type="submit" variant="outline" size="icon" className="rounded-none">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
