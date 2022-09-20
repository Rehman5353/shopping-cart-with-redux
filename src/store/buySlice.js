import { createSlice } from "@reduxjs/toolkit";



const initialState = [];


const buySlice = createSlice  = ({
    name: "buy",
    initialState,
    reducers : {
            add(state,action){
               state.push(action.payload);
            },
            remove(state,action ) {
              return state.filter((item) =>  item.id !== action.payload);
            }, 
    }
})

export const {add , remove } = buySlice.actions;

export default buySlice.reducer;