const Pizza = require("../models/pizza.model");

module.exports.findAllPizzas = (req,res) => {
    console.log("hey it's me, the find all function!");

    Pizza.find({})
        .then(allPizzas => res.json({results: allPizzas}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createPizza = (req,res) => {
    Pizza.create(req.body)
        .then(newPizza => res.json({results: newPizza}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSinglePizza = (req,res) => {
    Pizza.findOne({_id: req.params._id})
        .then(singlePizza => res.json({results: singlePizza}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSinglePizza = (req,res) => {
    Pizza.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSinglePizza = (req,res) => {
    Pizza.updateOne({_id:req.params._id},
        req.body,
        {runValidators: true})
        .then(singlePizza => res.json({results: singlePizza}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}