const Album = require("../models/album.model");

module.exports.findAllAlbums = (req,res) => {
    console.log("hey it's me, the find all function!");

    Album.find({})
        .then(allAlbums => res.json({results: allAlbums}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.createAlbum = (req,res) => {
    Album.create(req.body)
        .then(newAlbum => res.json({results: newAlbum}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.findSingleAlbum = (req,res) => {
    Album.findOne({_id: req.params._id})
        .then(singleAlbum => res.json({results: singleAlbum}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.deleteSingleAlbum = (req,res) => {
    Album.deleteOne({_id: req.params._id})
        .then(results => res.json({results: results}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}

module.exports.updateSingleAlbum = (req,res) => {
    Album.updateOne({_id:req.params._id},
        req.body)
        .then(singleAlbum => res.json({results: singleAlbum}))
        .catch(err => res.json({message: "that didn't quite work", err}))
}