import { PropsWithChildren, useEffect, createContext, useContext, useState } from 'react'
import { FakeUser, User } from 'app/identity/FakeUser.ts'
import { AuthRepository, AuthStatus } from './AuthRepository'
import { Result } from 'infra/Result.tsx'

interface IAuthContext {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
  checkAuth: () => void
  user: User
}

const AuthContext = createContext<IAuthContext | unknown>(null)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const user = FakeUser.build()
  const authRepository = new AuthRepository()

  useEffect(() => {
    checkAuth()
  }, [])

  const login = async () => {
    setLoggedIn(true)
    authRepository.save({ isLoggedIn: true })
  }

  const logout = async () => {
    setLoggedIn(false)
    authRepository.save({ isLoggedIn: false })
  }

  const checkAuth = async () => {
    const auth: Result<AuthStatus> = await authRepository.fetch()
    setLoggedIn(auth.data.isLoggedIn)
  }

  const value = {
    isLoggedIn: loggedIn,
    login,
    logout,
    user,
    checkAuth
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext) as IAuthContext
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
