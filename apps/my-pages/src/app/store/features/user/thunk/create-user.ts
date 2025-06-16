import { createAsyncThunk } from '@reduxjs/toolkit';


export const createUser = createAsyncThunk(
    'user/create',
    async (user) => {
      const response = await fetch('http://localhost:5000/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });

      return await response.json()
    },
)
