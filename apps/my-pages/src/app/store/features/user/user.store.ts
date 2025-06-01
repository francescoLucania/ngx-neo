import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationBody, UserProfile } from '@nx-neo-models';

export type User = {
  accessToken: string;
} & UserProfile;

const userSlice = createSlice({
  name: 'events',
  initialState: {
    value: null,
  },
  reducers: {
    getUser: (state) => {
      return state;
    },
    createUser: (
      state,
      action: PayloadAction<Required<RegistrationBody> | null>
    ) => {
      console.log('registration', action.payload);
      state.value = action.payload;
      return state;
    },
  },
});

export const { getUser, createUser } = userSlice.actions;

export default userSlice.reducer;
