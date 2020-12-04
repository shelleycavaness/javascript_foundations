function Dragon(name,rider,color){

    this.name = name;
    this.rider =rider;
    this.color =color;
    this.hungry = true;
    var meal = 0;

    this.eat = function(){
        meal= meal +1;
        if(meal === 3){this.hungry= false}
    }


}











module.exports = Dragon;