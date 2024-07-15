import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card.tsx'
import { Label } from '@/components/ui/label.tsx'
import { Input } from '@/components/ui/input.tsx'
import { ErrorLabel } from '@/components/ui/ErrorLabel.tsx'
import { Button } from '@/components/ui/button.tsx'
import { RegistrationPayload, RegistrationSchema } from '@/app/identity/auth/validations.ts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'
import { PasswordlessLink } from '@/pages/Auth/PasswordlessLink.tsx'

export const RegistrationForm = () => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationPayload>({ resolver: zodResolver(RegistrationSchema) })

  const onRegister = (data: RegistrationPayload) => {
    console.log({ data })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{t('registration.title')}</CardTitle>
        <CardDescription>{t('registration.subtitle')}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onRegister)}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              {...register('email')}
            />
            <ErrorLabel error={errors.email} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{t('password')}</Label>
            <Input id="password" type="password" required {...register('password')} />
            <ErrorLabel error={errors.password} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="passwordConfirmation">{t('registration.confirmPassword')}</Label>
            <Input id="password" type="password" required {...register('passwordConfirmation')} />
            <ErrorLabel error={errors.passwordConfirmation} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" type="submit">
            {t('registration.signUp')}
          </Button>
          <PasswordlessLink label={t('passwordlessLink')} />
        </CardFooter>
      </form>
    </Card>
  )
}
