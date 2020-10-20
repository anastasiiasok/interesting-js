const Post = require('./src/models/post.model')

const postData = [
  {
    title: 'iPhone 12',
    text: 'It is revoluteion',
  },
  {
    title: 'Британские ученые',
    text: 'asdfasdfasdfasdfasdfa',
  },
]

async function seed() {
  await Promise.all(postData.map((ourNew) => new Post(ourNew).save()))
  console.log('Success')
}

module.exports = seed
