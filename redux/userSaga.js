import {call, put, takeEvery} from 'redux-saga/effects';
import { getUsersSuccess } from './slices/usersSlice';
 

function* watchGetUsers() {
    const users = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'))
    const formatedUsers = yield users.json()
    yield put(getUsersSuccess(formatedUsers))
}

function* userSaga() {
    yield takeEvery('users/getUsers', watchGetUsers)
}

export default userSaga;