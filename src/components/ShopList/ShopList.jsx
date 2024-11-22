"use client"
import { useEffect, useState } from "react"
import ListDevices from "./ShopItem"
import { getCookie } from "cookies-next"
import axios from "axios"
import { processData } from "@/controllers/api"

export default function ShopList({ category }) {

  const [sortBy, setSortBy] = useState("")
  const [devices, setDevices] = useState([])
  const api = process.env.NEXT_PUBLIC_API_URL

  useEffect(getSort,[])

  function getSort() {
    const currentSort = getCookie("sort")
    setSortBy(currentSort)
  }

  setInterval(getSort, 1000)

  useEffect(() => {
    async function getDevices() {
      const response = await processData.getCategoryProducts(category)
      setDevices(response.data)
    }
    
    getDevices();
  }, [category, api])

  if (sortBy == "price_asc") {
    devices.sort((a, b) => a.price - b.price)
    console.log(devices)
  } else if (sortBy == "price_desc") {
    devices.sort((a, b) => b.price - a.price)
  } else if (sortBy == "name_front") {
    devices.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  } else if (sortBy == "name_back") {
    devices.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    
      // names must be equal
      return 0;
    });
  }

  return (
    <div className="flex gap-20 flex-wrap">
      <ListDevices category={category} devices={devices} />
    </div>
  )
}