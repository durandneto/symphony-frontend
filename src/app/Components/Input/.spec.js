import React from 'react'
import renderer from 'react-test-renderer'
import Input from '.'

describe('Input', () => {
  it ('Rendering Input without crashing', () => {
    const result = renderer.create(
      <Input
        value="Test input"
        data={{User: { id: 1}}}
        placeholder="Input"
        onEvent={e => {
          console.log(e)
        }}
      />
    ).toJSON()
    expect(result).toMatchSnapshot()
  })
})
