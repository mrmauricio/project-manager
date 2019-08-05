import React from 'react';

// import { Container } from './styles';

export default function Project({ match }) {
    return <h1>Project {match.params.projectId}</h1>;
}
