import { configureStore , compose } from "@reduxjs/toolkit";

import cartReducer from './cartSlice'
import buyReducer from './buySlice'
const store =  configureStore({
     reducer : {
        cart: cartReducer,
        buys: buyReducer,
     },

});


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);


export default store;