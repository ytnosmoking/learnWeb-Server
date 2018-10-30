
import Mock from 'mockjs'
const Random = Mock.Random

export default {
  total () {
    const count = 20
    const lists = []
    for (let i = 0; i < count; i++) {
      lists.push({
        'first': Random.first(),
        'last': Random.last(),
        'name': Random.name(),
        'cfirst': Random.cfirst(),
        'clast': Random.clast(),
        'cname': Random.cname(),
        'para': Random.sentence(3),
        'color': Random.color(),
        'img': Random.image('300x250', Random.color(), '#1483dc', '.gif', Random.sentence(3)),
        'dataImg': Random.dataImage('300x250', Random.color(), Random.color()),
        'now': Random.now(),
        'boolean': Random.boolean(),
        'domin': Random.domain(),
        'tld': Random.tld(),
        'email': Random.email(),
        'ip': Random.ip(),
        'url': Random.url(),
        'protocol': Random.protocol(),
        'region': Random.region(),
        'province': Random.province(),
        'city': Random.city(true),
        'county': Random.county(true),
        'guid': Random.guid(),
        'id': Random.id(),
        'zip': Random.zip()
      })
    }
    return lists
  },
  products () {
    const count = Math.ceil(Math.random() * 100)
    const lists = []
    for (let i = 0; i < count; i++) {
      lists.push({
        img: Random.image('240x400', Random.color(), Random.color(), '.gif', i + 1)
      })
    }
    return lists
  }
}
