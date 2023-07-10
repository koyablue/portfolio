import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// types
import { RootState } from '../store'
import { ColorTheme } from '../../types/theme'

type ColorThemeState = {
  theme: ColorTheme
  isThemeSet: boolean
}

const initialState: ColorThemeState = {
  theme: 'dark',
  isThemeSet: false,
}

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    updateColorThemeStatus: (state, action: PayloadAction<ColorTheme>) => {
      state.theme = action.payload
    },
    updateIsThemeSet: (state, action: PayloadAction<boolean>) => {
      state.isThemeSet = action.payload
    }
  },
})

// actions
export const { updateColorThemeStatus, updateIsThemeSet } = colorThemeSlice.actions

// selectors
export const selectColorTheme = (state: RootState) => state.colorTheme.theme

export const selectIsThemeSet = (state: RootState) => state.colorTheme.isThemeSet

export default colorThemeSlice.reducer

