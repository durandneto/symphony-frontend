import React from 'react'
import PropTypes from "prop-types"

import FontBody from '../../Components/Typography/Body'
import Container, { Row, Column } from '../../Components/Grid'
import Input from '../../Components/Input'

const SearchErrorTemplate = props => {

  let error = props.error
  if (!error) {
    error = {
      errorMessage: "unknow error",
      requestTime: 0,
    }
  }

  return (
    <Container fullHeight justifyCenter sm>
      <Row>
        <Column full alignCenter>
          <Input
            highlight
            textCenter
            hightlight
            value={props.term}
            test={/\s/}
            testMessage={"The package name can not be null or contain space"}
            error
            placeholder={props.placeholder}
            onEvent={props.onEvent}
          />
        </Column>
      </Row>
      <Row>
        <Column full>
          <div style={{backgroundColor: "red", padding: '3%', marginTop: '6px' }}>
            <Row>
              <Column full>
                <FontBody lg color={"Grey-50"} label={`Message: ${error.errorMessage}`} />
              </Column>
            </Row>
            <Row>
              <Column full>
                <FontBody md color={"Yellow-50"} label={`Request time: ${error.requestTime}`} />
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

SearchErrorTemplate.defaultProps = {}

SearchErrorTemplate.propTypes = {
  onEvent: PropTypes.func.isRequired,
}

export default SearchErrorTemplate