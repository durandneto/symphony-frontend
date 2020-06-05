import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import
  StyledInput,
  {
    StyledIconLoading,
    StyledIconError,
    StyledErrorMessage
  }
from './styles'

const Input = props => {
  const [value, handleChange] = useState(props.value)
  const [inputValid, setInputInvalid] = useState(true)

  useEffect(() =>{
    handleChange(props.value)
    if ( props.test && props.value ) {
      setInputInvalid(!props.value.match(props.test))
    }
  }, [props.value, props.test])

  return (
    <React.Fragment>
      <StyledInput
        id={props.id}
        type={props.type}
        highlight={props.highlight}
        textCenter={props.textCenter}
        placeholder={props.placeholder}
        success={props.success}
        error={props.error || !inputValid}
        disabled={props.disabled || props.loading}
        loading={props.loading || false}
        autoFocus={props.autoFocus}
        value={value}
        onChange={e => {
          handleChange(e.currentTarget.value)
          if (!e.currentTarget.value) {
            setInputInvalid(true)
          } else if (props.test) {
            setInputInvalid(!e.currentTarget.value.match(props.test))
          }
        }}
        onBlur={e => {
          inputValid && props.onEvent({
            data: {
              value,
              data: props.data
            },
            event: "onBlur",
            origin: "Input"
          })
        }}

        onFocus={e => {
          inputValid && props.onEvent({
            data: {
              value,
              data: props.data
            },
            event: "onFocus",
            origin: "Input"
          })
        }}

        onKeyUp={e => {
          if (e.key === "Enter") {
            inputValid && props.onEvent({
              data: {
                value,
                data: props.data
              },
              event: "onKeyUpAction",
              origin: "Input"
            })
          } else {
            // handleChange(e.currentTarget.value)
            inputValid && props.onEvent({
                data: {
                  value,
                  data: props.data
                },
                event: "onKeyUp",
                origin: "Input"
              })
            }
        }}
    />
    {
      props.loading && <StyledIconLoading />
    }
    {
      (props.error || !inputValid)  &&
        <React.Fragment>
          <StyledIconError />
          <StyledErrorMessage highlight={props.highlight}>
            {
              !inputValid ? props.testMessage :  props.error
            }
          </StyledErrorMessage>
        </React.Fragment>
    }
  </React.Fragment>
  )
}

Input.defaultProps = {
  type: "text",
  testMessage: "",
  disabled: false,
  highlight: false,
  textCenter: false,
  loading: false,
  placeholder: '',
  onEvent: () => {}
}

Input.propTypes = {
  disabled: PropTypes.bool,
  test: PropTypes.any,
  highlight: PropTypes.bool,
  textCenter: PropTypes.bool,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  testMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  onEvent: PropTypes.func,
  data: PropTypes.object,
}

export default Input
