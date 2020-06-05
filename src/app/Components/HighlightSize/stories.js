import React from 'react'
import { action } from '@storybook/addon-actions'
import Container, { Row, Column } from '../Grid'
import HighlightSize from '.'


export default {
  title: 'HIGHLIGHT|size/default',
}

const objHighlightSize = {
  title: "bundle size",
  left: {
    value: 10,
    label: "MINIFIED"
  },
  right: {
    value: 20,
    label: "MINIFIED + GZIPPED"
  }
}

export const Single = () => (
  <HighlightSize
    {...objHighlightSize}
  />
)

export const Double = () => (
  <Container>
    <Row justifyCenter autoColumn>
      <Column full>
        <HighlightSize
          {...objHighlightSize}
        />
      </Column>
      <Column full>
        <HighlightSize
          {...objHighlightSize}
        />
      </Column>
    </Row>
  </Container>
)
