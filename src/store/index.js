import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../services/cartSlice";
import { productApi } from "../services/productApi";
import productIdSlice from "../services/productId";
import searchSlice from "../services/searchSlice";

export default configureStore({
  reducer: {
    productId: productIdSlice.reducer,
    cart: cartSlice.reducer,
    search : searchSlice.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
});
