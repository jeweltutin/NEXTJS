import { configureStore } from '@reduxjs/toolkit';

import cakeReducer from '@/app/redux/state/features/cake/cakeSlice';
import icecreamReducer from '@/app/redux/state/features/icecream/icecreamSlice';
import userReducer from '@/app/redux/state/features/user/userSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    //icecream: icecreamReducer,
    //user: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

