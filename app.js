const express = require('express');
const app = express();
const fs = require('fs');
const {db, userSchema, imgStyleSchema, sockUserSchema} = require('./models/schemaAll')

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
res.render('home')
})

// app.get('/catalog', (req, res) => {
//   res.render('catalog')
// })


app.post('/constructor', (req, res) => {
  res.render('constructor')
})



app.post('/liked', (req, res) => {
  res.render('/liked')
})



app.post('/constructor2', (req, res) => {
  let emojiSelector = ['😀', '😃',  '😄', '👾', '💀', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃', 
  '💅', '🤳', '💪', '🦾', '🦵', '🦿', '🦶', '👂', '🦻', '👃', '🧠', '🦷', '🦴', '👀', '👁', '👅', '👄', '💋', '🩸',
  '🏇🏾', '🏂🏾', '🏌🏾', '🏌🏾‍♂️', '🏌🏾‍♀️', '🏄🏾', '🏄🏾‍♂️', '🏄🏾‍♀️', '🚣🏾', '🚣🏾‍♂️', '🚣🏾‍♀️', '🏊🏾', '🏊🏾‍♂️', '🏊🏾‍♀️', '⛹🏾', '⛹🏾‍♂️', '⛹🏾‍♀️', '🏋🏾', '🏋🏾‍♂️', '🏋🏾‍♀️', '🚴🏾', '🚴🏾‍♂️', '🚴🏾‍♀️', '🚵🏾', '🚵🏾‍♂️', '🚵🏾‍♀️', '🤸🏾', '🤸🏾‍♂️', '🤸🏾‍♀️', '🤽🏾', '🤽🏾‍♂️', '🤽🏾‍♀️', '🤾🏾'];
  let backgroundsSelector = ['🟥 red', '🟧 orange', '🟨 yellow', '🟩 green', '🟦 blue', '🟪 purple', '⬛️ black', '⬜️ white'];
  console.log(backgroundsSelector);
  console.log(emojiSelector)
  res.render('constructor2', {emojiSelector, backgroundsSelector});
})


app.listen(3000);

module.exports = app;
