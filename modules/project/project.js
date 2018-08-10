module.exports = {
    index: async function (ctx, next){
        let result = await ctx.database.asyncQuery(ctx,"select * from alarms");
        ctx.body = result;
    }
}