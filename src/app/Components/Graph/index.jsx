import React from 'react'
import PropTypes from 'prop-types'
import Container, { Row, Column } from '../Grid'
import BodyFont from '../Typography/Body'

import {
  GraphContainer,
  GraphColumn,
  GraphValue,
  GraphGap,
  GraphHover
} from './styles'

const Graph = props => {

  const getSlope = arr => {

    if ( arr ) {

      let sumItemArray = arr.map(
        item => {
          return item.data[0] + item.data[1]
        })

      const maxValue = Math.max(...sumItemArray) * 1.2 // mitiply by 1.1 to get a margin top
      // handle array null return 1 to graph
      return maxValue + 1
  } else {
    return 1
  }
}

  // get the max height
  const canvasSize = getSlope(props.data)
  // const slopeHeight = 200 / canvasSize

  //calculate the slope by max sum value
  const slope =  100 / canvasSize

  return (
    <Container loading={props.loading}>
      <Row spaceAround>
        <Column>
          <GraphContainer height={"200px"}>
            {
              props.data.map((item, key) => {
                if ( item.label === props.current.label ) {
                  item = props.current
                }
                return (
                  <GraphColumn key={key} onClick={() => {
                    // avoinding click on the same column
                    if ( item.label !== props.current.label ) {
                      props.onEvent({
                        type: "onClick",
                        origin: "GraphBarColumn",
                        data: item
                      })
                    }
                  }}>
                    <GraphGap lineWidth={props.lineWidth} height={100 - (slope * item.data[1]) - (slope * item.data[0])} />
                    <GraphValue color={(item.label === props.current.label) ? "Teal-100" : "Blue-100"} lineWidth={props.lineWidth} height={slope * item.data[1]} />
                    <GraphValue color={(item.label === props.current.label) ? "Light-Green-A700" : "Indigo-A700"} lineWidth={props.lineWidth} height={slope * item.data[0]} />
                    <GraphHover><BodyFont xs color={"Blue-Grey-300"} label={item.label} /></GraphHover>
                  </GraphColumn>
                )
              })
            }
          </GraphContainer>
        </Column>
      </Row>
    </Container>
  )
}

Graph.defaultProps = {
  onEvent: () => {}
}

Graph.propTypes = {
  data: PropTypes.array.isRequired,
  current: PropTypes.shape({
    label: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
  }).isRequired,
}

export default Graph
