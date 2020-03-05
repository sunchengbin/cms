// import request from '@/libs/base/http'
// import apis from '@/libs/base/apis'

export function login (username, password) {
  // return request({
  //   url: apis.login,
  //   method: 'post',
  //   data: {
  //     username,
  //     password
  //   }
  // })
  return Promise.resolve({
    data: {
      code: 200,
      message: '',
      token: 'AdminToken'
    }
  })
}

export function getInfo (token) {
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: {
  //     token
  //   }
  // })
  return new Promise((resolve, reject) => {
    let res = {
      data: {
        roles: ['admin'],
        avatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
      }
    }
    resolve(res)
  })
}

export function logout () {
  // return request({
  //   url: '/user/logout',
  //   method: 'post'
  // })
  return Promise.resolve('success')
}
