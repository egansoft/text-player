var express = require('express')
var yt = require('./node_modules/yt321/lib/play.js')
var exec = require('child_process').exec

var app = express()
var options = { // for now just plays Stole the Show by Kygo
    _: [ 'https://www.youtube.com/watch?v=vXoWg08pwiQ' ]
}

app.get('/demo', function(req, res) {
    if (!req.query) {
        // not a proper twilio request
        return 
    }
    var msg = req.query.Body.toLowerCase().trim()
    console.log('msg', msg)
    
    switch (msg) {
        case 'kygo':
            try {
                console.log('playing...')
                yt(options)
            } catch(err) {
                console.log(err)
                // like so many things can go wrong
            }

            break
        case 'kill':
            try {
                exec('killall mpg321', function(){})
                console.log('killall')
            } catch(err) {
                console.log(err)
                // idk man 
            }
    }

})

app.listen(3000, function() {
    console.log('listening on 3000')
})

