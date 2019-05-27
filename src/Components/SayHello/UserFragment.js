import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import Display from './Display'


const UserFragment = createFragmentContainer(Display, {
  user: graphql`
    fragment UserFragment_user on User {
      name
    }
  `,
})


export default UserFragment
