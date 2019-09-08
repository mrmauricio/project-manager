import React from 'react';
import PropTypes from 'prop-types';
import { MdEdit, MdPerson } from 'react-icons/md';

import { Container, ProjectTitle, ProjectDefinitions } from './styles';
import { colors } from '../../styles/colors';

export default function Project({ id, name, goal, technology, person }) {
    // dynamically render images
    const images = require.context('../../assets/icons', true);
    // const imgSrc = images(`./react.svg`);

    return (
        <Container key={id}>
            <ProjectTitle>
                <header>
                    <h2>{name}</h2>
                    <MdEdit size={20} color={colors.black} />
                </header>
                <p>{goal}</p>
            </ProjectTitle>
            <ProjectDefinitions>
                <div id="team">
                    <ul>
                        {person.map(p => {
                            return (
                                <li key={p.id}>
                                    <span>
                                        {`${p.name.first} ${p.name.last}`}
                                    </span>
                                    <span>{`   <${p.email}>`}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div id="technologies">
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
