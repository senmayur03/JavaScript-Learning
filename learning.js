var a;
var v = 2;

// console.log(a)
a = 7;
b = a;
var c = "123456789123456789\f123456789123456789"

var num = [10, 20, 30]

// for (i = 0; i < num.length; i++){
//     console.log(num[i])
// }

num.pop()
console.log(num)
num.shift()
console.log(num)

function printWord(word) {
    console.log(word)
    return word
}
 
printWord(printWord("Hello"))
printWord(printWord("World"))