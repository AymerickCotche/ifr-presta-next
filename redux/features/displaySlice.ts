import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from '../store'

type DisplayState = {
  message: string
  loading: boolean
  openRegisterForm: boolean
  registerForm: {
    name: string
    email: string
    password: string
    phone: string
    description: string
    activityId: string
  }
}

const initialState = {
  message: '',
  loading: false,
  openRegisterForm: false,
  registerForm: {
    name: "La Casa de Papel",
    email: "lcdp@gmail.com",
    password: "test",
    phone: "0692123456",
    description: "Ici ca braque",
    activityId: "cltffilpv000012mc8u8p1jl7"
  }
} as DisplayState

type RegisterFormPayload = {
  name: keyof DisplayState['registerForm']; // Cela garantit que name est une clé valide de registerForm
  value: string;
};

export const display = createSlice({
  name: "display",
  initialState,
  reducers: {
    setRegisterForm(state, action: PayloadAction<RegisterFormPayload>) {
      state.registerForm[action.payload.name] = action.payload.value
    },
    toggleOpenRegisterForm(state) {
      state.openRegisterForm = !state.openRegisterForm
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerPresta.fulfilled, (state, action) => {
      state.message = "Demande d'adhésion envoyée"
      state.loading = false
    })
    .addCase(registerPresta.pending, (state, action) => {
      state.loading = true
      state.message = 'Envoie en cours'
    })
    .addCase(registerPresta.rejected, (state, action) => {
      state.loading = false
      state.message = "Erreur lors de l'envoie de la demande"
    })
  }
})

export const {
  setRegisterForm,
  toggleOpenRegisterForm
} = display.actions

export const registerPresta = createAsyncThunk(
  'display/registerPresta',
  async ({formdata} : {formdata: DisplayState['registerForm']}) => {

    console.log(formdata);
    const response = await fetch(`/api/user/create`, {
      method: 'POST',
      body: JSON.stringify(formdata)
    })
    const results =  await response.json()
    return results
  }
)


export default display.reducer