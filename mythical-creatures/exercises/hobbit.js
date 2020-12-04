function Hobbit(name){
    this.name = name;
    this.disposition = 'homebody';
    this.age =0;
    this.adult= false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    //var isChild = this.age <33;
    

    this.celebrateBirthday =function(){
        this.age = this.age +1;
        if(this.age ===33){ this.adult= true}
        if(this.age > 100){ this.old =true}
        
    }
    
    this.isFrodo = function(){
        if(this.name === 'Frodo'){this.hasRing = true}
    }
    this.isFrodo()




}


module.exports = Hobbit;