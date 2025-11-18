import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService } from '../../../api/api';

export const refreshToken = createAsyncThunk('user/refresh', async () => {
  const response = await ApiService.instance.request(
    'http://localhost:5000/api/user/refresh',
    'GET'
  );

  return await response;
});
