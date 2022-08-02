/**
 * 用来存放项目中所有接口的地址
 */
const apiHost = 'http://localhost:8080/api'
/**
 * 用户账户接口
 */
const AccountApis = {
  loginUrl: '/',
  logoutUrl: '/'
}
/**
 * 系统模块的接口
 * @type {{sliderListUrl: string}}
 */
const SystemApis = {
  sliderListUrl: apiHost + '/system/slider/list/'
}

/**
 * 景点接口的调用
 */
const SightApis = {
  sightListUrl: apiHost + 'sight/sight/list/'
}
export {
  AccountApis,
  SystemApis,
  SightApis
}
