"use client"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ShopCategory(props) {

  const router = useRouter()

  const [category, setCategory] = useState("")

  function handleChange(e) {
    console.log(category)
    if (e.target.value != category && category != "") {
      setCategory(e.target.value)
      router.push(`/shop/${e.target.value}`)
    }
    setCategory(e.target.value)
    
  }

  useEffect(() => {
    setCategory(props.category)
  }, [props.category])


  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="phones">Phones</MenuItem>
        <MenuItem value="smartwatches">Smartwatches</MenuItem>
        <MenuItem value="televisions">Televisions</MenuItem>
        <MenuItem value="laptops">Laptops</MenuItem>
      </Select>
    </FormControl>
  )
}