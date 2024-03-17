import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./user/userSlice"
import {useDispatch} from "react-redux"
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
