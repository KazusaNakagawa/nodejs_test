// import axios from 'axios'
// Ref: https://github.com/axios/axios

const axios = require("axios")
const FormData = require("form-data")
const url = 'http://0.0.0.0:8000'
// TODO: write in solid colors. Authentication beaere token.
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE2NDk3NzQ3MDl9.FpUsHIraoc3q5AUqnE-bR2knTz0k22ZoGL067-b7yVQ'


async function getUsers() {
  await axios({
    method: 'get',
    url: `${url}/users/`,
  })
  .then(function (res) {
    console.log({ data: res.data })
    console.log({ status: res.status })
    console.log({ statusText: res.statusText });
    console.log({ headers: res.headers });
    console.log({ config: res.config });
  })
  .catch(function (err) {
    console.log({ errorRes: err.response })
    console.log({ errorStatus: err.status })
    console.log({ errorData: err.data })
  });
}


async function postApi(endpoint, username_, password_) {
  /** login
   *
   * 以下の curl は成功する
   * $ curl -X 'POST' \
   * 'http://localhost:8000/login/access-token' \
   * -H 'accept: application/json' \
   * -H 'Content-Type: application/x-www-form-urlencoded' \
   * -d 'username=string&password=string'
   *
   * Resolved: https://github.com/axios/axios/issues/318
   *
   * ref:
   *   https://fastapi-users.github.io/fastapi-users/usage/flow/
   *   https://fastapi-users.github.io/fastapi-users/configuration/authentication/transports/bearer/
  **/

  const formData = new FormData()
  formData.append('username', username_)
  formData.append('password', password_)

  // console.log(formData)

  await axios({
    method: 'post',
    url:`${url}/${endpoint}`,
    data: formData,
    headers: formData.getHeaders()
  })
  .then(function (res) {
    console.log({data: res.data})
    console.log({status: res.status})
  })
  .catch(function (err) {
    console.log({ Response: err.response })
    console.log({ StatusCode: err.response.status })
  });
}


async function getApi(endpoint, username, password) {

  await axios({
    method: 'get',
    url: `${url}/${endpoint}`,
    data: { 'username': username, 'password': password },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        'Authorization': `Bearer ${AUTH_TOKEN}`
    },
  })
  .then(function (res) {
    console.log({data: res.data})
    console.log({status: res.status})
    console.log('-------------------')
    console.log({response: res})
  })
  .catch(function (err) {
    // alert(error)
    console.log({ ResData: err.response })
    console.log({ StatusCode: err.response.status })
  });
}

// ----- call -----
getUsers()
postApi('login/access-token', 'test', 'test')
// getApi('users/me/', 'string', 'string')
