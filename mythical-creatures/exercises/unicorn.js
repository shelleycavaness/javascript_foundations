function Unicorn(name,color) {
    this.name = name;
    this.color= color || "white";
    this.isWhite = function (){
      return (this.color === 'white')? true : false;        
    }
//this.function isWhite doesn't existe
    this.says = function(str){
        return '**;* '+ str + ' *;**'; 
    }


}


module.exports = Unicorn;