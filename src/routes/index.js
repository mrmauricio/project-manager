import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import User from '../pages/User';
import UserList from '../pages/UserList';
import Project from '../pages/Project';
import ProjectList from '../pages/ProjectList';
import AddProject from '../pages/AddProject';
import Team from '../pages/Team';
import AddTeam from '../pages/AddTeam';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/home" component={Home} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />

            <Route exact path="/users" component={UserList} isPrivate />
            <Route path="/users/:userId" component={User} isPrivate />

            <Route exact path="/projects" component={ProjectList} isPrivate />
            <Route path="/projects/new" component={AddProject} isPrivate />
            <Route path="/projects/:projectId" component={Project} isPrivate />

            <Route path="/teams/new" component={AddTeam} isPrivate />
            <Route path="/teams/:teamId" component={Team} isPrivate />
        </Switch>
    );
}
