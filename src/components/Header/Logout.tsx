import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from "@/controllers/api"

export default function Logout() {
  
  function handleLogout() {
    auth.handleLogout()
  }

  return (
    <li className='flex border rounded px-2 py-1 bg-foreground text-white' onClick={handleLogout}>
      <p className='mr-2 hidden sm:inline'>Logout</p>
      <LogoutIcon />
    </li>
  ) 
}