export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
      {children}
    </div>
  )
}