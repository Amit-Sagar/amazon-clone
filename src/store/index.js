import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/productApi";
import productIdSlice from "../services/productId";

export default configureStore({
    reducer : {
        productId: productIdSlice.reducer,
        [productApi.reducerPath] : productApi.reducer,
    }
});

