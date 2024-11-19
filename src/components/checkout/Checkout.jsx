"use client"
import { useState } from 'react';
import { Button, 
        Stack, 
        Radio, 
        TextField, 
        Checkbox, 
        Select, 
        FormControl, 
        MenuItem, 
        InputLabel } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import OutboxIcon from '@mui/icons-material/Outbox';
import CheckoutCart from "./CheckoutCart"
import { useRouter } from 'next/navigation';
import { cartQuery } from '@/controllers/api';

export default function ChekoutPage() {

  const router = useRouter()
  const [selectedValue, setSelectedValue] = useState("deliver")
  const [station, setStation] = useState("")
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    amount: 0

  })

  const handleStationChange = (event) => {
    setStation(event.target.value);
  };

  const handleDetailsChange = (event) => {
    const { name, value } = event.target
    setDetails(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  async function handlePayClick(total) {
    setDetails((prev) => {
      return {
        ...prev,
        amount: total
      }
    });
    console.log(details)
    const link = await cartQuery.handlePay(details);
    router.push(link)
  }

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className="flex flex-col py-5 px-28 space-y-6 basis-full">
        <p className='font-bold text-2xl'>Shipping Information</p>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={() => setSelectedValue("deliver")} sx={{ textTransform: 'none' }}>
            <Radio
              checked={selectedValue === 'deliver'}
              value="deliver"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'DELIVER' }}
            />
            <LocalShippingIcon style={{ marginRight: 8 }}/> 
            <p className={selectedValue === "deliver" ? undefined : `text-black`}>Delivery</p>
          </Button>
          <Button variant="outlined" onClick={() => setSelectedValue("pick")} sx={{ textTransform: 'none' }}>
            <Radio
              checked={selectedValue === 'pick'}
              value="pick"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'PICK' }}
            />
            <OutboxIcon style={{ marginRight: 8 }}/>
            <p className={selectedValue === "pick" ? undefined : `text-black`}>Pick up</p>
          </Button>
        </Stack>
        <form className='space-y-8'>
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            className='w-full'
            name="name"
            value={details.name}
            onChange={handleDetailsChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            className='w-full'
            name="email"
            value={details.email}
            onChange={handleDetailsChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Country"
            className='w-full'
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            className='w-full'
            name="phone"
            value={details.phone}
            onChange={handleDetailsChange}
          />
          {selectedValue === "deliver" ? 
            <TextField
              required
              id="outlined-required"
              label="Delivery Address"
              className='w-full'
              multiline
              rows={3}
            />
          : 
            <FormControl className='w-36'>
            <InputLabel id="demo-simple-select-label">Pickup Station</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={station}
                label="Pickup Station"
                onChange={handleStationChange}
              >
                <MenuItem value={1}>Station 1</MenuItem>
                <MenuItem value={2}>Station 2</MenuItem>
                <MenuItem value={3}>Station 3</MenuItem>
                <MenuItem value={4}>Station 4</MenuItem>
                <MenuItem value={5}>Station 5</MenuItem>
              </Select>
            </FormControl>
          }
          <div className='flex items-center'>
            <Checkbox id="terms"/>
            <label htmlFor="terms">I have read and agreed to the Terms and Conditions</label>
          </div>
        </form>
      </div>
      <div className="flex flex-col py-5 px-28 space-y-6 basis-full">
        <p className='font-bold text-2xl'>Review Cart</p>
        <CheckoutCart pay={handlePayClick}/>
      </div>
    </div>
  )
}