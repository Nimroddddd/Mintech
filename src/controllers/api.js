import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const api = process.env.NEXT_PUBLIC_API_URL

export const cartQuery = {
  handleAdd: async (id) => {
    let currentCart = []
    currentCart = getCookie("cart")
    if (currentCart) {
      if (!currentCart.includes(id)){
        const newCart = JSON.parse(currentCart)
        newCart.push(id);
        setCookie("cart", newCart)
      } 
    } else {
      setCookie("cart", [id])
    }
    await axios.get(`${api}add-to-cart/${id}`, {withCredentials: true})
  },

  handleRemove: async (id) => {
    const currentCart = getCookie("cart") || [];
    const parsedCart = JSON.parse(currentCart);
    const filteredCart = parsedCart.filter(product => product != id)
    setCookie("cart", filteredCart);
    await axios.delete(`${api}delete-from-cart/${id}`, {withCredentials: true})
  },

  handleCheck: async () => {
    try {
      const response = await axios.get(`${api}get-cart`, {withCredentials: true})
      return response.data
    } catch {
      const currentCart = getCookie("cart");
      const parsedCart = currentCart ? JSON.parse(currentCart) : [];
      const response = await axios.post(`${api}get-public-cart`, parsedCart)
      return response.data
    }
  },

  handlePay: async (details) => {
    try {
      const response = await axios.post(`${api}pay`, details)
      return response.data
    } catch (err) {
      return err
    }
  },

  handleUpdate: (count, id) => {
    try {
      axios.post(`${api}update-cart`, {count, id}, {withCredentials: true})
    } catch {
      console.log("error triggered")
    }
  }
}