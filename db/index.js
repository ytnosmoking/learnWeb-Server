const mongose = require('mongoose')

const serverUrl = 'mongodb://localhost:27017/test'
const serverConfig = {
  config: {
    autoIndex: false
  }
}
mongose.connect(serverUrl, serverConfig)
const db = mongose.connection

db.on('connected', () => {
  console.log('data is online............................!')
})
db.on('error', () => {
  console.log('mongDB is error!')
})