class Fighter{
    constructor(name, playerNum = 1){
        console.log("hey from the parent constructor!");
        this.name = name;
        this.playerNum = playerNum;
        this.percentage = 0;
        this.isShielding = false;
    }

    attack(opponent){
        if(opponent instanceof Fighter){
            if(opponent.isShielding){
                opponent.isShielding = false;
                console.log(`${this.name} attacked ${opponent.name}, but they shielded!`);
            }
            else{
                const damage = 5;
                opponent.percentage += damage;
                console.log(`${this.name} attacked ${opponent.name} for ${damage} damage!`);
            }
        }
    }

    special(otherPlayer){
        if(otherPlayer instanceof Fighter){
            if(otherPlayer.isShielding){
                console.log(`${this.name} performed a special on ${otherPlayer.name} but they shielded!`);
                otherPlayer.isShielding = false;
            }
            else{
                const damage = 25;
                console.log(`${this.name} performed a special on ${otherPlayer.name} and dealt ${damage}% damage!`);
                otherPlayer.percentage += damage;
                otherPlayer.isKilled();
            }
        }
        else console.log("damn you trying to break the code!!");
    }

    shield(){
        this.isShielding = true;
    }

    isKilled(){
        if(this.percentage > 100){
            console.log(`${this.name} just died at ${this.percentage}% oh no!!!`);
            this.percentage = 0;
            this.isShielding = false;
            return true;
        }
        return false;
    }
}

// module.exports = Fighter;
export default Fighter;