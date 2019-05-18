import typeDefsPath from '../../schema.graphql'

let typeDefs = ''

const getTypeDefs = async () => {
  if (typeDefs) return typeDefs
  typeDefs = await fetch(typeDefsPath).then(r => r.text())
  return typeDefs
}

export default getTypeDefs
