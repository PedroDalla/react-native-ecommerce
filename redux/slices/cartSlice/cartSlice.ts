import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./typings";


export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        count: 0
    } as CartState,
    reducers: {
        addItem: (state, action: PayloadAction<number>) => {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count += 1;
            } else {
                state.items.push({ id: action.payload, count: 1 });
            }
            state.count++
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);

            if (itemIndex !== -1) {
                if (state.items[itemIndex].count > 1) {
                    state.items[itemIndex].count -= 1;
                } else {
                    state.items.splice(itemIndex, 1);
                }
                state.count--
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.count = 0
        },
    },
})


export const cartActions = cartSlice.actions
export default cartSlice.reducer 