// Define your personal cache strategy here
// https://facebook.github.io/relay/docs/en/community-learning-resources

// Default cache strategy
// https://facebook.github.io/relay/docs/en/network-layer#caching
export default function cacheStrategy(cache, operation, variables, json) {
  const queryID = operation.text
  const isMutation = operation.operationKind === 'mutation'
  const isQuery = operation.operationKind === 'query'

  if (isQuery && json) {
    cache.set(queryID, variables, json)
  }

  if (isMutation && json) {
    cache.clear()
  }
}

// Never clear cache
export function neverClear(cache, operation, variables, json) {
  const queryID = operation.text
  const isQuery = operation.operationKind === 'query'

  if (isQuery && json) {
    cache.set(queryID, variables, json)
  }
}
