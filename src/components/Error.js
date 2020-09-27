import React from 'react'
import PropTypes from 'prop-types'

const Error = ({mensage}) => {
    return (
        <p className=" my-3 p-4 text-center alert alert-primary">
            {mensage}
        </p>
    )
}

Error.propTypes = {
    mensage: PropTypes.string.isRequired
}

export default Error
