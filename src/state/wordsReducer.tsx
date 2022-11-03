import { createSlice } from '@reduxjs/toolkit'
import { IWord } from '../utils/types'
import words_ from '../data/mock.json'

const SLICE_NAME = 'words'

type state = IWord[]

const initialState: state | null = words_

const reducers = {}

export const UISlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers
})

export const {} = UISlice.actions
export default UISlice.reducer