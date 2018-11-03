const axios = require('axios')

exports.handler = function(event, context, callback) {
  let { user } = event.queryStringParameters
  console.log('User', user)
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      // console.log(res.data)
      let info = {
        name: res.data.login,
        avatar: res.data.avatar_url,
        followers: res.data.followers,
        following: res.data.following,
      }
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(info),
      })
    })
    .catch(err => {
      callback(err, null)
    })
}
