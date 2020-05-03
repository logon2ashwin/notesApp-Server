var _ = require('lodash');
module.exports = {
    checkJsonKeyExists: function (obj, key) {
        return _.has(obj,key);
    }
}