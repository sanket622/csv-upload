const express = require('express');
const port = process.env.port || 8080;
const app = express();
const path = require('path');

const expressLayouts = require('express-ejs-layouts');
const csv = require('csv-parser');
const db = require("./config/mongoose");
const bodyParser = require('body-parser');

app.use(expressLayouts);
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/', require('./routes'));
app.listen(port, function(err) {
    if(err) {
        console.log('Error', err);
        return;
    }
    console.log('Server is up and running on port: ', port);

});