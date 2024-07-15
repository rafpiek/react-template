import { MainLayout } from 'pages/layout/MainLayout.tsx'
import { useAuth } from 'app/identity/auth/AuthProvider.tsx'
import { LoginForm } from 'pages/Auth/LoginForm.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PasswordlessLink } from "pages/Auth/PasswordlessLink.tsx"

export const LoginPage = () => {
  const { t } = useTranslation()
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  if (isLoggedIn) {
    navigate('/')
  }

  return (
    <MainLayout>
      <div className="flex h-4/5 w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            {t('login.dontHaveAccount')}{' '}
            <Link to="/register" className="underline">
              {t('registration.signUp')}
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
