const express = require('express');
const path = require('path');

const app = express();
// Public Folders route
app.use(express.static(path.join(__dirname, 'public')));

// Load view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  
  res.render('index.ejs');
  }
);


app.listen(process.env.PORT || 5000);