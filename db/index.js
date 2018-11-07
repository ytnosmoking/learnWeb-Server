const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  // console.log(client)
  const dbo = client.db('test')
  // console.log(dbo)
  console.log('数据库链接...')

  findDB(dbo, function (result) {
    console.log(result)
    console.log('done.......')
  })

})

function findDB(db, callback) {
  //获得指定的集合 
  var collection = db.collection('users');
  //要查询数据的条件，<=10岁的用户
  // var  where={age:{"$lte":10}};
  //要显示的字段
  // var set={name:1,age:1};
  collection.find().toArray(function (err, result) {
    //如果存在错误
    if (err) {
      console.log('Error:' + err);
      return;
    }
    //调用传入的回调方法，将操作结果返回
    callback(result);
  });
}