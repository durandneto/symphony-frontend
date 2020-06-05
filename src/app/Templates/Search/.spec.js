import React from 'react'
import renderer from 'react-test-renderer'
import Template from '.'

const templateObject = {
  placeholder: "find a package",
  value: "react",
}

describe('Search Template', () => {
  it ('Rendering Search template without crashing', () => {
    const result = renderer.create(
      <Template
        {...templateObject}

        onEvent={e => {
          console.log(e)
          action(e)
        }}
      />
    ).toJSON()
    expect(result).toMatchSnapshot()
  })
})
