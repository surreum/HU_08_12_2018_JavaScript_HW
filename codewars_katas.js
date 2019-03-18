// Sorting array and delete equal chars;
var uniqueInOrder=function(iterable){
  var array = iterable.toString();
  array = iterable;
  var newArr = [];
  for (let i=0; i<array.length; i++)  {
      if (array[i]!==array[i+1]){
          newArr.push(array[i]);
          console.log(newArr); 
      }
      }
      return newArr; 
  }               



console.log(uniqueInOrder([1,2,2,3,3]));
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));



// First Kata Validate PIN My solution:
function validatePIN (pin) {
    if (pin.match(/[^\d]/)){
        return false
    }
    if (pin.length === 4){
    return true
    }
    if (pin.length === 6){
    return true
    }
    else{
    return false
    }
    //return true or false
  }
  console.log (validatePIN('3568'));
  
// Other solutions
function validatePIN (pin) {
  
    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }

//Best practice:
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

// Вычислить меньшее число из массива и удалить его:
//Узнать как сделать non-mutating методом!

function removeSmallest(numbers) {
    var numMin = Math.min.apply(null, numbers);
    var i = numbers.indexOf(numMin);
    numbers.splice(i,1);
    const num = numbers.filter(a => a!==numMin);
    return numbers;
    throw "TODO: removeSmallest";
}
console.log(removeSmallest([3,2,5,7,2,8,2,9]));

//Capitalize every word:
String.prototype.toJadenCase = function (str) {
  let result = str [0].toUpperCase();
    
    for (let i=1; i < str.length; i++) {
        if (str[i-1] === ' '){
        result += str[i].toUpperCase();
        }
        else {
            result += str[i];
        }
    } 
    return result;
}

console.log(String.prototype.toJadenCase('How can mirrors be real if our eyes aren\'t real'));



lеt a = 90100
function my(){
  if (false)
    lеt a = 1;
  else {
    lеt b = 2;
  }
 
  alеrt(a); // 90100 
  console.log(b); 
} 
my()