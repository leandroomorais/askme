const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const connection = new Sequelize('lknfdy3fejryob25','p6cuy4ybzg5rxrub','emvyx55mpzkl3fl9',{
    port: '3306',
    host: 'un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
});

module.exports = connection;