const express = require('express');
const { resolve } = require('path');
import app from "./src/app.js"

app.use('/',express.static(resolve(__dirname,"./build")));
app.use('/noticias',express.static(resolve(__dirname,"./build")));
app.use('/noticias/:id',express.static(resolve(__dirname,"./build")));
app.use('/autores',express.static(resolve(__dirname,"./build")));
app.use('/autores/:id',express.static(resolve(__dirname,"./build")));

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('Tudo funcionando certinho');
  })