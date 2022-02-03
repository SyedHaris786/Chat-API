const login =  (req,res)=> {
res.send("Hello login");
}

const register = async () =>{
    res.send(req.headers)
}
module.exports = {login, register}