export function addUser(user) {
    return {
        type: '@users/ADD',
        user,
    };
}
