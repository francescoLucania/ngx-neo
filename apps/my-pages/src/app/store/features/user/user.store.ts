import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {  UserProfile } from '@nx-neo-models';
import { createUser } from './thunk/create-user';

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
      // Вызывается прямо перед выполнением запроса
      .addCase(createUser.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      // Вызывается, если запрос успешно выполнился
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
      // Вызывается в случае ошибки
      .addCase(createUser.rejected, (state: User, action: Response) => {
        state.loadingStatus = 'failed';
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors

        if (action.payload?.error) {
          state['error'] = action.payload.error;
        }

        console.log('user rejected', action.payload);
      });
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
