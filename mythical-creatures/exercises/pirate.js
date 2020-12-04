function Pirate(name, job){
    this.name = name;
    this.job = job ||'Scallywag';
    this.cursed= false;
    this.booty = 0;
    var badBoy = 0;

    this.commitHeinousAct =function(){
        badBoy= badBoy + 1;
        if(badBoy === 3){this.cursed = true}
    } 
    this.robShip =function(){
        this.booty = 100;
        return 'YAARRR!';
        
    }


}





module.exports= Pirate;