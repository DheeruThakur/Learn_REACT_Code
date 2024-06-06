import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';


const CartStore = configureStore({
    reducer : cartReducer
})

export default CartStore