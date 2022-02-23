require('dotenv').config();
const express = require('express');
const app = express();

//Middleware import
const authenticateUser = require("./Middleware/authValidation")

//Router 
const loginRouter  = require("./Routes/login")
const blogRouter = require("./Routes/blog")




// const { pool } = require('./db/connect');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(express.static('./Public'));


app.use('/api/v1', loginRouter)
app.use('/api/v1',authenticateUser, blogRouter)


const port = process.env.PORT || 5000;

const start = async ()=>{
    try{
        app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`));
    } catch (error){
        console.log(error);
    }
}

start();