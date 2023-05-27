import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { localStorageService } from '../../services/localStorageService';
import axios from 'axios';
// import { openNotificationIcon } from '../../Components/NotificationIcon/NotificationIcon';
import { BASE_URL } from '../../utils/baseURL';
import { authService } from '../../services/authService';

const initialState = {
  accessToken:  !!localStorageService.get('access_token') ? localStorageService.get('access_token') : null,
  isLoggedIn: !!localStorageService.get('USER'),
  registerSuccess: false,
  isRegisterAccountSuccess: false,
};

//LOGIN
export const loginUser = createAsyncThunk('auth/login', async (user) => {
 
  
  try {      
      const res = await authService.login(user);
  
    localStorageService.set('access_token', res.token);
    localStorageService.set('USER', res.accountDTO);
    console.log("login success --->",res)
    return res;
  } catch (error) {
    console.log("errrrrrrrrrrrrrrrrrro",error);
    return error;
  }
});

//LOGOUT
export const logoutUser = createAsyncThunk('auth/logout', async (user, thunkAPI) => {
 
  try {
    localStorageService.remove('USER')
    localStorageService.remove('access_token')

    // openNotificationIcon('success', 'Success', 'Logout Success!');
    return user;
  } catch (error) {
    return error;
    // openNotificationIcon('erorr', 'Erorr', 'Login Erorr!');
  }
});

//REGISTER
// export const registerUser = createAsyncThunk('auth/registerUser', async (infor, thunkAPI) => {
//   try {
//     const res = await https.post('/api/auth/signup', infor);
//     openNotificationIcon('success', 'Success', 'Register Success!');
//     return res.data;
//   } catch (error) {
//     openNotificationIcon('erorr', 'Erorr', 'Register Failed!');
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
      }; 
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
        };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
          return {
              ...state,
              accessToken: payload.token,
              isLoggedIn: !!payload.token,  
            };
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoggedIn: false,
        };
      })

      .addCase(logoutUser.pending, (state) => {
        return {
          ...state,
        };
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        return {
            ...state,
            accessToken: null,
            isLoggedIn: false,
        };
      })
  },
});
// Action creators are generated for each case reducer function
export const { reset } = authSlice.actions;

export default authSlice.reducer;