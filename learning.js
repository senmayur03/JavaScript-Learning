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

// var names = ["Hole in one!", "Albatross", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Triple Bogey"]

// function golfScore(par, strokes) {
//     var difference = strokes - par
//     var offsetDiff = difference + 4

//     if (strokes == 1) {
//         console.log(names[0])
//     }
//     else if(strokes < 1) {
//         console.log("Impossible")
//     }
//     else if (difference > 3){
//         console.log("+" + difference)
//     }
//     else if (offsetDiff < 1){
//         console.log(difference)
//     }
//     else {
//         console.log(names[offsetDiff])
//     }
// }

// var car = {
//     "name": "Honda",
//     "model": "NSX",
//     "year": 2000,
// }

// console.log(car.year)
// console.log(car["name"])

// var model = "model"
// console.log(car[model])

// car.year = 2015
// console.log(car.year)

// car.speed = "300km/h"
// console.log(car.speed)

// delete car.year
// console.log(car)
 
// console.log(car.hasOwnProperty("seating"))
// car.seating = 2
// console.log(car.hasOwnProperty("seating"))

// var showroom = [
//     {
//         "make": "Honda",
//         "model": "NSX"
//     },
//     {
//         "make": "Ferrari",
//         "model": "599"
//     },
//     {
//         "make": "Lexus",
//         "model": "LFA"
//     },
//     {
//         "make": "Bugatti",
//         "model": "Chiron"
//     }
// ]

// console.log(showroom[0]["make"])
// console.log(showroom[1]["model"])

// function lookUpCars(make, model, room) {
//     var carFound = false
//     for (i = 0; i < room.length; i++){
//         if ((room[i]["make"] == make) && (room[i]["model"] == model)){
//             carFound = true
//         }
//     }
//     if (carFound == true) {
//         console.log("Car does exist in this showroom.")
//     }
//     else {
//         console.log("Car does not exist in this showroom")
//     }
// }

// lookUpCars("Honda", "NSX", showroom)
// lookUpCars("Bugatti", "Chiron", showroom)
// lookUpCars("Bugatti", "Veyron", showroom)
// lookUpCars("Ferrari", "FXX", showroom)

console.log(parseInt("10101101", 2))