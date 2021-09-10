const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api", (req,res)=>{
    console.log("hey it's me, but form the back end!");
    res.json({message:"hey it's me!"});
})

app.get("/api/repeat/:word", (req,res)=>{
    res.json({message:`your word is ${req.params.word}`});
})

app.post("/api/repeat", (req,res)=>{
    console.log(req.body);
    res.json({message: req.body.word});
})

app.listen(port, ()=>console.log(`running on port ${port} is a new way I like to be`));