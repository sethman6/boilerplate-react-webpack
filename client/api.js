import request from 'superagent'

const akurl = 'https://api.at.govt.nz/v2/notifications/'
const apikey = JSON.parse('{"Ocp-Apim-Subscription-Key": "e211ee79ed0748cfb49e320c6a55d7b2"}')

export default function getNotice (callback) {
  request
    .get(akurl)
    .set(apikey)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(apikey)
        console.log(err)
      } else {
        callback(null, res.body.response.data[0]) // returns only one object, for now
      }
    })
}
