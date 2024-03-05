import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from '../store'

type PrestaState = {
  loading: boolean
  message: string
  prestas: []
}

const initialState = {
    loading: false,
    message: "",
    prestas: []
} as PrestaState

export const presta = createSlice({
  name: "presta",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getPrestas.fulfilled, (state, action) => {
        state.prestas = action.payload
        state.message = ''
        state.loading = false
      })
      .addCase(getPrestas.pending, (state, action) => {
        state.loading = true
        state.message = 'récupération en cours'
      })
      .addCase(getPrestas.rejected, (state, action) => {
        state.loading = false
        state.message = 'Erreur lors de la récupération des produits'
      })
    }  
})

export const {

} = presta.actions

export const getPrestas = createAsyncThunk(
  'presta/getPrestas',
  async () => {
    const response = await fetch(`/api/products`)
    const results =  await response.json()
    return results
  }
)


export default presta.reducer