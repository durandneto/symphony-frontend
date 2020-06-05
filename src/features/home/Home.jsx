import React from 'react'
import {
  useHistory
} from "react-router-dom"

import SearchTemplate from '../../app/Templates/Search'

export const HomePage = () => {
  const history = useHistory()
  return (
    <SearchTemplate
      placeholder={"find a package"}
      onEvent={e => {
        const { event, data } = e
        if ( event === "onKeyUpAction" ) {
          history.push(data.term)
        }
      }}
    />
  )
}
