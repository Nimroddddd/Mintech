import Featured from "@/components/Featured/Featured"
import Link from "next/link"

export default function Home() {
  
  return (
    <div>
      <div className="bg-cover bg-center h-screen flex flex-col items-center pt-48 text-black" style={{backgroundImage: 'url("background.jpg")'}} >
        <p className="text-5xl">Innovative Tech, Delivered Fast</p>
        <p className="text-xl mt-3">Elevate Your Life with Cutting-Edge Gadgets.</p>
        <Link href="shop"><button className="text-2xl py-2 px-10 border-2 border-foreground mt-24 hover:bg-hoverColor duration-300 text-foreground hover:text-white">Shop now</button></Link>
      </div>
      <Featured />
    </div>
  )
}