"use client"
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { cartQuery, wishlistQuery } from '@/controllers/api';
import { getCookie } from 'cookies-next';
import { useCartStore } from '@/controllers/store';

export default function WishlistItem({product, updated}) {

  const [added, setAdded] = useState(false)
  const { count, setCount } = useCartStore();

  async function handleRemove(removedProduct) {
    await wishlistQuery.handleRemove(removedProduct)
    updated()
  }

  function checkCart() {
    const currentCart = getCookie("cart") || [];
    if (currentCart.includes(product.product_id)) {
      setAdded(true)
    } else {
      setAdded(false)
    }
  }

  const handleCartRemove = async () => {
    await cartQuery.handleRemove(product.product_id)
    checkCart()
    setCount(count-1)
  }

  const handleCartAdd = async () => {
    await cartQuery.handleAdd(product.product_id)
    checkCart()
    setCount(count+1)
  } 

  useEffect(checkCart)

  return(
    <div className="flex w-full px-3 gap-2 py-3 mt-3">
      <div className=" basis-1/4">
        <img src={`/${product.category}/${product.img}`} className="h-24" />
      </div>
      <div className=" basis-3/4 px-3 flex flex-col justify-between py-2">
        <div className="flex justify-between">
          <p>{product.name}</p>
          <button onClick={() => handleRemove(product.product_id)}><DeleteIcon /></button>
        </div>
        <div className='flex justify-between'>
        <button onClick={added ? handleCartRemove : handleCartAdd} className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">{!added ? "Add To Cart" : "Remove From Cart"}</button>
        </div>
      </div>
    </div>
  )   
}