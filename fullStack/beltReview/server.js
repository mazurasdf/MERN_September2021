const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

// app.get("/api", (req,res)=>{
//     res.json({message:"hey it's me!"})
// })

app.use(cors());

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

require("./server/routes/pizza.routes")(app);

app.listen(port, ()=>console.log(`running on ${port} is a new way I like to be!`));