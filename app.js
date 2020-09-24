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


app.listen(3000);

module.exports = app;
