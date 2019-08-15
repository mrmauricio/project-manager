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

export function signUpRequest(firstName, lastName, email, password, admin) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { firstName, lastName, email, password, admin },
    };
}

export function signUpSuccess() {
    return {
        type: '@auth/SIGN_UP_SUCCESS',
    };
}

// action para falha tanto to signIn quanto no signUp
export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
