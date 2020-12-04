function Wizard(obj) {

     this.name= obj.name; 
     //this.bearded = 'bearded' in obj ? obj.bearded :  true;
    //this.bearded = obj.bearded || true; why doesn't this work
    obj.bearded=== false ? this.bearded =false :this.bearded =true; //(this one works)
    this.incantation = function(str){
        return str.toUpperCase();
    }
    this.isRested= true;
    var spells3 = 0
    this.cast=function() {
        spells3 = spells3 +1;
        if(spells3 === 3){this.isRested === false} 
        return this.isRested ? 'MAGIC BULLET': 'I SHALL NOT CAST!';
    }


}





module.exports = Wizard;