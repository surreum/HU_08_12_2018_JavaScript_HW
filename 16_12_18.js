var door1 = {
    color: 'black',
    width: 80,
    getParams: function paramlist() {
        return this.color;
    }
}
var door2 = {
    color: 'wite',
    width: 90,

}

var door3= door1.getParams.apply (door1);

console.log (door3);

// this
var car = new Car ()

var user3 = {...user2};
__proto__


var john = new User ('john')
