import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from '../store'

export type Activity = {
  id: string
  name: string
}

type ActivityState = {
  loading: boolean
  message: string
  activities: Activity[]
}

const initialState = {
    loading: false,
    message: "",
    activities: []
} as ActivityState

export const activity = createSlice({
  name: "activity",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.fulfilled, (state, action) => {
        state.activities = action.payload
        state.message = ''
        state.loading = false
      })
      .addCase(getActivities.pending, (state, action) => {
        state.loading = true
        state.message = 'récupération en cours'
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.loading = false
        state.message = 'Erreur lors de la récupération des produits'
      })
    }  
})

export const {

} = activity.actions

export const getActivities = createAsyncThunk(
  'presta/getActivities',
  async () => {
    const response = await fetch(`/api/activity/getall`)
    const results =  await response.json()
    return results
  }
)


export default activity.reducer