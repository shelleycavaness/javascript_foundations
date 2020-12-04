function Vampire(name, pet){
    this.name =name;
    this.pet =pet || 'bat';
    this.thirsty= true;
    this.drink =function(){
        return this.thirsty = false;
    }

}

module.exports = Vampire;