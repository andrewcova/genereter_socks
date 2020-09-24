const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
res.render('home')
})

app.get('/catalog', (req, res) => {
  res.render('catalog')
})

app.get('/constructor', (req, res) => {
  res.render('constructor')
})

app.post('/constructor', (req, res) => {
  res.send()
})

app.get('/basket', (req, res) => {
  res.render('basket')
})

app.post('/basket', (req, res) => {
  res.redirect('/basket')
})

app.get('/liked', (req, res) => {
  res.render('liked')
})

app.post('/liked', (req, res) => {
  res.redirect('/liked')
})

app.post('/catalog', (req, res) => {
  res.redirect('/catalog')
})

app.listen(3000);

module.exports = app;
