import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import relayEnvironment from '../../helpers/relay/relayEnvironment'

import UserFragment from './UserFragment'

const SayHello = () => (
  <QueryRenderer
    environment={relayEnvironment}
    query={graphql`
      query SayHelloQuery($id: ID!) {
        user(id: $id) {
          ...UserFragment_user
        }
      }
    `}
    variables={{ id: '123' }}
    render={data => (
      <>
        <UserFragment user={data.props && data.props.user} error={data.error} />
      </>
    )}
  />
)

export default SayHello
