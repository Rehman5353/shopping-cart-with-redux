import { configureStore , compose } from "@reduxjs/toolkit";

import cartReducer from './cartSlice'
const store =  configureStore({
     reducer : {
        cart: cartReducer,
     },

});


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);


export default store;