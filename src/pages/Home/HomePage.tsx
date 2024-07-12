import { Subheader } from 'pages/Home/Subheader'
import { MainLayout } from 'pages/layout/MainLayout'
import { Button } from 'components/ui/button'
import { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import { ApiClient } from "infra/http/ApiClient.ts"

export const HomePage = () => {
  const { t } = useTranslation()
  return (
    <MainLayout containerClassName="items-center justify-center">
      <h1 className="text-center">Start your new great project</h1>
      <h1 className="text-center">{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <Subheader />

      <p>{import.meta.env.VITE_API_URL}</p>
      <Button variant="default">Button</Button>
    </MainLayout>
  )
}
