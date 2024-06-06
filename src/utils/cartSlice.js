import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state , action) => {
                    state.items.push(action.payload)
                },
        clearCart : (state) => {
                    state.items = []
                },
        removeItem : (state , action) => {
            // const items = state.items;
            // state.items = items.filter(item => item != action.payload)
                state.items.pop()
            }
    }
})

export const {addItem , clearCart , removeItem} = cartSlice.actions

export default cartSlice.reducer