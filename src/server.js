// no terminal
// ctrl + j -> para abrir o terminal
// ctrl + c -> para desligar o servidor
// node server.js -> para ligar o servidor

// importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando o express
const server = express()
server
// utilizando os arquivos estáticos
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')


// criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
    //('/', (req, res) => {
    //const city = req.query.city
    // 1 opção - console.log(path.join(__dirname, 'views', 'index.html'));
   // 2 opção -return response.sendFile(path.join(__dirname, 'views', 'index.html'))
   // 3 opção - return res.render('index', { city })

//ligar o servidor
server.listen(5501)

