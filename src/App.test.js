import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'

test('renders learn react link', () => {

  const result = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  ).toJSON()
  expect(result).toMatchSnapshot()
})
