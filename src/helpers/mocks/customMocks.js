import faker from 'faker'

export default {
  ID: () => faker.random.uuid(),
  Int: () => Math.round(Math.random() * 100),
  String: () => faker.lorem.sentence(),
  Float: () => faker.commerce.price(),
  Boolean: () => faker.random.boolean(),
}
