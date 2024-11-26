"use client"
import { useState } from "react"
import TextField from '@mui/material/TextField';
import LoadingComp from "../Loading/Loading";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Slide, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "@/controllers/api";


export default function ResetPassword({token, email}) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    password: "",
    confirmPassword: ""
  });

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

  const success = (message) => toast.success(`${message}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
    });

  function handleChange(e) {
    const {name, value} = e.target;
    setDetails(prev => {return ({
      ...prev,
      [name]: value
    })})
  }

  async function handleLogin(e) {
    e.preventDefault()
    const resetDetails = {
      newPassword: details.password,
      token,
      email
    }
    if (details.password !== "" && details.password === details.confirmPassword) {
      try {
        const response = await auth.handleReset(resetDetails)
        console.log(response)
        const { message } = response.data;
        if (message === "Password update succeessful") {
          success(`${message}. Please login again`)
        } else {
          error(message)
        }
      } catch (err) {
        error("Server is down.")
      }
      
    } else {
      error("Passwords do not match. Please try again.")
    }
  }

  return (
    <div className="flex flex-col w-80 mb-40">
      <h1 className="text-center mb-5 text-2xl font-bold">Reset your password</h1>
      <form className="flex flex-col gap-5">
        <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined"
        value={details.password}
        type="password"
        name="password"
        onChange={handleChange}
        />
        <TextField 
        id="outlined-basic" 
        label="Confirm Password" 
        variant="outlined"
        type="password"
        value={details.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
        />
        <button type="submit" className="bg-foreground hover:bg-hoverColor py-3 text-white" onClick={handleLogin}>Reset Password</button>
      </form>
      {loading && <LoadingComp />}
    </div>
  )
}
