// createserver

const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("<h1>hello this is azam</h1>");
    resp.end();
  })
  .listen(4500);

// directry name

// console.log("->>", __dirname);

// create file

// const fs = require("fs");
// fs.writeFileSync("hello.txt", "like and subscribe");

// const app = require("./app");

// console.log(app.z());

// let a = 10;
// let b = 20;
// let c = 30;
// console.log(a + b + c);
// const arr = [1, 2, 3, 4, 5, 6, 6, 7, , 8];
// const res = arr.filter((item) => {
//   return item > 5;
// });
// console.log(res);
