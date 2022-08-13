import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import pet from './slices/petSlice'

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pet,
  },
})
