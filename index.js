let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let { response } = require('express');

app.use(bodyParser.urlencoded({extended :true}));

app.get('/user',(req,res)=>
{
    res.json(require("./user.json"));
})
// GET
let user=[];
app.get('/user/:id' , (req , res) =>{
    user =require('./user');
    let id = req.params.id;
    let users =user.find(x => x.id == id);
    res.json(users);
});

// POST
app.post('/user', (req, res) => {  
    response = {  
        id : 5,
        user : "NEW USER",
        gender : "male",
        age : "21"
    };  
    user =require('./user');
    console.log("data is:",response)
    user.push(response);
    res.json(response) ;
 });

//  DELETE
 app.delete('/user/del/:id', (req, res) => {    
    user =require('./user');
    let id = req.params.id;
    user=user.filter((x)=> (x.id!=id))
    res.json(user);
 });

// PUT
app.put('/user/update/:id',(req,res) =>{
    
    users=require('./user');
    let id=req.params.id;
    
    users.forEach(element => {
        if(element.id == id)
        {
            element.user="VIRAT KOHLI";
        }
    });
     console.log(user)
    res.send("UPDATED");
})
app.listen(8081 , () => console.log("cool port"));