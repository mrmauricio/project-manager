export default function technologies(state = [], action) {
    switch (action.type) {
        case '@technologies/ADD':
            return [...state, action.technology];
        default:
            return state;
    }
}
