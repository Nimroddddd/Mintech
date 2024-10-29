"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios"
import TextField from '@mui/material/TextField';
import Link from "next/link";


export default function Register() {

  const {register, handleSubmit, formState: { errors } } = useForm({defaultValues: {
    email: "",
    password: ""
  }})

  const api = process.env.NEXT_PUBLIC_API_URL
  console.log(api)
  const router = useRouter()

  async function handleRegister(data) {
    console.log(data)
    try {
      await axios.post(`${api}register`, data)
      router.push("/login")
    } catch (err) {
      alert("something went wrong!" + err)
    }
  }

  return (
    <div className="flex flex-col w-80">
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
        <button type="submit" className="bg-yellow-300 hover:bg-yellow-200 py-3">Register</button>
      </form>
      <p className="mt-3">Already have an account? <Link href="/login" className="text-yellow-500">Login</Link></p>
    </div>
  )
}