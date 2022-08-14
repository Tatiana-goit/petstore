import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth-slice'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import pet from './slices/petSlice'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
}
const persistConfigCart = {
  key: 'cart',
  version: 1,
  storage,
  whitelist: ['items', 'totalPrice'],
}

const cartReducer = persistReducer(persistConfigCart, cart)

const persisteAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    filter,
    cart: cartReducer,
    pet,
    auth: persisteAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)