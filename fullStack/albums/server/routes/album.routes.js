const AlbumController = require("../controllers/album.controller");
const Album = require("../models/album.model");

module.exports = app => {
    app.get("/api/albums/all", AlbumController.findAllAlbums);
    app.post("/api/albums/create", AlbumController.createAlbum);
    app.get("/api/albums/:_id", AlbumController.findSingleAlbum);
    app.delete("/api/albums/:_id/delete", AlbumController.deleteSingleAlbum);
    app.patch("/api/albums/:_id/update", AlbumController.updateSingleAlbum);
}