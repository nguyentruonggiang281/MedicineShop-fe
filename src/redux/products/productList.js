import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { productService } from '../../services/productService';
/** State **/
const initialState = {
  allProduct: [],
  loading : false,
};
export const getAllProduct = createAsyncThunk('product/list', async () => {
     const response = await productService.getAllProduct();
  return response;
});

const listProductSlice = createSlice({
  name: 'product/list',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        allProduct: [],
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getAllProduct.pending, (state) => {
        return {...state,
          allProduct: null,
        loading : true
      };
      })
      .addCase(getAllProduct.fulfilled, (state, actions) => {
        return {
          ...state,
          allProduct: actions.payload,
          loading : false
        };
      })
      .addCase(getAllProduct.rejected, (state) => {
        return {...state,
          allProduct: null,
          loading: false 
        };
      })
  },
});

export const { reset } = listProductSlice.actions;
export default listProductSlice.reducer;
