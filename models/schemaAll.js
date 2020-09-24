const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

mongoose.connect('mongodb://localhost:27017/weeek_4',
  { useNewUrlParser: true, useUnifiedTopology: true });

  const userSchema = Schema({
    name: String,
    email: String,
  });

  const imgStyleSchema = Schema({
    name: String,
    path: String,
  });

  const sockUserSchema = Schema({
    user_id:  {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    path: String,
  });
