import express from 'express';
import bodyParser from 'express';

// var express = require('express');
// var bodyParser = require('body-parser');


const PORT = process.env.PORT | 3000; // process is a global object in nodejs

const app = express();
// to take input from browser and renders 


// parse application/x-www-forum-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());



const mockUsers = [
        {id: 1, username: "Seth", displayName: "Pi"},
        {id: 2, username: "Seth1", displayName: "Pi1"},
        {id: 3, username: "Seth2", displayName: "Pi2"},
        {id: 4, username: "Seth3", displayName: "Pi5"},
        {id: 5, username: "Seth4", displayName: "Pi6"},
    ];
// let path = "/";
// let requestHandler = (request, response, next) => {
//     response.send("Hello, World!");
//     // response.status(201).send({msg: "Hello!"});
//     // response.status(201);
// };
// app.get(path, requestHandler());

app.get("/", (request, response) => {
    response.status(201).send({msg: "Hello"});
});


// Defining one end-point to get all users
app.get("/api/users", (request, response) => {
    // change happens here, mockUsers is stringified to json by Express 
    response.send(mockUsers);
    // response.send([{id: 2, username: "Seth1", displayName: "Pi1"}]);
    // response.send([{id: 3, username: "Seth2", displayName: "Pi2"}]);
    // response.send([{id: 4, username: "Seth3", displayName: "Pi3"}]);
});


// Use route parameters: used to get a particular set of values 
// one router to get 
app.get("/api/users/:id", (request, response) => {
    // console.log("Request's parameters: ");
    // console.log(request.params);
    // let obj = request.params;
    // console.log(typeof(obj));
    // console.log("Request: ", request);
    let user_id = request.params.id; // if ".id" wasn't specified, the 
    // console.log("User id: ", user_id);
    // console.log(request.params);

    let parsedID = parseInt(request.params.id);
    // if (typeof(parsedID) == )
    // console.log(parsedID);
    if (isNaN(parsedID)){
        return response.status(400).send({msg: "Bad Request Invalid ID."}); // bad request
    } else{
        const findUser = mockUsers.find((user) => user.id === parsedID); 
        if (!findUser) return response.sendStatus(404);
        else return response.send(findUser);
    }
});



app.get("/api/users/:username", (request, response) => {
    console.log("Working with the username router: ");
    console.log("Username: ", request.params);
    console.log("Response from username: ", response);
    // Should expect to print out the corresponding username 
});

app.get("/api/products", (request, response) => {
    response.send([
        {id: 123, name: "Chicken Breast", Price: 12.99}
    ]);
})


app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`);
});


