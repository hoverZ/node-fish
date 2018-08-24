const Alarm = {
    table: 'alarm',
    model: 'Alarm',
    attributes: {
        id:{
            type: 'INTEGER',
            primaryKey: true,
            autoIncrement: true
        },
        openid:{
            type: 'STRING'
        },
        content:{
            type: 'TEXT'
        },
        created_at:{
            type: 'TIME'
        },
        updated_at:{
            type: 'TIME'
        }
    }
};

module.exports = Alarm;