// IMPORTING PACKAGE
const mongoose = require("mongoose");


// MAKING CONNECTION 
<<<<<<< HEAD
const DB = mongoose.connect('mongodb+srv://sanketkumar0068:1234@cluster0.e0pab.mongodb.net/CSVUpload?retryWrites=true&w=majority&appName=Cluster0');

=======
const DB = mongoose.connect('mongodb+srv://user121:1234@cluster0.rr2mpun.mongodb.net/myMovieList?retryWrites=true&w=majority&appName=Cluster0');
>>>>>>> 27df09821b2fa387a521eceefdbf6cb93a0cc7cd

// Handle connection status
DB.then(() => {
    console.log('Connection successful!');
}).catch((err) => {
    console.log('No connection:', err);
});


// Setting it to db
const db = mongoose.connection;


// CHECKING CONNECTION
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;
