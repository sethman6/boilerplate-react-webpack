const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/', (req, res) => {
  res.send()
})

function getData () {

}
function getNotice (callback) {
  request
    .get(akurl)
    .send(apikey)
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        console.log(res)
        callback(null, res.body[0]) // returns only one object, for now
      }
    })
}
