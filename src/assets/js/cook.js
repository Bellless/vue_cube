import Cookies from 'js-cookie'

// 使用token字段存储值，初始值为空
const TokenKey = 'token'

const Cookie = {
  // 取
  getToken() {
    return Cookies.get(TokenKey)
  },
  // 存
  setToken() {
    return Cookies.set(TokenKey, '5210', {
      // 有效期
      // expires: 7,
      // i4
      path: ''
    })
    },
  // 删除
  removeToken() {
    return Cookies.remove(TokenKey)
  }
}
export default Cookie