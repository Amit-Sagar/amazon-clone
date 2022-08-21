import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState:{
        itemList:[],
    },
    reducers:{
        getItems(state,action){
           state.itemList = action.payload;
        }
    }
});
export const searchActions = searchSlice.actions;
export default searchSlice;