import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './slices/counterSlice';
import usersSlice from './slices/usersSlice';
import userSaga from './userSaga';

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice
  },
  middleware: [saga]
});

saga.run(userSaga)

