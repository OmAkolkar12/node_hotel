// function add(a, b) {
//     return a + b;
//

// var add = function(a, b) {
//     return a + b;
// }

// var add = (a,b ) => { return a + b; }
// var add = (a,b ) => a + b;

// (function() {
//     console.log("File is added");
// })();
// var result = add(5,3);
// console.log("The result is: " + result);

// ------------------------------------------------------------------------------------------------------------------------------

// callback function

// function callback(){
//     console.log("This is a callback function");
// }

// const add = (x, y, callback) => {
//     let sum = x + y;
//     console.log("The sum is: " + sum);
//     callback();
    
// }

// add(5, 3, callback);

// ------------------------------------Os and Fs modules-------------------------------------------------
// var fs = require('fs');
// var os = require('os');

// var userInfo = os.userInfo();
// console.log(userInfo);
// console.log(userInfo.username);

// fs.appendFile('greetings.txt', 'Hello ' + userInfo.username + '!\n', () => {
//    console.log('The file has been created');
// }); 

// console.log(os); this will tell us what os module is



// To include notes.js file
// const notes = require("./notes.js"); 
// console.log("Age is: " + notes.age);
// console.log("The sum is: " + notes.addNumber(5, 7));

// Lodash module is important
// var _ = require("lodash");

// var data = ["person","person", 1,2,1,2,"name", "name"]
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.isString("Prince"));


// const calculateCircleArea = function(radius){
//     return Math.PI * radius * radius;
// }
// var prompt = require("prompt-sync")();
// var radius = prompt("Enter the radius of circle: ");
// var ans = calculateCircleArea(radius);
// console.log("The area of circle is: " + ans);

// const performOperation = function(num1,num2,operationCallback){
//     return operationCallback(num1,num2);}
// function add(a,b){
//     console.log("The sum is: " + (a + b));
// }   
// function multiply(a,b){
//     console.log("The product is: " + (a * b));
// }   
// function divide(a,b){       
//     console.log("The division is: " + (a / b));
// }
// performOperation(5,3,add);
// performOperation(5,3,multiply);
// performOperation(5,3,divide);

// const fs = require('fs'); 
// fs.readFile("notes.js", "utf8", (err, data) => {
//     if(err){
//         console.log("Error occurred"); 
//         }
//         console.log(data); 
//     });
// ------------------------------------------------About server creation and running-----------------------------------------------    
// import express from 'express'
const express = require('express');
const db  = require('./db.js');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my hotel!...... How may I help you?')
})


const menuRoutes = require('./routes/menuRoutes.js');
app.use('/menu',menuRoutes);


const personRoutes = require('./routes/personroutes.js');
app.use('/person',personRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000')
});