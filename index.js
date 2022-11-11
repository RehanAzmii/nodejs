// express .js

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));
app.listen(5000);
// app.get("/", (req, res) => {
//   res.send("Welcome, this is Home Page");
// });
// app.get("/about", (req, res) => {
//   res.send("Welcome, this is About Page");
// });
// app.listen(5000);
// promise

// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//   resolve(30);
//   setTimeout(() => {

//   }, 2000);
// });
// waitingData.then((data) => {
//   b = data;
//   console.log(a + b);
// });
// crud with file system

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "this is simple file");
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// update file

// fs.appendFile(filePath, "file name is apple.txt", (err) => {
//   if (!err) console.log("file is update");
// });

// rename file

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("file is update");
// });

// delete file

// fs.unlinkSync(`${dirPath}/fruit.txt`);

//create file with commondline
// fs = file system
// const fs = require("fs");

// const fs = require("fs");
// fs.writeFileSync("apple.txt", "this is a apple file");

// get path directory
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// for (let i = 0; i < 5; i++) {
// fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple tet file");
// fs.writeFileSync(dirPath + `/hello${i}.txt`, "a simple tet file");
// }
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log("file name is :", item);
//   });
// });
// input for commandline

// console.log(process.argv);

// create server
// const data = require("./data");
// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "applicationjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);

// console.log("Try nodemonno");
// console.log("Try nodemonno");
// console.log(100 + 20);

// color changes
// const colors = require("colors");

// console.log("pakage.json".red);

// createserver

// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.write("<h1>hello this is azam</h1>");
//     resp.end();
//   })
//   .listen(4500);

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
