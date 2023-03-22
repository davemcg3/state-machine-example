import { configureStore } from '@reduxjs/toolkit'
import pageCounterReducer from "./slices/pageCounterSlice";
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        pageCounter: pageCounterReducer,
        user: userReducer,
    },
})
