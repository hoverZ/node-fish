let Router = require('koa-router');
let fs = require('fs');
let router = new Router();

function mapRoute(routes)
{
    routes.forEach(element => {
        router[element.method](element.path, element.handle);
    });
}

// 加载路由 TODO 读取文件夹
const sourceDir = __dirname + '/sources';
let filepath = fs.readdirSync(sourceDir);
for (let index = 0; index < filepath.length; index++) {
    const element = filepath[index];
    console.log(element);
    let req = require(sourceDir + '/' + element);
    mapRoute(req);
}

module.exports = router.routes()