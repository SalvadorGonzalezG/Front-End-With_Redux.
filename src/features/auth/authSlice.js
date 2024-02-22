// metodos de reedox.
import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Obtener del localStorage los datos del usuario si es que existen
const user = JSON.parse(localStorage.getItem('user'))

// estado inicial de authSlice.js
const initialState ={

// Estamos cachando el usuario que se logueo, si ubo un error, si todo salio bien, si se esta cargando o si hubo un msj de error.
    user: user ? user : null, // usuario que esta logueado.
    isError: false, //->rejected
    isSuccess: false, //->fullField
    isLoading: false, //->Pending
    message: '' //->porque el rejected va a devolver un msj el que se lanse en el backend con el throw new error.
}
// f: para que el usuario creado pueda hacer login
export const login = createAsyncThunk('auth/login', async(user, thunkAPI)=>{
    try {
        return await authService.login(user)
    } catch (error) {
        const message= (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Registrar usuario."funcion reductora"
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) =>{
    try {
        return await authService.register(user)
    } catch (error) {
        const message= (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// f: logOut del usuario
export const logout = createAsyncThunk ('auth/logout', async() =>{
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth', // nombre del slice
    initialState, //estado inicial
    reducers: {   // objeto reducer
        reset: (state) => { // para cuando deje de servir este estado lo inicialicemos sin borrar el estado
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => { // se desarrola el ciclo de vida de rejected, fullfield y pending
    builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload // es lo que devuelve mi promesa.
        })
        .addCase(register.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(login.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload // es lo que devuelve mi promesa.
        })
        .addCase(login.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled, (state)=>{
            state.isSuccess = true
            state.user = null
        })
    }
})
// las funciones que se tienen dentro de reducers se tienen que exportar como si fueran acciones
export const {reset} = authSlice.actions
// Exportamos al reductor.
export default authSlice.reducer