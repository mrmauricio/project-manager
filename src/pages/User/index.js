import React from 'react';

// import { Container } from './styles';

export default function User({ match }) {
    return <h1>User {match.params.userId}</h1>;
}
