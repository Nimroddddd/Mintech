import { create } from "zustand";

export const useCartStore = create((set) => ({
  total: null,
  count: null,
  setCount: (value) => set((state) => ({count: value})),
  setTotal: (value) => set((state) => ({total: value})),
}))
