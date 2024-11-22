"use client"
import ResetPassword from "@/components/reset/ResetPassword";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordPage({params}) {

  const searchParams = useSearchParams()
  const tokenid = searchParams.get("token")
  const email = searchParams.get("email")

  return (
    <div className="flex items-center justify-center mt-28">
      <ResetPassword token={tokenid} email={email} />
    </div>
  )
}