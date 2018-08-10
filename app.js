const Koa = require('koa');
const app = new Koa();
const config = require('./config');
const DB = require('./db');
const pool = DB.init(config);
const route = require('./route');
// pool.getConnection(function(err, connection) {
//     connection.query('SELECT * FROM alarms',  (error, results, fields) => {
//         // 结束会话
//         connection.release();

//         // 如果有错误就抛出
//         if (error) throw error;
//         console.log('The solution is: ', results[0]);
//     })
// })

// function* countAppleSales () {
//     var saleList = [3, 7, 5];
//     for (var i = 0; i < saleList.length; i++) {
//       yield saleList[i];
//     }
// }
// var appleStore = countAppleSales();
// console.log(appleStore.next());

app.use(async (ctx, next) => {
    ctx.database = pool;
    await next();
    ctx.response.type = "json";
});

app.use(route);
app.listen(3000);