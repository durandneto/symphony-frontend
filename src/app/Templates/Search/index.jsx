import React, { useState } from 'react'
import PropTypes from "prop-types"

import Container, { Row, Column } from '../../Components/Grid'
import Input from '../../Components/Input'

const SymphonyLogo = require('../../assets/Symphony-logo.jpg')

const SearchTemplate = props => {

  const [term, setTerm] = useState(props.value)

  return (
    <Container fullHeight justifyCenter sm>
      <Row>
        <Column full alignCenter>
          <img src={SymphonyLogo} title="Symphony search" alt="Symphony search" />
        </Column>
      </Row>
      <Row>
        <Column full alignCenter>
          <Input
            highlight
            textCenter
            hightlight
            value={term}
            test={/\s/}
            testMessage={"The package name can not be null or contain space"}
            placeholder={props.placeholder}
            onEvent={e => {
              const { event, data } = e
              // send action intension to page
              if ( event === "onKeyUpAction" ) {
                props.onEvent({
                  event: "onKeyUpAction",
                  origin: "SearchTemplate",
                  data: {
                    ...props.data,
                    term
                  }
                })
              }
              // saving input value on state
              if ( event === "onKeyUp" ) {
                setTerm(data.value)
              }

            }}
          />
        </Column>
      </Row>
    </Container>
  )
}

SearchTemplate.defaultProps = {
  term: ""
}

SearchTemplate.propTypes = {
  term: PropTypes.string,
  onEvent: PropTypes.func.isRequired,
}

export default SearchTemplate