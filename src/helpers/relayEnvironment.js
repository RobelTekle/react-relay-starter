import {
  Environment, Network, RecordSource, Store,
} from 'relay-runtime'

import RelayQueryResponseCache from 'relay-runtime/lib/RelayQueryResponseCache'

const cacheTime = 60 * 1000 // 1 minute
const cache = new RelayQueryResponseCache({ size: 250, ttl: cacheTime })

function fetchQuery(operation, variables, cacheConfig) {
  const queryID = operation.text
  const isMutation = operation.operationKind === 'mutation'
  const isQuery = operation.operationKind === 'query'
  const forceFetch = cacheConfig && cacheConfig.force

  const fromCache = cache.get(queryID, variables)

  if (isQuery && !forceFetch && fromCache !== null) {
    return fromCache
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
      if (isQuery && json) {
        cache.set(queryID, variables, json)
      }

      if (isMutation && json) {
        cache.clear()
      }

      return json
    })
}

const network = Network.create(fetchQuery)
const store = new Store(new RecordSource())

const environment = new Environment({
  network,
  store,
})

export default environment
