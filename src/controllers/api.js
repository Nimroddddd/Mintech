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
    axios.get(`${api}/cart/add-to-cart/${id}`, {withCredentials: true})
    return;
  },

  handleRemove: async (id) => {
    const currentCart = getCookie("cart") || [];
    const parsedCart = JSON.parse(currentCart);
    const filteredCart = parsedCart.filter(product => product != id)
    setCookie("cart", filteredCart);
    await axios.delete(`${api}/cart/delete-from-cart/${id}`, {withCredentials: true})
    return;
  },

  handleCheck: async () => {
    try {
      const response = await axios.get(`${api}/cart/get-cart`, {withCredentials: true})
      return response.data
    } catch {
      const currentCart = getCookie("cart");
      const parsedCart = currentCart ? JSON.parse(currentCart) : [];
      const response = await axios.post(`${api}/cart/get-public-cart`, parsedCart)
      return response.data
    }
  },

  handleUpdate: async (count, id) => {
    try {
      await axios.post(`${api}/cart/update-cart`, {count, id}, {withCredentials: true})
      return;
    } catch {
      console.log("error triggered")
    }
  }
}

export const auth = {
  handleLogout: () => {
    axios.get(`${api}/auth/logout`, {withCredentials: true})
  },

  handleLogin: async (details) => {
    const response = await axios.post(`${api}/auth/login`, details, {withCredentials: true})
    return response
  },

  handleCheck: async () => {
    const response = await axios.get(`${api}/auth/user`, { withCredentials: true });
    return response;
  },

  handleRegister: async (data) => {
    await axios.post(`${api}/auth/register`, data)
  },

  handleReset: async (details) => {
    const response = await axios.post(`${api}/auth/reset-password`, details)
    return response
  },

  handleGetResetMail: async (details) => {
    const response = await axios.post(`${api}/auth/reset-password-request`, details)
    return response;
  }
}

export const processData = {
  getProductDetails: async (id) => {
    const response = await axios.get(`${api}/data/product/${id}`)
    return response
  },

  getCategoryProducts: async (category) => {
    const response = await axios.get(`${api}/data/category/${category}`)
    return response;
  },

  handlePay: async (details) => {
    try {
      const response = await axios.post(`${api}/data/pay`, details)
      return response.data
    } catch (err) {
      return err
    }
  },

}

export const wishlistQuery = {
  handleAdd: async (id) => {
    let currentCart = []
    currentCart = getCookie("wishlist")
    if (currentCart) {
      if (!currentCart.includes(id)){
        const newCart = JSON.parse(currentCart)
        newCart.push(id);
        setCookie("wishlist", newCart)
      } 
    } else {
      setCookie("wishlist", [id])
    }
    axios.get(`${api}/cart/add-to-wishlist/${id}`, {withCredentials: true})
    return;
  },

  handleRemove: async (id) => {
    const currentCart = getCookie("wishlist") || [];
    console.log(currentCart)
    console.log(currentCart)
    const parsedCart = JSON.parse(currentCart);
    const filteredCart = parsedCart.filter(product => product != id)
    setCookie("wishlist", filteredCart);
    await axios.delete(`${api}/cart/delete-from-wishlist/${id}`, {withCredentials: true})
    return;
  },

  handleCheck: async () => {
    try {
      const response = await axios.get(`${api}/cart/get-wishlist`, {withCredentials: true})
      return response.data
    } catch {
      const currentCart = getCookie("wishlist");
      const parsedCart = currentCart ? JSON.parse(currentCart) : [];
      const response = await axios.post(`${api}/cart/get-public-wishlist`, parsedCart)
      return response.data
    }
  }

}
