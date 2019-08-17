import React from 'react';
import PropTypes from 'prop-types';
import { MdEdit, MdPerson } from 'react-icons/md';

import { Container, ProjectTitle, ProjectDefinitions } from './styles';

export default function Project({ id, name, goal, technology, person }) {
    // dynamically render images
    const images = require.context('../../assets/icons', true);
    // const imgSrc = images(`./react.svg`);

    return (
        <Container key={id}>
            <ProjectTitle>
                <header>
                    <strong>{name}</strong>
                    <MdEdit size={20} color="#191920" />
                </header>
                <div>
                    <strong>Goal:</strong>
                    <div>{goal}</div>
                </div>
            </ProjectTitle>
            <ProjectDefinitions>
                <div>
                    <strong>Stack:</strong>
                    <ul>
                        {technology.map(tech => {
                            return (
                                <li key={tech.id}>
                                    <div>
                                        <img
                                            src={images(`${tech.icon}`)}
                                            alt=""
                                        />
                                        <span>{tech.name}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div id="team">
                    <strong>Team:</strong>
                    <ul>
                        {person.map(p => {
                            return (
                                <li key={p.id}>
                                    <MdPerson size={20} color="#191920" />
                                    <span>
                                        {`${p.name.first} ${p.name.last}`}
                                        <span>{`   <${p.email}>`}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </ProjectDefinitions>
        </Container>
    );
}

Project.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    goal: PropTypes.string.isRequired,
    technology: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
    person: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.shape({
                first: PropTypes.string.isRequired,
                last: PropTypes.string.isRequired,
            }).isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
};
