import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'

interface PasswordlessLinkProps {
  label: string
}

export const PasswordlessLink = ({ label }: PasswordlessLinkProps) => {
  return (
    <Link to="/passwordless" className="w-full">
      <Button variant="outline" className="w-full">
        {label}
      </Button>
    </Link>
  )
}
