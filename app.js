import express from 'express';

const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + '/portfolio.html');
});

app.get("/contact",function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

app.get("/about", function(req, res){
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
