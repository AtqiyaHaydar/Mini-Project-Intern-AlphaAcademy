"use client"

import Link from "next/link"
import { navItems } from "@/constants"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import BarIcon from "./icons/BarIcon"
import { Separator } from "./ui/separator"
import { UserButton } from "@clerk/nextjs"

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <div className="md:hidden flex flex-row gap-6 items-center justify-center">
      <UserButton afterSignOutUrl="/" />
      <Sheet>
        <SheetTrigger>
          <BarIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <span className="font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text text-[18px]">
              Mini Project Alpha Academy
            </span>
          </SheetHeader>

          <Separator className="my-8" />

          <ul className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname == item.path

              return (
                <li key={item.path}>
                  <Link href={item.path}>
                    <span
                      className={`${isActive && "bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold text-xl"} transition-all hover:text-purple-500`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileNav