const IceCreamController = require("../controllers/iceCream.controller");
const IceCream = require("../models/iceCream.model");

module.exports = app => {
    app.get("/api/iceCreams/all", IceCreamController.findAllIceCreams);
    app.post("/api/iceCreams/create", IceCreamController.createIceCream);
    app.get("/api/iceCreams/:_id", IceCreamController.findSingleIceCream);
    app.delete("/api/iceCreams/:_id/delete", IceCreamController.deleteSingleIceCream);
    app.patch("/api/iceCreams/:_id/update", IceCreamController.updateSingleIceCream);
    app.put("/api/iceCreams/:_id/addTopping", IceCreamController.addTopping);
}