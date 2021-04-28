import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const fakeAuth = {
    isAuthenticated: true
}

const AppRoute = ({
    component: Component,
    layout: Layout,
    authentication = false,
    ...rest
}) => {
    return (
        <Route        
            {...rest}
            render={props => (
                authentication ? (fakeAuth.isAuthenticated ? (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                ) : (
                    <Redirect to="/login" />
                )) : (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )
            )}
        />
    )
}

export default AppRoute
