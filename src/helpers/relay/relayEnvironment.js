import {
  Environment, Network, RecordSource, Store,
} from 'relay-runtime'

import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache'
import cacheStrategy from './cacheStrategy'

import fetchMock from '../mocks'

const cacheTime = 60 * 1000 // 1 minute
const cache = new RelayQueryResponseCache({ size: 250, ttl: cacheTime })

function fetchQuery(operation, variables, cacheConfig) {
  const queryID = operation.text
  const isQuery = operation.operationKind === 'query'
  const forceFetch = cacheConfig && cacheConfig.force

  const cachedData = cache.get(queryID, variables)

  if (isQuery && !forceFetch && cachedData !== null) {
    return cachedData
  }

  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query: operation.text, variables }),
  })
    .then(response => response.json())
    .then(json => {
      cacheStrategy(cache, operation, variables, json)
      return json
    })
}

// eslint-disable-next-line no-nested-ternary
const query = process.env.NODE_ENV === 'production'
  ? fetchQuery
  : process.env.REACT_APP_MOCK === 'true'
    ? fetchMock
    : fetchQuery

const network = Network.create(query)
const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store,
})

export default environment
