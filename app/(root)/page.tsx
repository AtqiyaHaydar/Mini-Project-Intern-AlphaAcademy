import Collections from "@/components/Collections"
import Hero from "@/components/Hero"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <Hero />
      <Collections />
    </div>
  )
}