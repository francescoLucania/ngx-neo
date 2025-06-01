import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const events = [
  { id: 'event 1' },
  { id: 'event 2' },
  { id: 'event 3' },
  { id: 'event 4' },
  { id: 'event 5' },
];

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    value: [],
  },
  reducers: {
    getEvents: (state) => {
      state.value = events;
      return state;
    },
    createEvent: (state, action: PayloadAction<{ id: string }>) => {
      console.log('action', action);

      state.value.push(action.payload);
    },
  },
});

export const { getEvents, createEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
