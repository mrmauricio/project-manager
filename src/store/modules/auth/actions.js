export function signInRequest(email, password) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
    };
}

export function signInSuccess(user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { user },
    };
}

// action para falha tanto to signIn quanto no signUp
export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
