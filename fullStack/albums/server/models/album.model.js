const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
    name: String,
    artist: String,
    imgURL: String,
    releaseYear: Number,
    genre: String,
    rating: Number
})

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;