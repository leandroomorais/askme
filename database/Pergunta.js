const Sequelize = require("sequelize");
const connection = require("./database");

//Definindo a tabela pergunta com o Sequelize
const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

Pergunta.sync({force:false}).then(() => {});

module.exports = Pergunta;