import faker from 'faker'

export default {
  Query: {
    user: (root, { id }) => ({ id, name: 'Dev' }),
  },
  User: () => ({
    id: faker.random.uuid(),
    name: 'Dev',
  }),
}
