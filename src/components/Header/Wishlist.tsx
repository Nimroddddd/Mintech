import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Wishlist() {
  
  return (
    <li className='flex border rounded px-2 py-1 bg-foreground text-white'>
      <FavoriteBorderIcon />
      <p className='ml-1 hidden sm:block'>Wishlist</p>
    </li>
  )
}