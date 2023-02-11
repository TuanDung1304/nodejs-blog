const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '' },
    desc: { type: String, default: '', maxLength: 600 },
    thumb: { type: String, default: '' },
    createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
