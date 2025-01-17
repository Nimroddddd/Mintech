import Link from "next/link"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import { cartQuery, wishlistQuery } from "@/controllers/api"
import { useCartStore } from "@/controllers/store"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function PhoneItem({item, index}) {

  const [added, setAdded] = useState(false)
  const [wishlistAdded, setWishlistAdded] = useState(false)
  const { count, setCount, wishCount, setWishCount } = useCartStore();

  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  function checkWishlist() {
    const currentWishlist = getCookie("wishlist") || []
    if (currentWishlist.includes(item.product_id)) {
      setWishlistAdded(true)
    } else {
      setWishlistAdded(false)
    }
  }

  useEffect(() => {
    checkCart();
    checkWishlist();
  })

  function handleAdd() {
    cartQuery.handleAdd(item.product_id)
    checkCart()
    setCount(count+1)
  }

  function handleRemove() {
    cartQuery.handleRemove(item.product_id)
    checkCart()
    setCount(count-1)
  }

  async function handleWishlistAdd() {
    await wishlistQuery.handleAdd(item.product_id)
    setWishCount(wishCount+1)
    checkWishlist()
  }

  async function handleWishlistRemove() {
    await wishlistQuery.handleRemove(item.product_id)
    setWishCount(wishCount-1)
    checkWishlist()
  }


  return (
    <div key={index}>
      <div className="relative bg-cover bg-center h-[300px] w-52 shadow-xl" style={{backgroundImage: `url("/phones/${item.img}")`}}>
        <div className={`border max-w-fit absolute top-5 right-1 rounded-full p-1 hover:scale-110 duration-300 ${wishlistAdded ? "bg-black" : "bg-foreground"}`}>
          <button onClick={wishlistAdded ? handleWishlistRemove : handleWishlistAdd}><FavoriteBorderIcon fontSize="large" className="text-white"/></button>
        </div>
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

  const [added, setAdded] = useState(false)
  const [wishlistAdded, setWishlistAdded] = useState(false)
  const { count, setCount, wishCount, setWishCount } = useCartStore();

  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  function checkWishlist() {
    const currentWishlist = getCookie("wishlist") || []
    if (currentWishlist.includes(item.product_id)) {
      setWishlistAdded(true)
    } else {
      setWishlistAdded(false)
    }
  }

  useEffect(() => {
    checkCart();
    checkWishlist();
  })

  function handleAdd() {
    cartQuery.handleAdd(item.product_id)
    checkCart()
    setCount(count+1)
  }

  function handleRemove() {
    cartQuery.handleRemove(item.product_id)
    checkCart()
    setCount(count-1)
  }

  async function handleWishlistAdd() {
    await wishlistQuery.handleAdd(item.product_id)
    setWishCount(wishCount+1)
    checkWishlist()
  }

  async function handleWishlistRemove() {
    await wishlistQuery.handleRemove(item.product_id)
    setWishCount(wishCount-1)
    checkWishlist()
  }

  return (
    <div key={index}>
      <div className="relative bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/televisions/${item.img}")`}}>
        <div className={`border max-w-fit absolute top-5 right-1 rounded-full p-1 hover:scale-110 duration-300 ${wishlistAdded ? "bg-black" : "bg-foreground"}`}>
          <button onClick={wishlistAdded ? handleWishlistRemove : handleWishlistAdd}><FavoriteBorderIcon fontSize="large" className="text-white"/></button>
        </div>
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

  const [added, setAdded] = useState(false)
  const [wishlistAdded, setWishlistAdded] = useState(false)
  const { count, setCount, wishCount, setWishCount } = useCartStore();

  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  function checkWishlist() {
    const currentWishlist = getCookie("wishlist") || []
    if (currentWishlist.includes(item.product_id)) {
      setWishlistAdded(true)
    } else {
      setWishlistAdded(false)
    }
  }

  useEffect(() => {
    checkCart();
    checkWishlist();
  })

  function handleAdd() {
    cartQuery.handleAdd(item.product_id)
    checkCart()
    setCount(count+1)
  }

  function handleRemove() {
    cartQuery.handleRemove(item.product_id)
    checkCart()
    setCount(count-1)
  }

  async function handleWishlistAdd() {
    await wishlistQuery.handleAdd(item.product_id)
    setWishCount(wishCount+1)
    checkWishlist()
  }

  async function handleWishlistRemove() {
    await wishlistQuery.handleRemove(item.product_id)
    setWishCount(wishCount-1)
    checkWishlist()
  }

  return (
    <div key={index}>
      <div className="relative bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/laptops/${item.img}")`}}>
        <div className={`border max-w-fit absolute top-5 right-1 rounded-full p-1 hover:scale-110 duration-300 ${wishlistAdded ? "bg-black" : "bg-foreground"}`}>
          <button onClick={wishlistAdded ? handleWishlistRemove : handleWishlistAdd}><FavoriteBorderIcon fontSize="large" className="text-white"/></button>
        </div>
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

  const [added, setAdded] = useState(false)
  const [wishlistAdded, setWishlistAdded] = useState(false)
  const { count, setCount, wishCount, setWishCount } = useCartStore();

  function checkCart() {
    const currentCart = getCookie("cart") || []
    if (currentCart.includes(item.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  function checkWishlist() {
    const currentWishlist = getCookie("wishlist") || []
    if (currentWishlist.includes(item.product_id)) {
      setWishlistAdded(true)
    } else {
      setWishlistAdded(false)
    }
  }

  useEffect(() => {
    checkCart();
    checkWishlist();
  })

  function handleAdd() {
    cartQuery.handleAdd(item.product_id)
    checkCart()
    setCount(count+1)
  }

  function handleRemove() {
    cartQuery.handleRemove(item.product_id)
    checkCart()
    setCount(count-1)
  }

  async function handleWishlistAdd() {
    await wishlistQuery.handleAdd(item.product_id)
    setWishCount(wishCount+1)
    checkWishlist()
  }

  async function handleWishlistRemove() {
    await wishlistQuery.handleRemove(item.product_id)
    setWishCount(wishCount-1)
    checkWishlist()
  }


  return (
    <div key={index}>
      <div className="relative bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/smartwatches/${item.img}")`}}>
        <div className={`border max-w-fit absolute top-5 right-1 rounded-full p-1 hover:scale-110 duration-300 ${wishlistAdded ? "bg-black" : "bg-foreground"}`}>
          <button onClick={wishlistAdded ? handleWishlistRemove : handleWishlistAdd}><FavoriteBorderIcon fontSize="large" className="text-white"/></button>
        </div>
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

