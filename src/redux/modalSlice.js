import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const modalSlice = createSlice({
  name: 'isStartModalShow',
  initialState,
  reducers: {
    toogleModal: (state) => {
      state.value = !state.value
    },
  },
})

export const { toogleModal } = modalSlice.actions

export default modalSlice.reducer
