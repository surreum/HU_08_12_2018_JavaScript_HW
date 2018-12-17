var duda=1;
var dan=0;
while (dan<10){
  duda=duda*2;
  dan=dan+1;

}


console.log(duda);

function count() {
  var i, j; // передвинули объявления var в начало
  for (i = 0; i < 3; i++) {
    j = i * 2;
  }
  alert( i ); // i=3
  alert( j ); // j=4
}
