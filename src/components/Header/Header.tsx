"use client"
import Account from "./Account"
import Wishlist from "./Wishlist"
import Cart from "./Cart"
import Link from "next/link"
import { DynaPuff } from "next/font/google"

const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ['400', '700']
})

export default function Header() {

  // const [logged, setLogged] = useState(false)


  return (
    <div className="py-5 px-11 flex justify-between w-full bg-background shadow-2xl">
      <h2 className={`${dynapuff.className} text-2xl`}>Mintech</h2>
      <ul className="flex gap-4">
        <Link href="/login"><Account /></Link>
        <Wishlist />
        <Cart />
      </ul>
    </div>
  )
}