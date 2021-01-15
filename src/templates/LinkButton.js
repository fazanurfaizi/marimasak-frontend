import React from 'react'
import { withRouter } from 'react-router-dom'

const LinkButton = (props) => {

    const {
        history,
        location,
        match,
        staticContext,
        to,
        onClick,
        ...rest
    } = props

    return (
        <button
            {...rest}
            onClick={(e) => {
                onClick && onClick(e)
                history.push(to)
            }}
        />
    )
}

export default withRouter(LinkButton)
