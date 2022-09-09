const http = require('http');
const my = require('./first');
const url = require('url');
const fs = require('fs');
const mysql = require('mysql')

// fs.appendFile('file.html', 'HELLOOOOOO', (err) => {
//     if(err) throw(err)
//     console.log('succees')
// });

// fs.open('file.html', 'w', (err, file) => {
//     if(err) throw (err);
//     console.log('yesssss')
// })

// http.createServer(function(req,res){
//     fs.readFile('file.html', (err, data) => {
//         res.writeHead(200,{'content_type' : 'text/html'});
//     // res.write('hello from my fisrt app server at ' + my.myDate() + req.url)
//     res.write(data)
//     res.end();
//     })
//     // res.writeHead(200,{'content_type' : 'text/html'});
//     // // res.write('hello from my fisrt app server at ' + my.myDate() + req.url)
//     // var q = url.parse(req.url, true).query;
//     // res.write(q.year + " " + q.month)
//     // res.end();
// }).listen(8080);

// http.createServer((req, res) => {
//     var all = url.parse(req.url, true);
//     var filename = "." + all.pathname;
//     fs.readFile(filename, (err, data) => {
//         if(err) {
//             res.writeHead(404, {'content_type': 'test/html'});
//             return res.write('NOT FOUND');
//         }
//         res.writeHead(200, {'content_type': 'test/html'});
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Soukita1995?"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });