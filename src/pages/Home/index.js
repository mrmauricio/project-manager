import React from 'react';

import PartialList from '../../components/PartialList';

import { Container } from './styles';

export default function Home() {
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
