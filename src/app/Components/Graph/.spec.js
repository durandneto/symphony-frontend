import React from 'react'
import renderer from 'react-test-renderer'
import Graph from '.'

const data = [
  {
    label: "1.0.0",
    data: [100,100]
  },
  {
    label: "1.0.1",
    data: [0,0]
  },
  {
    label: "1.0.2",
    data: [0,50]
  }
]


describe('Graph Component', () => {
  it ('Rendering without crashing', () => {
    const result = renderer.create(
      <Graph
        current={data[1]}
        data={data}
        height={500}
        lineWidth={"15px"}
        onEvent={e => {
          console.log(e)
        }}
      />
    ).toJSON()
    expect(result).toMatchSnapshot()
  })
})
