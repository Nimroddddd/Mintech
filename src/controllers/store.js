import { create } from "zustand";

export const useCartStore = create((set) => ({
  total: null,
  count: null,
  wishCount: 0,
  displayCart: false,
  displayWishlist: false,
  setWishCount: (value) => set(() => ({wishCount: value})),
  setDisplayCart: () => set((state) => ({displayCart: !state.displayCart})),
  setDisplayWishlist: () => set((state) => ({displayWishlist: !state.displayWishlist})),
  setCount: (value) => set(() => ({count: value})),
  setTotal: (value) => set(() => ({total: value})),
}))
