"use client"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';

export default function ShopSort() {

  const [sort, setSort] = useState("")

  function handleChange(e) {
    setSort(e.target.value)
    
  }

  useEffect(() => {
    setSort("latest")
  }, [])


  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="sort"
        onChange={handleChange}
      >
        <MenuItem value="latest">Default: Latest</MenuItem>
        <MenuItem value="price_desc">Price: High to Low</MenuItem>
        <MenuItem value="price_asc">Price: Low to High</MenuItem>
        <MenuItem value="name_front">Name: A-Z</MenuItem>
        <MenuItem value="name_back">Name: Z-A</MenuItem>
      </Select>
    </FormControl>
  )
}