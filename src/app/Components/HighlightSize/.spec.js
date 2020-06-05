import React from 'react'
import renderer from 'react-test-renderer'
import HighlightSize from '.'

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

describe('HighlightSize', () => {
  it ('Rendering HighlightSize without crashing', () => {
    const result = renderer.create(
      <HighlightSize
        {...objHighlightSize}
      />
    ).toJSON()
    expect(result).toMatchSnapshot()
  })
})
