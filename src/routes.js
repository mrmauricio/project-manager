import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import UserList from './pages/UserList';
import Project from './pages/Project';
import ProjectList from './pages/ProjectList';
import AddUser from './pages/AddUser';
import AddProject from './pages/AddProject';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/users" component={UserList} />
            <Route path="/users/new" component={AddUser} />
            <Route path="/users/:userId" component={User} />

            <Route exact path="/projects" component={ProjectList} />
            <Route path="/projects/new" component={AddProject} />
            <Route path="/projects/:projectId" component={Project} />
        </Switch>
    );
}
