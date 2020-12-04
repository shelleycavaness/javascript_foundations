function Stark(name, location){
    this.name =name;
    this.location = location ||'Winterfell';
    this.safe = false;
    this.houseWords = function(){
        return this.safe ? 'The North Remembers':'Winter is Coming';
        } 

}

module.exports = Stark;