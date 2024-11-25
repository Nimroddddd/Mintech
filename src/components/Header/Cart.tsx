import { useCartStore } from '@/controllers/store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Cart({active}: {active: Boolean}) {

  const { count } = useCartStore();

  return (
    <li className={`flex border rounded px-2 py-1 text-white ${active ? "bg-black" : "bg-foreground"}`}>
      <Badge badgeContent={count} invisible={count == 0} sx={{
          '& .MuiBadge-badge': {
            minWidth: '12px',  // Smaller badge width
            height: '12px',   // Smaller badge height
            fontSize: '10px', // Smaller font size
            top: 4,           // Adjust position (vertical)
            right: 0,
            backgroundColor: '#FFFDF2',
            color: "#000"
          },
        }}>
        <ShoppingCartIcon />
      </Badge>
      <p className='ml-1 hidden sm:block'>Cart</p>
    </li>
  )
}