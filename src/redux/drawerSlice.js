import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const drawerSlice = createSlice({
  name: 'isDrawerOpen',
  initialState,
  reducers: {
    toogleDrawer: (state) => {
      if (state.value === false) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }

      state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { toogleDrawer } = drawerSlice.actions

export default drawerSlice.reducer
