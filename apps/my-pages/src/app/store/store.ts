import { configureStore, Tuple } from '@reduxjs/toolkit';
import eventsReducer from './features/events/events.store';
import userReducer from './features/user/user.store';
import { loggerMiddleware } from './middlewares/logger/logger';
import { authMiddleware } from './middlewares/auth/auth';
export const store = configureStore({
  reducer: {
    user: userReducer,
    events: eventsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, loggerMiddleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
