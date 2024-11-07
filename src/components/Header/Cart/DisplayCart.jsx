"use client"
import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import Total from "./Total"
import axios from "axios"
import { getCookie } from "cookies-next"


export default function DisplayCart() {


  const [cart, setCart] = useState([])
  const api = process.env.NEXT_PUBLIC_API_URL

  async function checkLocalCart() {
    const currentCart = getCookie("cart");
    const parsedCart = currentCart ? JSON.parse(currentCart) : [];
    const response = await axios.post(`${api}get-public-cart`, parsedCart)
    const result = response.data
    setCart(result)
  }

  useEffect(() => {
    async function checkOnlineCart() {
      try {
        const response = await axios.get(`${api}get-cart`, {withCredentials: true})
        const newCart = response.data
        setCart(newCart)
      } catch {
        checkLocalCart()
      }
    }

    checkOnlineCart()
  }, [])

  function ListCart(item, index) {
    return (
      <CartItem product={item} key={index} removed={checkLocalCart} />
    )
  }

  return (
    <div className="flex justify-end w-full h-screen bg-black bg-opacity-50 absolute [z-10000]">
      <div className="flex flex-col items-center bg-background  min-w-full sm:min-w-[460px] z-[12313123]">
        <div className="w-full max-h-[70vh] text-center overflow-y-scroll">
          <p className="text-2xl mb-5">My Cart</p>
          <hr />
          {cart.map(ListCart)}
        </div>
        <Total />
      </div>
    </div>
  )
}