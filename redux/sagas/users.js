import { call, takeEvery, put } from "redux-saga/effects";
import { fetchUserData, fetchUserDataSuccess } from "../slices/usersSlice";
import {fetchPostData, fetchPostDataSuccess} from '../slices/postsSlice'
import axios from "axios";

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return data;
// };
//https://dummyjson.com/users
function* fetchUserAction(action) {
  const { api } = action.payload.payload;
  const usersList = yield axios
    .get(`https://jsonplaceholder.typicode.com${api}`)
    .then((res) => res.data);
  // console.log(
  //   "🚀 ~ file: users.js:15 ~ function*fetchUserAction ~ usersList:",
  //   usersList
  // );
  const formattedUsers = yield usersList.slice(0, 10);
  yield put(fetchUserDataSuccess(formattedUsers));
}

function* fetchPostsAction(action) {
  const { api } = action.payload.payload;
  const postsList = yield axios
    .get(`https://jsonplaceholder.typicode.com${api}`)
    .then((res) => res.data);
  yield put(fetchPostDataSuccess(postsList));
}

function* rootSaga() {
  yield takeEvery(fetchUserData.type, fetchUserAction);
  yield takeEvery(fetchPostData.type, fetchPostsAction);
}

export default rootSaga;
