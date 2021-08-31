const Fighter = require('./Fighter');

class Link extends Fighter{
    constructor(playerNum){
        // console.log("hello from the Link class!");
        super("Link", playerNum);
        this.bombOut = false;
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(this.bombOut){
                //throw the bomb
                this.bombOut = false;

                if(Math.floor(Math.random() * 2) === 0){
                    //bomb missed
                    console.log(`${this.name} threw a bomb at ${otherPlayer.name} but the bomb missed!`);
                }
                else{
                    //bomb hit!
                    const damage = 50;
                    console.log(`${this.name} threw a bomb at ${otherPlayer.name} but and dealt ${damage}%!`);
                    otherPlayer.percentage += damage;
                    otherPlayer.isKilled();
                }
            }
            else{
                this.bombOut = true;
                console.log(`${this.name} pulled a bomb out and is ready to throw!`);
            }
        }
    }
}

class ZSS extends Fighter{
    constructor(playerNum){
        super("Zero Suit Samus", playerNum);
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${this.name} used her electro whip thingy on ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 25;
                console.log(`${this.name} used her electro whip thingy on ${otherPlayer.name} and dealt ${damage}% damage!`);
                otherPlayer.percentage += damage;
                console.log(`${otherPlayer.name} is stunned by the electricity!`);

                this.attack(otherPlayer);

                otherPlayer.isKilled();
            }
        }
        else console.log("damn you trying to break the code!!");
    }
}

class Pikachu extends Fighter{
    constructor(playerNum){
        super("Pikachu", playerNum);
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${this.name} performed a special on ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 15;
                console.log(`${this.name} shoots lightning at ${otherPlayer.name} and deals ${damage}% damage!`);
                otherPlayer.isKilled();
                otherPlayer.percentage += damage;
                console.log(`${this.name} shoots lightning AGAIN at ${otherPlayer.name} and deals ${damage}% damage! how quick!!!!`);
                otherPlayer.isKilled();
                otherPlayer.percentage += damage;
            }
        }
        else console.log("damn you trying to break the code!!");
    }
}

class Samus extends Fighter{
    constructor(playerNum){
        super("Samus", playerNum);
        this.charged = false;
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(!this.charged){
                this.charged = true;
                console.log(`${this.name} is chargin up!`);
            }
            else{
                console.log(`${this.name} fired her charged blast at ${otherPlayer.name}!`);
                otherPlayer.percentage += 75;
            }
            
        }
    }
}

class Kirby extends Fighter{
    constructor(playerNum){
        super("Kirby", playerNum);
        this.ability = "None";
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(this.ability === "None"){
                console.log(`${this.name} stole ${otherPlayer.name}'s ability!`)
                this.ability = otherPlayer.name;
            }
            else if(this.ability === "Samus"){
                console.log(`${this.name} fired a beam at ${otherPlayer.name} and dealt 35 damage!`);
                otherPlayer.percentage += 35;
            }
            else if(this.ability === "Link"){
                console.log(`${this.name} fired an arrow at ${otherPlayer.name} and dealt 35 damage!`);
                otherPlayer.percentage += 35;
            }
            else if(this.ability === "Pikachu"){
                console.log(`${this.name} fired a lightning bolt at ${otherPlayer.name} and dealt 35 damage!`);
                otherPlayer.percentage += 35;
            }
            else if(this.ability === "Kirby"){
                console.log(`the universe exploded!!! what happens now?`);
                35/0;
            }
            else if(this.ability === "Ness"){
                const damage = 5;
                for(let i = 0; i < 5; ++i){
                    console.log(`${this.name} PK fire'd ${otherPlayer.name} and dealt ${damage}% damage!`);
                    otherPlayer.percentage += damage;
                }
            }
        }
    }
}

class Ness extends Fighter{
    constructor(playerNum){
        super("Ness", playerNum);
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${this.name} performed a special on ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 5;
                for(let i = 0; i < 5; ++i){
                    console.log(`${this.name} PK fire'd ${otherPlayer.name} and dealt ${damage}% damage!`);
                    otherPlayer.percentage += damage;
                    otherPlayer.isKilled();
                }
                
            }
        }
        else console.log("damn you trying to break the code!!");
    }
}

let first = new Link(1);
let second = new ZSS(2);

console.log(first);
first.shield();
second.special(first);
console.log(first);