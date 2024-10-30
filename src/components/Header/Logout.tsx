import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

export default function Logout() {
  
  const api = process.env.NEXT_PUBLIC_API_URL
  async function handleLogout() {
    await axios.get(`${api}logout`, {withCredentials: true})
  }

  return (
    <li className='flex border rounded px-2 py-1 bg-foreground text-white' onClick={handleLogout}>
      <p className='mr-2'>Logout</p>
      <LogoutIcon />
    </li>
  )
}