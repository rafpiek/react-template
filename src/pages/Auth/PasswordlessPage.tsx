import { MainLayout } from 'pages/layout/MainLayout.tsx'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'app/identity/auth/AuthProvider.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { PasswordlessForm } from 'pages/Auth/PasswordlessForm.tsx'

export const PasswordlessPage = () => {
  const { t } = useTranslation()
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  if (isLoggedIn) navigate('/')
  return (
    <MainLayout>
      <div className="prose flex h-4/5 flex-col items-center justify-center gap-4">
        <PasswordlessForm />
        <div className="mt-4 text-center text-sm">
          <Link to="/login" className="underline">
            {t('standardLogin')}
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}
