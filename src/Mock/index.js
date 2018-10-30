import Mock from 'mockjs'
import Login from './login'
import Bike from './bike'

Mock.mock(/\/login\/login/, 'post', Login.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', Login.logout)
Mock.mock(/\/bike\/total/, 'post', Bike.total)
Mock.mock(/\/bike\/products/, 'post', Bike.products)
