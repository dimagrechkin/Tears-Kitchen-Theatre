import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCode } = codeSlice.actions

export default codeSlice.reducer
