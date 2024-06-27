import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRouter } from 'router/Router.tsx'
import { AuthProvider } from 'app/identity/auth/AuthProvider.tsx'
import { DependenciesProvider } from 'infra/DependencyContainer.tsx'
import { ThemeProvider } from 'components/ThemeProvider/ThemeProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import "infra/i18n"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider>
        <DependenciesProvider>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </DependenciesProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
