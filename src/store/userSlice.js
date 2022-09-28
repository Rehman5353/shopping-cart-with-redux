import { createSlice } from "@reduxjs/toolkit";



const initialState = [];


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
            login(state,action){
               state.push(action.payload);
            },
            logout(state,action ) {
              return state.filter((item) =>  item.id !== action.payload);
            }, 
    }
})

export const {login , logout } = buySlice.actions;

export default userSlice.reducer;