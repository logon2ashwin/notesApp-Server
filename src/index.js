const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const config = require('./services/config');

app.use(bodyParser.json())

require('./routes/index')(app);

app.on('error', function (err) {
    console.log('Error in starting server: ' + err.code)
});

try {
    app.listen(config.getAppPort(), config.getAppHost(), function (err) {
        console.log('Server started...');
    });
} catch (err) {
    console.log(err);
}
