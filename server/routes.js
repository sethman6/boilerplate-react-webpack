const express = require('express')
const router = express.Router()
const request = require('superagent')


const akurl = 'https://yoda.p.mashape.com/yoda'
const apikey = { "X-Mashape-Key": "fSnuTpJ7iGmshTDe0pwtqCvVy6lcp1GzjTRjsnzNOkUGdgcUWJ" }


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