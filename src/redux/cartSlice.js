import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const item = state.cart.find((item) => item.id === product.id);
            if (item) {
                item.quantity += 1;
            }
            else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        removeCart: (state, action) => {
            const product = action.payload;
            const item = state.cart.find((item) => item.id === product.id);
            if (item) {
                state.cart = state.cart.filter((item) => item.id !== product.id);
            }
        },
        addQuantity: (state, action) => {
            const product = action.payload;
            const item = state.cart.find((item) => item.id === product.id);
            if (item) {
                item.quantity += 1;
            }
            else {
                state.cart.push({ ...product, quantity: 1 });
            }
        },
        removeQuantity: (state, action) => {
            const product = action.payload;
            const item = state.cart.find((item) => item.id === product.id);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                }
                else {
                    state.cart = state.cart.filter((item) => item.id !== product.id);
                }
            }
        },
        resetState: (state) => {
            state.cart = [];
            state.total = 0;
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeCart, resetState, addQuantity, removeQuantity } = cartSlice.actions;
