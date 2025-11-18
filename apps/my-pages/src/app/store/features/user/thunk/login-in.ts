import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from '../../../api/api';

export const loginUser = createAsyncThunk(
  'user/login',
  async (user, { getState }) => {
    const state = getState();
    const body = Object.assign(user, { loginType: 'email' });

    const response = await ApiService.instance.request(
      'http://localhost:5000/api/user/login',
      'POST',
      body
    );

    return await response;
  }
);
