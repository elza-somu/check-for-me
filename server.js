const express = require('express');
const path = require('path');

const app = express();
// Public Folders route
app.use(express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT || 5000);