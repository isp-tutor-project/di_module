
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');

let cfg;

if (process.env.NODE_ENV === "production") {
    console.log("using production");
    cfg = prod;
} else {
    console.log("using development");
    cfg = dev;
}
// console.log(cfg);
module.exports = cfg;
