// import axios from 'axios'
// Ref: https://github.com/axios/axios

const axios = require("axios")
const url = 'http://0.0.0.0:8000'
const AUTH_TOKEN = ''

async function getUsers() {
  await axios({
    method: 'get',
    url: `${url}/users`,
  })
  .then(function (res) {
    console.log({data: res.data})
    console.log({status: res.status})
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(function (err) {
    // alert(error)
    console.log({ errorRes: err.response })
    console.log({ errorStatus: err.status })
    console.log({ errorData: err.data })
  });
}

async function postApi(endpoint, username, password) {
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  // axios.defaults.xsrfCookieName = 'csrftoken' // ←ココと
  // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN" // ←ココに追加しました
  await axios({
    method: 'post',
    url: `${url}/${endpoint}`,
    data: { 'username': username, 'password': password },
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'accept': 'application/json',
    },
    auth: {
      'Authorization': `Bearer ${AUTH_TOKEN}`
    }

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

// ----- call -----
getUsers()
// postApi('token', 'string', 'string')