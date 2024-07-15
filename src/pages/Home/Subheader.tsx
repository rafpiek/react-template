import { useTranslation } from 'react-i18next'

export const Subheader = () => {
  const { t } = useTranslation()
  return <h2>{t('subtitle')}</h2>
}
