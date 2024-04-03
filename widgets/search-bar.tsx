'use client'

import { getHashType } from '@/shared/lib'
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  // TODO: Add validation
  block: z.string().min(0, {
    message: '',
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
    form.reset()
  }

  return (
    <Form {...form}>
      <form action="" method="POST" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="block"
          render={({ field }) => (
            <FormItem>
              <MagnifyingGlassIcon className="h-4 w-4 relative top-9 left-3" color="#cbd5e1" />
              <FormControl>
                <Input
                  placeholder="Search by address / Txn Hash / Block"
                  className="relative placeholder-shown:truncate pl-9"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
