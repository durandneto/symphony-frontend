import React from 'react'
import { action } from '@storybook/addon-actions'
import Graph from '.'


export default {
  title: 'HIGHLIGHT|Graph/default',
}

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

export const Horizontal = () => (
  <Graph
    current={data[1]}
    data={data}
    height={500}
    lineWidth={"15px"}
    onEvent={e => {
      console.log(e)
    }}
  />
)

export const Loading = () => (
  <Graph
    loading
    data={[]}
  />
)
