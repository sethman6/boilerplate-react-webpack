const express = require('express')
const router = express.Router()
const request = require('superagent')


// const akurl = 'https://yoda.p.mashape.com/yoda'
// const apikey = { "X-Mashape-Key": "fSnuTpJ7iGmshTDe0pwtqCvVy6lcp1GzjTRjsnzNOkUGdgcUWJ" }

const akurl = "https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait."
const apikey = { "X-Mashape-Key": "fSnuTpJ7iGmshTDe0pwtqCvVy6lcp1GzjTRjsnzNOkUGdgcUWJ" }
    // .header("Accept", "text/plain")
    // .end(function(result) {
    // console.log(result.status, result.headers, result.body);
    // });

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
                console.log(res.body)
                callback(null, res.body)
                    // returns only one object, for now
            }
        })
}

module.exports = router