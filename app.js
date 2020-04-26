const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("");
});

app.get("/contact",function(req, res){
  res.send("");
});

app.get("/about", function(req, res){
  res.send("");
});


app.get("/hobbies", function(req, res){
  res.send("");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
