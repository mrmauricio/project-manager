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
    console.tron.log(data);

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
                {title === 'Team' && (
                    <>
                        {data.map(team => {
                            return (
                                <Team
                                    // buscar essas duas do redux
                                    admin={false}
                                    hasTeam={false}
                                    key={team.id}
                                    name={team.name}
                                    platform={team.platform}
                                    createdAt={team.createdAt}
                                    manager={team.manager}
                                />
                            );
                        })}
                    </>
                )}
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
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    addButton: PropTypes.objectOf(PropTypes.string),
    showButton: PropTypes.objectOf(PropTypes.string),
};

PartialList.defaultProps = {
    addButton: null,
    showButton: null,
};
