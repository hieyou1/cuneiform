const ParallelUglify = require("webpack-parallel-uglify-plugin");
module.exports = {
    "devtool": "source-map",
    "mode": "production",
    "entry": "./src/client.js",
    "output": {
        "path": require("path").resolve("./dist"),
        "filename": "client.js"
    },
    "plugins": [
        new ParallelUglify({})
    ]
};