import React from 'react'
import PropTypes from 'prop-types'
import StyledBody from './styles'

const Body = props => <StyledBody {...props} >{props.label}</StyledBody>

Body.defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    upperCase: false,
    lowerCase: false,
    color: 'Blue-Grey-800'
}

Body.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
      ]),
    color: PropTypes.string,
    xs: PropTypes.bool,
    upperCase: PropTypes.bool,
    lowerCase: PropTypes.bool,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool
}

export default Body