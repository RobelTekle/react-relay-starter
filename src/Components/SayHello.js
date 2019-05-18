import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import relayEnvironment from '../helpers/relay/relayEnvironment'

const SayHello = () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query SayHelloQuery($name: String!) {
        hello(name: $name)
      }
    `}
    variables={{ name: 'Dev' }}
    render={data => (
      <>
        <p>{data.props && data.props.hello}</p>
      </>
    )}
  />
)

export default SayHello
