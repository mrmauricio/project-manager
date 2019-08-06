export default function projects(state = [], action) {
    console.log(action.type);

    switch (action.type) {
        case 'a':
            return state;
        default:
            return state;
    }
}
