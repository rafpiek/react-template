import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const useLanguage = () => {
  const { i18n } = useTranslation()

  const switchLanguage = (lang: Language) => {
    i18n.changeLanguage(lang)
  }

  const language = i18n.language === 'null' ? Language.English : (i18n.language as Language)

  return {
    language,
    switchLanguage
  }
}

enum Language {
  English = 'en',
  Polish = 'pl'
}

export const LanguageSwitcher = () => {
  const { switchLanguage, language } = useLanguage()

  const switchToEnglish = () => {
    switchLanguage(Language.English)
  }

  const switchToPolish = () => {
    switchLanguage(Language.Polish)
  }

  const LANGUAGES = {
    en: { flag: '🇬🇧', name: 'English', toggle: switchToEnglish },
    pl: { flag: '🇵🇱', name: 'Polski', toggle: switchToPolish }
  }

  const currentFlag = useMemo(() => {
    try {
      return LANGUAGES[language].flag
    } catch {
      return LANGUAGES.en.flag
    }
  }, [language])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <span>{currentFlag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.values(LANGUAGES).map(({ flag, name, toggle }) => (
          <DropdownMenuItem key={name} onClick={toggle}>
            <div className="flex items-center gap-2">
              <span>{flag}</span>
              <span>{name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
