import { TopNavbar } from '@/components/navigation/TopNavbar'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface MainLayoutProps extends PropsWithChildren<{}> {
  containerClassName?: string
}

export const MainLayout = ({ children, containerClassName }: MainLayoutProps) => {
  const containerClass = twMerge('w-full h-full', containerClassName)
  return (
    <main className="mx-auto h-screen max-w-7xl p-4">
      <TopNavbar />
      <div className={containerClass}>{children}</div>
    </main>
  )
}
