module.exports = {
    
    init: function( config ){
        const mysql = require('mysql');
        function asyncQuery(ctx,sql){
            return new Promise( (resolve, reject) => {
                ctx.database.query(sql, function(error, results, fields){
                    if(error) reject(error)
                    else resolve(results);
                });
            });
        }
        let pool = mysql.createPool( config.mysql );
        pool.asyncQuery = asyncQuery;
        return pool;
    }

}