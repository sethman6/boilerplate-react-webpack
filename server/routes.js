const express = require('express')
const router = express.Router()
const request = require('superagent')


const akurl = 'https://api.at.govt.nz/v2/notifications/'
const apikey = JSON.parse('{"Ocp-Apim-Subscription-Key": "e211ee79ed0748cfb49e320c6a55d7b2"}')


router.get('/notices', (req, res) => {
  getNotice((err, notices) => {
    res.send(notices)
  })
})


function getNotice(callback) {
  request
    .get(akurl)
    .set(apikey)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        console.log(res)
        callback(null, res.body.response.data) // returns only one object, for now
      }
    })
}

module.exports = router