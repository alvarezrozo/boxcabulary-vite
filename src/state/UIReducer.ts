import { ReactElement } from "react"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const SLICE_NAME = 'UI'

interface state {
  activePopUp: null | ReactElement
  flagPopUp: boolean
}

const initialState: state = {
  activePopUp: null,
  flagPopUp: false,
}

const reducers = {
  'setPopUp': (state: state, action: PayloadAction<ReactElement | null>) => {
    state.activePopUp = action.payload
  },
  'setFlagPopUp': (state: state) => {
    state.flagPopUp = !state.flagPopUp
  }
}

export const UISlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers
})

export const { setPopUp, setFlagPopUp } = UISlice.actions
export default UISlice.reducer
