"use client"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { cartQuery } from "@/controllers/api"


export default function ProductDetail({productid}) {
  const api = process.env.NEXT_PUBLIC_API_URL
  const [productData, setProductData] = useState(null)
  const [added, setAdded] = useState(false)

  const checkCart = () => {
    const currentCart = getCookie("cart");
    if (currentCart.includes(productid)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  function handleAdd() {
    cartQuery.handleAdd(productid)
    checkCart()
  }

  function handleRemove() {
    cartQuery.handleRemove(productid)
    checkCart()
  }

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${api}product/${productid}`)
        setProductData(response.data)
      } catch (err) {
        console.error("Error fetching product details: ", err)
      }
    }

    fetchProductData()
  }, [productid, api])

  useEffect(checkCart)

  if(!productData) {
    return <div>Loading...</div>
  }

  const {category, name, price, img, description} = productData;

  return(
    <div className="flex flex-col md:flex-row py-5 px-5 gap-10 mt-20">
      <div className="basis-full flex items-center justify-center">
        <img src={`/${category}/${img}`} className="" />
      </div>
      <div className="basis-full flex flex-col px-10">
        <p className="text-2xl mb-4 font-bold">{name}</p>
        <p className="text-xl font-bold mb-6">${price}</p>
        <hr />
        <p className="mt-6">{description}</p>
        <div className="flex flex-row gap-2 w-[60%]">
          <button onClick={added ? handleRemove : handleAdd} className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">{!added ? "Add To Cart" : "Remove From Cart"}</button>
          <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Buy Now</button>
        </div>
        <p className="font-bold text-xl mt-12 mb-5">Shipping options</p>
        <p><span className="font-bold">Fast delivery: </span>Delivery between 5-7 days.</p>
        <p><span className="font-bold">Fast delivery: </span>Delivery between 5-7 days.</p>
        <p><span className="font-bold">Fast delivery: </span>Delivery between 5-7 days.</p>
      </div>
    </div>
  )
}