import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  count: 0,
 }

const navbarSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++
    },
    reset(state) {
      state.count=0
    },
    //setValue(state , payload) {
      //  state.value=payload.payload;
    //},
  },
})

export const { increment, reset } = navbarSlice.actions
export default navbarSlice.reducer