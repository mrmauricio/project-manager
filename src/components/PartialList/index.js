import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdWork, MdLaptopMac, MdGroup } from 'react-icons/md';

import User from '../User';
import Project from '../Project';
import Team from '../Team';

import { List, Title, Buttons } from './styles';
import { colors } from '../../styles/colors';

export default function PartialList({ data, title, addButton, showButton }) {
    let icon;

    switch (title) {
        case 'Projects':
            icon = <MdWork size={35} color={colors.lightCyan30} />;
            break;
        case 'Developers':
            icon = <MdGroup size={35} color={colors.lightCyan30} />;
            break;
        case 'Team':
            icon = <MdLaptopMac size={35} color={colors.lightCyan30} />;
            break;
        default:
            icon = '';
            break;
    }

    return (
        <List>
            <div>
                <Title>
                    {icon}
                    <strong>{title}</strong>
                </Title>
                {title === 'Projects' && (
                    <>
                        {data.map(project => {
                            return (
                                <Project
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    goal={project.goal}
                                    technology={project.technology}
                                    person={project.person}
                                />
                            );
                        })}
                    </>
                )}
                {title === 'Team' && <Team />}
                {title === 'Developers' && (
                    <>
                        {data.map(user => {
                            return (
                                <User
                                    key={user.id}
                                    id={user.id}
                                    avatar={user.avatar}
                                    firstName={user.name.first}
                                    lastName={user.name.last}
                                    email={user.email}
                                />
                            );
                        })}
                    </>
                )}
            </div>
            <Buttons>
                {addButton && (
                    <Link to={addButton.route}>
                        <button type="button">{addButton.text}</button>
                    </Link>
                )}
                {showButton && (
                    <Link to={showButton.route}>
                        <button type="button">{showButton.text}</button>
                    </Link>
                )}
            </Buttons>
        </List>
    );
}

PartialList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    addButton: PropTypes.objectOf(PropTypes.string),
    showButton: PropTypes.objectOf(PropTypes.string),
};

PartialList.defaultProps = {
    addButton: null,
    showButton: null,
    data: null,
};

/* ADICIONAR ADMIN E TEAM P/ AS CONFIGS DO USER NO REDUX E BUSCAR AQUI

PASSAR TODO O FETCH DA TEAM PRA DENTRO DA TABELA USER PRA VIR JUNTO NA
HORA DO LOGIN, E ENTAO ADICIONAR */
