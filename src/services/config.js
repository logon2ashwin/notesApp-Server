module.exports = (function () {
    var configError = require('./customerror');
    var util = require('./util');
    var config = null;

    function loadConfig() {
        try {
            if (process.env.ENVIRONMENT) {
                config = require('../config/' + process.env.ENVIRONMENT + '.js');
            } else {
                throw new configError.environmentNotFound();
            }
        }
        catch (err) {
            config = {};
            console.log(err);
        }
    }

    if (config == null) {
        loadConfig();
    }


    return {
        getAppHost: function () {
            if (!util.checkJsonKeyExists(config, 'app.host')) {
                throw new configError.configMissingError('app hostname');
            }
            return config.app.hostname;
        },
        getAppPort: function () {
            if (!util.checkJsonKeyExists(config, 'app.port')) {
                throw new configError.configMissingError('app port');
            }
            return process.env.PORT || config.app.port;
        }
    }
})();