const path = require("path");
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./output"),
        filename: "out.js"
    },
    target: "node"
}
