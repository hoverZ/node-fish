let project = require('./../../modules/project/project');

module.exports = [
    {
        "path": "/project/index",
        "handle": project.index,
        "method":"get"
    }
];
