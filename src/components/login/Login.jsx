"use client"
import axios from "axios";
import { useState } from "react"
import TextField from '@mui/material/TextField';
import Link from "next/link";
import LoadingComp from "../Loading/Loading";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function Login() {

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
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
      // const hi = await response.json()
      const {message, cart} = response.data
      setCookie("cart", cart)
      if(message === "correct password") {
        router.push("/")
      } else {
        alert("Incorrect password, please try again")
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
        <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        value={details.password}
        name="password"
        onChange={handleChange}
        />
        <button type="submit" className="bg-foreground hover:bg-hoverColor py-3 text-white" onClick={handleLogin}>Login</button>
      </form>
      <p className="mt-3">Don&apos;t have an account? <Link href="/register" className="text-foreground">Sign up here</Link></p>
      {loading && <LoadingComp />}
    </div>
  )
}
