require('dotenv').config();
const express = require('express');
const app = express();
const loginRouter  = require("./Routes/login")



// const { pool } = require('./db/connect');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(express.static('./Public'));


app.use('/api/v1', loginRouter)



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