function Direwolf(name, home, size, starksToProtect){
    this.name =name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers= true;
   
    this.protect= function(stark){
        if((this.home === stark.location) && (this.starksToProtect.length < 2)){
        this.starksToProtect.push(stark);
        stark.safe = true;
        this.huntsWhiteWalkers= false;
        } 
    }
    this.leave =function(stark){
        this.starksToProtect.pop(stark);
        stark.safe = false; 
    }
   
}


module.exports = Direwolf;