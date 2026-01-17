const mongoose = require('mongoose');

const mongoURL= process.env.DB_URL || 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () =>{
    console.log('MongoDB connected successfully');
});
db.on('error', (err) =>{
    console.log('MongoDB connection error: ' + err);
});
db.on('disconnected', () =>{
    console.log('MongoDB disconnected');
});

module.exports = db;