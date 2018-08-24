const Koa = require('koa');
cors = require('koa2-cors'); // 跨域
const app = new Koa();
const sequelize = require('./models/index'); // 数据库与 model 加载
const route = require('./routes/index');  // 加载路由
// 跨域 
app.use(cors({
    origin: function(ctx) {
      if (ctx.url === '/test') {
        return false;
      }
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(async (ctx, next) => {
    ctx.sequelize = sequelize;
    await next();
    ctx.response.type = "json";
});

app.use(route);
app.listen(3000);