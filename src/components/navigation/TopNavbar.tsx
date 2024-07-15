import { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '@/app/identity/auth/AuthProvider.tsx'
import { ThemeToggle } from '@/components/ThemeProvider/ThemeToggle.tsx'
import { LanguageSwitcher } from '@/components/LanguageProvider/LanguageSwitcher.tsx'
import { useTranslation } from 'react-i18next'

export const TopNavbar = () => {
  const { isLoggedIn, logout, user } = useAuth()
  const { t } = useTranslation()

  return (
    <nav className="flex flex-row justify-between gap-4">
      <div className="flex flex-row items-center gap-4">
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/editor">Editor</NavigationLink>
        {isLoggedIn ? (
          <>
            <button onClick={logout}>{t('logout')}</button>
            <span>
              Logged in as {user.email} {isLoggedIn.toString()}
            </span>
          </>
        ) : (
          <NavigationLink to="/login">{t('login.title')}</NavigationLink>
        )}
      </div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  )
}

interface NavigationLinkProps extends PropsWithChildren {
  to: string
}

const NavigationLink = ({ to, children }: NavigationLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return [isActive ? 'font-bold text-sky-500 underline' : ''].join(' ')
      }}
      to={to}>
      {children}
    </NavLink>
  )
}
