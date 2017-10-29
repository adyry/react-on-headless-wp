import React from 'react'
import { Route } from 'react-router-dom'

export const url = 'http://wp.localhost/wp-json/wp/v2';

export const RouteWithProps = ({ path, exact, strict, component:Component, location, ...rest }) => (
    <Route
        path={path}
        exact={exact}
        strict={strict}
        location={location}
        render={(props) => <Component {...props} {...rest} />} />
);