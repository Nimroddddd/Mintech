"use client"
import Account from "./Account"
import Wishlist from "./Wishlist"
import Cart from "./Cart"
import Link from "next/link"
import Logout from "./Logout"
import { DynaPuff } from "next/font/google"
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react"


const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function Header() {

  const [logged, setLogged] = useState(false)
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
  
  
  return (
    <div className="py-5 px-11 flex justify-between w-full bg-background shadow-2xl text-black sticky top-0">
      <ul className="flex gap-4 text-xl">
        <li><Link href="/">Home</Link></li>
        <li>Shop</li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <h2 className={`${dynapuff.className} text-2xl`}>Mintech</h2>
      <ul className="flex gap-4">
        <Link href="/login"><Account /></Link>
        <Wishlist />
        <Cart />
        {logged && <Link href="" onClick={logout}><Logout /></Link>}
      </ul>
    </div>
  )
}