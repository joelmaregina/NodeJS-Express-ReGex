// const HomeModel = require('../models/HomeModel');

// Cria o resgistro na base de dados
// HomeModel.create({
//     titulo: 'Outra coisa qualquer',
//     descricao: 'Outra descrição'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// Lista/Acha os itens da base de dados (Raramente utilizado desta maneira)
// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};