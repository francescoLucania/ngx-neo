import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {  UserProfile } from '@nx-neo-models';
import { createUser } from './thunk/create-user';
import { loginUser } from './thunk/login-in';
import { ApiService } from '../../api/api';
import { refreshToken } from './thunk/refresh-token';

export type User = {
  accessToken?: string | null;
  loadingStatus: string;
  error?: {
    message: string;
    statusCode: number;
  } | null;
} & Partial<UserProfile>;

export type Response = {
  payload:   {
    message?: string;
    statusCode?: number
  } & Partial<User>
}

const userAdapter = createEntityAdapter()

const userSlice = createSlice({
  extraReducers: (builder) => {
    builder
      // user/create
      .addCase(createUser.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state: User, action: Response) => {
        // Добавляем пользователя
        userAdapter.addOne(state, action);
        state.loadingStatus = 'idle';
        console.log('user fulfilled', action.payload);

        if (action?.payload?.statusCode && action?.payload?.statusCode > 299) {
          state.error = action?.payload;
        } else {
          state.error = null;
          Object.assign(state, action?.payload);
        }
      })
      .addCase(createUser.rejected, (state: User, action: Response) => {
        state.loadingStatus = 'failed';
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors

        if (action.payload?.error) {
          state['error'] = action.payload.error;
        }

        console.log('user rejected', action.payload);
      })

      // user/refresh
      .addCase(refreshToken.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state: User, action: Response) => {
        // Добавляем пользователя
        userAdapter.addOne(state, action);
        state.loadingStatus = 'idle';

        if (action?.payload?.statusCode && action?.payload?.statusCode > 299) {
          state.error = action?.payload;
        } else {

          state.error = null;
          Object.assign(state, action?.payload);

          if (typeof action?.payload.accessToken === 'string') {
            ApiService.instance.setAccessToken = action?.payload.accessToken;
          }
        }
      })
      .addCase(refreshToken.rejected, (state: User, action: Response) => {
        state.loadingStatus = 'failed';
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors

        if (action.payload?.error) {
          state['error'] = action.payload.error;
        }

        console.log('user rejected', action.payload);
      })


      // user/login
      .addCase(loginUser.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state: User, action: Response) => {
        // Добавляем пользователя
        userAdapter.addOne(state, action);
        state.loadingStatus = 'idle';

        if (action?.payload?.statusCode && action?.payload?.statusCode > 299) {
          state.error = action?.payload;
        } else {

          state.error = null;
          Object.assign(state, action?.payload);

          if (typeof action?.payload.accessToken === 'string') {
            ApiService.instance.setAccessToken = action?.payload.accessToken;
          }
        }
      })
      .addCase(loginUser.rejected, (state: User, action: Response) => {
        state.loadingStatus = 'failed';
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors

        if (action.payload?.error) {
          state['error'] = action.payload.error;
        }

        console.log('user rejected', action.payload);
      })
    ;
  },
  initialState: userAdapter.getInitialState<User>(
    {
      loadingStatus: 'idle'
    }
  ),
  name: 'events',
  reducers: {
    getUser: (state) => {
      return state;
    }
  }
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
