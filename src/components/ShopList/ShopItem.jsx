import Link from "next/link"
import { getCookie, setCookie } from "cookies-next"
import axios from "axios"
import { useEffect, useState } from "react"

function PhoneItem({item, index}) {

  const api = process.env.NEXT_PUBLIC_API_URL
  const [added, setAdded] = useState(false)


  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  useEffect(checkCart)

  async function handleAdd() {
    let currentCart = []
    currentCart = getCookie("cart")
    if (currentCart) {
      if (!currentCart.includes(item.product_id)){
        const newCart = JSON.parse(currentCart)
        newCart.push(item.product_id);
        setCookie("cart", newCart)
      }
    } else {
      setCookie("cart", [item.product_id])
    }
    checkCart()
    await axios.get(`${api}add-to-cart/${item.product_id}`, {withCredentials: true})
  }

  async function handleRemove() {
    const currentCart = getCookie("cart") || [];
    const parsedCart = JSON.parse(currentCart);
    const filteredCart = parsedCart.filter(product => product != item.product_id)
    setCookie("cart", filteredCart);
    await axios.delete(`${api}delete-from-cart/${item.product_id}`, {withCredentials: true})
    checkCart()
  }


  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[300px] w-52 shadow-xl" style={{backgroundImage: `url("/phones/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button onClick={added ? handleRemove : handleAdd} className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor">{!added ? "Add To Cart" : "Remove From Cart"}</button>
        <button className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>
    </div>
  )
}

function TVItem({item, index}) {

  const api = process.env.NEXT_PUBLIC_API_URL
  const [added, setAdded] = useState(false)


  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  useEffect(checkCart)

  async function handleAdd() {
    let currentCart = []
    currentCart = getCookie("cart")
    if (currentCart) {
      if (!currentCart.includes(item.product_id)){
        const newCart = JSON.parse(currentCart)
        newCart.push(item.product_id);
        setCookie("cart", newCart)
      }
    } else {
      setCookie("cart", [item.product_id])
    }
    checkCart()
    await axios.get(`${api}add-to-cart/${item.product_id}`, {withCredentials: true})
  }

  async function handleRemove() {
    const currentCart = getCookie("cart") || [];
    const parsedCart = JSON.parse(currentCart);
    const filteredCart = parsedCart.filter(product => product != item.product_id)
    setCookie("cart", filteredCart);
    await axios.delete(`${api}delete-from-cart/${item.product_id}`, {withCredentials: true})
    checkCart()
  }



  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/televisions/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button onClick={added ? handleRemove : handleAdd} className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor">{!added ? "Add To Cart" : "Remove From Cart"}</button>
        <button className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>
    </div>
  )
}

function LaptopItem({item, index}) {

  const api = process.env.NEXT_PUBLIC_API_URL
  const [added, setAdded] = useState(false)


  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  useEffect(checkCart)

  async function handleAdd() {
    let currentCart = []
    currentCart = getCookie("cart")
    if (currentCart) {
      if (!currentCart.includes(item.product_id)){
        const newCart = JSON.parse(currentCart)
        newCart.push(item.product_id);
        setCookie("cart", newCart)
      }
    } else {
      setCookie("cart", [item.product_id])
    }
    checkCart()
    const response = await axios.get(`${api}add-to-cart/${item.product_id}`, {withCredentials: true})
    console.log(response)
  }

  async function handleRemove() {
    const currentCart = getCookie("cart") || [];
    const parsedCart = JSON.parse(currentCart);
    const filteredCart = parsedCart.filter(product => product != item.product_id)
    setCookie("cart", filteredCart);
    await axios.delete(`${api}delete-from-cart/${item.product_id}`, {withCredentials: true})
    checkCart()
  }

  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/laptops/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button onClick={added ? handleRemove : handleAdd} className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor">{!added ? "Add To Cart" : "Remove From Cart"}</button>
        <button className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>    
    </div>
  )
}

function SmartwatchItem({item, index}) {

  const api = process.env.NEXT_PUBLIC_API_URL
  const [added, setAdded] = useState(false)


  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  useEffect(checkCart)

  async function handleAdd() {
    let currentCart = []
    currentCart = getCookie("cart")
    if (currentCart) {
      if (!currentCart.includes(item.product_id)){
        const newCart = JSON.parse(currentCart)
        newCart.push(item.product_id);
        setCookie("cart", newCart)
      }
    } else {
      setCookie("cart", [item.product_id])
    }
    checkCart()
    const response = await axios.get(`${api}add-to-cart/${item.product_id}`, {withCredentials: true})
    console.log(response)
  }

  async function handleRemove() {
    const currentCart = getCookie("cart") || [];
    const parsedCart = JSON.parse(currentCart);
    const filteredCart = parsedCart.filter(product => product != item.product_id)
    setCookie("cart", filteredCart);
    await axios.delete(`${api}delete-from-cart/${item.product_id}`, {withCredentials: true})
    checkCart()
  }


  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/smartwatches/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button onClick={added ? handleRemove : handleAdd} className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor">{!added ? "Add To Cart" : "Remove From Cart"}</button>
        <button className="bg-foreground py-2 px-1 flex-auto rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>    
    </div>
  )
}

export default function ListDevices({devices, category}) {
  if (category == "phones") {
    return <>{devices.map((item, index) => <PhoneItem key={index} item={item} index={index} />)}</>;
  } else if (category == "laptops") {
    return <>{devices.map((item, index) => <LaptopItem key={index} item={item} index={index} />)}</>;
  } else if (category == "televisions") {
    return <>{devices.map((item, index) => <TVItem key={index} item={item} index={index} />)}</>;
  } else if (category == "smartwatches") {
    return <>{devices.map((item, index) => <SmartwatchItem key={index} item={item} index={index} />)}</>;
  }

}

