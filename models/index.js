const config = require('./config');
const Sequelize = require('sequelize');
let fs = require('fs');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
// 添加 modle 
let modelList = [];
// TODO 读取
const sourceDir = __dirname + '/sources';
let filepath = fs.readdirSync(sourceDir);
for (let index = 0; index < filepath.length; index++) {
    const element = filepath[index];
    let req = require(sourceDir + '/' + element);
    modelList.push(req);
}
let models = {};
modelList.forEach(element => {
    let attributes = {};
    for( let key in element.attributes){
        attributes[key] = element.attributes[key];
        attributes[key]['type'] = Sequelize[element.attributes[key]['type']];
    }
    models[element.model] = sequelize.define(element.table,attributes);
});
sequelize.models = models;
module.exports = sequelize;