import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 p-4">
      <h1>404 Not Found</h1>
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </div>
  )
}
