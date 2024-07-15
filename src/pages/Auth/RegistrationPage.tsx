import { RegistrationForm } from 'pages/Auth/RegistrationForm.tsx'
import { MainLayout } from 'pages/layout/MainLayout.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from 'app/identity/auth/AuthProvider.tsx'
import { useTranslation } from 'react-i18next'

export const RegistrationPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    navigate('/')
  }

  return (
    <MainLayout>
      <div className="flex h-4/5 w-full flex-col items-center justify-center">
        <RegistrationForm />
        <div className="mt-4 text-center text-sm">
          {t('registration.alreadyHaveAccount')}{' '}
          <Link to="/login" className="underline">
            {t('login.signIn')}
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
