import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart() {
  return (
    <li className='flex border rounded px-2 bg-yellow-300 py-1'>
      <ShoppingCartIcon />
      Cart
    </li>
  )
}