import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productoService from "./productoService";
const initialState = {
    misproductos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''

}
// funcion para crear un nuevo producto
export const crearProducto = createAsyncThunk('productos/crear', async(productoData, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await productoService.crearProducto(productoData, token)
    } catch (error) {
        const message= (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Obtener los productos del usuario
export const getProductos = createAsyncThunk('productos/getProductos', async(_, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await productoService.getProductos(token)
    } catch (error) {
        const message= (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const productoSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        reset: (state) => initialState
    },extraReducers: (builder) => {
        builder
        .addCase(crearProducto.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(crearProducto.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.misproductos.push(action.payload)
        })
        .addCase(crearProducto.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getProductos.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getProductos.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.misproductos = action.payload
        })
        .addCase(getProductos.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
}
})

export const {reset} = productoSlice.actions
export default productoSlice.reducer