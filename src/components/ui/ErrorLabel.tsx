export const ErrorLabel = ({ error }: { error: any }) => {
  if (!error) return null
  return <span className="text-red-500">{error.message as string}</span>
}
