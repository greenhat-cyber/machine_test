import { configureStore } from "@reduxjs/toolkit";

import DishListSlice from "./Dish/DishListSlice"

const store = configureStore({
    reducer: {
        DishListSlice,
    }
})

export default store;