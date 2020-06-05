import React from 'react'
import { action } from '@storybook/addon-actions'
import Template from '.'


export default {
  title: 'Templates|Search',
}

const templateObject = {
  placeholder: "find a package",
  term: "react",
  error: null
}

export const UnknowError = () => (
  <Template
    {...templateObject}
    onEvent={e => {
      console.log(e)
      action(e)
    }}
  />
)

export const WithErrorMessage = () => (
  <Template
    {...templateObject}
    error={{
      errorMessage: "Package not found",
      requestTime: "23ms",
    }}
    onEvent={e => {
      console.log(e)
      action(e)
    }}
  />
)
