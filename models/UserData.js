const mongoose = require('mongoose');

const UserDataSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    subTasks: {
        type: Array
    },
    tags: {
        type: Array
    },
    priority: {
        type: String,
        required: true,
        default: 'low'
    },
    isFinished: {
        type: Boolean,
        required: true,
        default: new Boolean(false)
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
        date: {
        type: String
    }
});

module.exports = mongoose.model('userData', UserDataSchema);