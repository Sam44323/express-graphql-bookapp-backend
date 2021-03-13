const { Schema, model } = require('mongoose');

const authorSchema = new Schema({
  age: Number,
  name: String,
});

module.exports = model('Author', authorSchema);
