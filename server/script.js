// var express = require('express')
// var mysql = require('mysql')
// var app = express()
// var cors=require('cors')
// app.use(express.json())
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "users",
// });
// con.connect(function (err) {
//   if (err) {
//     console.warn("Error");
//   }
//   else {
//     console.warn("conected!")
//   }
// });
// app.use(cors())
// app.post("/", function (req) {
//   var email = req.body.email;
//   var password = req.body.password;
//   con.query("insert into facebook values(?,?,?)", [' ',email, password], function (error) {
//     if (!!error) {
//       console.log("error")
//     }
//   });
// })

// app.listen(3002, (err) => {
//   if (err)
//     {
//   console.log(err);
//     }
//     else{
//       console.log("yes")
//     }
// });
