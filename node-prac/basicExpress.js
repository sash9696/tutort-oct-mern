

//express
//is a framework for building web applications on top of Node.js
//standard server framework for Node.js
//provides a robust set of features for web and mobile applications
//used to build web applications and APIs
//provides a thin layer of fundamental web application features
//allows to set up middlewares to respond to HTTP Requests
//defines a routing table which is used to perform different actions based on HTTP method and URL
//allows to dynamically render HTML Pages based on passing arguments to templates
//allows to define error handling middleware
//unopinionated => minimalistic and flexible , there is no soecific structure or patterns
//used for creating RESTful APIs

const express = require('express');
const app = express();

//define routes

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})