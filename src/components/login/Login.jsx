"use client"
import axios from "axios";
import { useState } from "react"
import TextField from '@mui/material/TextField';
import Link from "next/link";
import LoadingComp from "../Loading/Loading";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useAuth } from "../auth/AuthContext";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Slide, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';








export default function Login() {

  const router = useRouter()
  const { checkLogged } = useAuth()
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const error = (message) => {toast.error(`${message}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
    });}

  const api = process.env.NEXT_PUBLIC_API_URL

  function handleChange(e) {
    const {name, value} = e.target;
    setDetails(prev => {return ({
      ...prev,
      [name]: value
    })})
  }

  async function handleLogin(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await axios.post(`${api}login`, details, {withCredentials: true})
      const {message, cart} = response.data
      setCookie("cart", cart)
      if(message === "correct password") {
        checkLogged()
        router.push("/")
      } else {
        error(message)
      }
    } catch (err) {
      alert(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-80 mb-40">
      <h1 className="text-center mb-5 text-2xl font-bold">Welcome back!</h1>
      <form className="flex flex-col gap-5">
        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined"
        value={details.email}
        name="email"
        onChange={handleChange}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
        </FormControl>
        <button type="submit" className="bg-foreground hover:bg-hoverColor py-3 text-white" onClick={handleLogin}>Login</button>
      </form>
      <p className="mt-3">Don&apos;t have an account? <Link href="/register" className="text-foreground">Sign up here</Link></p>
      {loading && <LoadingComp />}
    </div>
  )
}
