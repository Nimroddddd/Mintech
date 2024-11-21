import { create } from "zustand";

export const useCartStore = create((set) => ({
  total: null,
  count: null,
  displayCart: false,
  setDisplayCart: () => set((state) => ({displayCart: !state.displayCart})),
  setCount: (value) => set((state) => ({count: value})),
  setTotal: (value) => set((state) => ({total: value})),
}))
