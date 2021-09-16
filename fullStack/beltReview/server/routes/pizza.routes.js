const PizzaController = require("../controllers/pizza.controller");
const Pizza = require("../models/pizza.model");

module.exports = app => {
    app.get("/api/pizzas/all", PizzaController.findAllPizzas);
    app.post("/api/pizzas/create", PizzaController.createPizza);
    app.get("/api/pizzas/:_id", PizzaController.findSinglePizza);
    app.delete("/api/pizzas/:_id/delete", PizzaController.deleteSinglePizza);
    app.patch("/api/pizzas/:_id/update", PizzaController.updateSinglePizza);
}