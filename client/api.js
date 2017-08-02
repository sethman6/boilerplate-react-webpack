import request from 'superagent'

const akurl = 'https://api.at.govt.nz/v2/notifications/'
const apikey = {Ocp-Apim-Subscription-Key:'e211ee79ed0748cfb49e320c6a55d7b2'}

export default function getNotice (callback) {
    request
        .get(akurl)
        .send(apikey)
        .end((err, res) => {
            if (err) {
                callback(err)
            } else {
                callback(null, res.body[0]) // returns only one object, for now
            }
        })


}
