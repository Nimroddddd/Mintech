import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart() {
  return (
    <li className='flex border rounded px-2 bg-foreground py-1 text-white'>
      <ShoppingCartIcon />
      Cart
    </li>
  )
}