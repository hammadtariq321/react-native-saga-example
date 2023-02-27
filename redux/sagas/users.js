import { call,takeEvery, put } from "redux-saga/effects";
import {fetchUserDataSuccess} from '../slices/usersSlice'
import axios from "axios";

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return data;
// };

function* fetchUserAction() {
  const usersList = yield axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data)
  //const formattedUsers = yield usersList.json()
  yield put(fetchUserDataSuccess(usersList));
}

function* rootSaga() {
  yield takeEvery("users/fetchUserData", fetchUserAction);
}

export default rootSaga;
