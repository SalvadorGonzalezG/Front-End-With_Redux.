// Archivo el cual va a almacenar los slice y reducers de nuestro estado.
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})