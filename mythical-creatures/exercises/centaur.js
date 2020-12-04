function Centaur(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing= true;
    this.layingDown = false;
    var count= 0;
    var active = false; // for test 84 like an interuptor

    this.shoot = function(){
        count++;  //count= count +1 
        if(count === 3){ this.cranky = true};
        if(active){return 'NO!'}
        return this.cranky ? 'NO!': 'Twang!!!'; 
        //return 'Twang!!!';    
    }
    this.run = function(){ 
        count++;
        if(count === 3){ this.cranky = true}
        if(active){return 'NO!'}
        return 'Clop clop clop clop!!!';
    }
    this.sleep = function(){
        if(this.standing){return "NO!"} 
    }
    this.layDown = function(){
        this.standing = false;
        this.layingDown = true;
        this.cranky = false;
        active = true;
    }
    this.standUp = function(){ 
        this.standing = true;
        this.layingDown = false;  
        active =false;  
    }
    this.sleep = function(){
        return active ? 'ZZZZ': 'NO!';
    }
    this.drinkPotion =function(){
        if(active){return 'Not while I\'m laying down!'}
        this.cranky ? this.cranky = false: this.cranky =true;

    }    

}














module.exports = Centaur;