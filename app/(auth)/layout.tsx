export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
      {children}
    </div>
  )
}