"use client"

import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full bg-slate-100 fixed top-0">
      <div className="wrapper flex px-6 py-4 items-center justify-between">
        <Link href="/">
          <h1 className="font-extrabold text-slate-950 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">MiniProject</h1>
        </Link>

        <SignedOut>
          <Button 
            asChild 
            className="rounded-full bg-purple-500 hover:bg-purple-700"
            size="lg"
          >
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        </SignedOut>

        <SignedIn>
          <Nav />
          <div className="hidden md:flex">
            <UserButton afterSignOutUrl="/" />
          </div>
          <MobileNav />
        </SignedIn>
      </div>      
    </header>
  )
}

export default Header