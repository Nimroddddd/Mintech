"use client"
import Account from "./Account"
import Wishlist from "./Wishlist"
import Cart from "./Cart"
import Link from "next/link"
import Logout from "./Logout"
import { DynaPuff } from "next/font/google"
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';


const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function Header() {

  const [logged, setLogged] = useState(false)
  const [dropped, setDropped] = useState(false)

  useEffect(() => {
    checkLogged()
  }, [logged])

  function checkLogged() {
    const currentCookie = getCookie('jwt')
    if(currentCookie) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }

  function logout() {
    setTimeout(checkLogged, 1000)
  }
  setInterval(checkLogged, 3000)

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
      <div className="py-5 px-5 md:px-11 flex justify-between w-full bg-background shadow-2xl text-black sticky top-0">
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
          <Cart />
          {logged && <Link href="" onClick={logout}><Logout /></Link>}
          <div className="px-2 py-1 bg-foreground text-white md:hidden" onClick={handleDrop}>{dropped ? <ExpandLessIcon /> : <MenuIcon />}</div>
        </ul>
      </div>
      {dropped && <DropdownHeader />}
    </div>
  )
}