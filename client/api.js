import request from 'superagent'

export default function getNotice (callback) {
  request
    .get('/notices')
    .end((err, res) => {
      if (err) {
        callback(err)
        console.log(err)
      } else {
        callback(null, res.body) // returns only one object, for now
      }
    })
}
