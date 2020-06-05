import React from 'react'
import { action } from '@storybook/addon-actions'
import Template from '.'


export default {
  title: 'Templates|Search',
}

const templateObject = {
  placeholder: "find a package",
}

export const Default = () => (
  <Template
    {...templateObject}
    onEvent={e => {
      console.log(e)
      action(e)
    }}
  />
)
