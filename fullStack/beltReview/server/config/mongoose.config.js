const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pizza_belt_review", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("yo you're connected to the database"))
    .catch(err=>console.log("beep boop bop db connection was a flop", err))