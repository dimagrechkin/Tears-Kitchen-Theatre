import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from '../redux/drawerSlice'
import codeReducer from '../redux/codeSlice'
import modalReducer from '../redux/modalSlice'

export const store = configureStore({
  reducer: {
    isDrawerOpen: drawerReducer,
    code: codeReducer,
    isStartModalShow: modalReducer,
  },
})
