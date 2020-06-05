import React from 'react'
import PropTypes from 'prop-types'
import Container, { Row, Column } from '../Grid'
import HeaderFont from '../Typography/Header'
import BodyFont from '../Typography/Body'

const HighlightSizeComponent = props => (
  <Container xs loading={props.loading}>
    <Row justifyCenter>
      <Column>
        <HeaderFont h4 color={"Blue-Grey-300"} upperCase label={props.title} />
      </Column>
    </Row>
    <Row spaceAround autoColumn>
      <Column full >
        <Row justifyCenter>
          <Column>
            <HeaderFont h2 color={"Grey-800"} upperCase label={props.left.value} />
          </Column>
        </Row>
        <Row justifyCenter>
          <Column>
            <BodyFont sm color={"Blue-Grey-300"} upperCase label={props.left.label} />
          </Column>
        </Row>
      </Column>
      <Column full>
        <Row justifyCenter>
          <Column>
            <HeaderFont h2 color={"Grey-800"} upperCase label={props.right.value} />
          </Column>
        </Row>
        <Row justifyCenter>
          <Column>
            <BodyFont sm color={"Blue-Grey-300"} upperCase label={props.right.label} />
          </Column>
        </Row>
      </Column>
    </Row>
  </Container>
)

HighlightSizeComponent.defaultProps = {}

HighlightSizeComponent.propTypes = {
  title: PropTypes.string.isRequired,
  left: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
  }).isRequired,
  right: PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
  }).isRequired,
  data: PropTypes.object,
}

export default HighlightSizeComponent
