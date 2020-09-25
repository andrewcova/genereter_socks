const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const db = mongoose.connect('mongodb://localhost:27017/weeek_4',
  { useNewUrlParser: true, useUnifiedTopology: true });

  const userSchema = Schema({
    name: String,
    email: String,
  });

  const imgStyleSchema = Schema({
    name: String,
    path: String,
  });

  const sockSchema = Schema({
  color: String,
  emojin: String,
  });

  const Sock = mongoose.model('Sock', sockSchema);

  module.exports = {db, Sock};
