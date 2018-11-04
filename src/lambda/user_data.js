const axios = require('axios')

exports.handler = function(event, context, callback) {
  let { user } = event.queryStringParameters
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(res => {
      // console.log(res.data)
      if (res.message != undefined || res.message != null) {
        throw new Error('Rate Limit reached')
      }
      let stars = 0
      let forks = 0
      let languages = {}
      res.data.map(repo => {
        forks += repo.forks
        stars += repo.stargazers_count
        let lang = repo.language
        if (languages[lang]) {
          languages[lang] += 1
        } else {
          languages[lang] = 1
        }
      })
      let language = Object.entries(languages).sort((a, b) => b[1] - a[1])[0][0]
      let info = {
        stars,
        forks,
        language,
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
