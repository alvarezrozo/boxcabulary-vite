import { configureStore } from '@reduxjs/toolkit'
import UIReducer from './UIReducer'

export const store = configureStore({
  reducer: {
    UI: UIReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch