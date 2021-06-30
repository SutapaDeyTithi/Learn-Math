require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// const pool=require("./utils/db");

// IMPORT MODULES
const {
    signUp,
    login
} = require("./handlers/users");

const {
    getTopic,
    getSubtopic,
    getMCQ,
    getCategory
} = require("./handlers/student");

// COMMON
app.post('/signUp', signUp);
app.post('/login', login);

// STUDENT
app.get('/topic', getTopic);
app.get('/subtopic', getSubtopic);
app.get('/category', getCategory);
app.get('/mcq', getMCQ);


// INSTRUCTOR

// MODERATOR


app.listen(5000, ()=>{
    console.log("listening on port 5000..");
})

//npm run start
//npm run nodemon


