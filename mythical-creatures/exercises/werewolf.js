function Werewolf(nom,lieu){
    this.name = nom;
    this.location = lieu;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    this.change = function(){
        if(this.human){
            this.human = false;
            this.wolf = true;
            this.hungry =true;
        }else{
            this.human = true;
            this.wolf = false;
            this.hungry =false;
        }     
    }
    this.eat= function(victim){
        victim.alive = false;
        this.human = true;
    }


}

module.exports = Werewolf;