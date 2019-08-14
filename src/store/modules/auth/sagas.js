import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import * as SignInActions from './actions';

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
            yield put(SignInActions.signFailure());
            return;
        }

        const [user] = response.data;

        yield put(SignInActions.signInSuccess(user));

        history.push('/home');
    } catch (err) {
        toast.error('Internal Server Error');
        yield put(SignInActions.signFailure());
    }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
