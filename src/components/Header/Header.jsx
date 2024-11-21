"use client"
import Account from "./Account"
import Wishlist from "./Wishlist"
import Cart from "./Cart"
import Link from "next/link"
import Logout from "./Logout"
import { DynaPuff } from "next/font/google"
import { useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import DisplayCart from "./Cart/DisplayCart"
import { useAuth } from "../auth/AuthContext"
import { useCartStore } from "@/controllers/store"


const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function Header() {

  const { logged, checkLogged } = useAuth()
  const [dropped, setDropped] = useState(false)
  const { displayCart, setDisplayCart } = useCartStore()

  useEffect(() => {
    checkLogged();

  }, [])

  function logout() {
    setTimeout(checkLogged, 1000)
  }
  

  function DropdownHeader() {
    return (
      <ul className="flex flex-col w-screen items-start gap-2 px-6 text-xl py-5 bg-background">
        <li onClick={handleDrop}><Link href="/">Home</Link></li>
        <li onClick={handleDrop}><Link href="/shop/phones">Shop</Link></li>
        <li onClick={handleDrop}><Link href="https://aminabdulkabir.netlify.app">About us</Link></li>
        <li onClick={handleDrop}>Contact</li>
        <Link href="/login" onClick={handleDrop}><Account /></Link>
      </ul>
    )
  }
  
  function handleDrop(){
    setDropped(prev => !prev)
  }
  
  return (
    <div>
      <div className="py-5 px-5 md:px-11 flex justify-between w-full bg-background shadow-2xl text-black">
        <ul className="gap-4 text-base lg:text-xl hidden md:flex">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop/phones">Shop</Link></li>
          <li><Link href="https://aminabdulkabir.netlify.app">About us</Link></li>
          <li>Contact</li>
        </ul>
        <h2 className={`${dynapuff.className} text-2xl`}>Mintech</h2>
        <ul className="flex gap-2 sm:gap-4 text-base lg:text-xl">
          <div className="hidden md:block"><Link href="/login"><Account /></Link></div>
          <Wishlist />
          <div onClick={() => setDisplayCart()}><Link href=""><Cart active={displayCart} /></Link></div>
          {logged && <Link href="" onClick={logout}><Logout /></Link>}
          <div className="px-2 py-1 bg-foreground text-white md:hidden" onClick={handleDrop}>{dropped ? <ExpandLessIcon /> : <MenuIcon />}</div>
        </ul>
      </div>
      {dropped && <DropdownHeader />}
      {displayCart && <DisplayCart />}
    </div>
  )
}