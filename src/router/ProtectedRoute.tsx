import { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '@/app/identity/auth/AuthProvider.tsx'
import { useNavigate } from 'react-router-dom'

interface ProtectedRouteProps extends PropsWithChildren<{}> {}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  useGuard()

  return <>{children}</>
}

// eslint-disable-next-line react-refresh/only-export-components
export const withGuard = (Component: () => JSX.Element) => {
  return (
    <ProtectedRoute>
      <Component />
    </ProtectedRoute>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGuard = () => {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn])
}
