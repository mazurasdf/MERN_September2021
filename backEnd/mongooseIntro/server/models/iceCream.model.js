const mongoose = require("mongoose");

const IceCreamSchema = new mongoose.Schema({
    name: String,
    flavor: String,
    numScoops: Number,
    whipped: Boolean,
    sauce: String,
    toppings: [String]
})

const IceCream = mongoose.model("IceCream", IceCreamSchema);

module.exports = IceCream;