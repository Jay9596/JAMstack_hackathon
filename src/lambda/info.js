const axios = require('axios')

exports.handler = function(event, context, callback) {
  let { user } = event.queryStringParameters
  console.log('User', user)
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(res => {
      // console.log(res.data)
<<<<<<< HEAD
      if (res.message != undefined || res.message != null) {
        throw new Error("Rate Limit reached")
      }
=======
>>>>>>> 0cd8c409b5ab934be974b8e4206ebbda1afa93e6
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
