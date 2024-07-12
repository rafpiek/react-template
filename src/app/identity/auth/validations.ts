import { z, ZodType } from 'zod'

export const LoginSchema: ZodType<FormData> = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required')
})
