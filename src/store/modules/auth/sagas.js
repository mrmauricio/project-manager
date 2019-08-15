import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        // in a real app, here we should POST to /sessions to get an JWT token
        // if the email and password exists. Since in this example i'm not using
        // a real backend, i'll just compare if the data entered in the form equals
        // to any user's data on json server. if it's true, then we get a fake token
        // to proceed on the authentication.

        const response = yield call(
            api.get,
            `person?email=${email}&password=${password}`
        );

        if (response.data.length === 0) {
            toast.error(
                'Authentication failed. Please check your data and try again'
            );
            yield put(signFailure());
            return;
        }

        const [user] = response.data;

        api.defaults.headers.Authorization = `Bearer ${user.fakeSessionToken}`;

        yield put(signInSuccess(user));

        history.push('/home');
    } catch (err) {
        toast.error('Something went wrong, please try again later');
        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { firstName, lastName, email, password, admin } = payload;

        // check if e-mail is already registered. this validation should happen
        // in the backend, but as i'm using json-server i need to do it here
        const response = yield call(api.get, `person?email=${email}`);

        if (response.data.length !== 0) {
            toast.error('E-mail address already in use');
            yield put(signFailure());
            return;
        }

        const first = firstName.toLowerCase();
        const last = lastName.toLowerCase();
        const user = {
            name: { first, last },
            email,
            password,
            admin,
            fakeSessionToken: `${first}${last}abcdefghijklmnopqrstuvwxyz`,
        };

        yield call(api.post, 'person', user);

        api.defaults.headers.Authorization = `Bearer ${user.fakeSessionToken}`;

        toast.success('User created successfully');
        yield put(signInSuccess(user));

        history.push('/home');
    } catch (err) {
        toast.error('Something went wrong, please try again later');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
