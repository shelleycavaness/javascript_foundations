function Medusa(name){
    this.name= name;
    this.statues =[];
    this.stare= function(victim){
        if(this.statues.length < 3){
            this.statues.push(victim);
            victim.stoned = true;
        } else {
           var unstoned = this.statues.shift();
           unstoned.stoned = false;
            this.statues.push(victim);
            victim.stoned = true;
        }
        
    }



}



module.exports =Medusa;