const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true, default: '' },
    desc: { type: String, maxLength: 600 },
    thumb: { type: String },
    videoId: { type: String },
    slug: { type: String },
    level: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', Course);
