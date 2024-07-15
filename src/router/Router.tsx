import { AboutPage } from 'pages/About/AboutPage'
import { HomePage } from 'pages/Home/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from 'pages/NotFound/NotFoundPage.tsx'
import { LoginPage } from 'pages/Auth/LoginPage.tsx'
import { withGuard } from 'router/ProtectedRoute.tsx'
import { RegistrationPage } from 'pages/Auth/RegistrationPage.tsx'
import { PasswordlessPage } from 'pages/Auth/PasswordlessPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegistrationPage /> },
  { path: '/passwordless', element: <PasswordlessPage /> },
  { path: '/about', element: withGuard(AboutPage) },
  { path: '*', element: <NotFoundPage /> }
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
