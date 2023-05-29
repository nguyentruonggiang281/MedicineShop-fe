import React from 'react';
import { combineReducers } from 'redux';
import productReducer from './products';
import authSlice from './auth/authSlice';
import cartSlice from './cart/cartSlice';
// compine user
const rootReducer = combineReducers({
  products: productReducer,
  cart : cartSlice,
  auth : authSlice
});
export default rootReducer;