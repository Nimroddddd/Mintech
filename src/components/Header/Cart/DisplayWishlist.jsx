"use client"
import { useEffect, useState } from "react"
import WishlistItem from "./WishlistItem"
import { wishlistQuery } from "@/controllers/api"
import { useCartStore } from "@/controllers/store"


export default function DisplayCart() {


  const [wishlist, setWishlist] = useState([])
  const { setWishCount } = useCartStore()

  async function checkWishlist() {
    const { filteredResult:newWishlist, count} = await wishlistQuery.handleCheck()
    setWishlist(newWishlist)
    setWishCount(count)
  }

  useEffect(() => {
    checkWishlist()
  }, [])

  function ListCart(item, index) {
    return (
      <WishlistItem product={item} key={index} updated={checkWishlist} />
    )
  }


  return (
    <div className="flex justify-end w-full h-screen bg-black bg-opacity-50 absolute duration-300">
      <div className="flex flex-col items-center bg-background  min-w-full sm:min-w-[460px]">
        <div className="w-full max-h-[70vh] text-center overflow-y-scroll">
          <p className="text-2xl mb-5">My Wishlist</p>
          <hr />
          {wishlist.map(ListCart)}
        </div>
      </div>
    </div>
  )
}