const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// Configura o Express para usar o EJS como View Engine
app.set('view engine', 'ejs');
// Configura a pasta 'public' como padrão 
app.use(express.static('public'));
// Configura a biblioteca body-parser para decodificar os dados enviados por formulários
app.use(bodyParser.urlencoded({ extended: false }));
// Configura d biblioteca body-parser para receber dados em JSON
app.use(bodyParser.json());

//Rotas

//Página Inicial
app.get("/", (req, res) => {
    Pergunta.findAll({ raw: true }).then(perguntas => {
        res.render("index", {
            perguntas:perguntas,
        });
    });

});

app.get("/perguntar", (req, res) => {
    res.render("perguntar", {
    });
});

//Rota para salvar pergunta do formulário
app.post("/salvar-pergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao,
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(8080, () => { console.log("App rodando!"); });