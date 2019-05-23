import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { graphql } from 'graphql'

import getTypeDefs from './getTypeDefs'
import resolvers from './resolvers'
import customMocks from './customMocks'

async function fetchMock(operation, variables) {
  const schema = makeExecutableSchema({
    typeDefs: await getTypeDefs(),
    resolvers,
  })

  addMockFunctionsToSchema({
    schema,
    mocks: customMocks,
    preserveResolvers: true,
  })

  const context = {} // you can initialize the context with some user data

  const response = await graphql(
    schema,
    operation.text,
    null,
    context,
    variables,
  )
  return response
}

export default fetchMock
