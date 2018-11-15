import Mock from 'mockjs'
const Random = Mock.Random

const arrNum = []
for (let i = 0; i < 7; i++) {
  arrNum.push(Random.integer(1, 600))
}
console.log(arrNum)

export default {
  all() {
    const datas = {}
    datas.line = [
      Random.range(20, 20 * 8, 20),
      Random.range(40, 40 * 8, 40),
      Random.range(50, 50 * 8, 50)
    ]
    return datas
  }
}
