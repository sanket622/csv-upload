const mongoose = require("mongoose");

const DB = mongoose.connect('mongodb+srv://sanketkumar0068:1234@cluster0.e0pab.mongodb.net/CSVUpload?retryWrites=true&w=majority&appName=Cluster0');

DB.then(() => {
    console.log('Connection successful!');
}).catch((err) => {
    console.log('No connection:', err);
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to DB"));
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;
