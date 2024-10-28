"use client"
import axios from "axios";
import { useState } from "react"
import TextField from '@mui/material/TextField';
import Link from "next/link";

export default function Login() {
  
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
  const api = process.env.NEXT_PUBLIC_API_URL

  function handleChange(e) {
    const {name, value} = e.target;
    console.log(api)
    setDetails(prev => {return ({
      ...prev,
      [name]: value
    })})
  }

  async function handleLogin(e) {
    e.preventDefault()
    console.log(e.target)
    const hi = await axios.post(api + "login", details, {withCredentials: true})
    alert(hi.data)
  }

  return (
    <div className="flex flex-col w-80">
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
        <button type="submit" className="bg-yellow-300 hover:bg-yellow-200 py-3" onClick={handleLogin}>Login</button>
      </form>
      <p className="mt-3">Don&apos;t have an account? <Link href="/register" className="text-yellow-500">Sign up here</Link></p>
    </div>
  )
}