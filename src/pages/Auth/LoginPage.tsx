import { MainLayout } from 'pages/layout/MainLayout.tsx'
import { useAuth } from 'app/identity/auth/AuthProvider.tsx'
import { LoginForm } from 'pages/Auth/LoginForm.tsx'

export const LoginPage = () => {
  const { isLoggedIn, logout, user } = useAuth()

  return (
    <MainLayout>
      <div className="flex h-4/5 w-full flex-col items-center justify-center gap-4">
        {isLoggedIn ? (
          <>
            <button onClick={logout}>Logout</button>
            <h3>Logged in as user {user.email}</h3>
          </>
        ) : (
          <>
            <LoginForm />
          </>
        )}
      </div>
    </MainLayout>
  )
}
