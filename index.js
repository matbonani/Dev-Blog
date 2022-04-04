//      imports
const express = require('express');
const app = express();

const bodyParse = require('body-parser');
const connection = require('./database/database');

//      View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// body parse
app.use(bodyParse.urlencoded( {extended: false} ));
app.use(bodyParse.json());

// DataBase

connection
    .authenticate()
    .then(() => {
        console.log("Conexão ao banco de dados com sucesso")
    }).catch((error) => {
        console.log(error);
})

//   Rotas
app.get('/', (req, res) =>{
    res.render('index');
})




















app.listen(3030, () => {
    console.log('Servidor rodando...')
})