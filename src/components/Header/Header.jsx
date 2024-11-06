"use client"
import Account from "./Account"
import Wishlist from "./Wishlist"
import Cart from "./Cart"
import Link from "next/link"
import Logout from "./Logout"
import { DynaPuff } from "next/font/google"
import { useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';
import DisplayCart from "./Cart/DisplayCart"
import { useAuth } from "../auth/AuthContext"


const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function Header() {

  const { logged, checkLogged } = useAuth()
  const [dropped, setDropped] = useState(false)
  const [cart, setCart] = useState(false)

  useEffect(() => {
    checkLogged();

  }, [])

  function logout() {
    setTimeout(checkLogged, 1000)
  }
  

  function DropdownHeader() {
    return (
      <ul className="flex flex-col w-screen items-start gap-2 px-6 text-xl py-5">
        <li onClick={handleDrop}><Link href="/">Home</Link></li>
        <li onClick={handleDrop}>Shop</li>
        <li onClick={handleDrop}>About us</li>
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
          <li>Shop</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <h2 className={`${dynapuff.className} text-2xl`}>Mintech</h2>
        <ul className="flex gap-4 text-base lg:text-xl">
          <div className="hidden md:block"><Link href="/login"><Account /></Link></div>
          <Wishlist />
          <div onClick={() => {setCart(prev => !prev)}}><Link href=""><Cart /></Link></div>
          {logged && <Link href="" onClick={logout}><Logout /></Link>}
          <div className="px-2 py-1 bg-foreground text-white md:hidden" onClick={handleDrop}>{dropped ? <ExpandLessIcon /> : <MenuIcon />}</div>
        </ul>
      </div>
      {dropped && <DropdownHeader />}
      {cart && <DisplayCart />}
    </div>
  )
}