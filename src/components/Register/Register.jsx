"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios"
import TextField from '@mui/material/TextField';
import Link from "next/link";
import LoadingComp from "../Loading/Loading";
import { useState } from "react";

export default function Register() {

  const {register, handleSubmit, formState: { errors } } = useForm({defaultValues: {
    email: "",
    password: ""
  }})

  const [loading, setLoading] = useState(false)

  const api = process.env.NEXT_PUBLIC_API_URL
  const router = useRouter()

  async function handleRegister(data) {
    console.log(data)
    setLoading(true)
    try {
      const response = await axios.post(`${api}register`, data)
      if (response.data === "user already exists") {
        alert(response.data)
      } else {
        alert("Registration successful!")
        router.push("/login")
      }
    } catch (err) {
      alert("something went wrong!" + err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col w-80 mb-40">
      <h1 className="text-center mb-5 text-2xl font-bold">Create a new account</h1>
      <form onSubmit={handleSubmit(data => {console.log(data); handleRegister(data)})} className="flex flex-col gap-2">
        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        {...register("email", {
          required: "This field is required", 
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })} />
        <p>{errors.email?.message}</p>
        <TextField
         id="outlined-basic" 
         label="Password" 
         variant="outlined" 
         {...register("password", {required: "Please input a valid password"})} 
         />
        <p>{errors.password?.message}</p>
        <button type="submit" className="bg-foreground hover:bg-seconndary py-3 text-white">Register</button>
      </form>
      <p className="mt-3">Already have an account? <Link href="/login" className="text-foreground">Login</Link></p>
      {loading && <LoadingComp />}
    </div>
  )
}