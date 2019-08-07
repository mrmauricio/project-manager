import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import PartialList from '../../components/PartialList';

import * as ProjectActions from '../../store/modules/projects/actions';
import * as TechnologyActions from '../../store/modules/technologies/actions';
import * as UserActions from '../../store/modules/users/actions';

import { Container } from './styles';

export default function Home() {
    const dispatch = useDispatch();

    const users = useSelector(state =>
        state.users.find(user => user.admin === true)
    );

    // componentDidMount
    useEffect(() => {
        async function loadData() {
            const data = await Promise.all([
                api.get('technology'),
                api.get('person'),
                api.get('project?_limit=5&endDate=open&_sort=id&_order=desc'),
            ]);

            const [technologyList, userList, projectList] = data;

            // console.log(technologyList.data);
            // console.log(projectList.data);

            technologyList.data.map(technology =>
                dispatch(TechnologyActions.addTechnology(technology))
            );
            userList.data.map(user => dispatch(UserActions.addUser(user)));
            projectList.data.map(project =>
                dispatch(ProjectActions.addProject(project))
            );
        }
        if (!users) {
            loadData();
        }
    }, [dispatch, users]);

    return (
        <Container>
            <PartialList
                title="Projects"
                addButton="New Project"
                showButton="Show All"
            />
            <PartialList
                title="Developers"
                addButton="New Developer"
                showButton="Show All"
            />
        </Container>
    );
}
