import React from 'react'
import { Route, Redirect } from 'react-router'
import { useSelector } from 'react-redux'

const AppRoute = ({
    component: Component,
    layout: Layout,
    authentication = false,
    ...rest
}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <Route        
            {...rest}
            render={props => (
                authentication ? (isAuthenticated ? (
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
