import React from 'react'
import PropTypes from "prop-types"

import HighlightSize from '../../Components/HighlightSize'
import Graph from '../../Components/Graph'

import SearchErrorTemplate from './../SearchError'
import Container, { Row, Column } from '../../Components/Grid'
import Input from '../../Components/Input'

const SymphonyLogo = require('../../assets/Symphony-logo.jpg')

const SearchResultTemplate = props => {

  if ( props.controls.error ) {
    return <SearchErrorTemplate
      placeholder={props.placeholder}
      term={props.term}
      error={props.controls.errorResponse}
      onEvent={props.onEvent}
    />
  }

  return (
    <Container>
      <Row spaceBetween>
        <Column>
          <img height={50} src={SymphonyLogo} title="Symphony search" alt="Symphony search" />
        </Column>
        <Column>
          Github
        </Column>
      </Row>
      <Row>
        <Column full alignCenter>
          <Input
            highlight
            textCenter
            hightlight
            value={props.term}
            test={/\s/}
            testMessage={"The package name can not be null or contain space"}
            placeholder={props.placeholder}
            loading={props.controls.loading}
            preloading={props.controls.preloading}
            onEvent={props.onEvent}
          />
        </Column>
      </Row>
      {
      props.packageStats.index && (
        <Row justifyCenter autoColumn >
          <Column full justifyRight alignCenter>
            <HighlightSize
              loading={props.controls.loading}
              preloading={props.controls.preloading}
              title="bundle size"

              left={{
                value: props.packageStats.data.minified,
                label: "MINIFIED"
              }}

              right={{
                value: props.packageStats.data.gzip,
                label: "MINIFIED + GZIPPED"
              }}
            />
          </Column>
          <Column full justifyCenter alignCenter>
            <Graph
              loading={props.controls.loading}
              preloading={props.controls.preloading}
              data={props.packageStats.parsedHistory}
              current={{
                label:props.packageStats.data.version,
                data: [
                  props.packageStats.data.minified,
                  props.packageStats.data.gzip,
                ]
              }}
              lineWidth={"15px"}
              onEvent={props.onEvent}
            />
          </Column>
        </Row>
      )
    }
    </Container>
  )
}

SearchResultTemplate.defaultProps = {}

SearchResultTemplate.propTypes = {
  onEvent: PropTypes.func.isRequired,
}

export default SearchResultTemplate