import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  )
}