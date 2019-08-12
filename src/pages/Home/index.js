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
                api.get('project?_sort=id&_order=desc'), // ?_limit=5&endDate=open&_sort=id&_order=desc
            ]);

            const [technologyList, userList, projectList] = data;

            // console.log(technologyList.data);
            // console.log(projectList.data);

            console.log('fetched data');

            technologyList.data.map(technology =>
                dispatch(TechnologyActions.addTechnology(technology))
            );
            userList.data.map(user => dispatch(UserActions.addUser(user)));
            projectList.data.map(project =>
                dispatch(ProjectActions.addProject(project))
            );

            console.log('added to redux');
        }
        if (!users) {
            loadData();
        }
    }, [dispatch, users]);

    return (
        <Container>
            <PartialList
                title="Projects"
                addButton={{ text: 'New Project', route: '/projects/new' }}
                showButton={{ text: 'Show All', route: '/projects' }}
            />
            <PartialList
                title="Developers"
                addButton={{ text: 'New Developer', route: '/home' }}
                showButton={{ text: 'Show All', route: '/users' }}
            />
        </Container>
    );
}
