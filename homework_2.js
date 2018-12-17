var arr = ['h', 'e', 'l', 'l', 'o'];
arr.reverse();
console.log(arr);

//Домашнее №1 - 1


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

////

for (var i = 0; i < 3; i++) {
    console.log( "номеh " + i + "!" );
  }
  //
    var i=0
  while (i<3){
    console.log ('num'+ i + '!');
    i++;
  }


////
function reverse(str){ //hello
    var reversed = '';
    for (let char of str){
    reversed = char + reversed;
}
return reversed;
}
console.log (reverse ('hello'));

/// through reduce:

function reverse2 (str){
    return str.split('').reduce((acc,currentLetter) => currentLetter+acc);
}

console.log (reverse2('hello'));

//Домашнее №1 - 2
var str = 'hello';
var arr = str.split('');
var arr = arr.reverse();
var result = arr.join('');
console.log(result);

// Домашнее №1 - 3

function reverseStr(str) {

    return str.split('').reverse().join('');

}

console.log(reverseStr('hello'));

// Домашнее №1 - 4
var str = 'hello';
console.log('\u202E' + str);

// Домашнее №1 - 5
function reverseStr(str) {
    2
    return Array.prototype.reduce.call(str, function (c1, c2) {
        return c2 + c1;
    });
    3
}
4
console.log(reverseStr('hello'));
//!!!!!!!!!!!!!!!!!!!
function reverse2(str){
return str.split('').reduce(function(acc, currentLetter) {return currentLetter+acc});
}


// еще метод replace/match
function repStr() {
    return repStr.replace(/(.*?)\s(.*)/, "$2, $1!");
}

console.log();


// 2. Подсчет суммы через замыкание:

function sum(a) {
    return function (b) {
        return a + b;
    };
};

console.log(sum(2)(5));

///
function greet(a) {
    return function (b) {
        return function(c){
            return a+b+c;
        }
    }
}

console.log(greet('Hello')(' Jonh')('!'));

// пример интересного замыкания 
var createHelloFunction = function (name) {
    return function () {
        console.log('Hello, ' + name + '!');
    }
}
var sayHelloName = createHelloFunction('Slava');
sayHelloName();

//3. Строковый буфер а)
function makeBuffer() {
    var text = '';

    function buffer(othertext) {
        if (arguments.length == 0) {
            return text;
        }
        text += othertext;
    };
//3. Строковый буфер b)
    buffer.clear = function () {
        text = '';
    }
    return buffer;
};

var buffer = makeBuffer();
buffer('I');
buffer(' Love ');
buffer('JS!')
console.log(buffer());

buffer.clear();

console.log(buffer());




//4 закрасить квадратики glitch.com/edit#!/power-occupation

