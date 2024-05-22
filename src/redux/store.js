import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from '../redux/drawerSlice'
import codeReducer from '../redux/codeSlice'

export const store = configureStore({
  reducer: {
    isDrawerOpen: drawerReducer,
    code: codeReducer,
  },
})
