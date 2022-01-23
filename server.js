const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000

const app = express();

const http = require('http').Server(app);

app.use(express.json())

app.use(express.static(__dirname + '/public'));

app.get("/",  (req, res) => {
  console.log("Working");
  res.sendFile(path.join(__dirname, '/src/index.html'));
})
app.get("/about",  (req, res) => {
  
  res.sendFile(path.join(__dirname, '/src/about.html'));
})

app.get("/contact",  (req, res) => {
  
  res.sendFile(path.join(__dirname, '/src/contact.html'));
})

app.get("/blog",  (req, res) => {
  res.sendFile(path.join(__dirname, '/src/blog.html'));
})

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '/src/404.html'));
});

const server = http.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});