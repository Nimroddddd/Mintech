import { useCartStore } from '@/controllers/store';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Badge } from '@mui/material';

export default function Wishlist({active}: {active: boolean}) {

  const { wishCount } = useCartStore()
  
  return (
    <li className={`flex border rounded px-2 py-1 ${active ? "bg-black" : "bg-foreground"} text-white`}>
      <Badge badgeContent={wishCount} invisible={wishCount == 0} sx={{
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
        <FavoriteBorderIcon />
      </Badge>
      <p className='ml-1 hidden sm:block'>Wishlist</p>
    </li>
  )
}