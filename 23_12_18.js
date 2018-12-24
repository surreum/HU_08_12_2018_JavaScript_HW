function capitalize(str) {
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

console.log (capitalize ('a short sentence'));

//ПОВТОРИТЬ string, split, joint!

function capitalize(str) {
    var words = [];

    for (let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

console.log (capitalize ('a short sentence'));

//palindrome true or false:
function palindrome(str) {

   const reversed = str.split('').reverse().join('');
   return reversed === str;
    
}
console.log(palindrome('abbbba'));

// fizzbuzz
function fizzbuzz(n) {
    var n;
    for (i=0; i<=n; i++);
    if (i%3 ===0){
        console.log ('fizz');
    }
    else if (i%5===0){
    }
    else {
        console.log (i);
    }
 }

// maxChar ('aaabbbbcccddd') === "c"

function maxChar(str) {
    var charMap = {}
    var max = 0;
    for (let i=0; str.length <=i; i++){
        charMap[char]=charMap[char] +1 || 1;
        console.log (charMap[char]);
    }    

}

//anagram

function anagrams(stringA, stringB) {
    var aCharMap = buildCharMap (stringA);
    var bCharMap = buildCharMap (stringB);
if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
}

    for (let char in aCharMap){
        if (aCharMap[char] !== bCharMap[char]){
            return false;
        }
    }
    return true;
}
function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap;
}
console.log (anagrams('rail safety', 'fairy tales'));
