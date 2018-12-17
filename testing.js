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



var text = 'Hello'
console.log(text);


pow (x,n) = x*pow(x,n+1);