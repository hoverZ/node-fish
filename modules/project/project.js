module.exports = {
    index: async function (ctx, next){
        let result = 'project';
        // await ctx.models.Alarm.findAll();
        // let result = await ctx.database.asyncQuery(ctx,"select * from alarms");
        // let result = await ctx.
        ctx.body = result;
    }
}