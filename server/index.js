const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const port = 3001
app.use(cors());
app.use(express.json())




// useless... 
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});



// Route to get all entries
app.get("/api/get", (req,res)=>{
    db.query("SELECT * FROM gamepoints_users LIMIT 100", (err,result)=>{
        if(err) {
        console.log(err)
        } 
    res.send(result)
    });   });


// Route to get one entry
app.get("/api/getFromName/:name", (req,res)=>{

    const name = req.params.name;
     db.query("SELECT * FROM gamepoints_users WHERE name = ?", name, 
     (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });



// Route to name based on start
app.get("/api/getSearchName/:name", (req,res)=>{

    const name = req.params.name;
     db.query(`SELECT * FROM gamepoints_users WHERE name LIKE '${name}%' LIMIT 100`, 
     (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });

// Route to get one entry
app.get("/api/getFromName/:name", (req,res)=>{

    const name = req.params.name;
     db.query("SELECT * FROM gamepoints_users WHERE name = ?", name, 
     (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
        });   });

// Route to add one crystal
app.post('/api/like/:id',(req,res)=>{

    const id = req.params.id;
    db.query("UPDATE name SET balance = balance + 1 WHERE id = ?",id, (err,result)=>{
        if(err) {
       console.log(err)   } 
       console.log(result)
        });    
    });



