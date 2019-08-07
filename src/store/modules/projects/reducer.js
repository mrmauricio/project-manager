export default function projects(state = [], action) {
    switch (action.type) {
        case '@projects/ADD':
            return [...state, action.project];
        default:
            return state;
    }
}
