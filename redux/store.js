import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import usersReducer from "./slices/usersSlice";
import createSagaMiddleware from "redux-saga";
import users from './sagas/users'


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
  middleware : [sagaMiddleware]
});

sagaMiddleware.run(users);
