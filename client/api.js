import request from 'superagent'

const apiUrl = "http://www.omdbapi.com/?i=tt3896198"
const apiKey = { "apikey": "b63f191a" }

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