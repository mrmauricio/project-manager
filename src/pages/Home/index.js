import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import PartialList from '../../components/PartialList';

import { Container } from './styles';

export default function Home() {
    const [personData, setPersonData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    // componentDidMount
    useEffect(() => {
        async function loadData() {
            const data = await Promise.all([
                api.get('person'),
                api.get('project?_sort=id&_order=desc'), // ?_limit=5&endDate=open&_sort=id&_order=desc
            ]);

            const [personList, projectList] = data;

            setPersonData(personList.data);
            setProjectData(projectList.data);
        }
        loadData();
    }, []);

    return (
        <Container>
            {projectData.length > 0 && (
                <PartialList
                    data={projectData}
                    title="Projects"
                    addButton={{ text: 'New Project', route: '/projects/new' }}
                    showButton={{ text: 'Show All', route: '/projects' }}
                />
            )}
            <div>
                <PartialList title="Team" />
                {personData.length > 0 && (
                    <PartialList
                        data={personData}
                        title="Developers"
                        addButton={{ text: 'Invite Developer', route: '/home' }}
                        showButton={{ text: 'Show All', route: '/users' }}
                    />
                )}
            </div>
        </Container>
    );
}
