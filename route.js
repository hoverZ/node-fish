let Router = require('koa-router')
let router = new Router();

function mapRoute(routes)
{
    routes.forEach(element => {
        router[element.method](element.path, element.handle);
    });
}

let project = require("./routes/project");
mapRoute(project);

module.exports = router.routes()