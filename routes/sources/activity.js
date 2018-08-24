let activity = require('./../../modules/activity/index');

module.exports = [
    {
        "path": "/activity/index",
        "handle": activity.index,
        "method":"get"
    }
];
