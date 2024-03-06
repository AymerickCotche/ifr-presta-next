import { PayloadAction, createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from '../store'

type DisplayState = {
  message: string
  loading: boolean
  openRegisterForm: boolean
  openConnectForm: boolean
  openMenu: boolean
  registerForm: {
    name: string
    email: string
    password: string
    phone: string
    description: string
    activityId: string
  },
  connForm: {
    email:string
    password:string
  }
}

const initialState = {
  message: '',
  loading: false,
  openRegisterForm: false,
  openConnectForm: false,
  openMenu: false,
  registerForm: {
    name: "La Casa de Papel",
    email: "lcdp@gmail.com",
    password: "test",
    phone: "0692123456",
    description: "Ici ca braque",
    activityId: "cltffilpv000012mc8u8p1jl7"
  },
  connForm: {
    email: "lcdp@gmail.com",
    password: "test"
  }
} as DisplayState

type RegisterFormPayload = {
  name: keyof DisplayState['registerForm']
  value: string
};

type ConnFormPayload = {
  name: keyof DisplayState['connForm']
  value: string
}

export const display = createSlice({
  name: "display",
  initialState,
  reducers: {
    setRegisterForm(state, action: PayloadAction<RegisterFormPayload>) {
      state.registerForm[action.payload.name] = action.payload.value
    },
    setConnForm(state, action: PayloadAction<ConnFormPayload>) {
      state.connForm[action.payload.name] = action.payload.value
    },
    toggleOpenRegisterForm(state) {
      state.openRegisterForm = !state.openRegisterForm
    },
    toggleopenMenu(state) {
      state.openMenu = !state.openMenu
    },
    toggleOpenConnectForm(state) {
      state.openConnectForm = !state.openConnectForm
    },
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
    .addCase(connectUser.fulfilled, (state, action) => {
      state.message = "Connexion réussie"
      state.loading = false
    })
    .addCase(connectUser.pending, (state, action) => {
      state.loading = true
      state.message = 'Envoie en cours'
    })
    .addCase(connectUser.rejected, (state, action) => {
      state.loading = false
      state.message = "Erreur lors de la connexion"
    })
  }
})

export const {
  setRegisterForm,
  toggleOpenRegisterForm,
  toggleopenMenu,
  toggleOpenConnectForm,
  setConnForm
} = display.actions

export const registerPresta = createAsyncThunk(
  'display/registerPresta',
  async ({formdata} : {formdata: DisplayState['registerForm']}) => {

    const response = await fetch(`/api/user/create`, {
      method: 'POST',
      body: JSON.stringify(formdata)
    })
    const results =  await response.json()
    return results
  }
)

export const connectUser = createAsyncThunk(
  'display/connectUser',
  async ({formdata} : {formdata: DisplayState['connForm']}) => {

    const response = await fetch(`/api/user/login`, {
      method: 'POST',
      body: JSON.stringify(formdata)
    })
    const results =  await response.json()
    return results
  }
)


export default display.reducer