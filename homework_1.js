//Первое задание. Функция не работает
function getGreet (name, surname, age, sex){
    var name = 'Slava';
    var surname = 'Groshev';
    var age = '39';
    var sex = 'm';
    var fullname = name+' '+surname;
        if (age < 21) {
          message = 'Hi';
        }else if (age<100){
            message = 'Hello'
        }else if (age>100){
           message = 'Unusual age,'
        }
        if (sex== 'm'){
           prefix = 'Mr.';
        }else{
          prefix = 'Mrs.';
          }
getGreet = (message+' '+prefix+' '+fullname+'!');
return getGreet;
        }
console.log (getGreet);
// а если вынести за функцию то результат возвращается
    var name = 'Slava';
    var surname = 'Groshev';
    var age = '39';
    var sex = 'm';
    var fullname = name+' '+surname;
        if (age < 21) {
          message = 'Hi';
        }else if (age<100){
            message = 'Hello'
        }else if (age>100){
           message = 'Unusual age,'
        }
        if (sex== 'm'){
           prefix = 'Mr.';
        }else{
          prefix = 'Mrs.';
          }
getGreet = (message+' '+prefix+' '+fullname+'!');

console.log (getGreet);
//получается приветствие

// как надо решать:
function myFunc(name, surname, age, sex);{
    return{
        fullname:function(){
            return '${name} ${surname}';
        }
        greetMessage: function (){
            //if (sex===1) return 'Mr ${name}.';
            //return 'Mrs ${name}';
            return (sex===1) ? 'Mr ${name}.' ? 'Mrs ${name}':
        },
        age: age
    }
}

//второе задание:
function pow(x, n) {
    var result = x;
  
    for (var i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }


  //***
  function pow (x,n){
      if (n===1) return x;
      return x*pow (x,n+1);
  }

  // третье задание с использованием цикла:
  function sumTo(n) {
    var count = 0;
      for(var i = 1; i <= n; i++){
        count += i;
      }
      return count;
  }
 // третье задание с использованием рекурсии:
 
 function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }

// третье задание с использованием арифметической прогрессии:

function sumTo(n) {
    return n * (n + 1) / 2;
  }