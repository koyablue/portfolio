import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// types
import { RootState } from '../store'
import { ColorTheme } from '../../types/theme'

type ColorThemeState = {
  theme: ColorTheme
}

const initialState: ColorThemeState = {
  theme: 'light'
}

const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    updateColorThemeStatus: (state, action: PayloadAction<ColorTheme>) => {
      state.theme = action.payload
    }
  },
})

// actions
export const { updateColorThemeStatus } = colorThemeSlice.actions

// selectors
export const selectColorTheme = (state: RootState) => state.colorTheme.theme

export default colorThemeSlice.reducer

