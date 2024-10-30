"use client"

import Link from "next/link"
import { useState } from "react"

export default function EachCategory(props) {

  const [focus, setFocus] = useState(false)

  function handleOver() {
    setFocus(true)
  }

  function handleLeave() {
    setFocus(false)
  }

  const initialDestination =`${props.category}`
  const destination = initialDestination.slice(0,1).toLowerCase() + initialDestination.slice(1)

  return(
    <div>
      <div onMouseOver={handleOver} onMouseLeave={handleLeave} className="bg-cover bg-center h-[337px] w-[600px] shadow-2xl flex items-center justify-center" style={{backgroundImage: `url("${props.img}")`}}>
        {focus && <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <Link href={`shop/${destination}`}><button className="opacity-100 text-2xl py-2 px-10 bg-foreground text-white">Shop now</button></Link>
        </div> }
      </div>
      <p className="text-center mt-4 text-2xl">{props.category}</p>
    </div>
  )
}