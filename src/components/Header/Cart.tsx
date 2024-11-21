import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart({active}: {active: Boolean}) {
  return (
    <li className={`flex border rounded px-2 py-1 text-white ${active ? "bg-black" : "bg-foreground"}`}>
      <ShoppingCartIcon />
      <p className='ml-1 hidden sm:block'>Cart</p>
    </li>
  )
}