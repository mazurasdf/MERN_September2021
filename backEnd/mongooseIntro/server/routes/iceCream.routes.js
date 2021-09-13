const IceCreamController = require("../controllers/iceCream.controller");

module.exports = app => {
    app.get("/api/allIceCreams", IceCreamController.findAllIceCreams);
}