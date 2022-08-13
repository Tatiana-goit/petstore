import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPet = createAsyncThunk(
  'pet/fetchPetsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params
    const { data } = await axios.get(
      `https://62ecf1bba785760e6760a342.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
    return data
  },
)

const initialState = {
  items: [],
  status: 'loading',
}

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPet.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPet.fulfilled]: (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
    [fetchPet.rejected]: (state, action) => {
      state.status = 'error'
      state.items = []
    },
  },
})

export const selectPetData = (state) => state.pet

export const { setItems } = petSlice.actions

export default petSlice.reducer
