"use client"
import { useEffect, useState } from "react"
import { PhoneItem, TVItem, LaptopItem, SmartwatchItem } from "./ShopItem"
// import { phones, tvs, laptops, smartwatches } from "./data"
import { getCookie } from "cookies-next"
import axios from "axios"

export default function ShopList(props) {

  const [sortBy, setSortBy] = useState("")

  useEffect(getSort,[])

  function getSort() {
    const currentSort = getCookie("sort")
    setSortBy(currentSort)
  }

  setInterval(getSort, 1000)
  
  const [devices, setDevices] = useState([])
  const api = process.env.NEXT_PUBLIC_API_URL


  useEffect(() => {
    async function getDevices() {
      const response = await axios.get(`${api}category/${props.category}`)
      setDevices(response.data)
    }
    
    getDevices()
  }, [props.category])

  // if (props.category == "phones") {
  //   devices = phones
  // } else if (props.category == "televisions") {
  //   devices = tvs
  // } else if (props.category == "smartwatches") {
  //   devices = smartwatches
  // } else if (props.category == "laptops") {
  //   devices = laptops
  // }

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
      {props.category == "phones" && devices.map(PhoneItem)}
      {props.category == "televisions" && devices.map(TVItem)}
      {props.category == "laptops" && devices.map(LaptopItem)}
      {props.category == "smartwatches" && devices.map(SmartwatchItem)}
    </div>
  )
}