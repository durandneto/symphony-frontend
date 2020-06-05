import React, { useEffect } from 'react'
import {
  useParams,
  useHistory
} from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import SearchResultTemplate from '../../app/Templates/SearchResult'

import {
  getPackageStats,
  getReducer,
  setTerm
} from './BundleAnalyzerSlice'


export const BundleAnalyzer = () => {
  const BAnalyzer = useSelector(getReducer)
  const dispatch = useDispatch()
  const { term } = useParams()
  const history = useHistory()

  useEffect(() => {
    dispatch(setTerm(term))
    dispatch(getPackageStats(term))
  },[])

  if ( BAnalyzer.controls.preloading ) {
    return <p>PRELOADING</p>
  }

  const handleEvents = e => {
    const { event, data, type, origin } = e
    switch ( true ) {
      case (type === "onClick"
        && origin === "GraphBarColumn"):
        const version = `${BAnalyzer.packageStats.index.split("@")[0]}@${data.label}`
          if ( term !== version ) {
            history.push(version)
            dispatch(getPackageStats(version))
          }
        break

      case event === "onKeyUpAction":
        if ( term !== data.value ) {
          history.push(data.value)
          dispatch(getPackageStats(data.value))
        }
        break

      case event === "onKeyUp":
        if ( term !== data.value ) {
          dispatch(setTerm(data.value))
        }
        break
      default:
        // do noting
    }
  }

  return (
    <SearchResultTemplate
      term={BAnalyzer.term}
      packageStats={BAnalyzer.packageStats}
      controls={BAnalyzer.controls}
      onEvent={handleEvents}
    />
  )
}
