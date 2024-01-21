import Collections from "@/components/Collections"
import Hero from "@/components/Hero"
import { currentUser } from "@clerk/nextjs"

export default async function Page() {
  const user = await currentUser()

  const userId = user?.id as string

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <Hero />
      <Collections userId={userId} />
    </div>
  )
}