import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = false;

    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/home" />;
    }

    return (
        <Route
            {...rest}
            render={props => (
                <>
                    {signed ? <Header /> : null}
                    <Component {...props} />
                    {signed ? <Footer /> : null}
                </>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    // como o componente pode ser class ou func, passamos oneOfType
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

// as que não são obrigatórias vem pro default
RouteWrapper.defaultProps = {
    isPrivate: false,
};
