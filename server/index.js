var server = require('./server')
const request = require('superagent')

var PORT = process.env.PORT || 3000

server.listen(PORT, function() {
    console.log('Listening on port', PORT)
})