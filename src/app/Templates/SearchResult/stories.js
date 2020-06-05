import React from 'react'
import { action } from '@storybook/addon-actions'
import Template from '.'


export default {
  title: 'Templates|Search',
}

const defaultParsedHistory = [1,2,3,4,5].map(version => {
  return {
    label: `0.0.${version}`,
    data: [2,1]
  }
})

const defaultNoneParsedHistory = [1,2,3,4,5].map(version => {
  return {
    data: [0,0]
  }
})

const preloadingControl = {
  loading: false,
  error: false,
  preloading: true,
  success: false,
  errorResponse: {}
}

const errorControl = {
  loading: false,
  error: true,
  preloading: false,
  success: false,
  errorResponse: {}
}

const loadingControl = {
  loading: true,
  error: false,
  preloading: false,
  success: false,
  errorResponse: {}
}

const initialTemplateObject = {
  term: "react",
  packageStats: {
    requestTime: -1,
    index: "react",
    fromCache: false,
    data: {
      gzip: 100,
      isProcessed: true,
      minified: 200,
      tarball: "tarball url ",
      time: "23ms",
      version: "1.0.0",
    },
    history:[],
    parsedHistory: defaultParsedHistory
  },
  controls: preloadingControl
}

export const WithResult = () => (
  <Template
    {...initialTemplateObject}
    onEvent={e => {
      console.log(e)
      action(e)
    }}
  />
)

export const WithErrorResult = () => (
  <Template
    {...initialTemplateObject}
    controls={errorControl}
    onEvent={e => {
      console.log(e)
      action(e)
    }}
  />
)

export const LoadingResult = () => (
  <Template
    {...initialTemplateObject}
    controls={loadingControl}
    onEvent={e => {
      console.log(e)
      action(e)
    }}
  />
)