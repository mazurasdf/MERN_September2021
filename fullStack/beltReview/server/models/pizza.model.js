const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
    //size(s,m,l,xl,sheet), crust, toppings([]),sauce, cheese, readyBy, sides([])
    size:{
        type: String,
        required: [true, "size is required!"],
        enum: ["small","medium", "large", "extra large", "sheet"]
    },
    crust:{
        type: String,
        required: [true, "crust is required!"]
    },
    toppings:{
        type: [String]
    },
    sauce:{
        type: String,
        required: [true, "sauce is required!"]
    },
    cheese:{
        type: String,
        required: [true, "cheese is required!"]
    },
    numOrders:{
        type: Number,
        required: [true, "Number of orders is required!"],
        min: [1, "Must have at least 1 order"]
    },
    readyBy:{
        type: String,
        required: [true, "ready by is required!"]
    },
    sides:{
        type: String
    },
}, {timestamps: true})

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;