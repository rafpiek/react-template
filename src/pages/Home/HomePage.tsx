import { Subheader } from "pages/Home/Subheader"
export const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto p-4">
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-center">Start your new great project</h1>
        <Subheader />
      </div>
    </main>
  )
}
