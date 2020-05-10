const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Hi I\'m using noteApp'
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]
});


module.exports = mongoose.model('User', userSchema);