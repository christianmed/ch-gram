'use strict';

const page = require('page');

const main = document.getElementById('main-container');

page('/', (ctx, next) => {
  main.innerHTML = `
    Home
    <a href="/signup">Ir a Signupppppppppppp</a>
  `;
});

page('/signup', (ctx, next) => {
  main.innerHTML = `
    Signup
    <a href="/">Ir a Home</a>
  `;
});

page();
