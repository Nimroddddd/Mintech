"use client"
import { useEffect, useState } from "react"
import { PhoneItem, TVItem, LaptopItem, SmartwatchItem } from "./ShopItem"
import { phones, tvs, laptops, smartwatches } from "./data"
import { getCookie } from "cookies-next"

export default function ShopList(props) {

  const [sortBy, setSortBy] = useState("")

  useEffect(getSort,[])

  function getSort() {
    const currentSort = getCookie("sort")
    setSortBy(currentSort)
  }

  setInterval(getSort, 1000)
  
  let devices = []

  if (props.category == "phones") {
    devices = phones
  } else if (props.category == "televisions") {
    devices = tvs
  } else if (props.category == "smartwatches") {
    devices = smartwatches
  } else if (props.category == "laptops") {
    devices = laptops
  }

  if (sortBy == "price_asc") {
    devices.sort((a, b) => a.price - b.price)
    console.log(devices)
  } else if (sortBy == "price_desc") {
    devices.sort((a,b) => b.price - a.price)
  }

  return (
    <div className="flex gap-20 flex-wrap">
      {props.category == "phones" && devices.map(PhoneItem)}
      {props.category == "televisions" && devices.map(TVItem)}
      {props.category == "laptops" && devices.map(LaptopItem)}
      {props.category == "smartwatches" && devices.map(SmartwatchItem)}
    </div>
  )
}