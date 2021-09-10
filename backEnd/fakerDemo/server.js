const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

class CoffeeOrder{
    constructor(){
        const bases = ["dark roast", "light roast", "espresso", "cold brew", "milk", "pumpkin roast", "hot water", "chai tea", "black tea", "green tea"]
        const additives = ["milk", "cream", "soy milk", "almond milk", "coconut milk", "water", "oat milk", "whiskey", "ice"]
        const flavors = ["honey", "sugar", "splenda", "chocolate syrup", "vanilla", "caramel", "peppermint", "pumpkin", "squash", "egg nog", "ginger ale", "more coffee", "jalapeno syrup", "peanut butter", "hazelnut"]
        //toppings
        //extras(cinnamon)
        //temperature

        this.base = bases[Math.floor(Math.random() * bases.length)]
        this.additive = additives[Math.floor(Math.random() * additives.length)]
        this.flavor = flavors[Math.floor(Math.random() * flavors.length)]
        this.barista = faker.name.findName();
        this.coffeeShop = `${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun()} Coffee Roasters`;
        this.cost = `$${faker.finance.amount()}`;
        this.baristaFace = faker.image.avatar();
    }
}

app.get("/api/test", (req,res)=>{
    res.json({message: "hey it's me!"})
})

app.get("/api/order", (req,res)=>{
    res.json(new CoffeeOrder())
})


app.listen(port,()=>console.log(`running on port ${port} is a new way I like to be!!!`));