const { pool } = require('../db/connect');


// Registration code
const register = async (req,res) =>{
    res.send(pool.query("insert into users (username,email, password) values ('boray','boray@gmail.com', 'kakistan');"))

}

//Login code
const login =  (req,res)=> {
res.send("Hello login");


}


//Dashboard
const dashboard =  async (req,res) =>{
    res.send("Fucking dashboard")
   console.log(pool.query("select * from users;"))
}





module.exports = {login, register, dashboard}