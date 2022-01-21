// var a;
// var v = 2;

// // console.log(a)
// a = 7;
// b = a;
// var c = "123456789123456789\f123456789123456789"

// var num = [10, 20, 30]

// // for (i = 0; i < num.length; i++){
// //     console.log(num[i])
// // }

// num.pop()
// console.log(num)
// num.shift()
// console.log(num)

// function printWord(word) { 
//     console.log(word)
//     return word
// }
 
// printWord(printWord("Hello"))
// printWord(printWord("World"))

var names = ["Hole in one!", "Albatross", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Triple Bogey"]

function golfScore(par, strokes) {
    var difference = strokes - par
    var offsetDiff = difference + 4

    if (strokes == 1) {
        console.log(names[0])
    }
    else if(strokes < 1) {
        console.log("Impossible")
    }
    else if (difference > 3){
        console.log("+" + difference)
    }
    else if (offsetDiff < 1){
        console.log(difference)
    }
    else {
        console.log(names[offsetDiff])
    }
}
