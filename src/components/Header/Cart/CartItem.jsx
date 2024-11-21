"use client"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { cartQuery } from '@/controllers/api';

export default function CartItem({product, updated}) {

  const [count, setCount] = useState(product.count)

  async function handleRemove(removedProduct) {
    await cartQuery.handleRemove(removedProduct)
    updated()
  }

  function handleIncrease() {
    setCount(prev => prev+1)
    cartQuery.handleUpdate(count+1, product.product_id)
    updated()
  }

  function handleDecrease() {
    if (count > 1) {
      setCount(prev => prev-1)
      cartQuery.handleUpdate(count-1, product.product_id)
      updated()
    }
  }

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
          <p>${product.price}</p>
          <div className='flex gap-5 border border-gray-300 py-1 px-2 rounded'>
            <button onClick={handleDecrease}>-</button>
            <div>{count}</div>
            <button onClick={handleIncrease}>+</button>
          </div>
        </div>
      </div>
    </div>
  )   
}