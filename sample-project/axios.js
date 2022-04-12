// import axios from 'axios'
// Ref: https://github.com/axios/axios

const axios = require("axios")
const url = 'http://0.0.0.0:8000'
// TODO: write in solid colors. Authentication beaere token.
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmciLCJleHAiOjE2NDk3NzQ3MDl9.FpUsHIraoc3q5AUqnE-bR2knTz0k22ZoGL067-b7yVQ'


async function getUsers() {
  await axios({
    method: 'get',
    url: `${url}/users`,
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

async function postApi(endpoint, username, password) {
  // axios.defaults.xsrfCookieName = 'csrftoken' // ←ココと
  // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN" // ←ココに追加しました
  // axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
  await axios({
    method: 'post',
    url: `${url}/${endpoint}`,
    data: { 'username': username, 'password': password },
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
        // 'Authorization': `Bearer ${AUTH_TOKEN}`

    },
    // auth: {
    //   'Authorization': `Bearer ${AUTH_TOKEN}`
    // }

  })
  .then(function (res) {
    console.log({data: res.data})
    console.log({status: res.status})
  })
  .catch(function (err) {
    // alert(error)
    console.log({ ResData: err.response })
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
// getUsers()
// getApi('users/me/', 'string', 'string')
postApi('token', 'string', 'string')