require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


//Middleware import
const authenticateUser = require("./Middleware/authValidation")

//Router 
const loginRouter  = require("./Routes/login")
// const blogRouter = require("./Routes/blog")

// const { pool } = require('./db/connect');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/',express.static('./Public'));


app.use('/api/v1', loginRouter)
// app.use('/api/v1',authenticateUser, blogRouter)


const port = process.env.PORT || 3000;

app.use('/socket',(req,res)=>{

    const arr = req.headers;
    console.log(arr); 

    io.on('connection',(socket)=>{
    
        console.log("A user is connected")
        
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
            console.log(msg);
          });
        
        socket.on('disconnect',()=>{
        console.log('A user is disconnected');
        });
    
    
    
    
    
    });
},express.static('./Public'))



const start = async ()=>{
    try{
        http.listen(port, () =>
        console.log(`Server is listening on port ${port}...`));
    } catch (error){
        console.log(error);
    }
}

start();