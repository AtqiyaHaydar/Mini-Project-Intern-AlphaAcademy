import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <Toaster />
      <Footer />
    </main>
  )
}