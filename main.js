// console.log("hello world");

// const add = require("./local");
// const minus = require("./local");
const obj = require("./local");
const { uuid } = require("uuidv4");
const http = require("http");
// console.log(obj.add(Number(process.argv[2]), Number(process.argv[3])));
// console.log(obj.minus(Number(process.argv[2]), Number(process.argv[3])));
// console.log(module);
console.log(uuid());
console.log(http);
