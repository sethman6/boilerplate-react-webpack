import request from 'superagent'

const apiUrl = "https://yoda.p.mashape.com/yoda?"
const apiKey = { "X-Mashape-Key": "fSnuTpJ7iGmshTDe0pwtqCvVy6lcp1GzjTRjsnzNOkUGdgcUWJ" }

export function getYoda(callback) {
    request
        .get(apiUrl)
        .set(apiKey)
        .set('accept', 'application/json')
        .end((err, res) => {
            if (err) {
                callback(err)
            } else {
                callback(null, res.body)
            }
        })
}