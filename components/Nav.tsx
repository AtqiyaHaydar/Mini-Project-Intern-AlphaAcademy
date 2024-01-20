import { navItems } from "@/constants"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Nav = () => {
  const pathname = usePathname()
  
  return (
    <nav className="hidden md:flex">
      <ul className="flex flex-row justify-center items-center gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          
          return (
            <li key={item.path}>
              <Link href={item.path}>
                <span
                  className={`${isActive && "bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-extrabold text-xl"} transition-all hover:text-xl`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav