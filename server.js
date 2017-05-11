'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/signup', (req, res) => {
  res.render('index');
});

app.get('/signin', (req, res) => {
  res.render('index');
});

app.listen(3000, (err) => {
  if (err) {
    return console.log('Hubo un Error'), process.exit(1);
  }

  console.log('Servidor listo en el puerto 3000');
});
