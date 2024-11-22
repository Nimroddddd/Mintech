"use client"
import { useState } from 'react';
import { Button, 
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
import { processData } from '@/controllers/api';
import { useForm } from "react-hook-form";




export default function ChekoutPage() {

  const [selectedValue, setSelectedValue] = useState("deliver")
  const [amount, setAmount] = useState(0)
  const {register, handleSubmit, watch, formState: { errors } } = useForm({defaultValues: {
    name: "",
    email: "",
    phone: "",
    terms: false,
    address: "",
    station: "",
    country: "",
  }})
  

  const handlePayClick = handleSubmit(async (data) => {
    const paymentData = {
      ...data,
      amount
    }
    const link = await processData.handlePay(paymentData);
    window.open(link, '_blank')
  })

  function updateMainTotal(total) {
    setAmount(total)
  }

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className="flex flex-col py-5 px-5 sm:px-28 space-y-6 basis-full">
        <p className='font-bold text-2xl'>Shipping Information</p>
        <div className='flex gap-6'>
          <Button className='basis-full flex-1' variant="outlined" onClick={() => setSelectedValue("deliver")} sx={{ textTransform: 'none' }}>
            <Radio
              checked={selectedValue === 'deliver'}
              value="deliver"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'DELIVER' }}
            />
            <LocalShippingIcon style={{ marginRight: 8 }}/> 
            <p className={selectedValue === "deliver" ? undefined : `text-black`}>Delivery</p>
          </Button>
          <Button className='basis-full flex-1' variant="outlined" onClick={() => setSelectedValue("pick")} sx={{ textTransform: 'none' }}>
            <Radio
              checked={selectedValue === 'pick'}
              value="pick"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'PICK' }}
            />
            <OutboxIcon style={{ marginRight: 8 }}/>
            <p className={selectedValue === "pick" ? undefined : `text-black`}>Pick up</p>
          </Button>
        </div>
        <form className='space-y-8'>
          <TextField
            required
            id="outlined-required"
            label="Full Name"
            className='w-full'
            {...register("name", {
              required: "This field is required!"
            })}
          />
          <TextField
            required
            id="outlined-required"
            label="Email Address"
            className='w-full'
            {...register("email", {
              required: "This field is required!"
            })}
          />
          <TextField
            required
            id="outlined-required"
            label="Country"
            className='w-full'
            {...register("country", { required: "Country is required!" })}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            className='w-full'
            {...register("phone", {
              required: "Phone number is required!"
            })}
          />
          {selectedValue === "deliver" ? 
            <TextField
              required
              id="outlined-required"
              label="Delivery Address"
              className='w-full'
              multiline
              rows={3}
              {...register("address", { required: "Delivery address is required!" })}
            />
          : 
            <FormControl className='w-36'>
            <InputLabel id="demo-simple-select-label">Pickup Station</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Pickup Station"
                value={watch("station")}
                {...register("station", { required: "Pickup station is required!" })}
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
            <Checkbox id="terms" {...register("terms", { required: "You must accept the terms and conditions." })} />
            <label htmlFor="terms">I have read and agreed to the Terms and Conditions</label>
          </div>
        </form>
      </div>
      <div className="flex flex-col py-5 px-5 sm:px-28 space-y-6 basis-full">
        <p className='font-bold text-2xl'>Review Cart</p>
        <CheckoutCart setMainTotal={updateMainTotal} pay={handlePayClick}/>
      </div>
    </div>
  )
}