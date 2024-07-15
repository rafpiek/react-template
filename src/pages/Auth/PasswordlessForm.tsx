import { useTranslation } from 'react-i18next'
import { useAuth } from '@/app/identity/auth/AuthProvider.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card.tsx'
import { PasswordlessSchema, PasswordlessPayload } from '@/app/identity/auth/validations.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { ErrorLabel } from '@/components/ui/ErrorLabel.tsx'
import { Button } from '@/components/ui/button.tsx'

export const PasswordlessForm = () => {
  const { t } = useTranslation()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PasswordlessPayload>({ resolver: zodResolver(PasswordlessSchema) })

  const submitForm = (data: PasswordlessPayload) => {
    console.log({ data })
    login()
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t('passwordless.title')}</CardTitle>
        <CardDescription>{t('passwordless.subtitle')}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(submitForm)}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder="me@example.com"
              required
              {...register('email')}
            />
            <ErrorLabel error={errors.email} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            {t('passwordless.submit')}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
