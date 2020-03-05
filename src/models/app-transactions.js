const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    type: String, //Item list
    category: String, //Item list
    account: String, //Item list
    description: String,
    amount: Number,
    date: { type: Date, default: Date.now },
    commentary: String,

    //Default
    creationDate: { type: Date, default: Date.now },
    state: String
}, {
    versionKey: false
});

module.exports = mongoose.model('app.transactions', schema);