module.exports = function (app) {
    
    // Route for the pair services
    app.use('/todo', require('./todo'));
    console.log("Route configuration loaded...");
};