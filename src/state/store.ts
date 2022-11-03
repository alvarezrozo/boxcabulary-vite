import { configureStore } from '@reduxjs/toolkit'
import UIReducer from './UIReducer'
import wordsReducer from './wordsReducer'

export const store = configureStore({
  reducer: {
    UI: UIReducer,
    words: wordsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch