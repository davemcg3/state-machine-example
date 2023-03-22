import { createSlice } from '@reduxjs/toolkit'
import { newUser, updateUser } from '../../models/User'

const initialState = {value: newUser()}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        anonymous: (state) => {
          state.value = initialState
        },
        sign_up: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = updateUser(action.payload.user, action.payload.email)
        },
        register: (state, action) => {
            state.value = updateUser(action.payload.user, action.payload.email, action.payload.password)
        },
        engage: (state, action) => {
            state.value = updateUser(action.payload.user, action.payload.email, action.payload.password, action.payload.displayName)
        },
    },
})

// Action creators are generated for each case reducer function
export const { anonymous, sign_up, register, engage } = userSlice.actions

export default userSlice.reducer
