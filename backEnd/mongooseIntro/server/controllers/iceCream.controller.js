const IceCream = require("../models/iceCream.model");

module.exports.findAllIceCreams = (req,res) => {
    console.log("hey it's me, the find all function!");

    IceCream.find({})
        .then(allIceCreams => res.json({results: allIceCreams}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createIceCream = (req,res) => {
    IceCream.create(req.body)
        .then(newIceCream => res.json({results: newIceCream}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSingleIceCream = (req,res) => {
    IceCream.findOne({_id: req.params._id})
        .then(singleIceCream => res.json({results: singleIceCream}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSingleIceCream = (req,res) => {
    IceCream.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSingleIceCream = (req,res) => {
    IceCream.updateOne({_id:req.params._id},
        req.body)
        .then(singleIceCream => res.json({results: singleIceCream}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.addTopping = (req,res) => {

    IceCream.updateOne({_id: req.params._id},
        {$push: {toppings: req.body.topping}})
        .then(singleIceCream => res.json({results: singleIceCream}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}