"use client"
import DeleteIcon from '@mui/icons-material/Delete';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import axios from 'axios';
import { cartQuery } from '@/controllers/api';

export default function CartItem({product, removed}) {

  const [count, setCount] = useState(1)

  function handleRemove(removedProduct) {
    cartQuery.handleRemove(removedProduct)
    removed()
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
            <button onClick={() => setCount(prev => prev-1)}>-</button>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev+1)}>+</button>
          </div>
        </div>
      </div>
    </div>
  )   
}