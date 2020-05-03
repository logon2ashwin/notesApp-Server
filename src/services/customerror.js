module.exports = {
    configMissingError: function (key) {
        const message = 'Configuration for ' + key + ' is missing';
        return new Error(message);
    },
    environmentNotFound: function () {
        const message = 'Environment Configuration not found';
        return new Error(message);
    }
}