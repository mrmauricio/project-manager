import { combineReducers } from 'redux';

import projects from './projects/reducer';
import users from './users/reducer';
import technologies from './technologies/reducer';

export default combineReducers({
    projects,
    users,
    technologies,
});
