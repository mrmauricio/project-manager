export default function users(state = [], action) {
    switch (action.type) {
        case '@users/ADD': {
            // const idExists = state.find(users => users.id === action.user.id);
            //
            // if (idExists) {
            //    return state;
            // }

            return [...state, action.user];
        }
        default:
            return state;
    }
}
