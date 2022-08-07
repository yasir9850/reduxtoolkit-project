import { configureStore } from '@reduxjs/toolkit'
import useReducer from './features/users/userSlice'

export const store = configureStore({
  reducer: {
    users: useReducer
  },
})