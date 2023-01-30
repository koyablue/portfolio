import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

type DarkModeState = {
  isDarkMode: boolean
}

const initialState: DarkModeState = {
  isDarkMode: false
}

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    updateDarkModeStatus: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    }
  },
})

// actions
export const { updateDarkModeStatus } = darkModeSlice.actions

// selectors
// export const selectIsDarkMode = (state: RootState) =>

export default darkModeSlice.reducer

