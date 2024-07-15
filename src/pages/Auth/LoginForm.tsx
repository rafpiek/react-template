import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/app/identity/auth/AuthProvider.tsx'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginPayload, LoginSchema } from '@/app/identity/auth/validations.ts'
import { ErrorLabel } from '@/components/ui/ErrorLabel.tsx'
import { useTranslation } from 'react-i18next'
import { PasswordlessLink } from '@/pages/Auth/PasswordlessLink.tsx'

export function LoginForm() {
  const { t } = useTranslation()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPayload>({ resolver: zodResolver(LoginSchema) })

  const onLogin = (data: LoginPayload) => {
    console.log({ data })
    login()
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>{t('login.subtitle')}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onLogin)}>
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
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" type="submit">
            {t('login.signIn')}
          </Button>
          <PasswordlessLink label={t('passwordlessLink')} />
        </CardFooter>
      </form>
    </Card>
  )
}
