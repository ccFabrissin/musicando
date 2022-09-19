// ************ Requires ************
const express = require('express');
const path = require('path');

// ************ Routes declare ************
const main = require('./routes/main.js');
const canciones = require('./routes/canciones.js');
const generos = require('./routes/generos.js');

const app = express();

//************ Listen port ************
app.listen(3001, ()=>{
    console.log('Servidor corriendo en http://localhost:3001/');
});

// ************ View engine setup ************
app.set('view engine', 'ejs'); 
app.set('views', 'views'); 

//************ Default dir set ************
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ************ Routes manager ************
app.use('/', main);
app.use('/api/canciones', canciones);
app.use('/api/generos', generos);