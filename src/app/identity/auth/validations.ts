import { z, ZodType } from 'zod'

export type LoginPayload = {
  email: string
  password: string
}

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long')
}) satisfies ZodType<LoginPayload>

export type RegistrationPayload = LoginPayload & {
  passwordConfirmation: string
}

export const RegistrationSchema: ZodType<RegistrationPayload> = LoginSchema.extend({
  passwordConfirmation: z.string()
}).refine((data: RegistrationPayload) => data.passwordConfirmation === data.password, {
  message: 'Passwords do not match'
})

export type PasswordlessPayload = Pick<LoginPayload, 'email'>

export const PasswordlessSchema: ZodType<PasswordlessPayload> = LoginSchema.pick({ email: true })
